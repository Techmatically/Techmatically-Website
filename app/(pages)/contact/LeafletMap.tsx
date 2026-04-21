'use client'

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const officePosition: [number, number] = [24.897350001453116, 67.07752523366801];

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
          attribution='&copy; OpenStreetMap'
        />
        <Marker position={officePosition} icon={officePin}>
          <Popup>
            <div className="space-y-1 text-sm text-zinc-900">
              <div className="font-semibold">Techmatically</div>
              <div>Suite# 318</div>
              <div>Mashriq Center</div>
              <div>Gulshan Block 14, Karachi, Pakistan</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
