import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for missing marker icons in Leaflet
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const position = [23.763701214533636, 90.35977005208792];

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: "250px", width: "100%", borderRadius: "3px" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

      <Marker position={position} icon={customIcon}>
        <Popup>Tarua</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
