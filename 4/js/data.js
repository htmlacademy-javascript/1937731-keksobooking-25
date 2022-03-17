'use strict';

import  { getRandomArrayElement, getRandomFloat, getRandomPositiveInt, createRandomArrayFromArray}  from './util.js';

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

const titles = ['Best offer:', 'Only today:', 'Great deal:'];

const descriptions =['Comfortable and large', 'Breakfast included', 'Panoramic windows and fast wi-fi'];

const AD_COUNT = 15;

const createAvatarUrlAll = (amount) => {
  const arrayNew = new Array(amount);
  for (let i = 0; i <= amount-1; i++) {
    arrayNew [i] = `img/avatars/user${  i  }.png`;
    if (i < 10) {
      arrayNew [i] = `img/avatars/user0${  i  }.png`;
    }
  }
  return arrayNew;
};

const getAvatarUrl = (avatarUrlArray) => avatarUrlArray.splice(0, 1);

const locationCoor = {
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5),
};

const avatarArr = createAvatarUrlAll(AD_COUNT);

const createAuthor = () => ({
  avatar: getAvatarUrl(avatarArr),
});

const createOffer = () => ({
  title: getRandomArrayElement(titles),
  address: `${locationCoor.lat  } ${  locationCoor.lng}`,
  price: getRandomPositiveInt(1, 1000),
  type: getRandomArrayElement(types),
  rooms: getRandomPositiveInt(1, 5),
  guests: getRandomPositiveInt(1, 10),
  checkIn: getRandomArrayElement(checkIns),
  checkOut: getRandomArrayElement(checkOuts),
  features: createRandomArrayFromArray(featuresAll),
  description: getRandomArrayElement(descriptions),
  photos: createRandomArrayFromArray(photosAll),
  location: locationCoor,
});

const createAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
});


const ads = (amount) => {
 return Array.from({length: amount}, createAd);
};

export {ads};
