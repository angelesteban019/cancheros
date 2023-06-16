import useFetch from "../../hooks/useFetch";
import "./featuredCanchas.css"

const FeaturedCanchas = () =>{

    const {data,loading,error} = useFetch(
        "/canchas?featured=true"
        );

    return (
        <div className="fc">
            {loading ? "Cargando..." : 
            <>
            {data.map((item)=>(

                <div className="fcItem" key={item._id}>

            <img src={item.photos[0]} alt="" className="fcImg" />
            <span className="fcName">{item.name}</span>
            <span className="fcCity">{item.city}</span>
            <span className="fcPrice"> hora ${item.cheapestPrice}</span>
        {  item.rating && <div className="fcRating">
                <button>{item.rating}</button>
                <span>Excelente</span>
            </div>}
        </div>
            )) 
        }
            </>}
        </div>
    )
}

export default FeaturedCanchas;