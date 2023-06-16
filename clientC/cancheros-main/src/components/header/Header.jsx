import {faFutbol,
        faPerson,
       faCalendarDays,}
       from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format}from"date-fns";
import { SearchContext } from "../../context/SearchContext";

const Header = ({type}) => {
    const [ciudad, setCiudad] = useState ("");
    const [openDate, setOpenDate] = useState (false);
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);


      const navigate = useNavigate()

      
      const {dispatch} = useContext(SearchContext);

      const handleSearch = () => {
        dispatch({type:"NEW_SEARCH", payload: {ciudad,dates} })
        navigate ("/canchas", { state: {ciudad,dates}});
      };

    return(
        <div className="header">
            <div className={type ==="list" ? "headerContainer listMode": "headerContainer"}>

            <div className="headerList">
                {/* <div className="headerListItem active">
                <FontAwesomeIcon icon={faFutbol} />
                <span>
                <Link className="btn-Cancha" to=''>Canchas</Link>  
                </span>
                </div> */}
              
            </div>
            { type !== "list" &&
            <>
            <h1 className="headerTitle">El amor esta en la cancha.</h1>
            <p className="headerDesc">Reserva tú cancha - 10% de descuento si lo haces desde tú cuenta cancheros </p>
            <button className="headerBtn">
            <Link className='LinkLog1'>Iniciar Sesión / Registrarse</Link>
            </button>
            
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faFutbol} className="headerIcon"/>
                    <input type="text" 
                    placeholder="¿De que ciudad buscas?" 
                    className="headerSearchInput"
                    onChange={e=>setCiudad(e.target.value)}/>
                 </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={() => setOpenDate(!openDate)}className="headerSearchText">{format(dates[0].startDate,"MM/dd/yyyy"
                    )} to {format(dates[0].endDate,"MM/dd/yyyy")}</span>
                    {openDate && <DateRange
                     editableDateInputs={true}
                     onChange={item => setDates([item.selection])}
                     moveRangeOnFirstSelection={false}
                     ranges={dates}  
                     className="date"
                     minDate={new Date()}
                     />}
                 </div>
                 <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Buscar</button>
                 </div>
            </div>
            </>
            }
            </div>
            </div>
    );
};

export default Header;