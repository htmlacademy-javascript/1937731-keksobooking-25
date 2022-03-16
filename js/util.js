'use strict';

const getRandomPositiveInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomFloat = (a, b, accuracy) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(accuracy);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInt(0, elements.length - 1)];

const createRandomArrayFromArray = (array) => {
  const arr = Array.from(array);
  const arrayNew = new Array(getRandomPositiveInt(1, arr.length));
  for (let i = 0; i < arrayNew.length; i++ ){
    arrayNew[i] = arr.splice(getRandomPositiveInt(0, arr.length - 1), 1);
  }
  return arrayNew;
};

export {getRandomArrayElement, createRandomArrayFromArray, getRandomFloat, getRandomPositiveInt};
