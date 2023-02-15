import fetchCharacter from './apiManagement.js';
import { setLike, getLike } from './involmentApi.js';

const ul = document.querySelector('.cardContainer');
const commentSection = document.querySelector('.comment__section');
const main = document.querySelector('.cardCharacters');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const renderData = async (index) => {
  const cardIni = (index - 1) * 13 + 1;
  const cardEnd = cardIni + 12;
  const characteres = await fetchCharacter();
  const westeros = document.querySelector('#westeros');
  const essos = document.querySelector('#essos');
  const sothoryos = document.querySelector('#sothoryos');
  const ulthos = document.querySelector('#ulthos');
  let elementWithBox = null;
  ul.innerHTML = '';

  westeros.style.border = 0;
  essos.style.border = 0;
  sothoryos.style.border = 0;
  ulthos.style.border = 0;

  switch (index) {
    case 1:
      elementWithBox = document.querySelector('#westeros');
      break;

    case 2:
      elementWithBox = document.querySelector('#essos');
      break;

    case 3:
      elementWithBox = document.querySelector('#sothoryos');
      break;

    case 4:
      elementWithBox = document.querySelector('#ulthos');
      break;

    default:
      break;
  }
  elementWithBox.style.border = '2px Solid orange';
  elementWithBox.style.padding = '10px';

  getLike().then((likes) => {
    let i = 1;
    characteres.forEach((character) => {
      if (i >= cardIni && i <= cardEnd) {
        const itemFound = likes.find(
          (item) => item.item_id === `img${character.id}`
        );
        const numLikes = itemFound !== undefined ? itemFound.likes : 0;
        const imgUrl =
          itemFound !== undefined
            ? './assets/images/icons-sparkling-heart-48.png'
            : './assets/images/icons-white-heart-48.png';
        ul.innerHTML += `<li class="card">
          <div class="imageCard">
      <img src="${character.imageUrl}" alt="Character Image">
</div>
 <div class="cardData">
<div class="nameTitle">
                                                <h2 class="cardName">${character.fullName}</h2>
                                                <h3 class="cardName">${character.title}</h3>
</div>
<div class="likes">
                                                <img id="img${character.id}" class="imageLike" src="${imgUrl}" alt="">
                                                <p>${numLikes} likes</p>
  </div>
</div>
<div class="cardButtons">
<button class="btnComment">comments</button>
<button class="btnReservation">reservation</button>
</div>
</li>`;
        const comment = document.querySelectorAll('.btnComment');
        comment.forEach((element) => {
          element.addEventListener('click', (e) => {
            commentSection.innerHTML = '';
            e.preventDefault();
            commentSection.classList.add('active');
            main.classList.add('hide');
            header.classList.add('hide');
            footer.classList.add('hide');
            console.log('clicked');
            commentSection.innerHTML = `<div class="comment__section-close">
              <h4>x</h4>
            </div>
            <div class="comment__section-detail">
            <img src="${character.imageUrl}" alt="" />
            <p>id:${character.id}</p>
            <p>first name:${character.firstName}</p>
            <p>last name:${character.fullName}</p>
            <p>family:${character.family}</p>
              <p>full name:${character.fullName}</p>
              <p>title:${character.title}</p>
            </div>
            <div class="comment__section-input">
              <h2 class="add-comment">Add comment</h2>
              <input type="text" class="name" placeholder="Your Name" />
              <input type="text" class="comment" placeholder="add comment here" />
              <button class="btnSubmitt">submit</button>
            </div>`;
          });
        });

        const imgLike = document.querySelectorAll('.imageLike');

        imgLike.forEach((item) => {
          item.addEventListener('click', (e) => {
            e.target.src = './assets/images/icons-sparkling-heart-48.png';
            const item = { item_id: e.target.id };
            setLike(item);
          });
        });
      } else if (i > cardEnd) {
        return;
      }
      i += 1;
    });
  });
};

export default renderData;
