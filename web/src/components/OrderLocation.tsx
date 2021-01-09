import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface Place {
  label?: string
  value?: string
  position: {
    lat: number
    lng: number
  }
}

const initialPosition = {
  lat: -28.2944032,
  lng: -52.7991374
}

export default function OrderLocation() {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })
  return (
    <div className='row center top'>
      <div className='order-location-container'>
        <div className='row center order-location-content'>
          <h3>Solecione o local da entrega</h3>
        </div>
        
        <div className='filter-container'>

        </div>

        
        <MapContainer center={address.position} zoom={17} scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
    </div>
  )
}
