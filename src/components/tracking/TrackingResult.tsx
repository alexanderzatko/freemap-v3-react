import { selectFeature } from 'fm3/actions/mainActions';
import { RichMarker } from 'fm3/components/RichMarker';
import {
  tooltipText,
  TrackingPoint,
} from 'fm3/components/tracking/TrackingPoint';
import { distance, toLatLng, toLatLngArr } from 'fm3/geoutils';
import { useAppSelector } from 'fm3/hooks/reduxSelectHook';
import { useDateTimeFormat } from 'fm3/hooks/useDateTimeFormat';
import { useNumberFormat } from 'fm3/hooks/useNumberFormat';
import { selectingModeSelector } from 'fm3/selectors/mainSelectors';
import { TrackPoint } from 'fm3/types/trackingTypes';
import { Fragment, ReactElement, useMemo, useRef, useState } from 'react';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { Circle, Polyline, Tooltip } from 'react-leaflet';
import { useDispatch } from 'react-redux';

// TODO functional component with hooks was causing massive re-rendering
export function TrackingResult(): ReactElement {
  const clickHandlerMemo = useRef<Record<string, () => void>>({});

  const dispatch = useDispatch();

  const language = useAppSelector((state) => state.l10n.language);

  const showLine = useAppSelector((state) => state.tracking.showLine);

  const showPoints = useAppSelector((state) => state.tracking.showPoints);

  const trackedDevices = useAppSelector(
    (state) => state.tracking.trackedDevices,
  );

  const tracks = useAppSelector((state) => state.tracking.tracks);

  const tracks1 = useMemo(() => {
    const tdMap = new Map(trackedDevices.map((td) => [td.token, td]));

    return tracks.map((track) => ({
      ...track,
      ...tdMap.get(track.token),
    }));
  }, [trackedDevices, tracks]);

  const activeTrackId = useAppSelector((state) =>
    state.main.selection?.type === 'tracking'
      ? state.main.selection?.id
      : undefined,
  );

  const [activePoint, setActivePoint] = useState<TrackPoint | null>(null);

  const df = useDateTimeFormat({
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const nf = useNumberFormat({
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const interactive = useAppSelector(selectingModeSelector);

  return (
    <>
      {tracks1.map((track) => {
        const color = track.color || '#7239a8';

        const width = track.width || 4;

        let handleClick = clickHandlerMemo.current[track.token];

        if (!handleClick) {
          handleClick = () => {
            dispatch(selectFeature({ type: 'tracking', id: track.token }));
          };

          clickHandlerMemo.current[track.token] = handleClick;
        }

        const segments: TrackPoint[][] = [];

        let curSegment: TrackPoint[] | null = null;

        let prevTp: TrackPoint | undefined;

        for (const tp of track.trackPoints) {
          if (
            prevTp &&
            ((typeof track.splitDistance === 'number' &&
              distance(tp.lat, tp.lon, prevTp.lat, prevTp.lon) >
                track.splitDistance) ||
              (typeof track.splitDuration === 'number' &&
                tp.ts.getTime() - prevTp.ts.getTime() >
                  track.splitDuration * 60000))
          ) {
            curSegment = null;
          }

          if (!curSegment) {
            curSegment = [];

            segments.push(curSegment);
          }

          curSegment.push(tp);

          prevTp = tp;
        }

        const lastPoint =
          track.trackPoints.length > 0
            ? track.trackPoints[track.trackPoints.length - 1]
            : null;

        return (
          <Fragment key={`trk-${track.token}`}>
            {lastPoint && typeof lastPoint.accuracy === 'number' && (
              <Circle
                weight={2}
                interactive={false}
                center={toLatLng(lastPoint)}
                radius={lastPoint.accuracy}
              />
            )}

            {activePoint &&
              lastPoint !== activePoint &&
              typeof activePoint.accuracy === 'number' && (
                <Circle
                  weight={2}
                  interactive={false}
                  center={toLatLng(activePoint)}
                  radius={activePoint.accuracy}
                />
              )}

            {showLine &&
              track.trackPoints.length > 1 &&
              segments.map((segment, i) => (
                <Polyline
                  key={`seg-${i}-${activeTrackId === track.token}-${
                    interactive ? 'a' : 'b'
                  }`}
                  positions={toLatLngArr(segment)}
                  weight={width}
                  color={color}
                  bubblingMouseEvents={false}
                  eventHandlers={{
                    click: handleClick,
                  }}
                  interactive={interactive}
                  opacity={track.token === activeTrackId ? 1 : 0.75}
                />
              ))}

            {(showPoints || track.trackPoints.length === 0
              ? track.trackPoints
              : [track.trackPoints[track.trackPoints.length - 1]]
            ).map((tp, i) =>
              !showPoints || i === track.trackPoints.length - 1 ? (
                <RichMarker
                  key={`rm-${tp.id}-${activeTrackId === track.token}-${
                    interactive ? 'a' : 'b'
                  }`}
                  interactive={interactive}
                  position={toLatLon(
                    track.trackPoints[track.trackPoints.length - 1],
                  )}
                  color={color}
                  eventHandlers={{
                    click: handleClick,
                  }}
                  faIcon={
                    track.token === activeTrackId ? (
                      <FaUser color={color} />
                    ) : (
                      <FaRegUser color={color} />
                    )
                  }
                >
                  <Tooltip direction="top" offset={[0, -36]} permanent>
                    {tooltipText(df, nf, tp, track.label)}
                  </Tooltip>
                </RichMarker>
              ) : (
                <TrackingPoint
                  key={`tp-${tp.id}-${activeTrackId}-${
                    interactive ? 'a' : 'b'
                  }`}
                  interactive={interactive}
                  tp={tp}
                  width={width}
                  color={color}
                  language={language}
                  onActivePointSet={setActivePoint}
                  onClick={handleClick}
                  opacity={track.token === activeTrackId ? 1 : 0.75}
                />
              ),
            )}
          </Fragment>
        );
      })}
    </>
  );
}

function toLatLon(x: TrackPoint) {
  return { lat: x.lat, lng: x.lon };
}
