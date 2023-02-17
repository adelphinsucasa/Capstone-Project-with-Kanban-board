import { fetchCharacter } from './apiManagement.js';

const totalCharacter = document.querySelector('.counter');
const countCharacter = async () => {
  const counter = await fetchCharacter();
  totalCharacter.innerHTML = `(${counter.length})`;
  console.log(counter)
  return counter.length;
};
export default countCharacter;
