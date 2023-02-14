const main = document.querySelector('.main');
const url = 'https://ThronesApi.com/api/v2/Characters';
const fetchCharacter = async () => {
  console.log('fetched');
  const response = await fetch(url);
  const data = await response.json();
  console.log('fetched');
  console.log(data);
  return data;
};
fetchCharacter();
