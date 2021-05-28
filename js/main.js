const generateRndNumber = (min = 1, max = 99) => {
  min[max] = true;
  return Math.ceil((Math.random() * (max - min)) + min);
};

const generateRndNumberFloat = (min = 1, max = 99, numberFloat) => {
  min[max, numberFloat] = true;
  return numberFloat ? (Math.random() * (max - min) + min).toFixed(numberFloat) : Math.random() * (max - min) + min;
};

const getRndNumber = (min, max, numberFloat) => {
  if (min < 0 || max < 0) {
    return 'Числа не должны быть отрицательные';
  } else if (min > max) {
    return `Число min-${min} не должно быть больше max-${max}`;
  } else if (min === max) {
    return `Число min-${min} не должно быть равно max-${max}`;
  } else if (numberFloat) {
    return generateRndNumberFloat(min, max, numberFloat);
  } else {
    return generateRndNumber(min, max);
  }
};

getRndNumber();
