'use client'

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const officePosition: [number, number] = [24.8607, 67.0011];

const officePin = L.divIcon({
  className: "custom-map-pin",
  html: `
    <div class="custom-map-pin__body">
      <span class="custom-map-pin__dot"></span>
    </div>
  `,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -36],
});

export default function LeafletMapComponent() {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={officePosition}
        zoom={14}
        scrollWheelZoom={false}
        className="h-[400px] w-full rounded-xl"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains={["a", "b", "c", "d"]}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={officePosition} icon={officePin}>
          <Popup>
            <div className="space-y-1 text-sm text-zinc-900">
              <div className="font-semibold">Techmatically</div>
              <div>Suite# 106-108</div>
              <div>Sumya Business Avenue M.A.C.H.S</div>
              <div>Karachi, Pakistan</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
