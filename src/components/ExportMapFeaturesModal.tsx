import { authWithGarmin } from 'fm3/actions/authActions';
import {
  ExportTarget,
  ExportType,
  Exportable,
  exportMapFeatures,
  exportTargets,
  exportTypes,
  setActiveModal,
} from 'fm3/actions/mainActions';
import { useAppSelector } from 'fm3/hooks/reduxSelectHook';
import { useMessages } from 'fm3/l10nInjector';
import {
  FormEvent,
  Fragment,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {
  FaBullseye,
  FaCamera,
  FaDownload,
  FaDrawPolygon,
  FaDropbox,
  FaExclamationTriangle,
  FaFileExport,
  FaGoogle,
  FaMapMarkerAlt,
  FaMapSigns,
  FaRoad,
  FaSearch,
  FaTimes,
} from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import { SiGarmin } from 'react-icons/si';
import { useDispatch } from 'react-redux';

const exportableDefinitions: readonly [
  type: Exportable,
  icon: ReactNode,
  garmin: boolean,
][] = [
  // eslint-disable-next-line react/jsx-key
  ['plannedRoute', <FaMapSigns />, true],
  // eslint-disable-next-line react/jsx-key
  ['objects', <FaMapMarkerAlt />, false],
  // eslint-disable-next-line react/jsx-key
  ['pictures', <FaCamera />, false],
  // eslint-disable-next-line react/jsx-key
  ['drawingLines', <MdTimeline />, true],
  // eslint-disable-next-line react/jsx-key
  ['drawingAreas', <FaDrawPolygon />, false],
  // eslint-disable-next-line react/jsx-key
  ['drawingPoints', <FaMapMarkerAlt />, false],
  // eslint-disable-next-line react/jsx-key
  ['tracking', <FaBullseye />, true],
  // eslint-disable-next-line react/jsx-key
  ['gpx', <FaRoad />, true],
  // eslint-disable-next-line react/jsx-key
  ['search', <FaSearch />, true],
];

type Props = { show: boolean };

export default ExportMapFeaturesModal;

export function ExportMapFeaturesModal({ show }: Props): ReactElement {
  const m = useMessages();

  const dispatch = useDispatch();

  const initExportables = useAppSelector((state) => {
    const exportables: Exportable[] = [];

    if (state.search.selectedResult) {
      exportables.push('search');
    }

    if (state.routePlanner.alternatives.length) {
      exportables.push('plannedRoute');
    }

    if (state.objects.objects.length) {
      exportables.push('objects');
    }

    if (state.map.overlays.includes('I')) {
      exportables.push('pictures');
    }

    if (state.drawingLines.lines.some((line) => line.type === 'line')) {
      exportables.push('drawingLines');
    }

    if (state.drawingLines.lines.some((line) => line.type === 'polygon')) {
      exportables.push('drawingAreas');
    }

    if (state.drawingPoints.points.length) {
      exportables.push('drawingPoints');
    }

    if (state.tracking.tracks.length) {
      exportables.push('tracking');
    }

    if (state.trackViewer.trackGpx || state.trackViewer.trackGeojson) {
      exportables.push('gpx');
    }

    // if (state.changesets.changesets.length) {
    //   exportables.push('changesets');
    // }

    return exportables;
  });

  const userHasGarmin = useAppSelector((state) =>
    Boolean(state.auth.user?.authProviders.includes('garmin')),
  );

  const [exportables, setExportables] = useState<Exportable[] | undefined>();

  const [type, setType] = useState<ExportType>('gpx');

  const [target, setTarget] = useState<ExportTarget>('download');

  const initJoined = initExportables.join(',');

  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  const [activity, setActivity] = useState('');

  useEffect(() => {
    if (show) {
      setExportables(initExportables);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, initJoined]);

  const runExport = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!exportables) {
        return;
      }

      const exportAction = exportMapFeatures({
        type,
        exportables,
        target,
        name: name || undefined,
        description: description || undefined,
        activity: activity || undefined,
      });

      if (target === 'garmin' && !userHasGarmin) {
        if (
          window.confirm(
            // TODO translate
            "You don't have your Garmin account connected yet. Do you wish to connect it now?",
          )
        ) {
          dispatch(
            authWithGarmin({ connect: true, successAction: exportAction }),
          );
        }
      } else {
        dispatch(exportAction);
      }
    },
    [
      dispatch,
      type,
      exportables,
      target,
      name,
      description,
      activity,
      userHasGarmin,
    ],
  );

  function close() {
    dispatch(setActiveModal(null));
  }

  const handleCheckboxChange = (type: Exportable) => {
    if (!exportables) {
      return;
    }

    const set = new Set(exportables);

    if (exportables.includes(type)) {
      set.delete(type);

      if (type === 'plannedRoute') {
        set.delete('plannedRouteWithStops');
      }
    } else {
      set.add(type);
    }

    setExportables([...set]);
  };

  return (
    <Modal show={show && !!exportables} onHide={close} size="lg">
      {exportables && (
        <Form onSubmit={runExport}>
          <Modal.Header closeButton>
            <Modal.Title>
              <FaDownload /> {m?.mainMenu.gpxExport}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Alert variant="warning">{m?.exportMapFeatures.licenseAlert}</Alert>

            <Alert variant="warning">
              {m?.exportMapFeatures.disabledAlert}
            </Alert>

            <Form.Group className="mb-3">
              <Form.Label>{m?.exportMapFeatures.target}:</Form.Label>

              <div>
                <ButtonGroup>
                  {exportTargets.map((target1) => (
                    <ToggleButton
                      id={target1}
                      key={target1}
                      type="radio"
                      checked={target === target1}
                      value={target1}
                      onChange={() => setTarget(target1)}
                      disabled={!exportables.length}
                    >
                      {
                        {
                          download: (
                            <>
                              <FaDownload /> {m?.exportMapFeatures.download}
                            </>
                          ),
                          gdrive: (
                            <>
                              <FaGoogle /> Google Drive
                            </>
                          ),
                          dropbox: (
                            <>
                              <FaDropbox /> Dropbox
                            </>
                          ),
                          garmin: (
                            <>
                              <SiGarmin
                                style={{
                                  fontSize: '400%',
                                  marginBlock: '-24px',
                                }}
                              />
                              &ensp;Garmin&ensp;
                              <FaExclamationTriangle
                                title={m?.general.experimentalFunction}
                                className="text-warning"
                              />
                            </>
                          ),
                        }[target1]
                      }
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </Form.Group>

            {target === 'garmin' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Course name:</Form.Label>

                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description:</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Activity type:</Form.Label>

                  <Form.Control
                    as="select"
                    value={activity}
                    onChange={(e) => setActivity(e.currentTarget.value)}
                  >
                    <option value="" />
                    <option value="RUNNING">Running</option>
                    <option value="HIKING">Hiking</option>
                    <option value="OTHER">Other</option>
                    <option value="MOUNTAIN_BIKING">Mountain_biking</option>
                    <option value="TRAIL_RUNNING">Trail running</option>
                    <option value="ROAD_CYCLING">Road cycling</option>
                    <option value="GRAVEL_CYCLING">Gravel cycling</option>
                  </Form.Control>
                </Form.Group>
              </>
            )}

            {target !== 'garmin' && (
              <Form.Group className="mb-3">
                <Form.Label>{m?.exportMapFeatures.format}:</Form.Label>

                <div>
                  <ButtonGroup>
                    {exportTypes.map((type1) => (
                      <ToggleButton
                        id={type1}
                        key={type1}
                        type="radio"
                        value={type1}
                        checked={type === type1}
                        onChange={() => setType(type1)}
                        disabled={!exportables.length}
                      >
                        {type1 === 'gpx' ? 'GPX' : 'GeoJSON'}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </div>
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>{m?.exportMapFeatures.download}:</Form.Label>

              <div>
                {exportableDefinitions
                  .filter(([, , garmin]) => target !== 'garmin' || garmin)
                  .map(([type, icon]) => (
                    <Fragment key={type}>
                      <Form.Check
                        name="exportable"
                        inline={type === 'plannedRoute'}
                        id={'chk-' + type}
                        type={target === 'garmin' ? 'radio' : 'checkbox'}
                        checked={exportables.includes(type)}
                        disabled={!initExportables.includes(type)}
                        onChange={() => handleCheckboxChange(type)}
                        label={
                          <>
                            {icon} {m?.exportMapFeatures.what[type]}
                          </>
                        }
                      />

                      {type === 'plannedRoute' && target !== 'garmin' && (
                        <Form.Check
                          id="chk-plannedRouteWithStops"
                          inline
                          type="checkbox"
                          checked={exportables.includes(
                            'plannedRouteWithStops',
                          )}
                          disabled={!exportables.includes(type)}
                          onChange={() =>
                            handleCheckboxChange('plannedRouteWithStops')
                          }
                          label={
                            m?.exportMapFeatures.what['plannedRouteWithStops']
                          }
                        />
                      )}
                    </Fragment>
                  ))}
              </div>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              disabled={
                !exportables.length ||
                (target === 'garmin' && (!name.trim() || !activity))
              }
            >
              <FaFileExport /> {m?.general.export}
            </Button>

            <Button type="button" variant="dark" onClick={close}>
              <FaTimes /> {m?.general.close} <kbd>Esc</kbd>
            </Button>
          </Modal.Footer>
        </Form>
      )}
    </Modal>
  );
}