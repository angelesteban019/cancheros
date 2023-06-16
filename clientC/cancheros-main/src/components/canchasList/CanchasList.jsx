import useFetch from "../../hooks/useFetch";
import "./canchasList.css"

const CanchasList = () => {

    const {data,loading,error} = useFetch(
        "/canchas/countByType"
        );

        const images = [
            "https://fitforall.com.co/wp-content/uploads/2022/06/R6A2695-scaled.jpg",
            "https://fitforall.com.co/wp-content/uploads/2022/06/R6A2695-scaled.jpg",
            "https://fitforall.com.co/wp-content/uploads/2022/06/R6A2695-scaled.jpg",
            "https://fitforall.com.co/wp-content/uploads/2022/06/R6A2695-scaled.jpg",
            "https://fitforall.com.co/wp-content/uploads/2022/06/R6A2695-scaled.jpg",
            "https://fitforall.com.co/wp-content/uploads/2022/06/R6A2695-scaled.jpg",
            "https://fitforall.com.co/wp-content/uploads/2022/06/R6A2695-scaled.jpg"
        ];

    return (
        <div className="cList">

           { loading ? (
               "Cargando..."
           ) : (

               <> 

         {data && 
         images.map((img, i) => ( 

             <div className="cListItem" key={i}>
                <img 
                src={img}
                alt=""
                className="cListImg"
                />

                <div className="cListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2> Hay {data[i]?.count}</h2>
                </div>
            </div>
            ))}
            </> 
            )}
            </div>
    )
}

export default CanchasList;