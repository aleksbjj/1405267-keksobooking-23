import { settingInitialMap, mainMarkerSetting, similarMarkerSetting } from './constants.js';
import { address } from './feeling-form.js';
import { activateApp, deactivateApp } from './form.js';
import { createArrayWithData } from './data.js';

deactivateApp();
const map = L.map('map-canvas')
  .on('load', activateApp)
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
setMainMarkerInitialPosition();

const getMainMarkerCurrentPosition = (evt) => {
  const currentLatitude = evt.target.getLatLng().lat.toFixed(5);
  const currentLongitude = evt.target.getLatLng().lng.toFixed(5);

  address.value = `${currentLatitude}, ${currentLongitude}`;
};

mainMarker.on('moveend', getMainMarkerCurrentPosition);

const renderSimilarOffersPins = (items) => {
  const points = [];
  items.forEach((item) => {
    const point = {
      src: item.author,
      title: item.offer.title,
      address: item.offer.address,
      price: item.offer.price,
      type: item.offer.type,
      rooms: item.offer.rooms,
      guests: item.offer.guests,
      checkin: item.offer.checkin,
      checkout: item.offer.checkout,
      features: item.offer.features,
      photos: item.offer.photos,
      lat: item.location.lat,
      lng: item.location.lng,
      descrsiptions: item.offer.descrsiptions,
    };
    points.push(point);
  });
  return points;
};


const similarOffers = createArrayWithData(5);

const similarOffersPins = renderSimilarOffersPins(similarOffers);

const createCustomPopup = (element) => {
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = popupTemplate.cloneNode(true);

  popupElement.querySelector('.popup__avatar').src = element.src.avatar;
  if (element.title.length) {
    popupElement.querySelector('.popup__title').classList.remove('hidden');
    popupElement.querySelector('.popup__title').textContent = element.title;
  }
  if (element.price) {
    popupElement.querySelector('.popup__text--price').classList.remove('hidden');
    popupElement.querySelector('.popup__text--price').textContent = `${element.price} ₽/ночь`;
  }
  if (element.type.length) {
    popupElement.querySelector('.popup__type').classList.remove('hidden');
    const getHouseTypes = () => {
      switch (element.type) {
        case 'flat':
          return 'Квартира';
        case 'bungalow':
          return 'Бунгало';
        case 'house':
          return 'Дом';
        case 'palace':
          return 'Дворец';
        case 'hotel':
          return 'Отель';
      }
    };
    popupElement.querySelector('.popup__type').textContent = getHouseTypes();
  }
  popupElement.querySelector('.popup__text--capacity').textContent = `${element.rooms} комнаты для ${element.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.checkin}, выезд до ${element.checkout}`;
  if (element.descrsiptions.length) {
    popupElement.querySelector('.popup__description').classList.remove('hidden');
    popupElement.querySelector('.popup__description').textContent = element.descrsiptions;
  }
  if (element.photos.length) {
    const fragment = document.createDocumentFragment();
    const photosBlock = popupElement.querySelector('.popup__photos');
    const photoElement = photosBlock.querySelector('.popup__photo');
    photosBlock.classList.remove('hidden');
    photosBlock.removeChild(photoElement);

    for (let index = 0; index < element.photos.length; index++) {
      const newPhotoElement = photoElement.cloneNode(true);
      newPhotoElement.src = element.photos[index];
      fragment.appendChild(newPhotoElement);
    }
    photosBlock.appendChild(fragment);

    if (element.features.length) {
      const featuresList = popupElement.querySelector('.popup__features');
      featuresList.classList.remove('hidden');
      // Сначала очищаем список с удобствами
      featuresList.innerHTML = '';
      // Затем добавляем в него новые удобства
      for (let index = 0; index < element.features.length; index++) {
        const featureNewElement = document.createElement('li');
        featureNewElement.classList.add('popup__feature');
        featureNewElement.classList.add(`popup__feature--${element.features[index]}`);
        fragment.appendChild(featureNewElement);
      }
      featuresList.appendChild(fragment);
    }
  }
  return popupElement;
};

similarOffersPins.forEach((similarOffer) => {
  const { lat, lng } = similarOffer;

  const icon = L.icon({
    iconUrl: similarMarkerSetting.URL,
    iconSize: [similarMarkerSetting.WIDTH, similarMarkerSetting.HEIGHT],
    iconAnchor: [similarMarkerSetting.WIDTH / 2, similarMarkerSetting.HEIGHT],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(createCustomPopup(similarOffer),
      {
        keepInView: true,
      });
});
