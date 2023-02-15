import renderData from './modules/displayData.js';

const westeros = document.querySelector('#westeros');
const essos = document.querySelector('#essos');
const sothoryos = document.querySelector('#sothoryos');
const ulthos = document.querySelector('#ulthos');

westeros.addEventListener('click', () => {
  renderData(1);
});

essos.addEventListener('click', () => {
  renderData(2);
});

sothoryos.addEventListener('click', () => {
  renderData(3);
});

ulthos.addEventListener('click', () => {
  renderData(4);
});

westeros.click();