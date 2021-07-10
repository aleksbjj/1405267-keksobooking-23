import {
  settingInitialMap,
  mainMarkerSetting
} from './constants.js';

import { address,form, resetFormButton} from './feeling-form.js';

import { activatePage, deactivatePage } from './form.js';

deactivatePage();

const map = L.map('map-canvas')
  .on('load', activatePage)
  .setView({
    lat: settingInitialMap.LAT,
    lng: settingInitialMap.LNG,
  }, settingInitialMap.ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: mainMarkerSetting.URL,
  iconSize: [mainMarkerSetting.WIDTH, mainMarkerSetting.HEIGHT],
  iconAnchor: [mainMarkerSetting.WIDTH / 2, mainMarkerSetting.HEIGHT],
});

const mainMarker = L.marker({
  lat: settingInitialMap.LAT,
  lng: settingInitialMap.LNG,
},
{
  draggable: true,
  icon: mainMarkerIcon,
});
mainMarker.addTo(map);

const setMainMarkerInitialPosition = () => {
  address.value = `${mainMarker.getLatLng().lat}, ${mainMarker.getLatLng().lng}`;
};

const getMainMarkerCurrentPosition = (evt) => {
  const currentLatitude = evt.target.getLatLng().lat.toFixed(5);
  const currentLongitude = evt.target.getLatLng().lng.toFixed(5);

  address.value = `${currentLatitude}, ${currentLongitude}`;
};

mainMarker.on('moveend', getMainMarkerCurrentPosition);

// Сброс позиции маркера и карты
const resetMapPosition = () => {
  mainMarker.setLatLng({
    lat: settingInitialMap.LAT,
    lng: settingInitialMap.LNG,
  });
  map.setView({
    lat: settingInitialMap.LAT,
    lng: settingInitialMap.LNG,
  }, settingInitialMap.ZOOM);
};

const resetPage = () => {
  form.reset();
  resetMapPosition();
};

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
  resetMapPosition();
  setMainMarkerInitialPosition();
});

export {map, resetPage};
