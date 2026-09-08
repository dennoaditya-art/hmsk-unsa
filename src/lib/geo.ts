export function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export function isWithinRadius(
  userLat: number,
  userLng: number,
  centerLat: number,
  centerLng: number,
  radiusMeters: number
) {
  return haversine(userLat, userLng, centerLat, centerLng) <= radiusMeters;
}

// UNSA Surakarta Jl. Raya Palur Km 5 - Wikidata 7°33'56"S 110°51'44"E + Kemdikbud -7.56555,110.8645
export const DEFAULT_LOKASI = {
  id: "unsa-pusat",
  name: "Kampus UNSA Surakarta",
  lat: -7.56555,
  lng: 110.8645,
  radiusMeters: 100,
};

export function formatJarak(m: number) {
  if (m < 1000) return `${Math.round(m)} m`;
  return `${(m / 1000).toFixed(2)} km`;
}
