import { createArrayWithData } from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarOffers = createArrayWithData();

const fragment = document.createDocumentFragment();

similarOffers.forEach((similarOffer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  offerElement.querySelector('.popup__avatar').src = similarOffer.author.avatar;
  offerElement.querySelector('.popup__title').textContent = similarOffer.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = similarOffer.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${similarOffer.offer.price} ₽/ночь`;

  const mathHouseTypes = () => {
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

  offerElement.querySelector('.popup__type').textContent = mathHouseTypes();
  offerElement.querySelector('.popup__text--capacity').textContent = `${similarOffer.offer.rooms} комнаты для ${similarOffer.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${similarOffer.offer.checkin}, выезд до ${similarOffer.offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = similarOffer.offer.descriptions;

  //вывод фотографий
  const photosBlock = offerElement.querySelector('.popup__photos');
  const photoElement = photosBlock.querySelector('.popup__photo');
  photosBlock.removeChild(photoElement);

  for (let index = 0; index < similarOffer.offer.photos.length; index++) {
    const newPhotoElement = photoElement.cloneNode(true);
    newPhotoElement.src = similarOffer.offer.photos[index];
    fragment.appendChild(newPhotoElement);
  }
  photosBlock.appendChild(fragment);

  const featuresList = offerElement.querySelector('.popup__features');
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

  mapCanvas.appendChild(offerElement);
});
export { similarOffers };
