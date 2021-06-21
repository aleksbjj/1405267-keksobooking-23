const deactivateApp = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');

  const formElements = form.querySelectorAll('fieldset');
  formElements.forEach((element) => {
    element.disabled = true;
  });

  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.add('map__filters--disabled');

  const mapFilters = mapFilter.querySelectorAll('select');
  mapFilters.forEach((element) => {
    element.disabled = true;
  });
  const mapFilterElement = mapFilter.querySelector('fieldset');
  mapFilterElement.disabled = true;
};

const activateApp = () => {
  const form = document.querySelector('.ad-form');
  form.classList.remove('ad-form--disabled');

  const formElements = form.querySelectorAll('fieldset');
  formElements.forEach((element) => {
    element.disabled = false;
  });

  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.remove('map__filters--disabled');

  const mapFilters = mapFilter.querySelectorAll('select');
  mapFilters.forEach((element) => {
    element.disabled = false;
  });
  const mapFilterElement = mapFilter.querySelector('fieldset');
  mapFilterElement.disabled = false;
};

export {deactivateApp, activateApp};
