import color from 'color';
import { GalleryColorizeBy } from 'fm3/actions/galleryActions';
import { LatLon } from 'fm3/types/common';
import { LatLng } from 'leaflet';

type Marble = LatLon & {
  rating: number;
  userId: number;
  createdAt: number;
  takenAt?: number | null;
  pano?: 1;
};

type Props = {
  tile: HTMLCanvasElement | OffscreenCanvas;
  zoom: number;
  dpr: number;
  colorizeBy: GalleryColorizeBy | null;
  data: Marble[];
  myUserId: number | null;
  size: { x: number; y: number };
  pointB: LatLng;
  pointA: LatLng;
};

type SortMarble = {
  sort: number;
  value: Marble;
};

function compare(a: SortMarble, b: SortMarble) {
  const v = a.sort - b.sort;

  return v === 0 ? (a.value.pano ? 1 : 0) - (b.value.pano ? 1 : 0) : v;
}

function sort(data: Marble[], toSort: (m: Marble) => number) {
  return data
    .map((a) => ({ sort: toSort(a), value: a }))
    .sort(compare)
    .map((a) => a.value);
}

export function renderGalleryTile({
  tile,
  zoom,
  dpr,
  colorizeBy,
  data,
  myUserId,
  size,
  pointB,
  pointA,
}: Props): void {
  const ctx = (tile as any).getContext('2d');

  if (!ctx) {
    throw Error('no context');
  }

  const zk = Math.min(1, 1.1 ** zoom / 3);

  ctx.scale(dpr, dpr);

  ctx.strokeStyle = '#000';

  ctx.fillStyle = '#ff0';

  ctx.lineWidth = zk; // zoom > 9 ? 1.5 : 1;

  const k = 2 ** zoom;

  const s = new Set();

  const items: Marble[] =
    colorizeBy === 'userId'
      ? sort(data, () => Math.random())
      : colorizeBy === 'takenAt' ||
        colorizeBy === 'createdAt' ||
        colorizeBy === 'rating'
      ? sort(data, (a) => Number(a[colorizeBy]))
      : colorizeBy === 'mine'
      ? sort(data, (a) => (a.userId === myUserId ? 1 : 0))
      : sort(data, () => 0);

  // remove "dense" pictures
  const marbles: Marble[] = items
    .reverse()
    .map(({ lat, lon, ...rest }) => {
      return {
        lat: Math.round(lat * k),
        lon: Math.round(lon * k),
        ...rest,
      };
    })
    .filter(({ lat, lon }) => {
      const key = `${lat},${lon}`;

      const has = s.has(key);

      if (!has) {
        s.add(key);
      }

      return !has;
    })
    .map(({ lat, lon, ...rest }) => ({
      lat: lat / k,
      lon: lon / k,
      ...rest,
    }))
    .reverse();

  for (const { lat, lon, pano } of marbles) {
    const y =
      size.y - ((lat - pointB.lat) / (pointA.lat - pointB.lat)) * size.y;

    const x = ((lon - pointA.lng) / (pointB.lng - pointA.lng)) * size.x;

    ctx.beginPath();

    if (pano) {
      ctx.rect(x - 4 * zk, y - 4 * zk, 8 * zk, 8 * zk);
    } else {
      ctx.arc(x, y, 4 * zk, 0, 2 * Math.PI);
    }

    ctx.stroke();
  }

  ctx.lineWidth = 0.25 * zk; // zoom > 9 ? 1.5 : 1;

  const now = Date.now() / 1000;

  for (const {
    lat,
    lon,
    rating,
    createdAt,
    takenAt,
    userId,
    pano,
  } of marbles) {
    const y =
      size.y - ((lat - pointB.lat) / (pointA.lat - pointB.lat)) * size.y;

    const x = ((lon - pointA.lng) / (pointB.lng - pointA.lng)) * size.x;

    ctx.beginPath();

    if (pano) {
      ctx.rect(x - 3.5 * zk, y - 3.5 * zk, 7 * zk, 7 * zk);
    } else {
      ctx.arc(x, y, 3.5 * zk, 0, 2 * Math.PI);
    }

    switch (colorizeBy) {
      case 'userId':
        ctx.fillStyle = color.lch(90, 70, -userId * 11313).hex();

        break;

      case 'rating':
        ctx.fillStyle = color
          .hsv(60, 100, (Math.tanh(rating - 2.5) + 1) * 50)
          .hex();

        break;

      case 'takenAt':
        ctx.fillStyle = takenAt
          ? color
              .hsl(
                60,
                100,
                // 100 - ((now - takenAt) * 10) ** 0.2,
                100 - ((now - takenAt) * 100) ** 0.185,
              )
              .hex()
          : '#a22';

        break;

      case 'season':
        {
          if (!takenAt) {
            ctx.fillStyle = '#800';

            break;
          }

          const hs = 366 / 4;

          const winter = [70, -5, -52];

          const spring = [70, -62, 42];

          const summer = [90, -4, 74];

          const fall = [70, 48, 43];

          // 2847600
          const x = ((takenAt - 1206000) % 31557600) / 60 / 60 / 24;

          const fill = (from: number[], to: number[], n: number) => {
            ctx.fillStyle = color
              .lab(...[0, 1, 2].map((i) => from[i] * (1 - n) + to[i] * n))
              .hex();
          };

          if (x < hs) {
            fill(winter, spring, x / hs);
          } else if (x < 2 * hs) {
            fill(spring, summer, (x - hs) / hs);
          } else if (x < 3 * hs) {
            fill(summer, fall, (x - 2 * hs) / hs);
          } else {
            fill(fall, winter, (x - 3 * hs) / hs);
          }
        }

        break;

      case 'createdAt':
        ctx.fillStyle = color
          .hsl(
            60,
            100,
            // 100 - ((now - createdAt) * 10) ** 0.2,
            100 - ((now - createdAt) * 100) ** 0.185,
          )
          .hex();

        break;

      case 'mine':
        ctx.fillStyle = userId === myUserId ? '#ff0' : '#fa4';

        break;
    }

    ctx.fill();

    ctx.stroke();
  }
}
