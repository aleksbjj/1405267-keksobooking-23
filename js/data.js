import {getRandomNumber} from './util.js';

const X_MIN_COORDINATE = 35.65000;
const X_MAX_COORDINATE = 35.70000;
const Y_MIN_COORDINATE = 139.70000;
const Y_MAX_COORDINATE = 139.80000;
const COORDINATE_NUMBER_FLOAT_VALUE = 5;
const MIN_PRICE = 500;
const MAX_PRICE = 10000;
const MAX_AMOUNT_USERS = 8;
const MIN_AMOUNT_USERS = 1;
const ARRAYDATAAMOUNT = 10;
const TITLES = [
  'Дворец из коробки',
  'Дом с бассейном',
  'Просторное Бунгало',
  'Отель Marriot Tokyo',
  'Квартира с видом на площадь',
];
const DESCRIPTIONS = [
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец.',
  'Прекрасный дом с большой территорией, красивой большой терассой а так же большим бассейном. РАсположеный в  10 минутах от центра Токио.',
  'Очень уютной бунгало на краю города, в дали от суеты мегаполиса',
  'Хорошо всем известный мировой бренд отель Marriot.',
  'Уютная квартира в самом центре Токио с красивым видом из окна!',
];
const HOUSES_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const ROOMS_AMOUNT = [
  1,
  2,
  3,
  50,
  100,
];

const GUEST_AMOUNT = [
  3,
  2,
  1,
  0,
];

const PHOTOS_URLS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomData = (arrayName) => arrayName[Math.floor(Math.random() * arrayName.length)];

const createArrayWithData = (amountArray = ARRAYDATAAMOUNT) => {
  const array = [];
  for (let idx = 0; idx < amountArray; idx++) {
    const lat = getRandomNumber(X_MIN_COORDINATE, X_MAX_COORDINATE, COORDINATE_NUMBER_FLOAT_VALUE);
    const lng = getRandomNumber(Y_MIN_COORDINATE, Y_MAX_COORDINATE, COORDINATE_NUMBER_FLOAT_VALUE);

    array.push(
      {
        author: {
          avatar: `img/avatars/user0${getRandomNumber(MIN_AMOUNT_USERS, MAX_AMOUNT_USERS)}.png`,
        },
        location: {
          lat: lat,
          lng: lng,
        },
        offer: {
          title: getRandomData(TITLES),
          address: `${lat}, ${lng}`,
          price: getRandomNumber(MIN_PRICE, MAX_PRICE),
          type: getRandomData(HOUSES_TYPES),
          rooms: getRandomData(ROOMS_AMOUNT),
          guests: getRandomData(GUEST_AMOUNT),
          checkin: getRandomData(TIMES),
          checkout: getRandomData(TIMES),
          features: getRandomData(FEATURES),
          descriptions: getRandomData(DESCRIPTIONS),
          photos: getRandomData(PHOTOS_URLS),
        },
      },
    );
  }
  return array;
};

createArrayWithData();

export {createArrayWithData};
