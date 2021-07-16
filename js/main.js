import './feeling-form.js';
import './map.js';
import './avatar.js';
import './offer-photos.js';
import { renderPins } from './similar-offers.js';
import { openSuccessPopup, openErrorPopup } from './popup.js';
import { getData,sendData } from './api.js';
import {RERENDER_DELAY,  SIMILAR_OFFERS_COUNT } from './constants.js';
import { filterOffers } from './filters.js';
import { debounce } from './utils/debounce.js';


getData((offers) => {
  renderPins(offers.slice(0, SIMILAR_OFFERS_COUNT));
  debounce(filterOffers(offers), RERENDER_DELAY,
  );
});

sendData(openSuccessPopup, openErrorPopup);

