import { fetchCharacter } from './apiManagement.js';
import { setLike } from './involmentApi.js';

const ul = document.querySelector('.cardContainer');

const renderData = async () => {
  const data = await fetchCharacter();
  ul.innerHTML = '';

  data.forEach((element) => {
    ul.innerHTML += `<li class="card">
                            <div class="imageCard">
                            <img src="${element.imageUrl}" alt="Character Image">
                            </div>
                            <div class="cardData">
                            <div class="nameTitle">
                            <h2 class="cardName">${element.fullName}</h2>
                            <h2 class="cardName">${element.title}</h2>
                            </div>
                            <div class="likes">
                            <img id="img${element.id}" class="imageLike" src="./assets/images/icons-white-heart-48.png" alt="">
                            <p>5 likes</p>
                            </div>
                            </div>
                            <button class="btnComment">comments</button>
                            <button class="btnReservation">reservation</button>
                        </li>`;
    var imgLike = document.querySelectorAll(`.imageLike`);

    imgLike.forEach((item) => {
      item.addEventListener('click', (e) => {
        console.log(e.target);
        /*this.src = "./assets/images/icons-sparkling-heart-48.png"
            const item = {"item_id": element.id}
            setLike(item);*/
      });
    });
  });
};

export default renderData;
