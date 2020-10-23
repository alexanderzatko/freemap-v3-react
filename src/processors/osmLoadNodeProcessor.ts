import { point } from '@turf/helpers';

import { trackViewerSetData } from 'fm3/actions/trackViewerActions';
import { Processor } from 'fm3/middlewares/processorMiddleware';
import { osmLoadNode } from 'fm3/actions/osmActions';
import { httpRequest } from 'fm3/authAxios';
import { assertType } from 'typescript-is';
import { OsmResult, OsmNode } from 'fm3/types/common';

export const osmLoadNodeProcessor: Processor = {
  actionCreator: osmLoadNode,
  errorKey: 'osm.fetchingError',
  handle: async ({ dispatch, getState }) => {
    const { data } = await httpRequest({
      getState,
      method: 'GET',
      url: `//api.openstreetmap.org/api/0.6/node/${
        getState().trackViewer.osmNodeId
      }`,
      expectedStatus: 200,
    });

    const nodes = (assertType<OsmResult>(data).elements.filter(
      (el) => el.type === 'node',
    ) as OsmNode[]).map((node) => [node.lon, node.lat]);

    dispatch(
      trackViewerSetData({
        trackGeojson: {
          type: 'FeatureCollection',
          features: Object.keys(nodes).map((id) => point(nodes[id])),
        },
        startPoints: [],
        finishPoints: [],
      }),
    );
  },
};
