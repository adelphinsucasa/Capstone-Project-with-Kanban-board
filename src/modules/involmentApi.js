const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tXDs92p4CgyF2G2M8iej/likes';
//Id: tXDs92p4CgyF2G2M8iej
///apps/:app_id/likes/

const getLike = async (item) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const setLike = async (data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    
      return response.json();
};

export { setLike };
