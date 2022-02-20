/* eslint-disable no-alert */
function getRandomNumber(min, max, accuracy) {
  if (min<0 || min>=max || max<=0) {

    alert('Неверные значения');
  }
  const afterDot = Math.pow(10, accuracy);
  return Math.floor((Math.random()*(max-min)+min)*afterDot)/afterDot;
}

getRandomNumber(0, 50, 3);
