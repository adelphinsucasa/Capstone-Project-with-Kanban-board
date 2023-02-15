import renderData from './displayData.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3lD0DwLbuZ6dRNZiA1CE/likes';

const getLike = async () => {
  const response = await fetch(url);
  return response.json();
};

const setLike = async (data = {}) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      renderData(Math.trunc(data.item_id.slice(3) / 13) + 1);
    });
};

export { setLike, getLike };
