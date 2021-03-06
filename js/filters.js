import { renderPins, markerGroup } from './similar-offers.js';
import { SIMILAR_OFFERS_COUNT, ANY_VALUE, RADIX } from './constants.js';

const HousingPriceRange = {
  LOW: {
    MIN: 0,
    MAX: 10000,
  },
  MIDDLE: {
    MIN: 10001,
    MAX: 50000,
  },
  HIGH: {
    MIN: 50001,
    MAX: 1000000,
  },
};

const filterForm = document.querySelector('.map__filters');

const filterHousingType = filterForm.querySelector('#housing-type');
const filterHousingPrice = filterForm.querySelector('#housing-price');
const filterRoomsNumber = filterForm.querySelector('#housing-rooms');
const filterGuestsNumber = filterForm.querySelector('#housing-guests');
const filterHousingFeatures = filterForm.querySelector('#housing-features');

const filterByHousingType = (item) => filterHousingType.value === ANY_VALUE ? true : item.offer.type === filterHousingType.value;

const filterByRoomsNumber = (item) => filterRoomsNumber.value === ANY_VALUE ? true : item.offer.rooms === parseInt(filterRoomsNumber.value, RADIX);

const filterByGuestsNumber = (item) => filterGuestsNumber.value === ANY_VALUE ? true : item.offer.guests === parseInt(filterGuestsNumber.value, RADIX);

const filterByHousingPrice = (item) => {
  const filteringPriceRange = HousingPriceRange[filterHousingPrice.value.toUpperCase()];
  return filteringPriceRange ? item.offer.price >= filteringPriceRange.MIN && item.offer.price <= filteringPriceRange.MAX : true;
};

const filterByFeatures = (item) => {
  const checkedHousingFeatures = filterHousingFeatures.querySelectorAll('.map__checkbox:checked');

  return Array.from(checkedHousingFeatures).every((checkedFeature) => {
    if (item.offer.features) {
      return item.offer.features.includes(checkedFeature.value);
    }
  });
};

const filterOffers = (offers) => {
  filterForm .addEventListener('change', () => {
    const similarOffers = offers.filter(filterByHousingType).filter(filterByHousingPrice).filter(filterByRoomsNumber).filter(filterByGuestsNumber).filter(filterByFeatures);
    markerGroup.clearLayers();
    renderPins(similarOffers.slice(0, SIMILAR_OFFERS_COUNT));
  });
};

export {filterOffers};
