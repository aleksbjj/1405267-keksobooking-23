import {
  MAX_TITLE_LENGTH,
  MIN_TITLE_LENGTH,
  MAX_PRICE_VALUE,
  RoomsForGuestsMap
} from './constants.js';
const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

const validateTitle = () => {
  const valueLength = title.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} cимв.`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};

const validatePrice = () => {
  if (price.value > MAX_PRICE_VALUE) {
    price.setCustomValidity(`Цена за ночь не должна превышать ${MAX_PRICE_VALUE}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};

const validateRoomsInput = () => {
  capacity.setCustomValidity(RoomsForGuestsMap[roomNumber.value].includes(capacity.value) ? '' : 'Вы не можете выбрать данное количество гостей');
  capacity.reportValidity();
};

const onChangeHandlerForm = (evt) => {
  switch (evt.target) {
    case title:
      validateTitle();
      break;
    case price:
      validatePrice();
      break;
    case roomNumber:
    case capacity:
      validateRoomsInput();
      break;
  }
};

form.addEventListener('input', onChangeHandlerForm);


