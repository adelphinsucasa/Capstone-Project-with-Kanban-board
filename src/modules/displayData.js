import { fetchCharacter, fetchCharacterbyId } from './apiManagement.js';
import countComments from './comments.js';
import { setLike, getLike, addComment, getComments } from './involmentApi.js';

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
  const home = document.querySelector('#homepage');
  const essos = document.querySelector('#essos');
  const sothoryos = document.querySelector('#sothoryos');
  const ulthos = document.querySelector('#ulthos');
  let elementWithBox = null;
  ul.innerHTML = '';

  home.style.border = 0;
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

  if (window.matchMedia('(max-width: 767px)')) {
    elementWithBox.style.border = '1px Solid orange';
    elementWithBox.style.padding = '2px';
  } else {
    elementWithBox.style.border = '2px Solid orange';
    elementWithBox.style.padding = '10px';
  }

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
                            <button id="btnComment${character.id}" class="btnComment">comments</button>
                            <button id="btnReservation${character.id}" class="btnReservation">reservation</button>
                          </div>
                        </li>`;

        const imgLike = document.querySelectorAll('.imageLike');

        imgLike.forEach((item) => {
          item.addEventListener('click', (e) => {
            e.target.src = './assets/images/icons-sparkling-heart-48.png';
            const item = { item_id: e.target.id };
            setLike(item);
          });
        });

        const comment = document.querySelectorAll('.btnComment');

        comment.forEach((element) => {
          element.addEventListener('click', (e) => {
            commentSection.innerHTML = '';
            e.preventDefault();
            commentSection.classList.remove('disable');
            commentSection.classList.add('active');
            main.classList.add('hide');
            header.classList.add('hide');
            footer.classList.add('hide');
            fetchCharacterbyId(e.target.id.slice(10)).then((data) => {
              commentSection.innerHTML = `<div class="comment__section-close">
                  <h4 id="btnClose" class="btnClose">x</h4>
                </div>
                <div class="comment__section-detail">
                <img src="${data.imageUrl}" alt="${data.firstName}" />
                <p>id:${data.id}</p>
                <p>first name:${data.firstName}</p>
                <p>last name:${data.fullName}</p>
                <p>family:${data.family}</p>
                  <p>full name:${data.fullName}</p>
                  <p>title:${data.title}</p>
                </div>
                <div class="comment__retrieved">
                  <h2 class="totalComments"><h2>
                  <ul class="ulComments"></ul>
                </div>
                <div class="comment__section-input">
                  <h2 class="add-comment">Add comment</h2>
                  <input type="text" class="name" placeholder="Your Name" />
                  <input type="text" class="comment" placeholder="add comment here" />
                  <button class="btnSubmitt">submit</button>
                </div>`;

              const btnClose = document.querySelector('.btnClose');
              btnClose.addEventListener('click', () => {
                commentSection.classList.remove('active');
                commentSection.classList.add('disable');
                main.classList.remove('hide');
                header.classList.remove('hide');
                footer.classList.remove('hide');
              });

              updateComments(data.id);

              const btnSubmitt = document.querySelector('.btnSubmitt');
              btnSubmitt.addEventListener('click', () => {
                const name = document.querySelector('.name');
                const comment = document.querySelector('.comment');

                const item = {
                  item_id: data.id,
                  username: name.value,
                  comment: comment.value,
                };
                addComment(item);
                name.value = '';
                comment.value = '';
                setTimeout(updateComments(data.id), 2000);
              });
            });
          });
        });
      } else if (i > cardEnd) {
        return;
      }
      i += 1;
    });
  });
};

const updateComments = (value) => {
  getComments(value).then((comments) => {
    // const totalComments = document.querySelector('.totalComments');
    // const numComments = (comments.length === undefined) ? 0 : comments.length;
    // totalComments.innerHTML = `Comments ( ${numComments} )`;

    const ulComments = document.querySelector('.ulComments');
    ulComments.innerHTML = '';
    comments.forEach((record) => {
      ulComments.innerHTML += `<li class="liComment">${record.creation_date} ${record.username}: ${record.comment}
        </li>`;
    });
    // totalComments.innerHTML = `Comments ( ${countComments} )`;
  });
};

export default renderData;
