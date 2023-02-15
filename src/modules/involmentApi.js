import renderData from './displayData.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3lD0DwLbuZ6dRNZiA1CE/likes';
const urlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3lD0DwLbuZ6dRNZiA1CE/comments';

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

const addComment = async (data = {}) => {
  await fetch(urlComments, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => console.log(response));
};

const getComments = async (data = '') => {
  const response = await fetch(urlComments + "?item_id=" + data);
  return response.json();
};

export { setLike, getLike , addComment, getComments};
