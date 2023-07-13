import { tileToGeoJSON } from '@mapbox/tilebelt';
import { feature, Geometries, GeometryCollection, point } from '@turf/helpers';
import { clearMap } from 'fm3/actions/mainActions';
import {
  SearchResult,
  searchSelectResult,
  searchSetQuery,
  searchSetResults,
} from 'fm3/actions/searchActions';
import { parseCoordinates } from 'fm3/coordinatesParser';
import { httpRequest } from 'fm3/httpRequest';
import { mapPromise } from 'fm3/leafletElementHolder';
import { Processor } from 'fm3/middlewares/processorMiddleware';
import { objectToURLSearchParams } from 'fm3/stringUtils';
import { LatLon } from 'fm3/types/common';
import { assert } from 'typia';

interface NominatimResult {
  osm_id?: number;
  osm_type?: 'node' | 'way' | 'relation';
  geojson?: Geometries | GeometryCollection;
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  extratags?: Record<string, string>;
}

export const searchProcessor: Processor<typeof searchSetQuery> = {
  actionCreator: searchSetQuery,
  errorKey: 'search.fetchingError',
  handle: async ({ dispatch, getState, action }) => {
    const { query } = action.payload;
    // const {
    //   search: { query },
    //   // l10n: { language },
    // } = getState();

    if (!query) {
      return;
    }

    const m = /^\s*(\d+)\/(\d+)\/(\d+)\s*$/.exec(query);

    if (m) {
      const poly = tileToGeoJSON([Number(m[2]), Number(m[3]), Number(m[1])]);

      if (poly) {
        const tags = {
          name: query.trim(),
        };

        dispatch(
          searchSetResults([
            {
              id: -1,
              geojson: feature(poly, tags),
              osmType: 'relation',
              tags,
              detailed: true,
            },
          ]),
        );

        return;
      }
    }

    let coords: LatLon | undefined;

    try {
      coords = parseCoordinates(query);
    } catch (e) {
      // bad format
    }

    if (coords) {
      const tags = {
        name: query.toUpperCase(),
      };

      dispatch(
        searchSetResults([
          {
            id: -1,
            geojson: point([coords.lon, coords.lat], tags),
            osmType: 'node',
            tags,
            detailed: true,
          },
        ]),
      );

      return;
    }

    const res = await httpRequest({
      getState,
      url:
        'https://nominatim.openstreetmap.org/search?' +
        objectToURLSearchParams({
          q: query,
          format: 'json',
          polygon_geojson: 1,
          extratags: 1,
          namedetails: 0, // TODO maybe use some more details
          limit: 20,
          'accept-language': getState().l10n.language,
          viewbox: action.payload.fromUrl
            ? undefined
            : (await mapPromise).getBounds().toBBoxString(),
        }),
      expectedStatus: 200,
      cancelActions: [clearMap, searchSetQuery],
    });

    const results = assert<NominatimResult[]>(await res.json())
      .filter(
        (item) =>
          item.osm_id && item.geojson && item.osm_type && item.lat && item.lon,
      )
      .map((item): SearchResult => {
        const tags = {
          name: item.display_name,
          [item.class]: item.type,
          ...item.extratags,
        };

        return {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          id: item.osm_id!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          geojson: feature(item.geojson!, tags),
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          osmType: item.osm_type!,
          tags,
        };
      });

    dispatch(searchSetResults(results));

    if (action.payload.fromUrl && results[0]) {
      dispatch(searchSelectResult({ result: results[0] }));
    }
  },
};
