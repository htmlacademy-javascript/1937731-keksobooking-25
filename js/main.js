<<<<<<< HEAD
/* eslint-disable no-console */
'use strict';

import { ads } from './data.js';

ads(8);
=======
/* eslint-disable no-alert */
const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkIns = ['12:00', '13:00', '14:00'];

const checkOuts = ['12:00', '13:00', '14:00'];

const featuresAll = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photosAll = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const AD_COUNT = 15;

function getRandomPositiveInt (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function getRandomFloat(a, b, accuracy) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(accuracy);
}

const createAvatarUrlAll = (amount) => {
  const arrayNew = new Array(amount);
  for (let i = 0; i <= amount-1; i++) {
    arrayNew [i] = 'img/avatars/user' + i + '.png';
    if (i < 10) {
      arrayNew [i] = 'img/avatars/user0' + i + '.png';
    }
  }
  return arrayNew;
};

const avatarUrl = (urlArray) => urlArray.splice(0, 1);

const locationCoor = {
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5),
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

const avatarArr = createAvatarUrlAll(AD_COUNT);

function createAuthor() {
  return {
    avatar: avatarUrl(avatarArr),
  };
}

const createOffer = () => ({
  title: 'The Best Booking Offer',
  adress: locationCoor.lat + ' ' + locationCoor.lng,
  price: getRandomPositiveInt(1, 1000),
  type: getRandomArrayElement(types),
  rooms: getRandomPositiveInt(1, 5),
  guests: getRandomPositiveInt(1, 10),
  checkIn: getRandomArrayElement(checkIns),
  checkOut: getRandomArrayElement(checkOuts),
  features: createRandomArrayFromArray(featuresAll),
  description: 'Beautiful and comfortable appartment',
  photos: createRandomArrayFromArray(photosAll),
  location: locationCoor,
});


const createAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
});


const ads = Array.from({length: AD_COUNT}, createAd);

>>>>>>> 0debce689d0565a091d1275b2bc4d3fc7ed10755
