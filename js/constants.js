const X_MIN_COORDINATE = 35.65000;
const X_MAX_COORDINATE = 35.70000;
const Y_MIN_COORDINATE = 139.70000;
const Y_MAX_COORDINATE = 139.80000;
const COORDINATE_NUMBER_FLOAT_VALUE = 5;
const MIN_PRICE = 500;
const MAX_PRICE = 10000;
const MAX_PRICE_VALUE = 1000000;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const SIMILAR_OFFERS_COUNT = 10;
const ANY_VALUE = 'any';
const RADIX = 10;
const RERENDER_DELAY = 500;
const RoomsForGuestsMap = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};
const housesType = [
  {
    type: 'flat',
    price: 1000,
  },
  {
    type: 'bungalow',
    price: 0,
  },
  {
    type: 'hotel',
    price: 3000,
  },
  {
    type: 'house',
    price: 5000,
  },
  {
    type: 'palace',
    price: 10000,
  },
];
const settingInitialMap = {
  LAT: 35.68170,
  LNG: 139.75388,
  ZOOM: 10,
};
const mainMarkerSetting = {
  WIDTH: 52,
  HEIGHT: 52,
  URL: './img/main-pin.svg',
};
const similarMarkerSetting = {
  WIDTH: 40,
  HEIGHT: 40,
  URL: './img/pin.svg',
};

export {
  X_MIN_COORDINATE, X_MAX_COORDINATE, Y_MIN_COORDINATE, Y_MAX_COORDINATE, COORDINATE_NUMBER_FLOAT_VALUE, MIN_PRICE, MAX_PRICE, MAX_PRICE_VALUE, MAX_TITLE_LENGTH, MIN_TITLE_LENGTH, RoomsForGuestsMap, housesType, settingInitialMap, mainMarkerSetting, similarMarkerSetting,SIMILAR_OFFERS_COUNT,ANY_VALUE,RADIX,RERENDER_DELAY
};
