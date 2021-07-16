import { FILE_TYPES } from './constants.js';
import { form } from './feeling-form.js';

const avatarChooser = form.querySelector('.ad-form-header__input');
const avatarPreview = form.querySelector('.ad-form-header__preview img');

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
