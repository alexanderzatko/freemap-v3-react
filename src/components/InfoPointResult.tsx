import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-leaflet';

import {
  infoPointChangePosition,
  infoPointSetActiveIndex,
} from 'fm3/actions/infoPointActions';
import { RichMarker } from 'fm3/components/RichMarker';
import { RootState } from 'fm3/storeCreator';
import { Dispatch } from 'redux';
import { RootAction } from 'fm3/actions';
import { Point, DragEndEvent } from 'leaflet';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const InfoPointResultInt: React.FC<Props> = ({
  points,
  change,
  onSelect,
  activeIndex,
  onInfoPointPositionChange,
}) => {
  const handleDragEnd = useCallback(
    (e: DragEndEvent) => {
      const coords = e.target.getLatLng();
      onInfoPointPositionChange(coords.lat, coords.lng);
    },
    [onInfoPointPositionChange],
  );

  return (
    <>
      {points.map(({ lat, lon, label }, i) => (
        <RichMarker
          key={`${change}-${i}`}
          faIcon="info"
          faIconLeftPadding="2px"
          ondragend={handleDragEnd}
          position={{ lat, lng: lon }}
          onclick={() => onSelect(i)}
          color={activeIndex === i ? '#65b2ff' : undefined}
          draggable={activeIndex === i}
        >
          {label && (
            <Tooltip
              className="compact"
              offset={new Point(11, -25)}
              direction="right"
              permanent
            >
              <span>{label}</span>
            </Tooltip>
          )}
        </RichMarker>
      ))}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  points: state.infoPoint.points,
  change: state.infoPoint.change,
  activeIndex: state.infoPoint.activeIndex,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onInfoPointPositionChange(lat: number, lon: number) {
    dispatch(infoPointChangePosition({ lat, lon }));
  },
  onSelect(index: number) {
    dispatch(infoPointSetActiveIndex(index));
  },
});

export const InfoPointResult = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoPointResultInt);
