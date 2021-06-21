import {X_MIN_COORDINATE,X_MAX_COORDINATE,Y_MIN_COORDINATE,Y_MAX_COORDINATE,COORDINATE_NUMBER_FLOAT_VALUE,MIN_PRICE,MAX_PRICE,MAX_AMOUNT_USERS,MIN_AMOUNT_USERS,ARRAYDATAAMOUNT} from './constants.js';
import {TITLES,DESCRIPTIONS,HOUSES_TYPES,FEATURES,TIMES,ROOMS_AMOUNT,GUEST_AMOUNT,PHOTOS_URLS} from './server.js';
import {getRandomNumber,getRandomFeatures} from './utils.js';

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
          features: getRandomFeatures(FEATURES),
          descriptions: getRandomData(DESCRIPTIONS),
          photos: getRandomFeatures(PHOTOS_URLS),
        },
      },
    );
  }
  return array;
};

createArrayWithData();

export {createArrayWithData};
