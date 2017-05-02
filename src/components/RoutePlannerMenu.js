import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import { connect } from 'react-redux';
import toastEmitter from 'fm3/emitters/toastEmitter';

import { routePlannerSetStart, routePlannerSetFinish, routePlannerSetTransportType,
  routePlannerSetPickMode, routePlannerToggleItineraryVisibility, routePlannerExportGpx } from 'fm3/actions/routePlannerActions';
import { setTool, setActivePopup, startProgress, stopProgress } from 'fm3/actions/mainActions';
import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import { getCurrentPosition } from 'fm3/geoutils';

import 'fm3/styles/routePlanner.scss';

function RoutePlannerMenu({ onSetStart, onSetFinish, pickPointMode, transportType,
    onChangeTransportType, onChangePickPointMode, onCancel, homeLocation, onLaunchSettingsPopup,
    onToggleItineraryVisibility, itineraryIsVisible, onStartProgress, onStopProgress, onGpxExport, routeFound }) {
  function setFromCurrentPosition(pointType) {
    onStartProgress();
    getCurrentPosition().then(({ lat, lon }) => {
      onStopProgress();
      if (pointType === 'start') {
        onSetStart({ lat, lon });
      } else if (pointType === 'finish') {
        onSetFinish({ lat, lon });
      } // else fail
    }).catch(() => {
      onStopProgress();
      toastEmitter.emit('showToast', 'error', null, 'Nepodarilo sa získať aktuálnu polohu');
    });
  }

  function setFromHomeLocation(pointType) {
    const { lat, lon } = homeLocation;
    if (!lat) {
      const line1 = null;
      const line2 = [
        'Najpr si musíte nastaviť domovskú polohu cez',
        ' ',
        <Button key="settings" onClick={onLaunchSettingsPopup}>
          Nastavenia
        </Button>,
      ];
      toastEmitter.emit('showToast', 'info', line1, line2);
    } else if (pointType === 'start') {
      onSetStart({ lat, lon });
    } else if (pointType === 'finish') {
      onSetFinish({ lat, lon });
    }
  }

  // FIXME wrapper element can't be used
  return (
    <div>
      <Navbar.Form pullLeft>
        <ButtonGroup>
          <DropdownButton
            title={<span><FontAwesomeIcon icon="play" color="#409a40" /> Štart</span>}
            id="add-start-dropdown"
            onClick={() => onChangePickPointMode('start')}
            active={pickPointMode === 'start'}
          >
            <MenuItem><FontAwesomeIcon icon="map-marker" /> Vybrať na mape</MenuItem>
            <MenuItem onClick={() => setFromCurrentPosition('start')}><FontAwesomeIcon icon="bullseye" /> Aktuálna poloha</MenuItem>
            <MenuItem onClick={() => setFromHomeLocation('start')}><FontAwesomeIcon icon="home" /> Domov</MenuItem>
          </DropdownButton>
          <DropdownButton
            title={<span><FontAwesomeIcon icon="stop" color="#d9534f" /> Cieľ</span>}
            id="add-finish-dropdown"
            onClick={() => onChangePickPointMode('finish')}
            active={pickPointMode === 'finish'}
          >
            <MenuItem><FontAwesomeIcon icon="map-marker" /> Vybrať na mape</MenuItem>
            <MenuItem onClick={() => setFromCurrentPosition('finish')}><FontAwesomeIcon icon="bullseye" /> Aktuálna poloha</MenuItem>
            <MenuItem onClick={() => setFromHomeLocation('finish')}><FontAwesomeIcon icon="home" /> Domov</MenuItem>
          </DropdownButton>
        </ButtonGroup>
        {' '}
        <ButtonGroup>
          {
            [['car', 'car'], ['walk', 'male'], ['bicycle', 'bicycle']].map(([type, icon]) => (
              <Button key={type} active={transportType === type} onClick={() => onChangeTransportType(type)}>
                <FontAwesomeIcon icon={icon} />
              </Button>
            ))
          }
        </ButtonGroup>
        {' '}
        <Button onClick={() => onToggleItineraryVisibility()} active={itineraryIsVisible}>
          <FontAwesomeIcon icon="list-ol" /> Itinerár
        </Button>
        {' '}
        <Button onClick={onGpxExport} disabled={!routeFound}>
          <FontAwesomeIcon icon="share" /> Exportuj do GPX
        </Button>
      </Navbar.Form>
      <Nav>
        <NavItem onClick={onCancel}>
          <Glyphicon glyph="remove" /> Zavrieť
        </NavItem>
      </Nav>
    </div>
  );
}

RoutePlannerMenu.propTypes = {
  onSetStart: PropTypes.func.isRequired,
  onSetFinish: PropTypes.func.isRequired,
  transportType: PropTypes.string,
  pickPointMode: PropTypes.string,
  onChangeTransportType: PropTypes.func.isRequired,
  onChangePickPointMode: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  homeLocation: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
  onLaunchSettingsPopup: PropTypes.func.isRequired,
  onToggleItineraryVisibility: PropTypes.func.isRequired,
  itineraryIsVisible: PropTypes.bool.isRequired,
  onStartProgress: PropTypes.func.isRequired,
  onStopProgress: PropTypes.func.isRequired,
  onGpxExport: PropTypes.func.isRequired,
  routeFound: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    homeLocation: state.main.homeLocation,
    transportType: state.routePlanner.transportType,
    pickPointMode: state.routePlanner.pickMode,
    itineraryIsVisible: state.routePlanner.itineraryIsVisible,
    routeFound: !!state.routePlanner.shapePoints,
  }),
  dispatch => ({
    onSetStart(start) {
      dispatch(routePlannerSetStart(start));
    },
    onSetFinish(finish) {
      dispatch(routePlannerSetFinish(finish));
    },
    onToggleItineraryVisibility() {
      dispatch(routePlannerToggleItineraryVisibility());
    },
    onChangeTransportType(transportType) {
      dispatch(routePlannerSetTransportType(transportType));
    },
    onChangePickPointMode(pickMode) {
      dispatch(routePlannerSetPickMode(pickMode));
    },
    onCancel() {
      dispatch(setTool(null));
    },
    onLaunchSettingsPopup() {
      dispatch(setActivePopup('settings'));
    },
    onStartProgress() {
      dispatch(startProgress());
    },
    onStopProgress() {
      dispatch(stopProgress());
    },
    onGpxExport() {
      dispatch(routePlannerExportGpx());
    },
  }),
)(RoutePlannerMenu);
