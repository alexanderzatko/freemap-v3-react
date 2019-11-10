import React, { useCallback, useMemo } from 'react';
import { Popup } from 'react-leaflet';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  elevationMeasurementSetPoint,
  // elevationMeasurementSetElevation,
} from 'fm3/actions/elevationMeasurementActions';
import { RichMarker } from 'fm3/components/RichMarker';
import { latLonToString } from 'fm3/geoutils';
import { withTranslator, Translator } from 'fm3/l10nInjector';
import { RootState } from 'fm3/storeCreator';
import { RootAction } from 'fm3/actions';
import { DragEndEvent } from 'leaflet';
import { LatLon } from 'fm3/types/common';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    t: Translator;
  };

const ElevationMeasurementResultInt: React.FC<Props> = ({
  point,
  elevation,
  language,
  t,
  // onElevationClear,
  onPointSet,
}) => {
  // const handleDragStart = useCallback(() => {
  //   onElevationClear();
  // }, [onElevationClear]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { lat, lng: lon } = event.target.getLatLng();
      onPointSet({ lat, lon });
    },
    [onPointSet],
  );

  const nf1 = useMemo(
    () =>
      Intl.NumberFormat(language, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      }),
    [language],
  );

  return (
    point && (
      <RichMarker
        autoOpenPopup
        position={{ lat: point.lat, lng: point.lon }}
        // onDragstart={handleDragStart}
        ondragend={handleDragEnd}
        // ondrag={handleDrag}
        draggable
      >
        <Popup closeButton={false} autoClose={false} autoPan={false}>
          <>
            {(['D', 'DM', 'DMS'] as const).map(format => (
              <div key={format}>{latLonToString(point, language, format)}</div>
            ))}
            {typeof elevation === 'number' && (
              <div>
                {t('measurement.elevationLine')} {nf1.format(elevation)}{' '}
                {t('general.masl')}
              </div>
            )}
          </>
        </Popup>
      </RichMarker>
    )
  );
};

const mapStateToProps = (state: RootState) => ({
  elevation: state.elevationMeasurement.elevation,
  point: state.elevationMeasurement.point,
  language: state.l10n.language,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onPointSet(point: LatLon) {
    dispatch(elevationMeasurementSetPoint(point));
  },
  // onElevationClear() {
  //   dispatch(elevationMeasurementSetElevation(null));
  // },
});

export const ElevationMeasurementResult = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslator(ElevationMeasurementResultInt));
