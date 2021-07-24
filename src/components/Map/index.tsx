import React from 'react';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';

const Map = ({ coords }: { coords: number[] }) => {
  const lat = coords[0];
  const lng = coords[1];
  return (
    <MapContainer zoomControl={false} center={[lat, lng]} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
};

export default Map;
