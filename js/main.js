import './feeling-form.js';
import { renderPins } from './similar-offers.js';
import './map.js';
import { openSuccessPopup, openErrorPopup } from './popup.js';
import { getData } from './api.js';
import { sendData } from './api.js';
const SIMILAR_OFFER_COUNT = 10;

getData((offers) => {
  renderPins(offers.slice(0, SIMILAR_OFFER_COUNT));
});

sendData(openSuccessPopup, openErrorPopup);

