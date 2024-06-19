import { CRS } from 'leaflet';

export function getOsmUrl(
  lat: number,
  lon: number,
  zoom: number,
  includePoint?: boolean,
): string {
  return includePoint
    ? `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}&zoom=${zoom}`
    : `https://www.openstreetmap.org/#map=${Math.min(zoom, 19)}/${lat.toFixed(
        5,
      )}/${lon.toFixed(5)}`;
}

export function getZbgisUrl(lat: number, lon: number, zoom: number): string {
  return `https://zbgis.skgeodesy.sk/mapka/sk/zakladna-mapa?pos=${lat},${lon},${zoom}`;
}

// TODO to separate file
export function getHikingSkUrl(
  lat: number,
  lon: number,
  zoom: number,
  includePoint?: boolean,
): string {
  const point = CRS.EPSG3857.project({ lat, lng: lon });

  const params: Record<string, string> = {
    zoom: String(zoom > 15 ? 15 : zoom),
    lon: String(point.x),
    lat: String(point.y),
    layers: '00B00FFFTTFTTTTFFFFFFTTT',
  };

  if (includePoint) {
    params['x'] = String(lon);

    params['y'] = String(lat);
  }

  return `https://mapy.hiking.sk/?${new URLSearchParams(params).toString()}`;
}

export function getPeakfinderUrl(lat: number, lon: number): string {
  return `https://www.peakfinder.org/?lat=${lat}&lng=${lon}`;
}

export function getGoogleUrl(
  lat: number,
  lon: number,
  zoom: number,
  includePoint?: boolean,
): string {
  return includePoint
    ? `https://maps.google.com/maps?&z=${zoom}&q=loc:${lat}+${lon}`
    : `https://www.google.com/maps/@${lat},${lon},${zoom}z`;
}

export function getMapyCzUrl(
  lat: number,
  lon: number,
  zoom: number,
  includePoint?: boolean,
): string {
  return `https://mapy.cz/zakladni?x=${lon}&y=${lat}&z=${
    zoom > 19 ? 19 : zoom
  }${includePoint ? `&source=coor&id=${lon}%2C${lat}` : ''}`;
}

export function getWazeUrl(lat: number, lon: number, zoom: number): string {
  return `https://www.waze.com/ul?ll=${lat},${lon}&zoom=${zoom}&navigate=yes`;
}

export function getF4mapUrl(lat: number, lon: number, zoom: number): string {
  return `https://demo.f4map.com/#lat=${lat}&lon=${lon}&zoom=${Math.max(
    16,
    zoom,
  )}`;
}

export function getGeocachingUrl(
  lat: number,
  lon: number,
  zoom: number,
): string {
  return `https://www.geocaching.com/map/#?ll=${lat},${lon}&z=${Math.max(
    18,
    zoom,
  )}`;
}

export function getOpenStreetCamUrl(
  lat: number,
  lon: number,
  zoom: number,
): string {
  return `https://openstreetcam.org/map/@${lat},${lon},${zoom}z`;
}

export function getMapillaryUrl(
  lat: number,
  lon: number,
  zoom: number,
): string {
  return `https://www.mapillary.com/app/?lat=${lat}&lng=${lon}&z=${zoom}`;
}

export function getIdUrl(lat: number, lon: number, zoom: number): string {
  return `https://www.openstreetmap.org/edit?editor=id#map=${zoom}/${lat.toFixed(
    5,
  )}/${lon.toFixed(5)}`;
}

export function getOmaUrl(
  lat: number,
  lon: number,
  zoom: number,
  mapType: string,
): string {
  return `http://redirect.oma.sk/?lat=${lat}&lon=${lon}&zoom=${zoom}&mapa=${mapType}`;
}

export function getTwitterUrl(): string {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    window.location.href,
  )}`;
}
