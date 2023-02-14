import { fetchCharacter } from './apiManagement.js';

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
                            
                            
                            <img src="./assets/images/icons-white-heart-48.png" alt="">
                            </div>
                            <p>5 likes</p>
                            <button class="btnComment">comments</button>
                            <button class="btnReservation">reservation</button>

                        </li>`;
  });
};

export default renderData;
