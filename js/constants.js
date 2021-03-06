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
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const PreviewPhotoSize = {
  WIDTH: '70',
  HEIGHT: '70',
};

export {
  MAX_PRICE_VALUE, MAX_TITLE_LENGTH, MIN_TITLE_LENGTH, RoomsForGuestsMap, housesType, settingInitialMap, mainMarkerSetting, similarMarkerSetting, SIMILAR_OFFERS_COUNT, ANY_VALUE, RADIX, RERENDER_DELAY, FILE_TYPES,
  PreviewPhotoSize
};
