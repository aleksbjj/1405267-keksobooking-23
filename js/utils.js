import { DEFAULT_MIN_STEP_VALUE, DEFAULT_MAX_STEP_VALUE, DEFAULT_NUMBER_FLOAT_VALUE } from './constants.js';

const generateRandomNumber = (min = DEFAULT_MIN_STEP_VALUE, max = DEFAULT_MAX_STEP_VALUE) => Math.ceil((Math.random() * (max - min)) + min);

const generateRandomNumberFloat = (min = DEFAULT_MIN_STEP_VALUE, max = DEFAULT_MAX_STEP_VALUE, numberFloat = DEFAULT_NUMBER_FLOAT_VALUE) => {
  const result = Math.random() * (max - min) + min;
  return result.toFixed(numberFloat);
};

const getRandomNumber = (min = DEFAULT_MIN_STEP_VALUE, max = DEFAULT_MAX_STEP_VALUE, numberFloat = DEFAULT_NUMBER_FLOAT_VALUE) => {
  if (min < 0 || max < 0) {
    return 'Числа не должны быть отрицательные';
  } else if (min > max) {
    return `Число min-${min} не должно быть больше max-${max}`;
  } else if (min === max) {
    return `Число min-${min} не должно быть равно max-${max}`;
  } else if (numberFloat) {
    return generateRandomNumberFloat(min, max, numberFloat);
  }
  else {
    return generateRandomNumber(min, max);
  }
};

getRandomNumber();

const getRandomFeatures = (items) => {
  const randomIndex = getRandomNumber(0, items.length - 1);
  const randomFeatures = items.slice(0, randomIndex + 1);
  return randomFeatures;
};

export { getRandomNumber, getRandomFeatures };


