import { RoutingMode, Weighting } from 'fm3/actions/routePlannerActions';
import { ElevationInfoBaseProps } from 'fm3/components/ElevationInfo';
import { AttributionDef, NoncustomLayerLetters } from 'fm3/mapDefinitions';
import type { TransportTypeMsgKey } from 'fm3/transportTypeDefs';
import { ReactNode } from 'react';
import { NonUndefined } from 'utility-types';

type Err = { err: string };

export type Messages = {
  general: {
    iso: string;
    elevationProfile: string;
    save: string;
    cancel: string;
    modify: string;
    delete: string;
    remove: string;
    close: string;
    apply: string;
    exitFullscreen: string;
    fullscreen: string;
    yes: string;
    no: string;
    masl: string;
    copyCode: string;
    loading: string;
    ok: string;
    preventShowingAgain: string;
    closeWithoutSaving: string;
    back: string;
    internalError: ({ ticketId }: { ticketId?: string }) => string;
    processorError: ({ err }: Err) => string;
    seconds: string;
    minutes: string;
    meters: string;
    createdAt: string;
    modifiedAt: string;
    actions: string;
    add: string;
    clear: string;
    convertToDrawing: string;
    simplifyPrompt: string;
    copyUrl: string;
    copyPageUrl: string;
    savingError: ({ err }: Err) => string;
    loadError: ({ err }: Err) => string;
    deleteError: ({ err }: Err) => string;
    operationError: ({ err }: Err) => string;
    saved: string;
    deleted: string;
    visual: string;
    copyOk: string;
    noCookies: string;
    name: string;
    load: string;
    unnamed: string;
    enablePopup: string;
    componentLoadingError: string;
    offline: string;
    connectionError: string;
    experimentalFunction: string;
    attribution: () => JSX.Element;
    unauthenticatedError: string;
  };
  selections: {
    objects: string;
    drawPoints: string;
    drawLines: string;
    drawPolygons: string;
    tracking: string;
    linePoint: string;
    polygonPoint: string;
  };
  tools: {
    none: string;
    tools: string;
    routePlanner: string;
    objects: string;
    photos: string;
    measurement: string;
    drawPoints: string;
    drawLines: string;
    drawPolygons: string;
    trackViewer: string;
    changesets: string;
    mapDetails: string;
    tracking: string;
    maps: string;
  };
  routePlanner: {
    ghParams: {
      tripParameters: string;
      seed: string;
      distance: string;
      isochroneParameters: string;
      buckets: string;
      timeLimit: string;
      distanceLimit: string;
    };
    milestones: string;
    start: string;
    finish: string;
    swap: string;
    point: {
      pick: string;
      current: string;
      home: string;
    };
    transportType: Record<TransportTypeMsgKey, string>;
    development: string;
    mode: Record<RoutingMode | 'routndtrip-gh', string>;
    weighting: Record<Weighting, string>;
    alternative: string;
    distance: ({
      value,
      diff,
    }: {
      value: string;
      diff?: string;
    }) => JSX.Element;
    duration: ({
      h,
      m,
      diff,
    }: {
      h: number;
      m: number;
      diff?: {
        h: number;
        m: number;
      };
    }) => JSX.Element;
    summary: ({
      distance,
      h,
      m,
    }: {
      distance: ReactNode;
      h: ReactNode;
      m: ReactNode;
    }) => JSX.Element;
    noHomeAlert: {
      msg: string;
      setHome: string;
    };
    showMidpointHint: string;
    gpsError: string;
    routeNotFound: string;
    fetchingError: ({ err }: Err) => string;
    maneuverWithName: ({
      type,
      modifier,
      name,
    }: {
      type: string;
      modifier: string;
      name: string;
    }) => string;
    maneuverWithoutName: ({
      type,
      modifier,
      name,
    }: {
      type: string;
      modifier: string;
      name: string;
    }) => string;
    maneuver: {
      types: {
        turn: string;
        'new name': string;
        depart: string;
        arrive: string;
        merge: string;
        'on ramp': string;
        'off ramp': string;
        fork: string;
        'end of road': string;
        continue: string;
        roundabout: string;
        rotary: string;
        'roundabout turn': string;
        'exit rotary': string;
        'exit roundabout': string;
        notification: string;
        'use lane': string;
      };
      modifiers: {
        uturn: string;
        'sharp right': string;
        'slight right': string;
        right: string;
        'sharp left': string;
        'slight left': string;
        left: string;
        straight: string;
      };
    };
    imhd: {
      total: {
        short: ({
          arrival,
          price,
          numbers,
        }: {
          arrival: string;
          price?: string;
          numbers?: number[];
        }) => JSX.Element;
        full: ({
          arrival,
          price,
          numbers,
          total,
          home,
          foot,
          bus,
          wait,
        }: {
          arrival: string;
          price?: string;
          numbers?: number[];
          total: number;
          home: number;
          foot: number;
          walk: number;
          bus: number;
          wait: number;
        }) => JSX.Element;
      };
      step: {
        foot: ({
          departure,
          duration,
          destination,
        }: {
          departure: string | undefined;
          duration?: number;
          destination: string;
        }) => JSX.Element;
        bus: ({
          departure,
          type,
          number,
          destination,
        }: {
          departure: string | undefined;
          type: string;
          number: number | undefined;
          destination: string;
        }) => JSX.Element;
      };
      type: {
        bus: string;
        tram: string;
        trolleybus: string;
        foot: string;
      };
    };
    bikesharing: {
      step: {
        foot: ({
          duration,
          destination,
        }: {
          duration?: number;
          destination: string;
        }) => JSX.Element;
        bicycle: ({
          duration,
          destination,
        }: {
          duration?: number;
          destination: string;
        }) => JSX.Element;
      };
    };
    imhdAttribution: string;
  };
  mainMenu: {
    title: string;
    logOut: string;
    logIn: string;
    account: string;
    gpxExport: string;
    mapExports: string;
    embedMap: string;
    supportUs: string;
    help: string;
    back: string;
    mapLegend: string;
    contacts: string;
    tips: string;
    facebook: string;
    twitter: string;
    youtube: string;
    github: string;
    automaticLanguage: string;
    pdfExport: string;
    osmWiki: string;
    wikiLink: string;
  };
  main: {
    title: string;
    description: string;
    clearMap: string;
    close: string;
    closeTool: string;
    locateMe: string;
    locationError: string;
    zoomIn: string;
    zoomOut: string;
    devInfo: () => JSX.Element;
    copyright: string;
    infoBars: Record<string, () => JSX.Element>;
    cookieConsent: () => JSX.Element;
  };
  gallery: {
    recentTags: string;
    filter: string;
    showPhotosFrom: string;
    showLayer: string;
    upload: string;
    f: {
      firstUploaded: string;
      lastUploaded: string;
      firstCaptured: string;
      lastCaptured: string;
      leastRated: string;
      mostRated: string;
      lastComment: string;
    };
    colorizeBy: string;
    c: {
      disable: string;
      mine: string;
      author: string;
      rating: string;
      takenAt: string;
      createdAt: string;
      season: string;
    };
    viewer: {
      title: string;
      comments: string;
      newComment: string;
      addComment: string;
      yourRating: string;
      showOnTheMap: string;
      openInNewWindow: string;
      uploaded: ({
        username,
        createdAt,
      }: {
        username: ReactNode;
        createdAt: ReactNode;
      }) => JSX.Element;
      captured: (takenAt: JSX.Element) => JSX.Element;
      deletePrompt: string;
      modify: string;
    };
    editForm: {
      name: string;
      description: string;
      takenAt: {
        datetime: string;
        date: string;
        time: string;
      };
      location: string;
      tags: string;
      setLocation: string;
    };
    uploadModal: {
      title: string;
      uploading: (n: number) => string;
      upload: string;
      rules: string;
      success: string;
      showPreview: string;
    };
    locationPicking: {
      title: string;
    };
    deletingError: ({ err }: Err) => string;
    tagsFetchingError: ({ err }: Err) => string;
    pictureFetchingError: ({ err }: Err) => string;
    picturesFetchingError: ({ err }: Err) => string;
    savingError: ({ err }: Err) => string;
    commentAddingError: ({ err }: Err) => string;
    ratingError: ({ err }: Err) => string;
    missingPositionError: string;
    invalidPositionError: string;
    invalidTakenAt: string;
    filterModal: {
      title: string;
      tag: string;
      createdAt: string;
      takenAt: string;
      author: string;
      rating: string;
      noTags: string;
      pano: string;
    };
    noPicturesFound: string;
    linkToWww: string;
    linkToImage: string;
  };
  measurement: {
    distance: string;
    elevation: string;
    area: string;
    elevationFetchError: ({ err }: Err) => string;
    elevationInfo: (params: ElevationInfoBaseProps) => JSX.Element;
    areaInfo: ({ area }: { area: number }) => JSX.Element;
    distanceInfo: ({ length }: { length: number }) => JSX.Element;
  };
  trackViewer: {
    upload: string;
    moreInfo: string;
    share: string;
    colorizingMode: {
      none: string;
      elevation: string;
      steepness: string;
    };
    details: {
      startTime: string;
      finishTime: string;
      duration: string;
      distance: string;
      avgSpeed: string;
      minEle: string;
      maxEle: string;
      uphill: string;
      downhill: string;
      durationValue: ({ h, m }: { h: number; m: number }) => string;
    };
    uploadModal: {
      title: string;
      drop: string;
    };
    shareToast: string;
    fetchingError: ({ err }: Err) => string;
    savingError: ({ err }: Err) => string;
    loadingError: string;
    onlyOne: string;
    wrongFormat: string;
    info: () => JSX.Element;
    tooBigError: string;
  };
  drawing: {
    modify: string;
    edit: {
      title: string;
      color: string;
      label: string;
      width: string;
      hint: string;
      type: string;
    };
    split: string;
    join: string;
    continue: string;
    stopDrawing: string;
    selectPointToJoin: string;
    defProps: {
      menuItem: string;
      title: string;
      applyToAll: string;
    };
  };
  settings: {
    map: {
      overlayPaneOpacity: string;
      homeLocation: {
        label: string;
        select: string;
        undefined: string;
      };
    };
    account: {
      name: string;
      email: string;
      sendGalleryEmails: string;
      delete: string;
      deleteWarning: string;
    };
    general: {
      tips: string;
    };
    layer: string;
    overlayOpacity: string;
    showInMenu: string;
    showInToolbar: string;
    saveSuccess: string;
    savingError: ({ err }: Err) => string;
    customLayersDef: string;
    customLayersDefError: string;
  };
  changesets: {
    allAuthors: string;
    tooBig: string;
    olderThan: ({ days }: { days: number }) => string;
    olderThanFull: ({ days }: { days: number }) => string;
    notFound: string;
    fetchError: ({ err }: Err) => string;
    detail: ({ changeset }: { changeset: any }) => JSX.Element;
    details: {
      author: string;
      description: string;
      noDescription: string;
      closedAt: string;
      moreDetailsOn: ({
        osmLink,
        achaviLink,
      }: {
        osmLink: JSX.Element;
        achaviLink: JSX.Element;
      }) => JSX.Element;
    };
  };
  mapDetails: {
    notFound: string;
    fetchingError: ({ err }: Err) => string;
    detail: ({
      id,
      type,
      tags,
    }: {
      id: number;
      type: 'node' | 'way' | 'relation';
      tags: Record<string, string>;
    }) => JSX.Element;
  };
  objects: {
    type: string;
    lowZoomAlert: {
      message: ({ minZoom }: { minZoom: number }) => string;
      zoom: string;
    };
    tooManyPoints: ({ limit }: { limit: number }) => string;
    fetchingError: ({ err }: Err) => string;
    // categories: Record<number, string>;
    // subcategories: Record<number, string>;
  };
  external: {
    openInExternal: string;
    osm: string;
    oma: string;
    googleMaps: string;
    hiking_sk: string;
    zbgis: string;
    mapy_cz: string;
    josm: string;
    id: string;
    window: string;
    url: string;
    image: string;
  };
  search: {
    inProgress: string;
    noResults: string;
    prompt: string;
    routeFrom: string;
    routeTo: string;
    fetchingError: ({ err }: Err) => string;
    buttonTitle: string;
    placeholder: string;
  };
  embed: {
    code: string;
    example: string;
    dimensions: string;
    height: string;
    width: string;
    enableFeatures: string;
    enableSearch: string;
    enableMapSwitch: string;
    enableLocateMe: string;
  };
  tips: {
    errorLoading: string;
  };
  gpxExport: {
    export: string;
    format: string;
    exportToDrive: string;
    exportToDropbox: string;
    exportError: ({ err }: Err) => string;
    what: {
      plannedRoute: string;
      plannedRouteWithStops: string;
      objects: string;
      pictures: string;
      drawingLines: string;
      drawingAreas: string;
      drawingPoints: string;
      tracking: string;
      gpx: string;
    };
    disabledAlert: string;
    licenseAlert: string;
    exportedToDropbox: string;
    exportedToGdrive: string;
  };
  logIn: {
    with: {
      facebook: string;
      google: string;
      osm: string;
    };
    success: string;
    logInError: ({ err }: Err) => string;
    logInError2: string;
    logOutError: ({ err }: Err) => string;
    verifyError: ({ err }: Err) => string;
  };
  logOut: {
    success: string;
  };
  mapLayers: {
    showAll: string;
    settings: string;
    layers: string;
    switch: string;
    photoFilterWarning: string;
    interactiveLayerWarning: string;
    minZoomWarning: (minZoom: number) => string;
    letters: Record<NoncustomLayerLetters, string>;
    customBase: string;
    customOverlay: string;
    type: {
      map: string;
      data: string;
      photos: string;
    };
    attr: Record<NonUndefined<AttributionDef['nameKey']>, ReactNode>;
  };
  elevationChart: {
    distance: string;
    ele: string;
    fetchError: ({ err }: Err) => string;
  };
  errorCatcher: {
    html: (ticketId: string) => string;
  };
  osm: {
    fetchingError: ({ err }: Err) => string;
  };
  tracking: {
    trackedDevices: {
      button: string;
      modalTitle: string;
      desc: string;
      modifyTitle: (name: ReactNode) => JSX.Element;
      createTitle: (name: ReactNode) => JSX.Element;
      storageWarning: string;
    };
    accessToken: {
      token: string;
      timeFrom: string;
      timeTo: string;
      listingLabel: string;
      note: string;
      delete: string;
    };
    accessTokens: {
      modalTitle: (deviceName: string) => JSX.Element;
      desc: (deviceName: string) => JSX.Element;
      createTitle: (deviceName: string) => JSX.Element;
      modifyTitle: ({
        token,
        deviceName,
      }: {
        token: string;
        deviceName: string;
      }) => JSX.Element;
    };
    trackedDevice: {
      token: string;
      label: string;
      fromTime: string;
      maxAge: string;
      maxCount: string;
      splitDistance: string;
      splitDuration: string;
      color: string;
      width: string;
    };
    devices: {
      button: string;
      modalTitle: string;
      createTitle: string;
      watchTokens: string;
      watchPrivately: string;
      watch: string;
      delete: string;
      modifyTitle: ({ name }: { name: string }) => JSX.Element;
      desc: () => JSX.Element;
    };
    device: {
      token: string;
      name: string;
      maxAge: string;
      maxCount: string;
      regenerateToken: string;
      generatedToken: string;
    };
    visual: {
      line: string;
      points: string;
      'line+points': string;
    };
    subscribeNotFound: ({ id }: { id: string | number }) => JSX.Element;
    subscribeError: ({ id }: { id: string | number }) => JSX.Element;
  };
  pdfExport: {
    export: string;
    exportError: ({ err }: Err) => string;
    exporting: string;
    exported: ({ url }: { url: string }) => JSX.Element;
    area: string;
    areas: {
      visible: string;
      pinned: string;
    };
    format: string;
    layersTitle: string;
    layers: {
      contours: string;
      shading: string;
      hikingTrails: string;
      bicycleTrails: string;
      skiTrails: string;
      horseTrails: string;
      drawing: string;
      plannedRoute: string;
      track: string;
    };
    mapScale: string;
    alert: () => JSX.Element;
    advancedSettings: string;
    styles: string;
  };
  maps: {
    legacyMapWarning: string;
    noMapFound: string;
    save: string;
    delete: string;
    disconnect: string;
    deleteConfirm: (name: string) => string;
    fetchError: ({ err }: Err) => string;
    fetchListError: ({ err }: Err) => string;
    deleteError: ({ err }: Err) => string;
    renameError: ({ err }: Err) => string;
    createError: ({ err }: Err) => string;
    saveError: ({ err }: Err) => string;
    loadToEmpty: string;
    loadInclMapAndPosition: string;
    savedMaps: string;
    newMap: string;
    SomeMap: (props: { name: string }) => JSX.Element;
    writers: string;
    conflictError: string;
  };
  legend: {
    body: JSX.Element;
  };
  contacts: {
    ngo: string;
    registered: string;
    bankAccount: string;
    generalContact: string;
    board: string;
    boardMemebers: string;
    president: string;
    vicepresident: string;
    secretary: string;
  };
  mapCtxMenu: {
    centerMap: string;
    measurePosition: string;
    addPoint: string;
    startLine: string;
    queryFeatures: string;
    startRoute: string;
    finishRoute: string;
    showPhotos: string;
  };
  removeAds: {
    title: string;
    info: ReactNode;
    continue: string;
    success: string;
  };
  offline: {
    offlineMode: string;
    cachingActive: string;
    clearCache: string;
    dataSource: string;
    networkOnly: string;
    networkFirst: string;
    cacheFirst: string;
    cacheOnly: string;
  };
};
