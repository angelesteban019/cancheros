import "./cancha.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";

import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Cancha = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber, newSlideNumber] = useState (0);
    const [open, setOpen] = useState (false);

    const {data, loading, error} = useFetch(`/canchas/find/${id}`)

    const {dates} = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const handleOpen = (i) =>{
        setSlideNumber(i);
        setOpen(true);
    };
    const handleMove = (direction)=>{
        
        let  newSlideNumber;

        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        } else{
            newSlideNumber = slideNumber == 5 ? 0 : slideNumber +1;
        }
        setSlideNumber(newSlideNumber)
    };
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            {loading ? (
                "Cargando..."
            ) : (
            <div className="canchaContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img 
                        src={data.photos[slideNumber]}  
                        alt="" 
                        className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight}className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="canchaWrapper">
                    <h1 className="canchaTitle">{data.name}</h1>
                    <button className="reservaAhora">Reservar ahora</button>
                    <div className="canchaAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="canchaPriceHighlight">
                        Alquile ya! ${data.cheapestPrice}
                    </span>
                    <div className="canchaImages">
                        {data.photos?.map((photo,i)=>(
                            <div className="canchaImgWrapper" key={i}>
                                <img onClick={()=>handleOpen(i)}src={photo} alt="" className="canchaImg" />
                            </div>
                        ))}
                    </div>
                    <div className="canchaDetails">
                        <div className="canchaDetailsTexts">
                            <h1 className="canchaTitle">
                                {data.title}
                            </h1>
                            <p className="canchaDesc">
                            {data.desc}
                            </p>
                            </div>
                            <div className="canchaDetailsPrice">
                                <h1>Perfecto por {days}-horas de juego!</h1>
                                <span>
                                Cancha con reja • luces • tienda • gradas de 30 puestos
                                </span>
                                <h2>
                                    <b>${days * data.cheapestPrice}</b> ({days} Horas)
                                </h2>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>)}
            </div>
    )
}

export default Cancha