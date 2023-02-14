import { fetchCharacter } from "./apiManagement.js";

const ul = document.querySelector('.cardContainer');

const renderData = async () => {
    const data = await fetchCharacter();
    ul.innerHTML = '';

    data.forEach(element => {
        ul.innerHTML += `<li class="card">
                            <div class="imageCard">
                            <img src="${element.imageUrl}" alt="Character Image">
                            </div>
                            <div class="cardData">
                            <h2 class="cardName">${element.fullName}</h2>
                            <img src="./assets/images/icons-white-heart-48.png" alt="">
                            </div>
                            <p>5 likes</p>
                            <button>comments</button>
                        </li>`;    
    });
} 

export default renderData;


