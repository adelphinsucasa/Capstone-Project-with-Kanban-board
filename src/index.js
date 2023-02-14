import { fetchCharacter } from "./modules/apiManagement.js";
import renderData from "./modules/displayData.js";

const main = document.querySelector('.main');
const ul = document.querySelector('.cardContainer');

renderData();
