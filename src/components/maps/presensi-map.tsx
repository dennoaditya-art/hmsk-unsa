// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Circle, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix icon - local copy biar offline + tanpa CDN (ponytail: no external unpkg)
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const userIcon = new L.Icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Recenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  const did = useRef(false);
  useEffect(() => {
    if (did.current) return;
    did.current = true;
    map.flyTo([lat, lng], 17, { duration: 0.8 });
  }, [lat, lng, map]);
  return null;
}

function ClickHandler({ onPick }: { onPick?: (lat:number,lng:number)=>void }) {
  useMapEvents({
    click(e) { if (onPick) onPick(e.latlng.lat, e.latlng.lng); }
  });
  return null;
}

export function PresensiMap({
  center,
  userPos,
  radius,
  onPick,
}: {
  center: { lat: number; lng: number };
  userPos?: { lat: number; lng: number } | null;
  radius: number;
  onPick?: (lat:number,lng:number)=>void;
}) {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={17}
      scrollWheelZoom
      style={{ height: "100%", width: "100%" }}
      className="rounded-2xl"
      attributionControl={true}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[center.lat, center.lng]} />
      <Circle center={[center.lat, center.lng]} radius={radius} pathOptions={{ color: "#4f46e5", fillColor: "#4f46e5", fillOpacity: 0.14, weight: 2.5 }} />
      {userPos && (
        <>
          <Marker position={[userPos.lat, userPos.lng]} icon={userIcon} />
          <Recenter lat={userPos.lat} lng={userPos.lng} />
        </>
      )}
      {onPick && <ClickHandler onPick={onPick} />}
    </MapContainer>
  );
}
