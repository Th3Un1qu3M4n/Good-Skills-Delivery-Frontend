import { map } from 'leaflet'
import React,{useEffect, useRef, useState, useMemo} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const LeafMap = (props) => {
    
    var pos = props.marker

   
    
    const markerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(()=>{
        var map = mapRef.current
        if(map) map.flyTo(pos)
    })

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                console.log("Updating")
              props.updateMarker(marker.getLatLng())
            }
          },
        }),
        [],
      )


  return (
    <div>
        
        <MapContainer center={pos} zoom={11} scrollWheelZoom={false} ref={mapRef}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos} draggable={true} eventHandlers={eventHandlers}
          ref={markerRef}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  )
}

export default LeafMap