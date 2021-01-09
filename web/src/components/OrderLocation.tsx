import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async'

import { OrderLocationDTO } from '../pages/interfaces'
import { fetchLocalMapBox } from '../services/api'

interface Place {
  label?: string
  value?: string
  position: {
    lat: number
    lng: number
  }
}

interface Props {
  onChangeLocation: (location: OrderLocationDTO) => void
}

const initialPosition = {
  lat: -28.2944032,
  lng: -52.7991374
}

export default function OrderLocation( {onChangeLocation}:Props ) {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })

    
  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await fetchLocalMapBox(inputValue);

    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        },
        place: item.place_name,
      });
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    });
  };

  return (
    <div className='row center top'>
      <div className='order-location-container'>
        
        <div className='row center'>
          <AsyncSelect
            className='react-select-address'
            placeholder='Digite o enderço de entrega'
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>

        
        <MapContainer
          center={address.position}
          zoom={17}
          scrollWheelZoom
          key={address.position.lat} // passando a key força a rerenderização
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>
              { address.label }
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
    </div>
  )
}
