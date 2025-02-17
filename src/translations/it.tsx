/* eslint-disable */

import { Attribution } from 'fm3/components/Attribution';
import { ChangesetDetails } from 'fm3/components/ChangesetDetails';
import { CookieConsent } from 'fm3/components/CookieConsent';
import { ElevationInfo } from 'fm3/components/ElevationInfo';
import { MaptilerAttribution } from 'fm3/components/MaptilerAttribution';
import {
  ObjectDetailBasicProps,
  ObjectDetails,
} from 'fm3/components/ObjectDetails';
import { TrackViewerDetails } from 'fm3/components/TrackViewerDetails';
import { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';
import { FaKey } from 'react-icons/fa';
import shared from './it-shared.json';
import { Messages } from './messagesInterface';

const nf33 = new Intl.NumberFormat('it', {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

const masl = 'm\xa0a.s.l.';

const getErrorMarkup = (ticketId?: string) => `
<h1>Application error!</h1>
<p>
  ${
    ticketId
      ? `L'errore è stato automaticamente segnalato con il Ticket numero (ID) <b>${ticketId}</b>.`
      : ''
  }
  Puoi segnalare il problema a <a href="https://github.com/FreemapSlovakia/freemap-v3-react/issues/new" target="_blank" rel="noopener noreferrer">GitHub</a>,
  oppure inviare una email con i dettagli a <a href="mailto:freemap@freemap.sk?subject=Nahlásenie%20chyby%20na%20www.freemap.sk">freemap@freemap.sk</a>.
</p>
<p>
  Grazie.
</p>`;

const outdoorMap = 'Escursionismo, Ciclismo, Sci, Cavallo';

const it: Messages = {
  general: {
    iso: 'it_IT',
    elevationProfile: 'Profilo altimetrico',
    save: 'Salva',
    cancel: 'Annulla',
    modify: 'Modifica',
    delete: 'Elimina',
    remove: 'Rimuovi',
    close: 'Chiudi',
    apply: 'Applica',
    exitFullscreen: 'Esci dalla modalità a tutto schermo',
    fullscreen: 'Modalità a tutto schermo',
    yes: 'Sì',
    no: 'No',
    masl,
    copyCode: 'Copia codice',
    loading: 'Caricamento…',
    ok: 'OK',
    preventShowingAgain: 'Non mostrare più',
    closeWithoutSaving: 'Chiudere la finestra senza salvare?',
    back: 'Indietro',
    internalError: ({ ticketId }) => `!HTML!${getErrorMarkup(ticketId)}`,
    processorError: ({ err }) => `Errore dell'applicazione: ${err}`,
    seconds: 'secondi',
    minutes: 'minuti',
    meters: 'metri',
    createdAt: 'Creato a',
    modifiedAt: 'Modificato a',
    actions: 'Azioni',
    add: 'Aggiungi nuovo',
    clear: 'Pulisci',
    convertToDrawing: 'Converti in disegno',
    simplifyPrompt:
      'Per favore inserisci il fattore di semplificazione. Imposta lo zero per nessuna semplificazione.',
    copyUrl: 'Copia URL',
    copyPageUrl: 'Copia URL della pagina',
    savingError: ({ err }) => `Salva l'errore: ${err}`,
    loadError: ({ err }) => `Caricamento dell'errore: ${err}`,
    deleteError: ({ err }) => `Eliminazione dell'errore: ${err}`,
    operationError: ({ err }) => `Errore dell'operazione: ${err}`,
    deleted: 'Eliminato.',
    saved: 'Salvato.',
    visual: 'Visualizza',
    copyOk: 'Copiato negli appunti.',
    noCookies: "Questa funzionalità richiede l'accettazione dei cookies.",
    name: 'Nome',
    load: 'Carica',
    unnamed: 'Nessun nome',
    enablePopup: 'Per favore abilita i popup nel tuo browser per questo sito.',
    componentLoadingError:
      'Errore di caricamento. Per favore verifica la tua connessione internet.',
    offline: 'Non sei connesso a internet.',
    connectionError: 'Errore di collegamento al server.',
    experimentalFunction: 'Funzione sperimentale',
    attribution: () => (
      <Attribution unknown="Licenza della mappa non specificata." />
    ),
    unauthenticatedError: 'Please log-in to access this feature.', // TODO translate
  },

  selections: {
    objects: 'Oggetto (POI)',
    drawPoints: 'Punto',
    drawLines: 'Linea',
    drawPolygons: 'Poligono',
    tracking: 'Tracciamento',
    linePoint: 'Punto della linea',
    polygonPoint: 'Punto del poligono',
  },

  tools: {
    none: 'Chiudi lo strumento',
    tools: 'Strumenti',
    routePlanner: 'Cerca percorso',
    objects: 'Oggetti (POI)',
    photos: 'Foto',
    measurement: 'Disegno e misurazione',
    drawPoints: 'Disegno a punti',
    drawLines: 'Disegno a linee',
    drawPolygons: 'Disegno a poligoni',
    trackViewer: 'Visualizzatore di tracce (GPX)',
    changesets: 'Modifiche mappa',
    mapDetails: 'Dettagli mappa',
    tracking: 'Tracciamento in tempo reale',
    maps: 'Le mie mappe',
  },

  routePlanner: {
    ghParams: {
      tripParameters: 'Parametri del viaggio',
      seed: 'Casuale',
      distance: 'Distanza approssimativa',
      isochroneParameters: 'Parametri isocroni',
      buckets: 'Buckets',
      timeLimit: 'Limite tempo',
      distanceLimit: 'Limite distanza',
    },
    milestones: 'Marcatori',
    start: 'Inizio',
    finish: 'Fine',
    swap: 'Inverti inizio e fine',
    point: {
      pick: 'Seleziona sulla mappa',
      current: 'La tua posizione',
      home: 'Posizione casa',
    },
    transportType: {
      car: 'Auto',
      // 'car-free': 'Auto (escludi pedaggi)',
      // bikesharing: 'Bike sharing',
      // imhd: 'Trasporti pubblici',
      bike: 'Bici',
      bicycle_touring: 'Cicloturismo',
      'foot-stroller': 'Passeggino / Sedia a rotelle',
      nordic: 'Sci nordico',
      // ski: 'Sci',
      foot: 'Camminata',
      hiking: 'Escursione',
      mtb: 'Mountain bike',
      racingbike: 'Bici da corsa',
      motorcycle: 'Moto',
    },
    weighting: {
      fastest: 'Più veloce',
      short_fastest: 'Veloce, breve',
      shortest: 'Più breve',
    },
    development: 'in sviluppo',
    mode: {
      route: 'Ordinato',
      trip: 'Luoghi da visitare',
      roundtrip: 'Luoghi da visitare (Andata e ritorno)',
      'routndtrip-gh': 'Andata e ritorno',
      isochrone: 'Isocrono',
    },
    alternative: 'Alternativo',
    // eslint-disable-next-line
    distance: ({ value, diff }) => (
      <>
        Distance:{' '}
        <b>
          {value} km{diff ? ` (+ ${diff} km)` : ''}
        </b>
      </>
    ),
    // eslint-disable-next-line
    duration: ({ h, m, diff }) => (
      <>
        Durata:{' '}
        <b>
          {h} h {m} m{diff && ` (+ ${diff.h} h ${diff.m} m)`}
        </b>
      </>
    ),
    // eslint-disable-next-line
    summary: ({ distance, h, m }) => (
      <>
        Distanza: <b>{distance} km</b> | Durata:{' '}
        <b>
          {h} h {m} m
        </b>
      </>
    ),
    noHomeAlert: {
      msg: 'Devi prima impostare la tua posizione di casa nelle Opzioni.',
      setHome: 'Imposta',
    },
    showMidpointHint:
      'Per aggiungere un punto intermedio, trascina un punto della linea.',
    gpsError: 'Errore nel determinare la tua posizione corrente.',
    routeNotFound:
      'Nessun percorso trovato. Prova a cambiare i parametri o sposta i punti della rotta.',
    fetchingError: ({ err }) => `Error finding the route: ${err}`,
    maneuverWithName: ({ type, modifier, name }) =>
      `${type} ${modifier} on ${name}`,
    maneuverWithoutName: ({ type, modifier }) => `${type} ${modifier}`,

    maneuver: {
      types: {
        turn: 'gira',
        'new name': 'vai',
        depart: 'partenza',
        arrive: 'arrivo',
        merge: 'continua',
        // 'ramp':
        'on ramp': 'entra nella via',
        'off ramp': 'esci dalla via',
        fork: 'scegli una via',
        'end of road': 'continua',
        // 'use lane':
        continue: 'continua',
        roundabout: 'entra in rotatoria',
        rotary: 'enter nella rotonda',
        'roundabout turn': 'alla rotatoria, gira',
        // 'notification':
        'exit rotary': 'esci dalla rotonda', // undocumented
        'exit roundabout': 'esci dalla rotatoria', // undocumented
        notification: 'notifica',
        'use lane': 'utilizza la corsia',
      },

      modifiers: {
        uturn: 'fai inversione a U',
        'sharp right': 'a destra',
        'slight right': 'leggermente a destra',
        right: 'destra',
        'sharp left': 'a sinistra',
        'slight left': 'leggermente a sinistra',
        left: 'sinistra',
        straight: 'diritto',
      },
    },
    imhd: {
      total: {
        // eslint-disable-next-line
        short: ({ arrival, price, numbers }) => (
          <>
            Arrival: <b>{arrival}</b> | Price: <b>{price} €</b> | Lines:{' '}
            {numbers?.map((n, i) => (
              <Fragment key={n}>
                {i > 0 ? ', ' : ''}
                <b>{n}</b>
              </Fragment>
            ))}
          </>
        ),
        // eslint-disable-next-line
        full: ({ arrival, price, numbers, total, home, foot, bus, wait }) => (
          <>
            Arrival: <b>{arrival}</b> | Price: <b>{price} €</b> | Lines:{' '}
            {numbers?.map((n, i) => (
              <Fragment key={n}>
                {i > 0 ? ', ' : ''}
                <b>{n}</b>
              </Fragment>
            ))}{' '}
            | Duration{' '}
            <b>
              {total} {numberize(total, ['minutes', 'minute'])}
            </b>
            <br />
            To leave: <b>{home}</b>, walking: <b>{foot}</b>, pub. trans.:{' '}
            <b>{bus}</b>, waiting:{' '}
            <b>
              {wait} {numberize(wait, ['minutes', 'minute'])}
            </b>
          </>
        ),
      },
      step: {
        // eslint-disable-next-line
        foot: ({ departure, duration, destination }) => (
          <>
            at <b>{departure}</b> walk{' '}
            {duration !== undefined && (
              <b>
                {duration} {numberize(duration, ['minutes', 'minute'])}
              </b>
            )}{' '}
            {destination === 'TARGET' ? (
              <b>to destination</b>
            ) : (
              <>
                to <b>{destination}</b>
              </>
            )}
          </>
        ),
        // eslint-disable-next-line
        bus: ({ departure, type, number, destination }) => (
          <>
            at <b>{departure}</b> {type} <b>{number}</b> to <b>{destination}</b>
          </>
        ),
      },
      type: {
        bus: 'prendi un autobus',
        tram: 'prendi un tram',
        trolleybus: 'prendi un filobus',
        foot: 'cammina',
      },
    },
    bikesharing: {
      step: {
        // eslint-disable-next-line
        foot: ({ duration, destination }) => (
          <>
            walk{' '}
            {duration !== undefined && (
              <b>
                {duration} {numberize(duration, ['minutes', 'minute'])}
              </b>
            )}{' '}
            {destination === 'TARGET' ? (
              <b>alla destinazione</b>
            ) : (
              <>
                to <b>{destination}</b>
              </>
            )}
          </>
        ),
        // eslint-disable-next-line
        bicycle: ({ duration, destination }) => (
          <>
            bicycle{' '}
            {duration !== undefined && (
              <b>
                {duration} {numberize(duration, ['minutes', 'minute'])}
              </b>
            )}{' '}
            to <b>{destination}</b>
          </>
        ),
      },
    },
    imhdAttribution: 'public transport routes',
  },

  mainMenu: {
    title: 'Menu principale',
    logOut: 'Esci',
    logIn: 'Accedi',
    account: 'Account',
    gpxExport: 'Esporta in GPX / GeoJSON',
    mapExports: 'Mappa per apparati GPS',
    embedMap: 'Incorpora la mappa',
    supportUs: 'Supporta Freemap',
    help: 'Aiuto',
    back: 'Indietro',
    mapLegend: 'Legenda',
    contacts: 'Contatti',
    tips: 'Consigli',
    facebook: 'Freemap su Facebook',
    twitter: 'Freemap su Twitter',
    youtube: 'Freemap su YouTube',
    github: 'Freemap su GitHub',
    automaticLanguage: 'Automatico',
    pdfExport: 'Esporta la mappa',
    osmWiki: 'Documentazione su OpenStreetMap',
    wikiLink: 'https://wiki.openstreetmap.org/wiki/Main_Page',
  },

  main: {
    title: shared.title,
    description: shared.description,
    clearMap: 'Pulisci la mappa',
    close: 'Chiudi',
    closeTool: 'Chiudi lo strumento',
    locateMe: 'Localizzami',
    locationError: 'Errore nel determinare la locazione.',
    zoomIn: 'Zoom avanti',
    zoomOut: 'Zoom indietro',
    devInfo: () => (
      <div>
        Questa è una versione di test di Freemap Slovakia. Per la versione
        effettiva vai a <a href="https://www.freemap.sk/">www.freemap.sk</a>.
      </div>
    ),
    copyright: 'Copyright',
    cookieConsent: () => (
      <CookieConsent
        prompt="Alcune funzionalità richiedono i cookies. Accetta:"
        local="Cookies su impostazioni locali e accesso tramite social networks"
        analytics="Cookies analitici"
      />
    ),
    infoBars: {
      ua: () => (
        <>
          🇺🇦 Siamo con l'Ucraina.{' '}
          <a
            href="https://bank.gov.ua/en/about/support-the-armed-forces"
            target="_blank"
            rel="noopener"
          >
            Fai una donazione all'esercito ucraino ›
          </a>{' '}
          🇺🇦
        </>
      ),
    },
  },

  gallery: {
    recentTags: 'Recent tags to assign:', // TODO translate
    filter: 'Filtro',
    showPhotosFrom: 'Vedi le foto',
    showLayer: 'Mostra il livello',
    upload: 'Carica',
    f: {
      firstUploaded: 'dai primi caricati',
      lastUploaded: 'dagli ultimi caricati',
      firstCaptured: 'dai più vecchi',
      lastCaptured: 'dai più recenti',
      leastRated: 'dai meno valutati',
      mostRated: 'dai più valutati',
      lastComment: "dall'ultimo commento",
    },
    colorizeBy: 'Colora in base',
    c: {
      disable: 'non colorare',
      mine: 'diversi dai miei',
      author: 'autore',
      rating: 'valutazioni',
      takenAt: 'data scatto',
      createdAt: 'data di caricamento',
      season: 'stagione',
    },
    viewer: {
      title: 'Foto',
      comments: 'Commenti',
      newComment: 'Nuovo commento',
      addComment: 'Aggiungi',
      yourRating: 'La tua valutazione:',
      showOnTheMap: 'Mostra sulla mappa',
      openInNewWindow: 'Apri in…',
      uploaded: ({ username, createdAt }) => (
        <>
          Caricato da {username} il {createdAt}
        </>
      ),
      captured: (takenAt) => <>Captured on {takenAt}</>,
      deletePrompt: 'Eliminare questa foto?',
      modify: 'Modifica',
    },
    editForm: {
      name: 'Nome',
      description: 'Descrizione',
      takenAt: {
        datetime: 'Data e ora dello scatto',
        date: 'Data scatto',
        time: 'Orario scatto',
      },
      location: 'Luogo',
      tags: 'Tag',
      setLocation: 'Imposta il luogo',
    },
    uploadModal: {
      title: 'Carica foto',
      uploading: (n) => `Uploading (${n})`,
      upload: 'Carica',
      rules: `
        <p>Trascina qui le tue foto o clicca qui per selezionarle.</p>
        <ul>
          <li>Non caricare foto troppo piccole (diapositive). Le dimensioni massime non sono limitate. La dimensione massima del file è limitata a 10 MB. I file più grandi saranno respinti.</li>
          <li>Carica soltanto foto di panorami o di documentazione. I ritratti e le macro non sono accettate e saranno eliminate senza preavviso.</li>
          <li>Carica soltanto foto scattate da te e di tua proprietà.</li>
          <li>Didascalie o commenti che non si riferiscono direttamente al contenuto delle foto caricate o che contraddicono i principi generalmente accettati di convivenza civile verranno rimossi. I trasgressori di questa regola saranno avvisati e, in caso di ripetute violazioni, il loro account nell'applicazione potrebbe essere cancellato.</li>
          <li>Caricando le foto, accetti che esse saranno distribuite secondo i termini di licenza CC-BY-SA 4.0.</li>
          <li>L'operatore (Freemap.sk) declina ogni responsabilità e non risponde per danni diretti o indiretti derivanti dalla pubblicazione di una foto in galleria. La persona che ha caricato l'immagine sul server è pienamente responsabile della foto.</li>
          <li>L'operatore si riserva il diritto di modificare la descrizione, il nome, la posizione e i tag della foto, o di eliminare la foto se il contenuto è inappropriato (in violazione di queste regole).</li>
          <li>L'operatore si riserva il diritto di eliminare l'account nel caso in cui l'utente violi ripetutamente la politica della galleria pubblicando contenuti inappropriati.</li>
        </ul>
      `,
      success: 'Le foto sono state caricate con successo.',
      showPreview: 'Mostra anteprima (aumenta il consumo di CPU e memoria)',
    },
    locationPicking: {
      title: "Selezione l'ubicazione della foto",
    },
    deletingError: ({ err }) => `Error deleting photo: ${err}`,
    tagsFetchingError: ({ err }) => `Error fetching tags: ${err}`,
    pictureFetchingError: ({ err }) => `Error fetching photo: ${err}`,
    picturesFetchingError: ({ err }) => `Error fetching photos: ${err}`,
    savingError: ({ err }) => `Error saving photo: ${err}`,
    commentAddingError: ({ err }) => `Error adding comment: ${err}`,
    ratingError: ({ err }) => `Error rating photo: ${err}`,
    missingPositionError: 'Luogo mancante.',
    invalidPositionError: 'Formato coordinate di posizione non valide.',
    invalidTakenAt: 'Data e orario di scatto non valide.',
    filterModal: {
      title: 'Filtro foto',
      tag: 'Tag',
      createdAt: 'Data di caricamento',
      takenAt: 'Data di scatto',
      author: 'Autore',
      rating: 'Valutazione',
      noTags: 'no tag',
      pano: 'Panorama', // TODO translate
    },
    noPicturesFound: 'Non è stata trovata nessuna foto in questo posto.',
    linkToWww: 'foto su www.freemap.sk',
    linkToImage: 'file immagine',
  },

  measurement: {
    distance: 'Linea',
    elevation: 'Punto',
    area: 'Poligono',
    elevationFetchError: ({ err }) => `Error fetching point elevation: ${err}`,
    elevationInfo: (params) => (
      <ElevationInfo
        {...params}
        lang="cs"
        tileMessage="Tile"
        maslMessage="Elevazione"
      />
    ),
    areaInfo: ({ area }) => (
      <>
        Area:
        <div>
          {nf33.format(area)}&nbsp;m<sup>2</sup>
        </div>
        <div>{nf33.format(area / 100)}&nbsp;a</div>
        <div>{nf33.format(area / 10000)}&nbsp;ha</div>
        <div>
          {nf33.format(area / 1000000)}&nbsp;km<sup>2</sup>
        </div>
      </>
    ),
    distanceInfo: ({ length }) => (
      <>
        Lunghezza:
        <div>{nf33.format(length * 1000)}&nbsp;m</div>
        <div>{nf33.format(length)}&nbsp;km</div>
      </>
    ),
  },

  trackViewer: {
    upload: 'Carica',
    moreInfo: 'Maggiori info',
    share: 'Salva sul Server',
    colorizingMode: {
      none: 'Inattivo',
      elevation: 'Elevazione',
      steepness: 'Ripidezza',
    },
    details: {
      startTime: 'Ora inizio',
      finishTime: 'Ora fine',
      duration: 'Durata',
      distance: 'Distanza',
      avgSpeed: 'Velocità media',
      minEle: 'Elevazione min.',
      maxEle: 'Elevazione max',
      uphill: 'Acesca totale',
      downhill: 'Discesa totale',
      durationValue: ({ h, m }) => `${h} ore ${m} minuti`,
    },
    uploadModal: {
      title: 'Carica la traccia',
      drop: 'Trascina qui il tuo file GPX oppure clicca per selezionarlo.',
    },
    shareToast:
      "La traccia è stata salvata sul server e può essere condivisa copiando l'URL della pagina.",
    fetchingError: ({ err }) =>
      `Errore durante il recupero dei dati della traccia: ${err}`,
    savingError: ({ err }) => `Errore nel salvataggio della traccia: ${err}`,
    loadingError: 'Errore nel caricamento del file.',
    onlyOne: "E' atteso un singolo file GPX.",
    wrongFormat: 'Il file deve avere estensione .GPX.',
    info: () => <TrackViewerDetails />,
    tooBigError: 'Il file è troppo grande.',
  },

  drawing: {
    modify: 'Proprietà',
    edit: {
      title: 'Proprietà',
      color: 'Colore:',
      label: 'Etichetta:',
      width: 'Larghezza',
      hint: "Per rimuovere l'etichetta lascia il campo vuoto.",
      type: 'Geometry type', // TODO translate
    },
    continue: 'Continua',
    join: 'Unisci',
    split: 'Separa',
    stopDrawing: 'Ferma il disegno',
    selectPointToJoin: 'Seleziona un punto per unire le linee',
    // TODO translate
    defProps: {
      menuItem: 'Style settings',
      title: 'Drawing style settings',
      applyToAll: 'Save and apply to all',
    },
  },

  settings: {
    map: {
      overlayPaneOpacity: 'La linea della mappa presenta opacità:',
      homeLocation: {
        label: 'Posizione di casa:',
        select: 'Seleziona sulla mappa',
        undefined: 'indefinito',
      },
    },
    account: {
      name: 'Nome',
      email: 'Email',
      sendGalleryEmails: 'Notifica i commenti alle foto via email',
      delete: 'Delete account', // TODO translate
      deleteWarning:
        'Are you sure to delete your account? It will remove all your photos, photo comments and ratings, your maps, and tracked devices.', // TODO translate
    },
    general: {
      tips: "Mostra i consigli all'apertura della pagina (solo se è selezionata la lingua ceca o slovacca)",
    },
    layer: 'Livello',
    overlayOpacity: 'Opacità',
    showInMenu: 'Mostra nel menu',
    showInToolbar: 'Mostra nella barra degli strumenti',
    saveSuccess: 'Impostazioni salvate.',
    savingError: ({ err }) =>
      `Errore nel salvataggio delle impostazioni: ${err}`,
    customLayersDef: 'Definizione di livelli mappa personalizzati',
    customLayersDefError:
      'Definizione di livelli mappa personalizzati non valida.',
  },

  changesets: {
    allAuthors: 'Tutti gli autori',
    tooBig:
      'La richiesta dei changeset potrebbe restituire troppi risultati. Per favore aumenta lo zoom, scegli meno giorni o inserici un autore specifico.',
    olderThan: ({ days }) => `${days} giorni`,
    olderThanFull: ({ days }) => `Changeset degli ultimi ${days} giorni`,
    notFound: 'Nessun changeset trovato.',
    fetchError: ({ err }) => `Errore nel recupero dei changeset: ${err}`,
    detail: ({ changeset }) => <ChangesetDetails changeset={changeset} />,
    details: {
      author: 'Autore:',
      description: 'Descrizione:',
      noDescription: 'senza descrizione',
      closedAt: 'Ora:',
      moreDetailsOn: ({ osmLink, achaviLink }) => (
        <p>
          Maggiori dettagli su {osmLink} o {achaviLink}.
        </p>
      ),
    },
  },

  mapDetails: {
    notFound: 'Niente trovato qui.', // TODO google translated
    fetchingError: ({ err }) =>
      `Errore durante il recupero dei dettagli: ${err}`, // TODO google translated
    detail: (props: ObjectDetailBasicProps) => (
      <ObjectDetails
        {...props}
        openText="Apri su OpenStreetMap.org"
        historyText="storia"
        editInJosmText="Modifica su JOSM"
      />
    ),
  },

  objects: {
    type: 'Tipo',
    lowZoomAlert: {
      message: ({ minZoom }) =>
        `Per vedere gli oggetti in base al loro tipo, devi ingrandire almeno al livello ${minZoom}.`,
      zoom: 'Zoom-in',
    },
    tooManyPoints: ({ limit }) => `Risultato limitato a ${limit} oggetti.`,
    fetchingError: ({ err }) =>
      `Errore nel recupero degli oggetti (POI): ${err}`,
    // categorie: {
    //   1: 'Natura',
    //   2: 'Servizi',
    //   3: 'Trasporti',
    //   4: 'Monumenti',
    //   5: 'Servizi per la salute',
    //   6: 'Negozi',
    //   7: 'Energetici',
    //   8: 'Alloggio e cibo',
    //   9: 'Turismo',
    //   10: 'Divisione amministrativa',
    //   11: 'Altri',
    //   12: 'Tempo libero',
    //   13: 'Sport',
    //   14: 'Educazione',
    //   15: 'Ciclismo',
    // },
    // sottocategorie: {
    //   1: 'Cava',
    //   2: 'Cima',
    //   3: 'Stazione carburante',
    //   4: 'Ristorante',
    //   5: 'Hotel',
    //   6: 'Parcheggio',
    //   7: 'Aereoporto',
    //   8: 'Stazione ferroviaria',
    //   9: 'Stazione autobus',
    //   10: 'Fermata autobus',
    //   11: 'Castello',
    //   12: 'Dimora',
    //   13: 'Rovine',
    //   14: 'Museo',
    //   15: 'Monumento',
    //   16: 'Memoriale',
    //   17: 'Farmacia',
    //   18: 'Ospedale',
    //   19: 'Chirurgia',
    //   20: 'Polizia',
    //   21: 'Clinica',
    //   22: 'Attraversamento frontiera',
    //   23: 'Ospedale con Pronto Soccorso',
    //   24: 'Supermarket',
    //   26: 'Centrale nucleare',
    //   27: 'Centrale a carbone',
    //   28: 'Centrale idroelettrica',
    //   29: 'Centrale eolica',
    //   30: 'Drogheria',
    //   31: 'Caserma dei pompieri',
    //   32: 'Chiesa',
    //   33: 'Pub',
    //   34: 'Banca',
    //   35: 'Bancomati',
    //   36: 'Fast food',
    //   39: 'Banca',
    //   40: 'Punto panoramico',
    //   41: 'Campeggio',
    //   42: 'Alberi protetti',
    //   43: 'Fonte',
    //   44: 'Posto guida',
    //   45: 'Mappa di orientamento',
    //   46: 'Rifugio alpino',
    //   47: 'Riparo',
    //   48: 'Ufficio postale',
    //   49: 'Memoriale, campo di battaglia',
    //   50: 'Capanno di caccia',
    //   51: 'Torre telecomunicazioni',
    //   52: 'Torre di osservazione',
    //   53: 'Motel',
    //   54: 'Pensione',
    //   55: 'Pensione per famiglie',
    //   56: 'Città regionale',
    //   57: 'Città distrettuale',
    //   58: 'Città',
    //   59: 'Paese',
    //   60: 'Villaggio',
    //   61: 'Borgo',
    //   62: 'Quartiere',
    //   63: 'Guardacaccia',
    //   64: 'Dentista',
    //   65: 'Negozio di biciclette',
    //   66: 'Portabiciclette',
    //   67: 'Noleggio biciclette',
    //   68: 'Negozio di liquori',
    //   69: 'Arte',
    //   70: 'Panetteria',
    //   71: 'Cura di bellezza',
    //   72: 'Letti',
    //   73: 'Bevande',
    //   74: 'Libreria',
    //   75: 'Boutique',
    //   76: 'Macellaio',
    //   77: 'Vendita auto',
    //   78: 'Servizio auto',
    //   79: 'Carità',
    //   80: 'Drogheria',
    //   81: 'Vestiti',
    //   82: 'Computer',
    //   83: 'Confetteria',
    //   84: 'Copisteria',
    //   85: 'Tende',
    //   86: 'Gastronomia',
    //   87: 'Grande magazzino',
    //   89: 'Lavanderie a secco',
    //   90: 'Domestici',
    //   91: 'Elettronica',
    //   92: 'Articoli erotici',
    //   93: 'Spaccio di fabbrica',
    //   94: 'Prodotti agricoli',
    //   95: 'Negozio di fiori',
    //   96: 'Dipinti',
    //   98: 'Imprese funebri',
    //   99: 'Mobili',
    //   100: 'Centro giardinaggio',
    //   101: 'Convenienza',
    //   102: 'Negozio articoli da regalo',
    //   103: 'Vetreria',
    //   104: 'Frutta e verdura',
    //   105: 'Parrucchieri',
    //   106: 'Hardware',
    //   107: 'Apparecchi acustici',
    //   108: 'HI-FI',
    //   109: 'Gelato',
    //   110: 'Decorazione interni',
    //   111: 'Orefice',
    //   112: 'Chiosco',
    //   113: 'Casalinghi',
    //   114: 'Lavanderia',
    //   115: 'Centro commerciale',
    //   116: 'Massaggio',
    //   117: 'Cellulari',
    //   118: 'Prestiti di denaro',
    //   119: 'Moto',
    //   120: 'Negozio di musica',
    //   121: 'Giornali',
    //   122: 'Ottica',
    //   124: 'Articoli outdoor',
    //   125: 'Vernice',
    //   126: 'Banco dei pegni',
    //   127: 'Animali',
    //   128: 'Frutti di mare',
    //   129: 'Negozio usato',
    //   130: 'Scarpe',
    //   131: 'Articoli sportivi',
    //   132: 'Cancelleria',
    //   133: 'Tatuaggi',
    //   134: 'Negozio di giocattoli',
    //   135: 'Commercio',
    //   136: 'Vacante',
    //   137: 'Aspirapolveri',
    //   138: 'Negozio di varietà',
    //   139: 'Video/DVD',
    //   140: 'ZOO',
    //   141: 'Rifugio alpino',
    //   142: 'Attrazione',
    //   143: 'Toilette',
    //   144: 'Telefono',
    //   145: 'Autorità civiche',
    //   146: 'Prigione',
    //   147: 'Mercato',
    //   148: 'Bar',
    //   149: 'Caffè',
    //   150: 'Griglia pubblica',
    //   151: 'Acqua potabile',
    //   152: 'Taxi',
    //   153: 'Biblioteca',
    //   154: 'Autolavaggio',
    //   155: 'Vetrina',
    //   156: 'Semaforo',
    //   157: 'Stazione ferroviaria',
    //   158: 'Attraversamento ferroviario',
    //   159: 'Stazione del tram',
    //   160: 'Eliporto',
    //   161: 'Torre Acquedotto',
    //   162: 'Mulino a vento',
    //   163: 'Sauna',
    //   164: 'Stazione GAS',
    //   166: 'Area per cani',
    //   167: 'Centro Sportivo',
    //   168: 'Campo di Golf',
    //   169: 'Stadio',
    //   170: 'Tempo libero',
    //   171: 'Parco acquatico',
    //   172: 'nautica',
    //   173: 'Pesca',
    //   174: 'Parco',
    //   175: 'Parco giochi',
    //   176: 'Giardino',
    //   177: 'Area pubblica',
    //   178: 'Pista di pattinaggio',
    //   179: 'Minigolf',
    //   180: 'Danza',
    //   181: 'Scuola elementare',
    //   182: '9pin',
    //   183: 'Bowling',
    //   184: 'Football americano',
    //   185: 'Tiro con l'arco',
    //   186: 'Atletica',
    //   187: 'Calcio australiano',
    //   188: 'Baseball',
    //   189: 'Pallacanestro',
    //    190: 'Beach volley',
    //   191: 'Bmx',
    //   192: 'Bocce',
    //   193: 'Bocce',
    //   194: 'Calcio canadese',
    //   195: 'Canoa',
    //   196: 'Scacchi',
    //   197: 'Arrampicata',
    //   198: 'Cricket',
    //   199: 'Reti da cricket',
    //   200: 'Croquet',
    //   201: 'Ciclismo',
    //   202: 'Immersioni subacquee',
    //   203: 'Corse di cani',
    //   204: 'Equitazione',
    //   205: 'Calcio',
    //   206: 'Calcio gaelico',
    //   207: 'Golf',
    //   208: 'Ginnastica',
    //   209: 'Hockey',
    //   210: 'Ferri da cavallo',
    //   211: 'Corsa di cavalli',
    //   212: 'Curling',
    //   213: 'Korfball',
    //   214: 'Moto',
    //   215: 'Multi',
    //   216: 'Orientamento',
    //   217: 'Paddle tennis',
    //   218: 'Parapendio',
    //   219: 'Pelota',
    //   220: 'Racchette',
    //   221: 'Canottaggio',
    //   222: 'Rugby',
    //   223: 'Unione rugby',
    //   224: 'Ripresa',
    //   225: 'Pattinaggio su ghiaccio',
    //   226: 'Skateboard',
    //   227: 'Sci',
    //   228: 'Calcio',
    //   229: 'Nuoto',
    //   230: 'Ping-pong',
    //   231: 'Pallamano',
    //   232: 'Tennis',
    //   233: 'Acquascivolo',
    //   234: 'Pallavolo',
    //   235: 'Sci nautico',
    //   236: 'Università',
    //   237: 'Asilo',
    //   238: 'Scuola superiore',
    //   239: 'Scuola guida',
    //   240: 'Cappella',
    //   241: 'Area picnic',
    //   242: 'Bracere',
    //   243: 'Località',
    //   244: 'Cascata',
    //   245: 'Lago',
    //   246: 'Diga',
    //   248: 'Riserva naturale',
    //   249: 'Monumento naturale',
    //   250: 'Area protetta',
    //   251: 'Area paesaggistica protetta',
    //   252: 'Parco Nazionale',
    //   253: 'Distributore automatico di latte',
    //   254: 'Zona umida (RAMSAR)',
    //   255: 'Punti di indirizzo',
    //   256: 'Pozzo minerario',
    //   257: 'Modifica',
    //   258: 'Bene',
    //   259: 'Croce',
    //   260: 'Santuario',
    //   261: 'Fitness',
    //   262: 'Centrale a vapore',
    //   263: 'Casa padronale',
    //   264: 'Classificazione geomorfologica',
    //   265: 'Bunker militare',
    //   266: 'Uscita autostrada',
    //   267: 'Statua',
    //   268: 'Camino',
    //   269: 'Parapendio',
    //   270: 'Deltaplano',
    //   271: 'Luogo di alimentazione',
    //   272: 'Camino',
    //   273: 'Bedminton/Squash',
    //   274: 'Guida',
    //   275: 'Stazione di ricarica per biciclette',
    // },
  },

  external: {
    openInExternal: 'Condividi / Apri su altra App.',
    osm: 'OpenStreetMap',
    oma: 'OMA',
    googleMaps: 'Google Maps',
    hiking_sk: 'Hiking.sk',
    zbgis: 'ZBGIS',
    mapy_cz: 'Mapy.cz',
    josm: 'Modifica con JOSM',
    id: 'Modifica con iD',
    window: 'Nuova finestra',
    url: 'Condividi URL',
    image: 'Condividi foto',
  },

  search: {
    inProgress: 'Ricerca in corso…',
    noResults: 'Nessun risultato trovato',
    prompt: 'Inserisci il luogo',
    routeFrom: 'Percorso da qui',
    routeTo: 'Percorso fino a qui',
    fetchingError: ({ err }) => `Searching error: ${err}`,
    buttonTitle: 'Cerca',
    placeholder: 'Cerca sulla mappa',
  },

  embed: {
    code: 'Inserisci il codice seguente nella tua pagina HTML:',
    example: 'Il risultato sarà simile a questo:',
    dimensions: 'Dimensioni:',
    height: 'Altezza:',
    width: 'Larghezza:',
    enableFeatures: 'Abilita caratteristiche:',
    enableSearch: 'cerca',
    enableMapSwitch: 'Cambia livello mappa',
    enableLocateMe: 'trovami',
  },

  tips: {
    errorLoading: 'Errore caricamento consigli.',
  },

  gpxExport: {
    export: 'Download',
    format: 'Formato',
    exportToDrive: 'Salva su Google Drive',
    exportToDropbox: 'Salva su Dropbox',
    exportError: ({ err }) => `Error exporting: ${err}`,
    what: {
      plannedRoute: 'trova percorso',
      plannedRouteWithStops: 'trova percorso incluse fermate',
      objects: 'oggetti (POI)',
      pictures: 'foto (area di mappa visibile)',
      drawingLines: 'disegno - linee',
      drawingAreas: 'disegno - poligoni',
      drawingPoints: 'disegno - punti',
      tracking: 'tracciamento in tempo reale',
      gpx: 'traccia GPX',
    },
    disabledAlert:
      'Sono abilitate solo i checkbox che hanno qualcosa nella mappa da esportare.',
    licenseAlert:
      'Possono essere applicate varie licenze, come OpenStreetMap. Aggiungi le attribuzioni mancanti durante la condivisione del file esportato.',
    exportedToDropbox: 'Il file è stato salvato su Dropbox.',
    exportedToGdrive: 'Il file è stato salvato su Google Drive.',
  },

  logIn: {
    with: {
      facebook: 'Accedi con Facebook',
      google: 'Accedi con Google',
      osm: 'Accedi con OpenStreetMap',
    },
    success: 'Accesso eseguito correttamente.',
    logInError: ({ err }) => `Error logging in: ${err}`,
    logInError2: 'Error logging in.',
    logOutError: ({ err }) => `Error logging out: ${err}`,
    verifyError: ({ err }) => `Error verifying authentication: ${err}`,
  },

  logOut: {
    success: 'Disconnessione avvenuta correttamente.',
  },

  mapLayers: {
    showAll: 'Mostra tutti i livelli',
    settings: 'Impostazioni livelli mappa',
    layers: 'Livelli mappa',
    switch: 'Livelli mappa',
    photoFilterWarning: 'Il filtro foto è attivo',
    interactiveLayerWarning: 'Il livello interattivo è nascosto',
    minZoomWarning: (minZoom) => `Accessible from zoom ${minZoom}`,
    letters: {
      A: 'Auto',
      T: 'Escursione',
      C: 'Bici',
      K: 'Sci di fondo',
      S: 'Aereo',
      Z: 'Ortofotomozaika SR (Aerial, SK)',
      J: 'Vecchia Ortofotomozaika SR (Aerial, SK)',
      O: 'OpenStreetMap',
      M: 'mtbmap.cz',
      p: 'OpenTopoMap',
      d: 'Trasporti pubblici (ÖPNV)',
      h: 'Storica',
      X: outdoorMap,
      i: 'Livello interattivo',
      I: 'Foto',
      l: 'Forest tracks NLC (SK)',
      n1: 'Nomi (auto)',
      n2: 'Nomi (escursione)',
      n3: 'Nomi (bici)',
      g: 'Tracce GPS OSM',
      t: 'Percorsi escursionistici',
      c: 'Percorsi ciclistici',
      q: 'OpenSnowMap',
      r: 'Client di Rendering',
      s0: 'Strava (tutti)',
      s1: 'Strava (bici)',
      s2: 'Strava (corsa)',
      s3: 'Strava (sport acquatici)',
      s4: 'Strava (sport invernali)',
      w: 'Wikipedia',
      '4': 'Light Terrain Hillshading (SK)', // TODO translate
      '5': 'Terrain Hillshading (SK)', // TODO translate
      '6': 'Surface Hillshading (SK)', // TODO translate
      VO: 'OpenStreetMap Vector', // TODO translate
      VS: 'Streets Vector', // TODO translate
    },
    customBase: 'Mappa personalizzata',
    customOverlay: 'Sovrapposizione mappa personalizzata',
    type: {
      map: 'mappa',
      data: 'data',
      photos: 'foto',
    },
    attr: {
      freemap: '©\xa0Freemap Slovakia',
      osmData: '©\xa0OpenStreetMap contributors',
      srtm: '©\xa0SRTM',
      maptiler: (
        // TODO translate
        <MaptilerAttribution
          tilesFrom="Vector tiles from"
          hostedBy="hosted by"
          see="See"
          _3Dterrain="3D terrain"
        />
      ),
    },
  },

  elevationChart: {
    distance: 'Distanza [km]',
    ele: `Elevation [${masl}]`,
    fetchError: ({ err }) => `Error fetching elevation profile data: ${err}`,
  },

  errorCatcher: {
    html: (ticketId) => `${getErrorMarkup(ticketId)}
      <p>
        Puoi provare:
      </p>
      <ul>
        <li><a href="">ricaricare ultima pagina</a></li>
        <li><a href="/">caricare pagina iniziale</a></li>
        <li><a href="/?reset-local-storage">pulire dati locali e caricare pagina iniziale</a></li>
      </ul>
    `,
  },

  osm: {
    fetchingError: ({ err }) => `Error fetching OSM data: ${err}`,
  },

  tracking: {
    trackedDevices: {
      button: 'Visto',
      modalTitle: 'Dispositivi visti',
      desc: 'Gestisci i dispositivi viti per vedere la posizione dei tuoi amici.',
      modifyTitle: (name) => (
        <>
          Modifica nome dispositivo <i>{name}</i>
        </>
      ),
      createTitle: (name) => (
        <>
          Vedi dispositivo <i>{name}</i>
        </>
      ),
      storageWarning:
        "Tieni presente che l'elenco dei dispositivi si riflette solo nell'URL della pagina. Se vuoi salvarlo, usa la funzione 'Le mie mappe'.",
    },
    accessToken: {
      token: 'Watch Token',
      timeFrom: 'Da',
      timeTo: 'A',
      listingLabel: 'Etichetta inserzione',
      note: 'Note',
      delete: 'Eliminare il token?',
    },
    accessTokens: {
      modalTitle: (deviceName) => (
        <>
          Watch Tokens per <i>{deviceName}</i>
        </>
      ),
      desc: (deviceName) => (
        <>
          Definisci gli watch token per condividere la posizione del tuo
          dispositivo <i>{deviceName}</i> con i tuoi amici.
        </>
      ),
      createTitle: (deviceName) => (
        <>
          Aggiungi Watch Token per <i>{deviceName}</i>
        </>
      ),
      modifyTitle: ({ token, deviceName }) => (
        <>
          Modifica Watch Token <i>{token}</i> per <i>{deviceName}</i>
        </>
      ),
    },
    trackedDevice: {
      token: 'Watch Token',
      label: 'Etichetta',
      fromTime: 'Da',
      maxAge: 'Durata Massima',
      maxCount: 'Conteggio massimo',
      splitDistance: 'Dividi distanza',
      splitDuration: 'Divita durata',
      color: 'Colore',
      width: 'Larghezza',
    },
    devices: {
      button: 'Miei dispositivi',
      modalTitle: 'Miei dispositivi tracciati',
      createTitle: 'Crea dispositivo di tracciamento',
      watchTokens: 'Watch token',
      watchPrivately: 'Guarda privatamente',
      watch: 'Guarda',
      delete: 'Eliminare dispositivo?',
      modifyTitle: ({ name }) => (
        <>
          Modifica dispositivo di tracciamento <i>{name}</i>
        </>
      ),
      desc: () => (
        <>
          <p>
            Gestisci i tuoi dispositivi in modo che gli altri possano vedere la
            tua posizione se loro il token (puoi crearlo tramite <FaKey /> ).
          </p>
          <hr />
          <p>
            Inserisci questo URL sul tuo tracker (eg.{' '}
            <a href="https://docs.locusmap.eu/doku.php?id=manual:user_guide:functions:live_tracking">
              Locus
            </a>{' '}
            o OsmAnd):{' '}
            <code>
              {process.env['API_URL']}/tracking/track/<i>token</i>
            </code>{' '}
            dove <i>token</i> è elencato nella tabella sotto.
          </p>
          <p>
            L'endpoint supporta HTTP<code>GET</code> o <code>POST</code>
            con i parametri codificati URL:
          </p>
          <ul>
            <li>
              <code>lat</code> - latitudine in gradi (obbligatoria)
            </li>
            <li>
              <code>lon</code> - longitudine in gradi (obbligatoria)
            </li>
            <li>
              <code>time</code>, <code>timestamp</code> - datetime parsabile in
              JavaScript o time Unix in s o ms
            </li>
            <li>
              <code>alt</code>, <code>altitude</code> - altitudine in metri
            </li>
            <li>
              <code>speed</code> - velocità in m/s
            </li>
            <li>
              <code>speedKmh</code> - velocità in km/h
            </li>
            <li>
              <code>acc</code> - precisione in metri
            </li>
            <li>
              <code>hdop</code> - DOP orizzontale
            </li>
            <li>
              <code>bearing</code> - gradi
            </li>
            <li>
              <code>battery</code> - batteria in percentuale
            </li>
            <li>
              <code>gsm_signal</code> - Segnale GSM in percentuale
            </li>
            <li>
              <code>message</code> - messagggio (note)
            </li>
          </ul>
          <hr />
          <p>
            In caso di dispositivo TK102B, configura il suo indirizzo come{' '}
            <code>
              {process.env['API_URL']
                ?.replace(/https?:\/\//, '')
                ?.replace(/:\d+$/, '')}
              :3030
            </code>
          </p>
        </>
      ),
    },
    device: {
      token: 'Token di traccia',
      name: 'Nome',
      maxAge: 'Durata massima',
      maxCount: 'Conteggio massimo',
      regenerateToken: 'Rigenera',
      generatedToken: 'sarà rigenerato al salvataggio',
    },
    visual: {
      line: 'Linea',
      points: 'Punti',
      'line+points': 'Linea + Punti',
    },
    subscribeNotFound: ({ id }) => (
      <>
        Il token <i>{id}</i> non esiste.
      </>
    ),
    subscribeError: ({ id }) => (
      <>
        Errore nell'utilizzo del token <i>{id}</i>.
      </>
    ),
  },
  pdfExport: {
    advancedSettings: 'Opzioni avanzate',
    styles: 'Stili livelli interattivi',
    export: 'Esporta',
    exportError: ({ err }) => `Error exporting map: ${err}`,
    exporting: 'Attendere prego, esportazione in corso…',
    exported: ({ url }) => (
      <>
        Esportazione mappa completata.{' '}
        <Alert.Link href={url} target="_blank">
          Aprire.
        </Alert.Link>
      </>
    ),
    area: 'Esporta area:',
    areas: {
      visible: 'Area visibile della mappa',
      pinned: 'Area contenente i poligoni selezionati (disegno)',
    },
    format: 'Formato:',
    layersTitle: 'Livelli opzionali:',
    layers: {
      contours: 'Curve di livello',
      shading: 'Rilievi ombreggiati',
      hikingTrails: 'Percorsi escursionistici',
      bicycleTrails: 'Percorsi ciclistici',
      skiTrails: 'Percorsi sciistici',
      horseTrails: 'Percorsi a cavallo',
      drawing: 'Disegno',
      plannedRoute: 'Trova percorso',
      track: 'Traccia GPX',
    },
    mapScale: 'Risoluzione mappa:',
    alert: () => (
      <>
        Note:
        <ul>
          <li>
            Sarà esportata la mappa <i>{outdoorMap}</i> .
          </li>
          <li>L'esportazione della mappa potrebbe durare diversi secondi.</li>
          <li>
            Prima di condividere la mappa esportata, aggiungi la seguente
            attribuzione:
            <br />
            <em>
              map ©{' '}
              <Alert.Link
                href="https://www.freemap.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freemap Slovakia
              </Alert.Link>
              , data{' '}
              <Alert.Link
                href="https://osm.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
              >
                © OpenStreetMap contributors
              </Alert.Link>
              {', SRTM, '}
              <Alert.Link
                href="https://www.geoportal.sk/sk/udaje/lls-dmr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LLS: ÚGKK SR
              </Alert.Link>
            </em>
          </li>
        </ul>{' '}
      </>
    ),
  },

  maps: {
    legacyMapWarning:
      'La mappa visualizzata è legacy. Passare alla moderna mappa esterna?', // TODO by google translate
    noMapFound: 'Nessuna mappa trovata',
    save: 'Salva',
    delete: 'Elimina',
    disconnect: 'Disconnetti',
    deleteConfirm: (name) => `Sicuro di cancellare la mappa ${name}?`,
    fetchError: ({ err }) => `Errore caricando la mappa: ${err}`,
    fetchListError: ({ err }) => `Errore caricando le mappe: ${err}`,
    deleteError: ({ err }) => `Errore eliminando la mappa: ${err}`,
    renameError: ({ err }) => `Errore rinominando la mappa: ${err}`,
    createError: ({ err }) => `Errore salvando la mappa: ${err}`,
    saveError: ({ err }) => `Errore salvando la mappa: ${err}`,
    loadToEmpty: 'Carica su mappa vuota',
    loadInclMapAndPosition:
      'Carica inclusa la mappa di sfondo salvata e la sua posizione',
    savedMaps: 'Mappe salvate',
    newMap: 'Nuova mappa',
    SomeMap: ({ name }) => (
      <>
        Mappa <i>{name}</i>
      </>
    ),
    writers: 'Editori',
    conflictError: 'La mappa è stata modificata nel frattempo.',
  },

  mapCtxMenu: {
    centerMap: 'Centra la mappa qui',
    measurePosition: 'Trova coordinate e altitudine',
    addPoint: 'Aggiungi un punto qui',
    startLine: 'Inizia qui a disegnare una linea o misurazione',
    queryFeatures: 'Interroga le funzioni vicine',
    startRoute: 'Pianifica una rotta da qui',
    finishRoute: 'Pianifica una rotta fino qui',
    showPhotos: 'Mostra le foto vicine',
  },

  legend: {
    body: (
      <>
        Legenda mappa per <i>{outdoorMap}</i>:
      </>
    ),
  },

  contacts: {
    ngo: 'Associazione di volontari',
    registered: 'Registrata a MV/VVS/1-900/90-34343 on 2009-10-02',
    bankAccount: 'Conto bancario',
    generalContact: 'Contatti generali',
    board: 'Consiglio direttivo',
    boardMemebers: 'Membri del consiglio',
    president: 'Presidente',
    vicepresident: 'Vice Presidente',
    secretary: 'Segretario',
  },

  removeAds: {
    title: 'Rimuovi la pubblicità',
    info: (
      <>
        <p>
          <strong>Sostieni i volontari che creano questa mappa!</strong>
        </p>
        <p>
          Per <b>5 ore</b> del tuo lavoro di volontariato o <b>5 €</b>, noi{' '}
          <b>rimuoveremo gli annunci pubblicitari</b> da freemap per un anno.
        </p>
        <p>
          Puoi provare il tuo lavoro di volontariato creando rapporti di lavoro
          con l'applicazione <a href="https://rovas.app/">Rovas</a>. Se sei un
          volontario nel progetto OSM e stai utilizzando JOSM, ti raccomandiamo
          di abilitare il{' '}
          <a href="https://josm.openstreetmap.de/wiki/Help/Plugin/RovasConnector">
            plugin Rovas Connector
          </a>
          , che può creare rapporti di lavoro per te. Dopo che un rapporto è
          stato verificato da due utenti, riceverai la valuta comunitaria{' '}
          <i>Chron</i>, che potrai usare per rimuovere gli annunci da
          www.freemap.sk.
        </p>
      </>
    ),
    continue: 'Continua',
    success: 'Congratulazioni, sei diventato un membro premium !',
  },

  offline: {
    offlineMode: 'Modalità Offline',
    cachingActive: 'Cache attiva',
    clearCache: 'Pulisci la cache',
    dataSource: 'Origine dati',
    networkOnly: 'Solo rete',
    networkFirst: 'Prima la rete',
    cacheFirst: 'Prima la cache',
    cacheOnly: 'Solo cache',
  },
};

function numberize(n: number, words: [string, string]) {
  return n < 1 ? words[0] : n < 2 ? words[1] : words[0];
}

export default it;
