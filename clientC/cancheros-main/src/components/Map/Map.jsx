import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css"
import "./Map.css"

export const Map = () => {
    const markers = [
        {
          geocode: [4.541025, -75.668547],
          popUp: "centro de comercio y turismo sena galan"
        }
      ]
      const customIcon = new Icon({
        iconUrl: "https://res.cloudinary.com/dbenwgwfn/image/upload/v1682304566/Cancheros-Map/marcador-de-posicion_nrteik.png",
        iconSize: [38, 38]
      }
      )
          return (
      <div className="Bg-Map">
          <section className='Section-Map'>
            <h1 className='h1main'>CONTACTO</h1>
            <p>TELEFONO: 31728876756</p>
            <p>CORREO: campnou@gmail.com</p>
      </section>
                
      <MapContainer center={[4.541025, -75.668547]} zoom={20} style={{width: 400, height: 400}  }>
    <TileLayer 
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
    />
    {markers.map(marker => (
        <Marker position={marker.geocode} icon={customIcon}>
        <Popup>{marker.popUp}</Popup>
      </Marker>
    ))}
  </MapContainer>

    </div>
  )
}