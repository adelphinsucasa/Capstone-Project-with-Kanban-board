const url = 'https://ThronesApi.com/api/v2/Characters';

const fetchCharacter = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetchCharacter };
