import { resetPage } from './map.js';
import { form } from './feeling-form.js';
import { showAlert } from './utils.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные');
      }
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные');
    });
};

const sendData = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          resetPage();
        } else {
          onFail();
        }
      })
      .catch(() => onFail());
  });
};

export { getData, sendData };
