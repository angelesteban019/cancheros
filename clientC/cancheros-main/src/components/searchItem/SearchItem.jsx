import { Link, Route} from "react-router-dom";
import "./searchItem.css"


const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
        <img src= {item.photos[0]}
         alt="" 
         className="siImg" 
         />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siPromoOp">10% de descuento dia lunes</span>
            <span className="siSubtitle">
                {item.type}
                </span>

            <span className="siFeatures">{item.desc}</span>
            <span className="siCancelOp">Cancelacion gratuita</span>
            <span className="siCancelOpSubtitle">
                puede cancelar más tarde, así que asegure este excelente precio hoy!
                </span>
                
        </div>
        <div className="siDetails">
         { item.rating  && <div className="siRating">
                <span>Excelente</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">{item.cheapestPrice}</span>
                <span className="siTextOp">Incluido petos y bolsas de agua</span>
                <Link className="LinkCancha" to={`/canchas/${item._id}`}>
                <button className="siCheckButton">Mira disponibilidad</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default SearchItem;