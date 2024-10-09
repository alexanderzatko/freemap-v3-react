import { OsmTagToNameMapping } from './osmTagToNameMappingType';

export const osmTagToNameMapping: OsmTagToNameMapping = {
  aeroway: {
    aerodrome: 'Repülőtér',
  },
  aerialway: 'Felvonó, drótkötélpálya',
  amenity: {
    '*': '{}',
    animal_breeding: 'Állattenyésztés',
    animal_shelter: 'Állatmenhely',
    arts_centre: 'Művészeti központ',
    atm: 'Bankautomata',
    bank: 'Bank',
    bar: 'Bár',
    bbq: 'Grill',
    bench: 'Pad',
    bicycle_parking: 'Kerékpár parkoló',
    bicycle_rental: 'Kerékpár kölcsönző',
    bicycle_repair_station: 'Bicycle repair station',
    biergarten: 'Sörkert',
    brothel: 'Brothel',
    bureau_de_change: 'Currency exchange',
    bus_station: 'Buszpályaudvar',
    cafe: 'Cafe',
    car_rental: 'Car rental',
    car_wash: 'Autómosó',
    casino: 'Casino',
    charging_station: 'Töltőállomás',
    childcare: 'Childcare',
    cinema: 'Mozi',
    clinic: 'Klinika',
    clock: 'Clock',
    college: 'Főiskola',
    community_centre: 'Közösségi központ',
    compressed_air: 'Compressed air',
    courthouse: 'Bíróság',
    dentist: 'Fogorvos',
    device_charging_station: 'Device charging station',
    doctors: "Doctor's office",
    dressing_room: 'Dressing room',
    drinking_water: 'Ivóvíz',
    driving_school: 'Driving school',
    embassy: 'Nagykövetség',
    events_venue: 'Events venue',
    fast_food: 'Gyorsétterem',
    feeding_place: 'Feeding place',
    ferry_terminal: 'Ferry terminal',
    fire_station: 'Tűzoltóság ',
    food_court: 'Food court',
    fountain: 'Szökőkút',
    fuel: 'Gas station',
    funeral_hall: 'Funeral hall',
    gambling: 'Gambling',
    game_feeding: 'Game feeding',
    grave_yard: 'Grave yard',
    grit_bin: 'Grit bin',
    hospital: 'Kórház',
    hunting_stand: 'Hunting stand',
    ice_cream: 'Ice cream',
    kindergarten: 'Kindergarten',
    language_school: 'Language school',
    library: 'Könyvtár',
    marketplace: 'Piac',
    monastery: 'Monastery',
    money_transfer: 'Money transfer',
    motorcycle_parking: 'Motorcycle parking',
    motorcycle_rental: 'Motorcycle rental',
    nightclub: 'Éjszakai klub',
    parcel_locker: 'Parcel locker',
    parking: 'Parkoló',
    parking_entrance: 'Parkoló entrance',
    parking_space: 'Parkoló space',
    pharmacy: 'Gyógyszertár',
    place_of_mourning: 'Place of mourning',
    place_of_worship: 'Vallási hely',
    planetarium: 'Planetarium',
    police: 'Rendőrség',
    post_box: 'Post box',
    post_office: 'Postahivatal',
    prison: 'Börtön',
    pub: 'Kocsma',
    public_bookcase: 'Kocsmalic bookcase',
    ranger_station: 'Ranger station',
    recycling: 'Újrahasznosítás',
    restaurant: 'Étterem',
    school: 'Iskola',
    shelter: {
      '*': 'Menedékhely',
      shelter_type: {
        '*': 'Menedékhely {}',
        basic_hut: 'Basic hut',
        changing_rooms: 'Changing rooms',
        field_shelter: 'Field shelter',
        lean_to: 'Lean to',
        picnic_shelter: {
          '*': 'Picnic shelter',
          fireplace: { yes: 'Picnic shelter with fireplace' },
        },
        public_transport: 'Kocsmalic transport shelter',
        rock_shelter: 'Rock shelter',
        sun_shelter: 'Sun shelter',
        weather_shelter: 'Weather shelter',
      },
    },
    shower: 'Shower',
    ski_rental: 'Ski rental',
    smoking_area: 'Smoking area',
    social_centre: 'Social centre',
    social_facility: {
      '*': 'Social facility',
      social_facility: {
        // dairy_kitchen: 'Dairy kitchen',
        // outreach: 'Outreach',
        ambulatory_care: 'Ambulatory care',
        assisted_living: 'Assisted_living',
        clothing_bank: 'Clothing bank',
        day_care: 'Day care',
        food_bank: 'Food bank',
        group_home: 'Group home',
        hospice: 'Hospice',
        nursing_home: 'Nursing home',
        shelter: 'Menedékhely',
        soup_kitchen: 'Soup kitchen',
        workshop: 'Workshop',
      },
    },
    stripclub: 'Stripclub',
    studio: 'Studio',
    taxi: 'Taxi',
    telephone: 'Telephone',
    theatre: 'Színház',
    toilets: 'WC',
    townhall: 'Town hall',
    traffic_park: 'Traffic park',
    trolley_bay: 'Trolley bay',
    university: 'Egyetem',
    vacuum_cleaner: 'Vacuum cleaner',
    vehicle_inspection: 'Vehicle inspection',
    vending_machine: {
      '*': 'Vending machine',
      vending: {
        bicycle_tube: 'Bicycle tube vending machine',
        bread: 'Bread vending machine',
        bottle_return: 'Deposit bottle return machine',
        candles: 'Candle vending machine',
        chewing_gums: 'Chewing gum vending machine',
        cigarettes: 'Cigarette vending machine',
        coffee: 'Coffee vending machine',
        condoms: 'Condom vending machine',
        drinks: 'Drink vending machine',
        elongated_coin: 'Elongated coin machine',
        eggs: 'Egg vending machine',
        excrement_bags: 'Excrement bag vending machine',
        food: 'Food vending machine',
        fuel: 'Üzemanyag vending machine',
        gas: 'Gas vending machine',
        ice_cream: 'Ice cream vending machine',
        ice_cubes: 'Ice cube vending machine',
        milk: 'Milk vending machine',
        movies: 'Movie vending machine',
        newspapers: 'Newspaper vending machine',
        parking_tickets: 'Parkoló ticket machine',
        pizza: 'Pizza vending machine',
        public_transport_tickets: 'Kocsmalic transport ticket machine',
        stamps: 'Stamp vending machine',
        sweets: 'Sweets vending machine',
        water: 'Water vending machine',
      },
    },
    veterinary: 'Állatorvos',
    waste_basket: 'Trash bin',
    waste_disposal: 'Waste disposal',
    water_point: 'Water point',
    watering_place: 'Watering place',
  },
  barrier: {
    '*': 'Bárrier {}',
    block: 'Block',
    bollard: 'Bollard',
    border_control: 'Border control',
    cable_barrier: 'Cable barrier',
    chain: 'Chain',
    city_wall: 'City wall',
    ditch: 'Ditch (barrier)',
    entrance: 'Entrance',
    fence: 'Fence',
    gate: 'Gate',
    guard_rail: 'Guard rail',
    handrail: 'Handrail',
    hedge: 'Hedge',
    kerb: 'Kerb',
    lift_gate: 'Lift gate',
    rope: 'Rope',
    sliding_gate: 'Sliding gate',
    swing_gate: 'Swing gate',
    turnstile: 'Turnstile',
    wall: 'Wall',
  },
  boundary: {
    '*': 'Region',
    administrative: {
      '*': 'Administrative region',
      admin_level: {
        '2': 'Country',
        '3': 'Region',
        '4': 'District',
        '5': 'Province',
        '6': 'City',
        '7': 'Region',
        '8': 'District',
        '9': 'Village',
        '10': 'Cadastre region',
      },
    },
    national_park: 'National park',
    protected_area: 'Protected area',
  },
  building: {
    '*': 'Building {}',
    apartments: 'Apartments (block)',
    barn: 'Bárn',
    bungalow: 'Bungalow',
    bunker: 'Bunker',
    cabin: 'Cabin',
    cathedral: 'Cathedral',
    chapel: 'Chapel',
    church: 'Church',
    civic: 'Civic building',
    collapsed: 'Collapsed building',
    commercial: 'Commercial building',
    construction: 'Building construction',
    cowshed: 'Cowshed',
    detached: 'Free standing house',
    dormitory: 'Dormitory',
    entrance: 'Building entrance',
    farm_auxiliary: 'Auxiliary farm building',
    farm: 'Farm',
    garage: 'Garage',
    garages: 'Garages',
    government: 'Government building',
    grandstand: 'Grandstand',
    greenhouse: 'Greenhouse',
    hangar: 'Hangar',
    hayloft: 'Hayloft',
    hospital: 'Kórház building',
    hotel: 'Hotel building',
    house: 'Private house',
    houseboat: 'Houseboat',
    hut: 'Hut',
    industrial: 'Industrial building',
    kindergarten: 'Kindergarten building',
    kiosk: 'Stánok',
    manufacture: 'Budova fabriky',
    mosque: 'Mosque',
    office: 'Office building',
    parking: 'Parkoló building',
    public: 'Kocsmalic building',
    residential: 'Residential house',
    retail: 'Retail building',
    roof: 'Roof',
    ruins: 'Building ruins',
    school: 'Iskola building',
    semidetached_house: 'Duplex house',
    service: 'Service building',
    shed: 'Shed',
    shrine: 'Shrine',
    stable: 'Stable',
    static_caravan: 'Mobile house, caravan',
    storage_tank: 'Storage tank',
    sty: 'Sty',
    supermarket: 'Budova supermarketu',
    synagogue: 'Synagogue',
    temple: 'Temple',
    terrace: 'Row house',
    train_station: 'Train station',
    transformer_tower: 'Transformačná veža',
    transportation: 'Transportation building',
    university: 'Egyetem building',
    warehouse: 'Warehouse',
    yes: 'Indeterminate building',
  },
  highway: {
    '*': 'Road {}',
    bus_stop: 'Bus stop',
    construction: 'Road under construction',
    crossing: 'Pedestrian crossing',
    cycleway: 'Cycleway',
    footway: 'Sidewalk',
    living_street: 'Residential',
    motorway: 'Highway',
    motorway_link: 'Motorway link',
    path: 'Path',
    pedestrian: 'Pedestrian zone',
    primary: 'Primary highway',
    primary_link: 'Primary road link',
    residential: 'Street',
    secondary: 'Secondary highway',
    secondaty_link: 'Secondary road link',
    service: {
      '*': 'Service driveway road',
      service: {
        '*': 'Service road {}',
        alley: 'Alley',
        bus: 'Mass transit road',
        'drive-through': 'Drive through',
        driveway: 'Driveway',
        emergency_access: 'Emergency access road',
        parking_aisle: 'Parkoló aisle',
      },
    },
    steps: 'Stairs',
    street_lamp: 'Street lamp',
    tertiary: 'Tertiary highway',
    tertiary_link: 'Tertiary road link',
    track: {
      '*': 'Forest road',
      tracktype: {
        grade1: 'Compacted forest road',
        grade2: 'Mostly compacted forest road',
        grade3: 'Less firm, unpaved forest road',
        grade4: 'Forest road navigable by tractor or similar vehicles',
        grade5: 'Bárely discernible forest road',
      },
    },
    trunk: 'Trunk road',
    trunk_link: 'Trunk link',
    unclassified: 'Unclassified road',
  },
  historic: {
    '*': 'Historic structure',
    archaeological_site: 'Archaeological site',
    castle: 'Castle',
    church: 'Historic church',
    city_gate: 'City gate',
    manor: 'Manor',
    memorial: 'Memorial',
    monastery: 'Monastery',
    monument: 'Monument',
    ruins: {
      '*': 'Ruins',
      ruins: {
        castle: 'Castle ruins',
      },
    },
    tomb: 'Tomb',
    wayside_cross: 'Wayside cross',
    wayside_shrine: 'Wayside shrine',
  },
  landuse: {
    '*': '{}',
    allotments: 'Allotments',
    basin: 'Basin',
    brownfield: 'Brownfield',
    cemetery: 'Cemetery',
    commercial: 'Commercial',
    construction: 'Construction',
    education: 'Educational zone',
    farmland: 'Farmland',
    farmyard: 'Farmyard',
    forest: 'Forest',
    garages: 'Garages',
    grass: 'Grass',
    greenfield: 'Greenfield',
    industrial: 'Industrial',
    landfill: 'Landfill',
    meadow: 'Meadow',
    military: 'Military area',
    orchard: 'Orchard',
    plant_nursery: 'Plant nursery',
    quarry: 'Quarry',
    recreation_ground: 'Recreation ground',
    religions: 'Religious land',
    // TODO
    reservoir: 'Reservoir',
    residential: 'Residential',
    retail: 'Retail',
    vineyard: 'Vineyard',
    winter_sports: 'Winter sports',
  },
  leisure: {
    '*': '{}',
    bleachers: 'Bleachers',
    escape_game: 'Escape game',
    hackerspace: 'Hackerspace',
    ice_rink: 'Ice rink',
    marina: 'Marina',
    miniature_golf: 'Miniature golf',
    dog_park: 'Dog park',
    firepit: 'Fireplace',
    fishing: 'Fishing',
    fitness_centre: 'Fintess centre',
    fitness_station: 'Fintess station',
    garden: 'Garden',
    golf_course: 'Golf course',
    horse_riding: 'Horse riding',
    nature_reserve: 'Nature reserve',
    park: 'Park',
    picnic_table: {
      '*': 'Picnic table',
      covered: { yes: 'Covered picnic table' },
    },
    pitch: {
      '*': 'Pitch',
      sport: {
        badminton: 'Badminton pitch',
        basketball: 'Basketball pitch',
        beachvolleyball: 'Beach volleyball pitch',
        hockey: 'Hockey pitch',
        ice_hockey: 'Ice hockey pitch',
        multi: 'Multi pitch',
        soccer: 'Soccer pitch',
        tennis: 'Tennis pitch',
        volleyball: 'Volleyball pitch',
      },
    },
    playground: 'Playground',
    sports_centre: 'Sports centre',
    sports_hall: 'Sports hall',
    stadium: 'Stadium',
    swimming_pool: 'Úszómedence',
    track: 'Track',
    water_park: 'Water park',
  },
  man_made: {
    '*': '{}',
    adit: 'Adit',
    antenna: 'Antenna',
    beacon: 'Beacon',
    beehive: 'Beehive',
    bridge: 'Bridge',
    bunker_silo: 'Bunker silo',
    cairn: 'Cairn',
    cellar_entrance: 'Cellar entrance',
    chimney: 'Chimney',
    clearcut: 'Forest clearing',
    communications_tower: 'Communication tower',
    cooling_tower: 'Cooling tower',
    crane: 'Crane',
    cross: 'Cross',
    cutline: 'Cutline',
    dyke: 'Dyke',
    embankment: 'Embankment',
    flagpole: 'Flagpole',
    "forester's_lodge": "Forester's lodge",
    gasometer: 'Gasometer',
    goods_conveyor: 'Goods conveyor',
    groyne: 'Groyne',
    lighthouse: 'Lighthouse',
    manhole: 'Manhole',
    mast: 'Mast',
    mineshaft: 'Mineshaft',
    monitoring_station: 'Monitoring station',
    nesting_site: 'Nesting site',
    observatory: 'Observatory',
    pier: 'Pier',
    pipeline: 'Pipeline',
    reservoir_covered: 'Covered reservoir',
    silo: 'Silo',
    snow_cannon: 'Snow cannon',
    spoil_heap: 'Spoil heap',
    spring_box: 'Spring box',
    storage_tank: 'Storage tank',
    street_cabinet: 'Street cabinet',
    surveillance: 'Surveillance',
    survey_point: 'Survey point',
    telescope: 'Telescope',
    tower: {
      '*': 'Tower',
      'tower:type': {
        bell_tower: 'Bell tower',
        communication: 'Communication tower',
        cooling: 'Cooling tower',
        observation: 'Observation tower',
      },
    },
    utility_pole: 'Utility pole',
    wastewater_plant: 'Wastewater plant',
    water_tap: 'Water tap',
    water_tower: 'Water Tower',
    water_well: 'Water well',
    water_works: 'Water works',
    watermill: 'Watermill',
    windmill: 'Windmill',
    works: 'Works',
  },
  natural: {
    '*': '{}',
    arch: 'Rock arch',
    bare_rock: 'Báre rock',
    basin: 'Basin',
    bay: 'Bay',
    beach: 'Beach',
    birds_nest: 'Birds_nest',
    cave_entrance: 'Cave',
    cliff: 'Cliff',
    earth_bank: 'Earth bank',
    fell: 'Fell',
    geyser: 'Geyser',
    glacier: 'Glacier',
    grassland: 'Grassland',
    gully: 'Gully',
    heath: 'Heathland',
    hot_spring: 'Hot spring',
    landslide: 'Landslide',
    mountain_range: 'Mountain range',
    mud: 'Mud',
    peak: 'Peak',
    plateau: 'Plateau',
    ridge: 'Ridge',
    rock: 'Rock',
    saddle: 'Saddle',
    sand: 'Sand',
    scree: 'Scree',
    scrub: 'Scrub, bushes',
    shingle: 'Shingle',
    shrub: 'Shrub',
    sinkhole: 'Sinkhole',
    spring: {
      '*': 'Spring',
      drinking_water: {
        yes: 'Drinkable spring',
        no: 'Non-drinking spring',
      },
      refitted: {
        yes: 'Refitted spring',
        no: 'Non-refitted spring',
      },
    },
    stone: 'Stone',
    tree: {
      '*': 'Tree',
      protected: { yes: 'Protected tree' },
      denotation: {
        natural_monument: 'Natural monument tree',
        landmark: 'Landmark tree',
        avenue: 'Avenue tree',
        urban: 'Urban tree',
        agricultural: 'Agricultural tree',
      },
    },
    tree_row: 'Tree row',
    valley: 'Valley',
    water: 'Water body',
    wetland: 'Wetland',
    wood: 'Forest',
  },
  place: {
    '*': 'Place {}',
    city: 'City',
    country: 'Country',
    farm: 'Farm',
    hamlet: 'Hamlet',
    island: 'Island',
    islet: 'Islet',
    isolated_dwelling: 'Isolated dwelling',
    locality: 'Locality',
    ocean: 'Ocean',
    sea: 'Sea',
    square: 'Square',
    state: 'State',
    suburb: 'Suburb',
    town: 'Town',
    village: 'Village',
  },
  power: {
    '*': '{}',
    generator: 'Generator',
    line: 'Power line',
    minor_line: 'Minor power line',
    plant: 'Plant',
    pole: 'Power pole',
    substation: 'Substation',
    tower: 'Power tower',
    transformer: 'Transformer',
  },
  public_transport: {
    platform: 'Platform',
    station: 'Station',
    stop_position: 'Stop position',
  },
  railway: 'Railroad',
  shop: {
    '*': 'Shop {}',
    household_linen: 'Household linen',
    charity: 'Charity Shop',
    chocolate: 'Chocolate Shop',
    fashion_accessories: 'Fashion Accessories Shop',
    frozen_food: 'Frozen Food Shop',
    hearing_aids: 'Hearing Aids Shop',
    weapons: 'Weapons Shop',
    alcohol: 'Alcohol shop',
    antiques: 'Antiques',
    art: 'Art shop',
    baby_goods: 'Baby goods',
    bag: 'Bag shop',
    bakery: 'Bakery',
    bathroom_furnishing: 'Bathroom furnishing',
    beauty: 'Beauty shop',
    bed: 'Bed store',
    beverages: 'Beverages',
    bicycle: 'Bicycle shop',
    bookmaker: 'Bookmaker',
    books: 'Book store',
    boutique: 'Boutique',
    butcher: 'Butcher',
    camera: 'Camera shop',
    car: 'Car dealership',
    car_parts: 'Car parts',
    car_repair: 'Car repair',
    carpet: 'Carpet store',
    cheese: 'Cheese shop',
    chemist: 'Drug-store, chemist',
    clothes: 'Apparel store',
    coffee: 'Coffee shop',
    collector: 'Collector',
    computer: 'Computer store',
    confectionery: 'Confectionery',
    convenience: 'Convenience store',
    copyshop: 'Copy shop',
    cosmetics: 'Cosmetics shop',
    craft: 'Craft',
    curtain: 'Curtain',
    dairy: 'Dairy',
    deli: 'Delicatessen',
    department_store: 'Department store',
    doityourself: 'Doityourself',
    doors: 'Doors shop',
    dry_cleaning: 'Dry_cleaning',
    'e-cigarette': 'E-cigarette',
    electrical: 'Electrical',
    electronics: 'Electronics',
    erotic: 'Sex shop',
    fabric: 'Textile store',
    farm: 'Shop at a farm',
    fireplace: 'Fireplace',
    fishing: 'Fishing shop',
    flooring: 'Flooring shop',
    florist: 'Florist',
    funeral_directors: 'Funeral Services',
    furniture: 'Furniture store',
    games: 'Game shop',
    garden_center: 'Gardening center',
    garden_centre: 'Garden centre',
    general: 'General shop',
    gift: 'Gift shop',
    glaziery: 'Glaziery',
    greengrocer: 'Fruit and vegetables store',
    hairdresser: 'Hairdresser',
    hardware: 'Hardware',
    health_food: 'Health food',
    hifi: 'Hifi shop',
    houseware: 'Houseware shop',
    hunting: 'Hunting shop',
    ice_cream: 'Ice cream',
    interior_decoration: 'Interior decoration shop',
    jewelry: 'Jewerly',
    kiosk: 'Kiosk',
    kitchen: 'Kitchen shop',
    laundry: 'Lanudry',
    lighting: 'Lighting shop',
    locksmith: 'Locksmith',
    lottery: 'Lottery shop',
    mall: 'Shopping center / mall',
    massage: 'Massages',
    medical_supply: 'Medical supply',
    mobile_phone: 'Mobile phone store',
    model: 'Model',
    motorcycle: 'Motorcycle',
    music: 'Music shop',
    musical_instrument: 'Musical instruments shop',
    newsagent: 'Newsagent',
    nutrition_supplements: 'Nutrition supplements shop',
    optician: 'Optics',
    outdoor: 'Outdoor',
    outpost: 'Outpost',
    paint: 'Paint shop',
    pastry: 'Pastry shop',
    pawnbroker: 'Pawnbroker',
    perfumery: 'Perfumery',
    pet: 'Pet shop',
    pet_grooming: 'Pet grooming',
    photo: 'Photo shop',
    radiotechnics: 'Radiotechnics',
    rental: 'Rental',
    seafood: 'Seafood',
    second_hand: 'Secondhand',
    sewing: 'Sewing',
    shoes: 'Shoes',
    sports: 'Sports',
    stationery: 'Stationery store',
    supermarket: 'Supermarket',
    tailor: 'Tailor',
    tattoo: 'Tattoo',
    tea: 'Tea shop',
    ticket: 'Ticket shop',
    tobacco: 'Tobacco shop',
    toys: 'Toy store',
    trade: 'Building materials store',
    travel_agency: 'Travel agency',
    tyres: 'Tyres shop',
    vacant: 'Vacant shop',
    variety_store: 'Variety store',
    video: 'Video shop',
    video_games: 'Video games shop',
    watches: 'Watches',
    wholesale: 'Wholesale',
    window_blind: 'Window blind',
    wine: 'Wine shop',
  },
  sport: {
    '*': 'Sport {}',
    australian_football: 'Australian football',
    billiards: 'Billiards',
    boxing: 'Boxing',
    cliff_diving: 'Cliff diving',
    cricket: 'Cricket',
    cricket_nets: 'Cricket nets',
    croquet: 'Croquet',
    curling: 'Curling',
    gaelic_games: 'Gaelic games',
    horseshoes: 'Horseshoes',
    korfball: 'Krofball',
    long_jump: 'Long jump',
    orienteering: 'Orienteering',
    paddle_tennis: 'Paddle tennis',
    pelota: 'Pelota',
    racquet: 'Racquet',
    rc_car: 'RC Cars',
    rugby: 'Rugby',
    rugby_league: 'Rugby league',
    rugby_union: 'Rugby union',
    sailing: 'Sailing',
    surfing: 'Surfing',
    table_soccer: 'Table soccer',
    team_handball: 'Team handball',
    toboggan: 'Toboggan',
    '9pin': '9-pin Bowling',
    '10pin': 'Ten-pin Bowling',
    aikido: 'Aikido',
    airsoft: 'Airsoft',
    american_football: 'American football',
    archery: 'Archery',
    athletics: 'Athletics',
    badminton: 'Badminton',
    baseball: 'Baseball',
    basketball: 'Basketball',
    beachvolleyball: 'Beachvolleyball',
    bicycle: 'Bicycle',
    bmx: 'BMX',
    boules: 'Boules',
    bowling: 'Bowling',
    bowls: 'Bowls',
    canoe: 'Canoe',
    chess: 'Chess',
    climbing: 'Climbing',
    climbing_adventure: 'Climbing adventure',
    cycling: 'Cycling',
    darts: 'Darts',
    disc_golf: 'Disc golf',
    dog_racing: 'Dog racing',
    equestrian: 'Equestrian',
    field_hockey: 'Field hockey',
    fitness: 'Fitness',
    floorball: 'Floorball',
    free_flying: 'Free flying',
    golf: 'Golf',
    gymnastics: 'Gymnastics',
    handball: 'Handball',
    hockey: 'Hockey',
    horse_racing: 'Horse racing',
    ice_hockey: 'Ice hockey',
    ice_skating: 'Ice skating',
    judo: 'Judo',
    karate: 'Karate',
    karting: 'Karting',
    laser_tag: 'Laser tag',
    model_aerodrome: 'Model aerodrome',
    motocross: 'Motocross',
    motor: 'Motor',
    multi: 'Multi',
    netball: 'Netball',
    paintball: 'Paintball',
    petanque: 'Petanque',
    roller_skating: 'Roller skating',
    rowing: 'Rowing',
    running: 'Running',
    scuba_diving: 'Scuba_diving',
    shooting: 'Shooting',
    shooting_range: 'Shooting range',
    'shot-put': 'Shot-put',
    skateboard: 'Skateboard',
    skating: 'Skating',
    ski_jumping: 'Ski jumping',
    skiing: 'Skiing',
    soccer: 'Football / soccer',
    squash: 'Squash',
    streetball: 'Streetball',
    swimming: 'Swimming',
    table_tennis: 'Table tennis',
    tennis: 'Tennis',
    volleyball: 'Volleyball',
    water_ski: 'Water skiing',
    workout: 'Workout',
    yoga: 'Yoga',
  },
  tourism: {
    '*': '{}',
    alpine_hut: 'Alpine hut',
    apartment: 'Apartment',
    aquarium: 'Aquarium',
    artwork: {
      '*': 'Art',
      artwork_type: {
        architecture: 'Architecture',
        bust: 'Bust',
        graffiti: 'Graffiti',
        installation: 'Installation art',
        mosaic: 'Tilework',
        mural: 'Mural',
        painting: 'Painting',
        relief: 'Relief (artwork)',
        sculpture: 'Sculpture',
        statue: 'Statue',
        stone: 'Boulder (artwork)',
      },
    },
    attraction: 'Attraction',
    camp_site: 'Campsite',
    caravan_site: 'Caravan site',
    chalet: 'Chalet',
    gallery: 'Gallery',
    guest_house: 'Guest house',
    hostel: 'Hostel',
    hotel: 'Hotel',
    information: {
      '*': 'Information',
      information: {
        '*': 'Information {}',
        board: 'Information board',
        guidepost: 'Guidepost',
        map: 'Map',
        office: 'Information office',
      },
    },
    motel: 'Motel',
    museum: 'Museum',
    picnic_site: 'Picnic site',
    viewpoint: 'Viewpoint',
    wilderness_hut: 'Wilderness hut',
    zoo: 'ZOO',
  },
  type: {
    route: {
      '*': 'Trail',
      route: {
        '*': 'Trail {}',
        bicycle: 'Bicycle trail',
        bus: 'Bus way',
        foot: 'Pedestrian trail',
        hiking: 'Hiking trail',
        horse: 'Equestrian path',
        mtb: 'Mountain biking trail',
        piste: 'Ski slope or path',
        railway: 'Railway',
        ski: 'Ski trail',
        tram: 'Tramway',
      },
    },
  },
  waterway: {
    '*': 'Waterway {}',
    canal: 'Canal',
    dam: 'Dam',
    ditch: 'Ditch (waterway)',
    drain: 'Drain',
    river: 'River',
    stream: 'Creek, stream',
    waterfall: 'Waterfall',
    weir: 'Weir',
  },
};

export const colorNames: Record<string, string> = {
  red: 'Red',
  blue: 'Blue',
  green: 'Green',
  yellow: 'Yellow',
  orange: 'Orange',
  purple: 'Purple',
  violet: 'Violet',
  white: 'White',
  black: 'Black',
  gray: 'Gray',
  brown: 'Brown',
};
