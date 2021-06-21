import { createArrayWithData } from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarOffers = createArrayWithData();

const fragment = document.createDocumentFragment();

similarOffers.forEach((similarOffer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  if (similarOffer.author.avatar.length) {
    offerElement.querySelector('.popup__avatar').classList.remove('hidden');
    offerElement.querySelector('.popup__avatar').src = similarOffer.author.avatar;
  }
  if (similarOffer.offer.title.length) {
    offerElement.querySelector('.popup__title').classList.remove('hidden');
    offerElement.querySelector('.popup__title').textContent = similarOffer.offer.title;
  }
  if (similarOffer.offer.address.length) {
    offerElement.querySelector('.popup__text--address').classList.remove('hidden');
    offerElement.querySelector('.popup__text--address').textContent = similarOffer.offer.address;
  }
  if (similarOffer.offer.price) {
    offerElement.querySelector('.popup__text--price').classList.remove('hidden');
    offerElement.querySelector('.popup__text--price').textContent = `${similarOffer.offer.price} ₽/ночь`;
  }
  if (similarOffer.offer.type.length) {
    offerElement.querySelector('.popup__type').classList.remove('hidden');
    const getHouseTypes = () => {
      switch (similarOffer.offer.type) {
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
    offerElement.querySelector('.popup__type').textContent = getHouseTypes();
  }
  offerElement.querySelector('.popup__text--capacity').textContent = `${similarOffer.offer.rooms} комнаты для ${similarOffer.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${similarOffer.offer.checkin}, выезд до ${similarOffer.offer.checkout}`;

  if (similarOffer.offer.descriptions.length) {
    offerElement.querySelector('.popup__description').classList.remove('hidden');
    offerElement.querySelector('.popup__description').textContent = similarOffer.offer.descriptions;
  }
  //вывод фотографий
  if (similarOffer.offer.photos.length) {
    const photosBlock = offerElement.querySelector('.popup__photos');
    const photoElement = photosBlock.querySelector('.popup__photo');
    photosBlock.classList.remove('hidden');
    photosBlock.removeChild(photoElement);

    for (let index = 0; index < similarOffer.offer.photos.length; index++) {
      const newPhotoElement = photoElement.cloneNode(true);
      newPhotoElement.src = similarOffer.offer.photos[index];
      fragment.appendChild(newPhotoElement);
    }
    photosBlock.appendChild(fragment);
  }
  if (similarOffer.offer.features.length) {
    const featuresList = offerElement.querySelector('.popup__features');
    featuresList.classList.remove('hidden');
    // Сначала очищаем список с удобствами
    featuresList.innerHTML = '';
    // Затем добавляем в него новые удобства
    for (let index = 0; index < similarOffer.offer.features.length; index++) {
      const featureNewElement = document.createElement('li');
      featureNewElement.classList.add('popup__feature');
      featureNewElement.classList.add(`popup__feature--${similarOffer.offer.features[index]}`);
      fragment.appendChild(featureNewElement);
    }
    featuresList.appendChild(fragment);
  }

  mapCanvas.appendChild(offerElement);
});
export { similarOffers };
