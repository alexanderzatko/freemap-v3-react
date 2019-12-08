import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import React, { useState, useRef, useCallback } from 'react';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from 'react-bootstrap/lib/Popover';
import { FontAwesomeIcon } from 'fm3/components/FontAwesomeIcon';
import tips from 'fm3/tips/index.json';
import { withTranslator, Translator } from 'fm3/l10nInjector';

import { setActiveModal } from 'fm3/actions/mainActions';
import {
  authStartLogout,
  authChooseLoginMethod,
} from 'fm3/actions/authActions';
import { tipsShow } from 'fm3/actions/tipsActions';
import { l10nSetChosenLanguage } from 'fm3/actions/l10nActions';
import { RootState } from 'fm3/storeCreator';
import { RootAction } from 'fm3/actions';
import { OpenInExternalAppMenuItems } from './OpenInExternalAppMenuItems';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    t: Translator;
  };

const MoreMenuButtonInt: React.FC<Props> = ({
  user,
  t,
  language,
  chosenLanguage,
  lat,
  lon,
  zoom,
  expertMode,
  mapType,
  onLogin,
  onLogout,
  onShare,
  onSettingsShow,
  onGpxExport,
  onPdfExport,
  onEmbed,
  onSupportUs,
  onAbout,
  onLegend,
  onLanguageChange,
  onTip,
}) => {
  const [show, setShow] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);

  const button = useRef<Button | null>(null);

  const handleButtonClick = useCallback(() => {
    setShow(true);
  }, []);

  const close = useCallback(() => {
    setShow(false);
    setSubmenu(null);
  }, []);

  function useMenu<T>(fn: (...args: T[]) => void, ...args: T[]) {
    return useCallback(() => {
      close();
      fn(...args);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fn, ...args]);
  }

  const handleLoginClick = useMenu(onLogin);

  const handleLogoutClick = useMenu(onLogout);

  const handleShareClick = useMenu(onShare);

  const handleSettingsShowClick = useMenu(onSettingsShow);

  const handleGpxExportClick = useMenu(onGpxExport);

  const handlePdfExportClick = useMenu(onPdfExport);

  const handleEmbedClick = useMenu(onEmbed);

  const handleSupportUsClick = useMenu(onSupportUs);

  const handleAboutClick = useMenu(onAbout);

  const handleLegendClick = useMenu(onLegend);

  const handleAutoLanguageClick = useMenu(onLanguageChange, null);

  const handleEnglishClick = useMenu(onLanguageChange, 'en');

  const handleSlovakClick = useMenu(onLanguageChange, 'sk');

  const handleCzechClick = useMenu(onLanguageChange, 'cs');

  const handleHungarianClick = useMenu(onLanguageChange, 'hu');

  const handleTipSelect = useCallback(
    (tip: any) => {
      close();
      onTip(tip);
    },
    [onTip, close],
  );

  const handleLanguageClick = useCallback(() => {
    setSubmenu('language');
  }, []);

  const handleHelpClick = useCallback(() => {
    setSubmenu('help');
  }, []);

  const handleBackClick = useCallback(() => {
    setSubmenu(null);
  }, []);

  const handleOpenExternally = useCallback(() => {
    setSubmenu('openExternally');
  }, []);

  return (
    <>
      <Button ref={button} onClick={handleButtonClick} title={t('more.more')}>
        <FontAwesomeIcon icon="bars" />
      </Button>
      <Overlay
        rootClose
        placement="bottom"
        show={show}
        onHide={close}
        target={() => button.current}
        shouldUpdatePosition
      >
        <Popover id="popover-trigger-click-root-close" className="fm-menu">
          <ul>
            {submenu === null ? (
              <>
                <MenuItem onClick={handleLanguageClick}>
                  <FontAwesomeIcon icon="language" /> Language / Jazyk / Nyelv{' '}
                  <FontAwesomeIcon icon="chevron-right" />
                </MenuItem>
                {user ? (
                  <MenuItem onClick={handleLogoutClick}>
                    <FontAwesomeIcon icon="sign-out" />{' '}
                    {t('more.logOut', { name: user.name })}
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleLoginClick}>
                    <FontAwesomeIcon icon="sign-in" /> {t('more.logIn')}
                  </MenuItem>
                )}
                <MenuItem onClick={handleSettingsShowClick}>
                  <FontAwesomeIcon icon="cog" /> {t('more.settings')}{' '}
                  <kbd>e</kbd> <kbd>s</kbd>
                </MenuItem>
                <MenuItem divider />
                <MenuItem onClick={handleOpenExternally}>
                  <FontAwesomeIcon icon="external-link" />{' '}
                  {t('external.openInExternal')}{' '}
                  <FontAwesomeIcon icon="chevron-right" />
                </MenuItem>
                <MenuItem onClick={handlePdfExportClick}>
                  <FontAwesomeIcon icon="file-pdf-o" /> {t('more.pdfExport')}{' '}
                  <kbd>e</kbd> <kbd>p</kbd>
                </MenuItem>
                <MenuItem onClick={handleGpxExportClick}>
                  <FontAwesomeIcon icon="share" /> {t('more.gpxExport')}{' '}
                  <kbd>e</kbd> <kbd>g</kbd>
                </MenuItem>
                <MenuItem
                  onClick={close}
                  href="http://wiki.freemap.sk/FileDownload"
                  target="_blank"
                >
                  <FontAwesomeIcon icon="!icon-gps-device" />{' '}
                  {t('more.mapExports')}
                </MenuItem>
                <MenuItem onClick={handleShareClick}>
                  <FontAwesomeIcon icon="share-alt" /> {t('more.shareMap')}{' '}
                  <kbd>e</kbd> <kbd>r</kbd>
                </MenuItem>
                <MenuItem onClick={handleEmbedClick}>
                  <FontAwesomeIcon icon="code" /> {t('more.embedMap')}{' '}
                  <kbd>e</kbd> <kbd>e</kbd>
                </MenuItem>
                <MenuItem divider />
                <MenuItem
                  onClick={close}
                  href="http://wiki.freemap.sk/NahlasenieChyby"
                  target="_blank"
                >
                  <FontAwesomeIcon icon="exclamation-triangle" />{' '}
                  {t('more.reportMapError')}
                </MenuItem>
                <MenuItem
                  onClick={close}
                  href="https://github.com/FreemapSlovakia/freemap-v3-react/issues/new"
                  target="_blank"
                >
                  <FontAwesomeIcon icon="!icon-bug" />{' '}
                  {t('more.reportAppError')}
                </MenuItem>
                <MenuItem divider />
                {['sk', 'cs'].includes(language) && (
                  <MenuItem onClick={handleHelpClick}>
                    <FontAwesomeIcon icon="book" /> {t('more.help')}{' '}
                    <FontAwesomeIcon icon="chevron-right" />
                  </MenuItem>
                )}
                <MenuItem onClick={handleSupportUsClick}>
                  <FontAwesomeIcon icon="heart" style={{ color: 'red' }} />{' '}
                  {t('more.supportUs')}{' '}
                  <FontAwesomeIcon icon="heart" style={{ color: 'red' }} />
                </MenuItem>
              </>
            ) : submenu === 'help' ? (
              <>
                <MenuItem header>
                  <FontAwesomeIcon icon="book" /> {t('more.help')}
                </MenuItem>
                <MenuItem onClick={handleBackClick}>
                  <FontAwesomeIcon icon="chevron-left" /> {t('more.back')}{' '}
                  <kbd>Esc</kbd>
                </MenuItem>
                <MenuItem divider />
                {['A', 'K', 'T', 'C'].includes(mapType) && (
                  <MenuItem onClick={handleLegendClick}>
                    <FontAwesomeIcon icon="map-o" /> {t('more.mapLegend')}
                  </MenuItem>
                )}
                <MenuItem onClick={handleAboutClick}>
                  <FontAwesomeIcon icon="address-card-o" /> {t('more.contacts')}
                </MenuItem>
                <MenuItem divider />
                <MenuItem header>
                  <FontAwesomeIcon icon="lightbulb-o" /> {t('more.tips')}
                </MenuItem>
                {tips.map(([key, name, icon]) => (
                  <MenuItem key={key} onSelect={handleTipSelect} eventKey={key}>
                    <FontAwesomeIcon icon={icon} /> {name}
                  </MenuItem>
                ))}
              </>
            ) : submenu === 'openExternally' ? (
              <>
                <MenuItem header>
                  <FontAwesomeIcon icon="external-link" />{' '}
                  {t('external.openInExternal')}
                </MenuItem>
                <MenuItem onClick={handleBackClick}>
                  <FontAwesomeIcon icon="chevron-left" /> {t('more.back')}{' '}
                  <kbd>Esc</kbd>
                </MenuItem>
                <MenuItem divider />
                <OpenInExternalAppMenuItems
                  lat={lat}
                  lon={lon}
                  zoom={zoom}
                  mapType={mapType}
                  expertMode={expertMode}
                  onSelect={close}
                  pointTitle={document.title}
                  pointDescription={document.title}
                />
              </>
            ) : submenu === 'language' ? (
              <>
                <MenuItem header>
                  <FontAwesomeIcon icon="language" /> Language / Jazyk / Nyelv
                </MenuItem>
                <MenuItem onClick={handleBackClick}>
                  <FontAwesomeIcon icon="chevron-left" /> {t('more.back')}{' '}
                  <kbd>Esc</kbd>
                </MenuItem>
                <MenuItem divider />
                <MenuItem
                  onClick={handleAutoLanguageClick}
                  active={chosenLanguage === null}
                >
                  {t('more.automaticLanguage')}
                </MenuItem>
                <MenuItem
                  onClick={handleEnglishClick}
                  active={chosenLanguage === 'en'}
                >
                  English
                </MenuItem>
                <MenuItem
                  onClick={handleSlovakClick}
                  active={chosenLanguage === 'sk'}
                >
                  Slovensky
                </MenuItem>
                <MenuItem
                  onClick={handleCzechClick}
                  active={chosenLanguage === 'cs'}
                >
                  Česky
                </MenuItem>
                <MenuItem
                  onClick={handleHungarianClick}
                  active={chosenLanguage === 'hu'}
                >
                  Magyar
                </MenuItem>
              </>
            ) : null}
          </ul>
          {submenu === null && (
            <div style={{ margin: '4px 18px', fontSize: '18px' }}>
              <a
                onClick={close}
                href="https://www.facebook.com/FreemapSlovakia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#3b5998' }}
                title={t('more.facebook')}
              >
                <FontAwesomeIcon icon="facebook-official" />
              </a>{' '}
              <a
                onClick={close}
                href="https://twitter.com/FreemapSlovakia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0084b4' }}
                title={t('more.twitter')}
              >
                <FontAwesomeIcon icon="twitter" />
              </a>{' '}
              <a
                onClick={close}
                href="https://github.com/FreemapSlovakia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#333' }}
                title={t('more.github')}
              >
                <FontAwesomeIcon icon="github" />
              </a>
            </div>
          )}
        </Popover>
      </Overlay>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
  chosenLanguage: state.l10n.chosenLanguage,
  language: state.l10n.language,
  mapType: state.map.mapType,
  lat: state.map.lat,
  lon: state.map.lon,
  zoom: state.map.zoom,
  expertMode: state.main.expertMode,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onSettingsShow() {
    dispatch(setActiveModal('settings'));
  },
  onGpxExport() {
    dispatch(setActiveModal('export-gpx'));
  },
  onPdfExport() {
    dispatch(setActiveModal('export-pdf'));
  },
  onShare() {
    dispatch(setActiveModal('share'));
  },
  onEmbed() {
    dispatch(setActiveModal('embed'));
  },
  onSupportUs() {
    dispatch(setActiveModal('supportUs'));
  },
  onAbout() {
    dispatch(setActiveModal('about'));
  },
  onLegend() {
    dispatch(setActiveModal('legend'));
  },
  onLogin() {
    dispatch(authChooseLoginMethod());
  },
  onLogout() {
    dispatch(authStartLogout());
  },
  onTip(which: string) {
    dispatch(tipsShow(which));
  },
  onLanguageChange(lang: string | null) {
    dispatch(l10nSetChosenLanguage(lang));
  },
});

export const MoreMenuButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslator(MoreMenuButtonInt));
