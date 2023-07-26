const RenderPosition = {
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
};

const PATH = 'http://localhost:3000';
const GARAGE = `${PATH}/garage`;
const ENGINE = `${PATH}/engine/`;
const WINNERS = `${PATH}/winners`;
const PAGE = `?_page=`;
const LIMIT = `&_limit=`;
const EngineParam = {
    ID: '?id=',
    STATUS: '&status=',
};
const EngineStatus = {
    START: 'started',
    STOP: 'stopped',
}

const OpenSection = {
    GARAGE: 'Garage',
    WINNERS: 'Winners',
}

const NumberPerPage = {
    CARS: 7,
    WINNERS: 10,
}

const FIRST_PAGE = 1;

const CarColor = {
    HASH: '#',
    INIT_COLOR: '000000',
    START_INDEX: 2,
    END_INDEX: 8,
}

const HUNDRED_CARS = 100;

const STATUS = 404;

const FIRST_WINS = 1;

const STOP_STYLE_CAR = 'translateX(0)';

const DISPLAY_BLOCK = 'block';
const DISPLAY_NONE = 'none';

const carsNames = [
    'Audi',
    'Alfa Romeo',
    'Alpina',
    'Aston Martin',
    'Axon',
    'Ford',
    'Ferrari',
    'Fiat',
    'GAZ',
    'GMC',
    'Honda',
    'Hummer',
    'Hyundai',
    'Infiniti',
    'Isuzu',
    'JAC',
    'Jaguar',
    'Jeep',
    'Kamaz',
    'Lada',
    'Lexus',
    'Lotus',
    'MAN',
    'Maybach',
    'MAZ',
    'Mazda',
    'McLaren',
    'Nissan',
    'Opel',
    'Paccar',
    'Pagani',
    'Pontiac',
    'Porsche',
    'Renault',
    'Škoda',
    'Smart',
    'Subaru',
    'Suzuki',
    'Tesla',
    'Toyota',
    'UAZ',
    'Volvo',
    'ZAZ',
    'XPeng',
    'TVR',
    'Saab',
    'RAM',
    'Chevrolet',
    'Mazzanti',
    'Daewoo',
]

const carsModels = [
    'Roadster',
    'S',
    'X',
    '3',
    'Y',
    'X5',
    'X7',
    'X3',
    'X6',
    'GT4',
    'FXX',
    '599 GTO',
    'Enzo',
    'Priora',
    '4x4',
    'Rio',
    'Focus',
    'Kalina',
    'Vesta',
    'Spark',
    'Lacetti',
    'Nexia',
    'Matiz',
    'Cobalt',
    'Captiva',
    'A7',
    'A5',
    'A3',
    'A8',
    'TT',
    'Corolla',
    'Camry',
    'RAV4',
    'Impreza',
    'LC500',
    'Cayenne',
    'FX37',
];

export {DISPLAY_BLOCK, DISPLAY_NONE, STOP_STYLE_CAR, FIRST_WINS, STATUS, HUNDRED_CARS, CarColor, FIRST_PAGE, NumberPerPage, OpenSection, RenderPosition, PATH, GARAGE, ENGINE, WINNERS, PAGE, LIMIT, EngineParam, EngineStatus, carsNames, carsModels }