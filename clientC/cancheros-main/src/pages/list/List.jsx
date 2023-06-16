import "./list.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import SearchItem from "../../components/searchItem/SearchItem"
import {useLocation} from "react-router-dom"
import { useState } from "react";
import {format} from "date-fns"
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
const List = () => {

    const location = useLocation();
    const [ciudad,setCiudad] = useState(location.state.ciudad);
    const [dates,setDates] = useState(location.state.dates);
    const [openDate,setOpenDate] = useState(false);
    const [min,setMin] = useState(undefined);
    const [max,setMax] = useState(undefined);

    const {data, loading, error, reFetch} = useFetch(`/canchas?city=${ciudad}&min=${min || 0}&max=${max || 1000000}`);

    const handleClick = () =>{
        reFetch()
    }

    return (
        <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Buscador</h1>
                    <div className="lsItem">
                        <label>Ciudad</label>
                        <input type="text" 
                    placeholder={ciudad}
                    className="headerSearchInput"
                    onChange={e=>setCiudad(e.target.value)}/>
                    </div>
                    <div className="lsItem">
                        <label>Fecha</label>
                        <span onClick={()=>setOpenDate(!openDate)}> {format(dates[0].startDate,"MM/dd/yyyy"
                    )} to {format(dates[0].endDate,"MM/dd/yyyy")}</span>
                  
                  { openDate && (
                  <DateRange
                    onChange={item=>setDates([item.selection])} 
                    minDate={new Date()}
                    ranges={dates} 
                    />
                    )}
                    </div>
                    <div className="lsItem">
                        <label>Opciones</label>
                        <div className="lsOptions">

                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Precio Minimo <small>Por hora</small>
                            </span>
                            <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Precio Maximo <small>Por hora</small>
                            </span>
                            <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                        </div>
                    </div>
                </div>
                <button onClick={handleClick}>Buscar</button>
            </div>
                <div className="listResult">
                    {loading ? "Cargando...": <>
                    {data.map(item=>(

                        <SearchItem item = {item} key={item._id}/>
                    ))}
                    </>}
                </div>
            </div>
        </div>
        </div>
    );
};

export default List;