# Freemap Slovakia Web App – Feature List

The app is a full-featured outdoor and web map portal for [Freemap Slovakia](https://www.freemap.sk), targeting (primarily) Central Europe (hiking, cycling, skiing, etc.) with i18n support.

---

## 1. Map & layers

- **Base map types:** Outdoor (X), Car (A), Hiking (T), Bicycle (C), Cross-country ski (K), OpenStreetMap (O), Aerial/Satellite (S), Ortofoto CZ+SK (Z), Ortofoto SK (J), mtbmap.cz (M), Public transport ÖPNV (d), terrain shading variants (4, 5, 6, 7, 8), MapTiler vector (VO, VS, VD, VT), **custom base layers** (tile, WMS, MapLibre).
- **WMS base & overlay layers (integrated):**
  - **Cadastre (WKA)** – base; **Cadastre orto (wka)** – overlay (GKÚ, SK).
  - **Tree composition (WDZ)**, **Forest types (WLT)** (NLC, SK).
  - **Geological (WGE)**, **Hydrochemic (WHC)** (ŠGÚDŠ, SK).
- **Overlays:** Interactive layer (drawings/annotations), Photos (I), Wikipedia (w), Parametric shading SK (h) & CZ (z), Forest tracks NLC (l), Strava heatmaps (all, ride, run, water, winter), Hiking trails (t), Bicycle trails (c).
- **Custom map layers:** Map settings → Custom maps. **Technologies:** TMS/XYZ **tile** (URL template, optional `tms`), **WMS** (server URL + layer picker from GetCapabilities), **MapLibre** (style URL). Custom layers can be base or overlay; optional name, min/max zoom, z-index, scaleWithDpi, extra scales. Persisted in settings and in URL.
- **TMS:** Tile layers support `tms: true` (Y-axis flip); used for TMS-capable custom tile layers.
- **WMS visualization:** Integrated and custom WMS layers are rendered via `WmsTileLayer` (Leaflet WMS); GetCapabilities parsed in `wms.ts` (formats, CRS, layer tree, legend URLs). **WMS map legend:** Per-layer legend images (scale-aware) in legend modal (`WmsMapLegend`).
- **Map controls:** Zoom, locate me, scale, layer switcher, map settings (custom layers, layer shortcuts, min/max zoom, URL template). **Layer shortcuts:** Configurable per layer in Map settings (`ShortcutRecorder`).
- **URL state:** Map position, zoom, **layers** (array), tool, route planner state, document, embed features, etc., synced to URL.
- **Embed mode:** Embeddable map with configurable features (e.g. search) via `setEmbedFeatures` message.

---

## 2. Tools

- **Route planner (R):** Start/finish/midpoints, transport types (car, car 4WD, foot, hiking, bike, MTB, racing bike, motorcycle; OSRM and GraphHopper), modes (ordered route, visiting places, roundtrip, isochrones), alternatives, elevation profile, “route from/to here” in context menu.
- **Objects / POIs (O):** Search and display points of interest (OpenStreetMap/Overpass).
- **Drawing:** **Points (P)**, **Lines (L)**, **Polygons (N)**; selection, edit, delete, convert search/route to drawing; **Project point** (distance + azimuth from selected point); drawing properties (label, color, width); **Predefined drawing properties** modal (default color/width, apply to all); measurement (distance, area, point elevation).
- **Track viewer (G):** Load/view GPX, elevation profile, upload track, download track.
- **Map details (I):** Click map → **details at clicked place** (see §3).
- **Changesets (X):** OSM changesets on the map with filters.

---

## 3. Details at a clicked place (Map details tool)

- **OSM/Overpass:** Two Overpass queries (e.g. `nwr(around:33,...)` and `is_in(...)`) return nodes/ways/relations near the click; results shown with full **object details** (tags, open in OSM, history, edit in JOSM) via `ObjectDetails` and search results.
- **Nominatim reverse geocoding:** Optional reverse geocoding at click (display name, GeoJSON, OSM id) as another result source.
- **WMS GetFeatureInfo:** For each **active WMS layer** (integrated or custom), a **GetFeatureInfo** request is sent at the click (WMS 1.3.0, `INFO_FORMAT=application/geo+json`, pixel position and BBOX). Returned features are shown as search results with **WMS-fetched details**: source `wms:<layerType>`, generic name (e.g. layer name), GeoJSON geometry (or point at click if no geometry), and optional property-based ID (`FeatureId` type `wms` with map, property, id/seq). **Map details menu** lets users include/exclude sources: Nominatim reverse, Overpass nearby, Overpass surrounding, and each active WMS layer (e.g. “Cadastre (WMS)”).
- **Source display:** `SourceName` component shows human-readable source (e.g. “WMS Cadastre”). Legend modal shows WMS layer legends when WMS layers are active.

---

## 4. Search

- Search by name and by POI category; results on map; open in external app; “route from/to here” and “convert to drawing” from search. Results can be OSM or **WMS** (with `source` `wms:<type>` and optional shape/icon for WMS results).

---

## 5. Gallery / photos

- Photo layer overlay; filter; upload (meta: title, description, position, azimuth, takenAt, tags, premium); viewer with comments, rating, “show on map”, 360° (Pannellum); edit/delete; colorize by (author, rating, date, season, premium); show direction; ordering (last/first uploaded, by rating, by comment); recent tags; make all my photos premium/free; gallery emails setting.

---

## 6. Live tracking

- “My tracking” and “Watched devices”; devices and access tokens; tracked devices on map; show line/points; WebSocket updates; integration with “My maps” (clear map).

---

## 7. Custom / saved maps

- Save current map configuration (layers, center, zoom, drawing, route, track, etc.) as “My maps”; load, delete, list; persisted (e.g. IndexedDB).

---

## 8. Export & download

- **Export map features:** Export to GPX or GeoJSON to download, Google Drive, Dropbox, or Garmin; choose layers (planned route ± stops, objects, pictures, drawing lines/areas/points, tracking, GPX, search).
- **Map export:** Export visible map as PNG/JPEG/SVG/PDF with options (contours, shaded relief, trails, drawing, planned route, track, scale, area).
- **Map for GPS:** Download map for GPS devices (modal).

---

## 9. Authentication & account

- Login via OpenStreetMap, OpenStreetMap OAuth2, Google, Garmin, Garmin OAuth2, Facebook; logout; disconnect providers; account modal (profile, settings).
- **Premium:** Premium activation, buy credits, credit system; premium-only layers/zoom; premium photos.

---

## 10. Offline / caching

- **Offline submenu** (main menu): **Cache mode** – Network only, Network first, Cache first, Cache only. **Caching active** toggle; **Clear cache**. Service worker (`sw.ts`) uses `CacheMode` (from idb-keyval) for fetch strategy. `cache.ts`: `setCacheMode`, `setCachingActive`, `clearCache`, `cacheLocal` (e.g. assets-manifest). Offline-related UI and cache existence state in `MainMenuButton`.

---

## 11. Settings & preferences

- Language (i18n: sk, en, cs, de, pl, it, hu, etc.); cookie consent; home location (for route planner); map layer settings; **custom map layers** (tile, WMS, MapLibre); **layer shortcuts** (record key in Map settings); “locate me”; drawing color/width; **Predefined drawing properties** modal for default style.

---

## 12. Modals & UI

- About, Account, Buy credits, Download map, Drawing properties, **Predefined drawing properties**, Embed map, Export map, Export map features, Gallery filter, Gallery upload, Legend (outdoor/standard; includes **WMS layer legends** when WMS active), Login, Map settings, My maps, Premium activation, Support us, Tracking (my/watched), Upload track, Gallery viewer/edit, **Project point** (distance/azimuth for drawing). Document modal (e.g. freemap, OSM, attribution). Main menu with submenus (Gallery, Help, **Offline**, Tools, etc.); toolbar; toasts; context menu on map; keyboard shortcuts (including configurable layer shortcuts).

---

## 13. Technical / platform

- PWA: Service worker (caching, cache modes), share target (upload) for receiving shared files.
- Drag & drop: GPX and JPEG onto map (track viewer / gallery upload).
- Web Share API: receive shared files.
- Error handling: global error handler, Sentry, toasts.
- Responsive layout and long-press tooltips for touch.
- Print: logo asset for print.
- **Sentry:** `sentry-login`, `sentry-sourcemaps` scripts; deployment script `dep` (build, sourcemaps, rsync).
- **Layer model:** Map state uses `layers: string[]` (single list of active layer types); base vs overlay determined by layer definitions. WMS layers participate in this list (e.g. WKA, WDZ, WLT, WGE, WHC, wka).
- **FeatureId:** OSM (`type: 'osm'`), **WMS** (`type: 'wms'`, map, property, id/seq), or `other` for search/selection identity.

---

## 14. Documents & help

- In-app documents (e.g. “O združení Freemap”, “O OpenStreetMap”, “Licencia máp”); map legend (with WMS legends); link to OSM wiki; (for sk/cs) link to OSM SK community forum.

---

## 15. Analytics & ads

- Matomo (`_paq`) for events; ads for non-premium, non-embedded, non-robot users; cookie consent for analytics.

---
