/* eslint-disable no-alert */
function getRandomInt (min, max) {
  if (min<0 || min>=max || max<=0) {
    alert('Неверные значения');
  }
  return Math.floor(Math.random()*max);
}
function getRandomFloat(min, max, accuracy) {
  if (min<0 || min>=max || max<=0) {

    alert('Неверные значения');
  }
  const afterDot = Math.pow(10, accuracy);
  return Math.floor((Math.random()*(max-min)+min)*afterDot)/afterDot;
}

getRandomFloat(0, 50, 3);
getRandomInt(10, 25);
