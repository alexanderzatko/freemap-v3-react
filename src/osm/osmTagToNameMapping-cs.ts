import { Node } from './types';

export const osmTagToNameMapping: Node = {
  highway: {
    '*': 'Cesta {}',
    track: {
      '*': 'Lesní / polní cesta',
      tracktype: {
        grade1: 'Zpevněná lesní / polní cesta',
        grade2: 'Převážně zpevněná lesní / polní cesta',
        grade3: 'Méňe pevná lesní / polní cesta',
        grade4: 'Převážně měkká lesní / polní cesta',
        grade5: 'Měkká lesní / polní cesta',
      },
    },
    residential: 'Ulice',
    living_street: 'Rezidenční zóna',
    path: 'Pěšina',
    primary: 'Cesta první třídy',
    secondary: 'Cesta druhé třídy',
    tertiary: 'Cesta třetí třídy',
    service: {
      '*': 'Servisní, příjezdová cesta',
      service: {
        '*': 'Servisní cesta {}',
        driveway: 'Příjezdová cesta',
        parking_aisle: 'Cesta parkoviště',
        alley: 'Příjezdová cesta',
        emergency_access: 'Požární cesta',
        'drive-through': 'Cesta pro nákup z auta',
        bus: 'Cesta vyhražená pro autobusy',
      },
    },
    footway: 'Chodník',
    steps: 'Schody',
    trunk: 'Silnice pro motorová vozidla',
    motorway: 'Dálnice',
    unclassified: 'Neklasifikovaná cesta',
    primary_link: 'Napojení na cestu první třídy',
    secondaty_link: 'Napojení na cestu druhé třídy',
    tertiary_link: 'Napojení na cestu třetí třídy',
    motorway_link: 'Napojení na dálnici',
    trunk_link: 'Napojení na cestu pro motorová vozidla',
    construction: 'Cesta ve výstavbě',
    crossing: 'Přechod',
    cycleway: 'Cyklostezka',
  },
  boundary: {
    '*': 'Oblast',
    administrative: {
      '*': 'Administrativní oblast',
      admin_level: {
        '10': 'Katastrální území',
        '9': 'Obec',
        '8': 'Okres',
        '7': 'Oblast',
        '6': 'Město',
        '5': 'Provincie',
        '4': 'Kraj',
        '3': 'Region',
        '2': 'Stát',
      },
    },
    protected_area: 'Chráněná oblast',
  },
  type: {
    route: {
      '*': 'Trasa',
      route: {
        '*': 'Trasa {}',
        hiking: 'Turistická stezka',
        foot: 'Stezka pro pěší',
        bicycle: 'Cyklostezka',
        ski: 'Lyžařská stezka',
        piste: 'Sjezdovka',
        horse: 'Jezdecká trasa',
        railway: 'Železnice',
        tram: 'Tramvajová dráha',
        bus: 'Trasa autobusu',
        mtb: 'Stezka pro horská kola',
      },
    },
  },
  building: {
    '*': 'Budova {}',
    yes: 'Budova',
    apartments: 'Apartmány',
    bungalow: 'Bungalov',
    cabin: 'Bouda, chatka',
    detached: 'Samostatně stojící rodinný dům',
    dormitory: 'Internát',
    farm: 'Statek',
    hotel: 'Hotel',
    house: 'Rodinný dům',
    houseboat: 'Hausbót',
    residential: 'Obytný dům',
    static_caravan: 'Obytný přívěs, karavan',
    terrace: 'Radový dům',
    semidetached_house: 'Dvojdům',
    commercial: 'Budova určená pro komerční účely',
    industrial: 'Budova určená pro průmyslové účely',
    office: 'Kancelářská budova',
    church: 'Kostel',
    cathedral: 'Katedrála',
    chapel: 'Kaplička',
    mosque: 'Mešita',
    synagogue: 'Synagoga',
    temple: 'Chrám',
    shrine: 'Svatyně',
    garage: 'Garáž',
    train_station: 'Vlaková stanice',
  },
  amenity: {
    '*': '{}',
    hunting_stand: 'Myslivecký posed',
    toilets: 'WC',
    shelter: {
      '*': 'Přístřešek',
      shelter_type: {
        '*': 'Přístřešek {}',
        basic_hut: 'Jednoduchá chata, bivak',
        changing_rooms: 'Převlékárna',
        field_shelter: 'Polní přístřešek',
        lean_to: 'Přístřešek s otevřenou stěnou',
        picnic_shelter: 'Piknikový přístřešek',
        public_transport: 'Přístřešek veřejné dopravy',
        rock_shelter: 'Skalní úkryt',
        sun_shelter: 'Přístřešek proti slunci',
        weather_shelter: 'Přístřešek proti nepříznivému počasí',
      },
    },
    bench: 'Lavička',
    atm: 'Bankomat',
    bank: 'Banka',
    fuel: 'Čerpací stanice',
    charging_station: 'Nabíjecí stanice',
    hospital: 'Nemocnice',
    clinic: 'Poliklinika',
    doctors: 'Lékařská ordinace',
    dentist: 'Zubní ordinace',
    place_of_worship: 'Chrám/kostel',
    restaurant: 'Restaurace',
    pub: 'Hospoda',
    fast_food: 'Rychlé občerstvení',
    cafe: 'Kavárna',
    bar: 'Bar',
    school: 'Škola',
    kindergarten: 'Školka',
    waste_basket: 'Odpadkový kôš',
    bicycle_parking: 'Parkoviště pro kola',
    pharmacy: 'Lékárna',
    post_box: 'Poštovní schránka',
    recycling: 'Recyklování',
    drinking_water: 'Pitná voda',
    post_office: 'Pošta',
    townhall: 'Radnice, obecní úřad',
    fountain: 'Fontána',
    police: 'Policie',
    fire_station: 'Hasičská stanice',
    waste_disposal: 'Odpadkový kôš',
    library: 'Knihovna',
    bus_station: 'Autobusové nádraží',
  },
  waterway: {
    '*': 'Vodní tok {}',
    canal: 'Kanál',
    river: 'Řeka',
    stream: 'Potok',
    ditch: 'Příkop',
    drain: 'Dranáž',
    waterfall: 'Vodopád',
    riverbank: 'Břeh',
    dam: 'Přehrada',
  },
  landuse: {
    '*': '{}',
    forest: 'Les',
    residential: 'Rezidenční zóna',
    commercial: 'Komerční zóna',
    industrial: 'Industriální zóna',
    allotments: 'Zahrádkářská oblast',
    farmland: 'Pole',
    farmyard: 'Družstvo',
    grass: 'Tráva',
    meadow: 'Louka',
    orchard: 'Sad',
    vineyard: 'Vinice',
    cemetery: 'Hřbitov',
    reservoir: 'Přehrada/vodní nádrž',
    quarry: 'Lom',
    millitary: 'Vojenský újezd',
  },
  leisure: {
    '*': '{}',
    firepit: 'Ohniště',
    pitch: 'Hřiště',
    swimming_pool: 'Bazén',
    park: 'Park',
    garden: 'Zahrada',
    playground: 'Hřiště',
    track: 'Cesta',
    picnic_table: 'Piknikový stůl',
    stadium: 'Stadion',
  },
  natural: {
    '*': '{}',
    wood: 'Les',
    water: 'Vodní plocha',
    spring: 'Pramen',
    cave_entrance: 'Jeskyně',
    basin: 'Kotlina',
    mountain_range: 'Pohoří',
    scrub: 'Keře',
    heath: 'Step',
    valley: 'Údolí',
    ridge: 'Hřeben',
    saddle: 'Sedlo',
    peak: 'Vrchol',
    tree: 'Strom',
    plateau: 'Planina',
    arch: 'Skalní okno',
    scree: 'Suťoviště',
  },
  man_made: {
    '*': '{}',
    pipeline: 'Potrubí',
    beehive: 'Včelí úl',
    chimney: 'Komín',
    clearcut: 'Roubaniště',
    mineshaft: 'Důlní šachta',
    adit: 'Důlní štola',
    embankment: 'Násyp',
    observatory: 'Observatorium',
    silo: 'Silo',
    wastewater_plant: 'Čistička odpadních vod',
    water_tower: 'Vodárenská věž',
    tower: {
      '*': 'Věž',
      'tower:type': {
        observation: 'Rozhledna',
        communication: 'Telekomunikační věž',
        bell_tower: 'Zvonice',
        cooling: 'Chladírenská věž',
      },
    },
  },
  power: {
    '*': '{}',
    pole: 'Elektrický sloup',
    tower: 'Stožár vysokého napětí',
    line: 'Elektrické vedení',
    minor_line: 'Vedlejší elektrické vedení',
  },
  railway: 'Železnice',
  aerialway: 'Lanovka, vlek',
  shop: {
    '*': 'Obchod {}',
    convenience: 'Potraviny',
    supermarket: 'Supermarket',
    mall: 'Nákupní středisko',
    department_store: 'Obchodní dům',
    bakery: 'Pekařství',
    butcher: 'Masna',
    ice_cream: 'Zmrzlina',
    kiosk: 'Stánek',
    greengrocer: 'Ovoce a zelenina',
    clothes: 'Obchod s oblečením',
    shoes: 'Obuv',
    fabric: 'Metrový textil',
    chemist: 'Drogerie',
    optician: 'Optika',
    jewerly: 'Klenotnictví',
    florist: 'Květinářství',
    garden_center: 'Záhradní centrum',
    hardware: 'Železářství',
    paint: 'Farby, laky',
    trade: 'Stavebniny',
    second_hand: 'Second hand',
    hairdresser: 'Kadernictví, holičství',
    tattoo: 'Tetovací studio',
    antiques: 'Starožitnosti',
    carpet: 'Prodej koberců',
    furniture: 'Prodej nábytku',
    computer: 'Počítačový obchod',
    electronics: 'Obchod s elektronikou',
    mobile_phone: 'Prodej mobilních telefonů',
    radiotechnics: 'Prodej elektronických součástek',
    bicycle: 'Prodej kol',
    car: 'Prodej aut',
    car_repair: 'Autoservis',
    car_parts: 'Prodej autodílů',
    outdoor: 'Prodej outdoorového vybavení',
    sports: 'Sportovní potřeby',
    books: 'Knihkupectví',
    stationery: 'Papírnictví',
    copyshop: 'Copy centrum',
    funeral_directors: 'Pohřební služby',
    pet: 'Potřeby pro zvířata',
    toys: 'Hračkařství',
  },
  historic: {
    '*': 'Historický objekt',
    wayside_cross: 'Křížek u cesty',
    wayside_shrine: 'Boží muka',
    archaeological_site: 'Archeologické naleziště',
    monument: 'Pomník, monument',
    monastery: 'Klášter',
    tomb: 'Hrobka',
    ruins: {
      '*': 'Ruiny',
      ruins: {
        castle: 'Zřícenina hradu',
      },
    },
  },
  barrier: {
    '*': 'Bariéra {}',
    fence: 'Plot',
    wall: 'Zeď',
    hedge: 'Živý plot',
    block: 'Blok',
    entrance: 'Vstup',
    gate: 'Brána',
    lift_gate: 'Závora',
    swing_gate: 'Otoční závora',
    bollard: 'Sloupek',
    chain: 'Řetěz',
  },
  sport: {
    '*': 'Sport {}',
    soccer: 'Fotbal',
    tennis: 'Tenis',
  },
  tourism: {
    '*': '{}',
    viewpoint: 'Výhled',
    information: {
      '*': 'Informace',
      information: {
        '*': 'Informace {}',
        office: 'Informační kancelář',
        board: 'Informační tabule',
        guidepost: 'Rozcestník, směrovník',
        map: 'Mapa',
      },
    },
    hotel: 'Hotel',
    guest_house: 'Penzion',
    apartment: 'Apartmán',
    hostel: 'Hostel',
    motel: 'Motel',
    chalet: 'Chata',
    camp_site: 'Kemp',
    caravan_site: 'Autokemp pro obytné přívěsy',
    attraction: 'Atrakce',
    artwork: {
      '*': 'Umění',
      artwork_type: {
        bust: 'Busta',
        sculpture: 'Plastika',
        statue: 'Socha',
        mural: 'Nástěnná malba',
        painting: 'Obraz',
        architecture: 'Významná budova, stavba',
      },
    },
    picnic_site: 'Místo na piknik',
    museum: 'Muzeum',
    zoo: 'ZOO',
  },
  place: {
    '*': 'Místo {}',
    locality: 'Lokalita',
    village: 'Vesnice',
    city: 'Velkoměsto',
    town: 'Město',
    country: 'Krajina',
    state: 'Stát',
    suburb: 'Předměstí',
    hamlet: 'Osada',
    isolated_dwelling: 'Samota',
  },
};

export const colorNames: Record<string, string> = {
  red: 'Červená',
  blue: 'Modrá',
  green: 'Zelená',
  yellow: 'Žlutá',
  orange: 'Oranžová',
  purple: 'Purpurová',
  violet: 'Fialová',
  white: 'Bílá',
  black: 'Černá',
  gray: 'Šedá',
  brown: 'Hnědá',
};
