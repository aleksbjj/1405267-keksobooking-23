import './feeling-form.js';
import { renderPins } from './similar-offers.js';
import './map.js';
import { openSuccessPopup, openErrorPopup } from './popup.js';
import { getData } from './api.js';
import { sendData } from './api.js';
import {RERENDER_DELAY} from './utils.js';
import { SIMILAR_OFFERS_COUNT } from './constants.js';
import { filterOffers } from './filters.js';
import { debounce } from './utils/debounce.js';

getData((offers) => {
  renderPins(offers.slice(0, SIMILAR_OFFERS_COUNT));
  debounce(filterOffers(offers), RERENDER_DELAY,
  );
});

sendData(openSuccessPopup, openErrorPopup);

