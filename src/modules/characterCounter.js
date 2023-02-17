import { fetchCharacter } from './apiManagement.js';

const totalCharacter = document.querySelector('.counter');
const countCharacter = async () => {
  const counter = await fetchCharacter();
  totalCharacter.innerHTML = `(${counter.length})`;
  return counter.length;
};
export default countCharacter;
