import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
   const {data,loading,error} = useFetch(
    "/canchas/countByCity?cities=Armenia,Pereira,Medellin"
    );
   

    return (
        <div className="featured">
           {loading ? (
            "Cargando por favor espere" 
            ):( 
            <>
            <div className="featuredItem">
                <img src="https://www.metegol.app/static/cd530e997927a7da4f153545f4c0b3c7/6ff2f/SoccerFields%252F8DTnKjrtQQBSm3NrowAc%252F3eb0c5bb-2abb-4d95-bee9-b48ef8b4886a.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Armenia</h1>
                    <h2>canchas {data[0]} </h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://www.metegol.app/static/cd530e997927a7da4f153545f4c0b3c7/6ff2f/SoccerFields%252F8DTnKjrtQQBSm3NrowAc%252F3eb0c5bb-2abb-4d95-bee9-b48ef8b4886a.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Pereira</h1>
                    <h2> canchas {data[1]}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://www.metegol.app/static/cd530e997927a7da4f153545f4c0b3c7/6ff2f/SoccerFields%252F8DTnKjrtQQBSm3NrowAc%252F3eb0c5bb-2abb-4d95-bee9-b48ef8b4886a.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Medellin</h1>
                    <h2> canchas {data[2]}</h2>
                </div>
            </div>
            </>
            )}
        </div>
    );
};

export default Featured;