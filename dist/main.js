/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/apiManagement.js":
/*!**************************************!*\
  !*** ./src/modules/apiManagement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCharacter": () => (/* binding */ fetchCharacter),
/* harmony export */   "fetchCharacterbyId": () => (/* binding */ fetchCharacterbyId)
/* harmony export */ });
const url = 'https://ThronesApi.com/api/v2/Characters';

const fetchCharacter = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchCharacterbyId = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
};




/***/ }),

/***/ "./src/modules/characterCounter.js":
/*!*****************************************!*\
  !*** ./src/modules/characterCounter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiManagement.js */ "./src/modules/apiManagement.js");


const totalCharacter = document.querySelector('.counter');
const countCharacter = async () => {
  const counter = await (0,_apiManagement_js__WEBPACK_IMPORTED_MODULE_0__.fetchCharacter)();
  totalCharacter.innerHTML = `(${counter.length})`;
  return counter.length;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countCharacter);


/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComments = () => {
  const ulComments = document.querySelector('.ulComments');

  return ulComments.children.length === undefined
    ? 0
    : ulComments.children.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);


/***/ }),

/***/ "./src/modules/displayData.js":
/*!************************************!*\
  !*** ./src/modules/displayData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiManagement.js */ "./src/modules/apiManagement.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _involmentApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involmentApi.js */ "./src/modules/involmentApi.js");
/* harmony import */ var _characterCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characterCounter.js */ "./src/modules/characterCounter.js");





const ul = document.querySelector('.cardContainer');
const commentSection = document.querySelector('.comment__section');
const main = document.querySelector('.cardCharacters');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const renderData = async (index) => {
  let cardIni = 0;
  let cardEnd = 0;

  if (index === 0) {
    cardIni = 1;
    cardEnd = await (0,_characterCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else {
    cardIni = (index - 1) * 13 + 1;
    cardEnd = cardIni + 12;
  }

  const characteres = await (0,_apiManagement_js__WEBPACK_IMPORTED_MODULE_0__.fetchCharacter)();
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
    case 0:
      elementWithBox = document.querySelector('#homepage');
      break;

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

  (0,_involmentApi_js__WEBPACK_IMPORTED_MODULE_2__.getLike)().then((likes) => {
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
            (0,_involmentApi_js__WEBPACK_IMPORTED_MODULE_2__.setLike)(item);
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
            (0,_apiManagement_js__WEBPACK_IMPORTED_MODULE_0__.fetchCharacterbyId)(e.target.id.slice(10)).then((data) => {
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
                (0,_involmentApi_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(item)
                  .then((res) => {
                    name.value = '';
                    comment.value = '';
                    updateComments(data.id);
                  });
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
  (0,_involmentApi_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(value).then((comments) => {
    const ulComments = document.querySelector('.ulComments');
    ulComments.innerHTML = '';
    comments.forEach((record) => {
      ulComments.innerHTML += `<li class="liComment">${record.creation_date} ${record.username}: ${record.comment}
        </li>`;
    });
    const totalComments = document.querySelector('.totalComments');
    totalComments.innerHTML = `Comments ( ${(0,_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])()} )`;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);


/***/ }),

/***/ "./src/modules/involmentApi.js":
/*!*************************************!*\
  !*** ./src/modules/involmentApi.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "getLike": () => (/* binding */ getLike),
/* harmony export */   "setLike": () => (/* binding */ setLike)
/* harmony export */ });
/* harmony import */ var _displayData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData.js */ "./src/modules/displayData.js");


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
      (0,_displayData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.trunc(data.item_id.slice(3) / 13) + 1);
    });
};

const addComment = async (data = {}) => {
  await fetch(urlComments, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const getComments = async (data = '') => {
  const response = await fetch(`${urlComments}?item_id=${data}`);
  return response.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_displayData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayData.js */ "./src/modules/displayData.js");
/* harmony import */ var _modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/characterCounter.js */ "./src/modules/characterCounter.js");



const home = document.querySelector('#homepage');
const westeros = document.querySelector('#westeros');
const essos = document.querySelector('#essos');
const sothoryos = document.querySelector('#sothoryos');
const ulthos = document.querySelector('#ulthos');
window.onload = () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1);
  (0,_modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
home.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
  (0,_modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

westeros.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1);
});

essos.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2);
});

sothoryos.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
});

ulthos.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4);
});
// westeros.click();
(0,_modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2FwaU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2NoYXJhY3RlckNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9kaXNwbGF5RGF0YS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvaW52b2xtZW50QXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVybCA9ICdodHRwczovL1Rocm9uZXNBcGkuY29tL2FwaS92Mi9DaGFyYWN0ZXJzJztcclxuXHJcbmNvbnN0IGZldGNoQ2hhcmFjdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hDaGFyYWN0ZXJieUlkID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9LyR7aWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGZldGNoQ2hhcmFjdGVyLCBmZXRjaENoYXJhY3RlcmJ5SWQgfTtcclxuIiwiaW1wb3J0IHsgZmV0Y2hDaGFyYWN0ZXIgfSBmcm9tICcuL2FwaU1hbmFnZW1lbnQuanMnO1xyXG5cclxuY29uc3QgdG90YWxDaGFyYWN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlcicpO1xyXG5jb25zdCBjb3VudENoYXJhY3RlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb3VudGVyID0gYXdhaXQgZmV0Y2hDaGFyYWN0ZXIoKTtcclxuICB0b3RhbENoYXJhY3Rlci5pbm5lckhUTUwgPSBgKCR7Y291bnRlci5sZW5ndGh9KWA7XHJcbiAgcmV0dXJuIGNvdW50ZXIubGVuZ3RoO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb3VudENoYXJhY3RlcjtcclxuIiwiY29uc3QgY291bnRDb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCB1bENvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ29tbWVudHMnKTtcclxuXHJcbiAgcmV0dXJuIHVsQ29tbWVudHMuY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWRcclxuICAgID8gMFxyXG4gICAgOiB1bENvbW1lbnRzLmNoaWxkcmVuLmxlbmd0aDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50Q29tbWVudHM7XHJcbiIsImltcG9ydCB7IGZldGNoQ2hhcmFjdGVyLCBmZXRjaENoYXJhY3RlcmJ5SWQgfSBmcm9tICcuL2FwaU1hbmFnZW1lbnQuanMnO1xyXG5pbXBvcnQgY291bnRDb21tZW50cyBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuaW1wb3J0IHsgc2V0TGlrZSwgZ2V0TGlrZSwgYWRkQ29tbWVudCwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2ludm9sbWVudEFwaS5qcyc7XHJcbmltcG9ydCBjb3VudENoYXJhY3RlciBmcm9tICcuL2NoYXJhY3RlckNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZENvbnRhaW5lcicpO1xyXG5jb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50X19zZWN0aW9uJyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZENoYXJhY3RlcnMnKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG5cclxuY29uc3QgcmVuZGVyRGF0YSA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gIGxldCBjYXJkSW5pID0gMDtcclxuICBsZXQgY2FyZEVuZCA9IDA7XHJcblxyXG4gIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgY2FyZEluaSA9IDE7XHJcbiAgICBjYXJkRW5kID0gYXdhaXQgY291bnRDaGFyYWN0ZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2FyZEluaSA9IChpbmRleCAtIDEpICogMTMgKyAxO1xyXG4gICAgY2FyZEVuZCA9IGNhcmRJbmkgKyAxMjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlcmVzID0gYXdhaXQgZmV0Y2hDaGFyYWN0ZXIoKTtcclxuICBjb25zdCB3ZXN0ZXJvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZXN0ZXJvcycpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZXBhZ2UnKTtcclxuICBjb25zdCBlc3NvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlc3NvcycpO1xyXG4gIGNvbnN0IHNvdGhvcnlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3Rob3J5b3MnKTtcclxuICBjb25zdCB1bHRob3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWx0aG9zJyk7XHJcbiAgbGV0IGVsZW1lbnRXaXRoQm94ID0gbnVsbDtcclxuICB1bC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgaG9tZS5zdHlsZS5ib3JkZXIgPSAwO1xyXG4gIHdlc3Rlcm9zLnN0eWxlLmJvcmRlciA9IDA7XHJcbiAgZXNzb3Muc3R5bGUuYm9yZGVyID0gMDtcclxuICBzb3Rob3J5b3Muc3R5bGUuYm9yZGVyID0gMDtcclxuICB1bHRob3Muc3R5bGUuYm9yZGVyID0gMDtcclxuXHJcbiAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICBlbGVtZW50V2l0aEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lcGFnZScpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIGVsZW1lbnRXaXRoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlc3Rlcm9zJyk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgMjpcclxuICAgICAgZWxlbWVudFdpdGhCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXNzb3MnKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAzOlxyXG4gICAgICBlbGVtZW50V2l0aEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3Rob3J5b3MnKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSA0OlxyXG4gICAgICBlbGVtZW50V2l0aEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bHRob3MnKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykpIHtcclxuICAgIGVsZW1lbnRXaXRoQm94LnN0eWxlLmJvcmRlciA9ICcxcHggU29saWQgb3JhbmdlJztcclxuICAgIGVsZW1lbnRXaXRoQm94LnN0eWxlLnBhZGRpbmcgPSAnMnB4JztcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlbWVudFdpdGhCb3guc3R5bGUuYm9yZGVyID0gJzJweCBTb2xpZCBvcmFuZ2UnO1xyXG4gICAgZWxlbWVudFdpdGhCb3guc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICB9XHJcblxyXG4gIGdldExpa2UoKS50aGVuKChsaWtlcykgPT4ge1xyXG4gICAgbGV0IGkgPSAxO1xyXG4gICAgY2hhcmFjdGVyZXMuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XHJcbiAgICAgIGlmIChpID49IGNhcmRJbmkgJiYgaSA8PSBjYXJkRW5kKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUZvdW5kID0gbGlrZXMuZmluZChcclxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGBpbWcke2NoYXJhY3Rlci5pZH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBudW1MaWtlcyA9IGl0ZW1Gb3VuZCAhPT0gdW5kZWZpbmVkID8gaXRlbUZvdW5kLmxpa2VzIDogMDtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPVxyXG4gICAgICAgICAgaXRlbUZvdW5kICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAnLi9hc3NldHMvaW1hZ2VzL2ljb25zLXNwYXJrbGluZy1oZWFydC00OC5wbmcnXHJcbiAgICAgICAgICAgIDogJy4vYXNzZXRzL2ltYWdlcy9pY29ucy13aGl0ZS1oZWFydC00OC5wbmcnO1xyXG4gICAgICAgIHVsLmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZUNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjaGFyYWN0ZXIuaW1hZ2VVcmx9XCIgYWx0PVwiQ2hhcmFjdGVyIEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmREYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmROYW1lXCI+JHtjaGFyYWN0ZXIuZnVsbE5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZE5hbWVcIj4ke2NoYXJhY3Rlci50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImltZyR7Y2hhcmFjdGVyLmlkfVwiIGNsYXNzPVwiaW1hZ2VMaWtlXCIgc3JjPVwiJHtpbWdVcmx9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7bnVtTGlrZXN9IGxpa2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCdXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuQ29tbWVudCR7Y2hhcmFjdGVyLmlkfVwiIGNsYXNzPVwiYnRuQ29tbWVudFwiPmNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuUmVzZXJ2YXRpb24ke2NoYXJhY3Rlci5pZH1cIiBjbGFzcz1cImJ0blJlc2VydmF0aW9uXCI+cmVzZXJ2YXRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xyXG5cclxuICAgICAgICBjb25zdCBpbWdMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlTGlrZScpO1xyXG5cclxuICAgICAgICBpbWdMaWtlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL2ljb25zLXNwYXJrbGluZy1oZWFydC00OC5wbmcnO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0geyBpdGVtX2lkOiBlLnRhcmdldC5pZCB9O1xyXG4gICAgICAgICAgICBzZXRMaWtlKGl0ZW0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuQ29tbWVudCcpO1xyXG5cclxuICAgICAgICBjb21tZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZmV0Y2hDaGFyYWN0ZXJieUlkKGUudGFyZ2V0LmlkLnNsaWNlKDEwKSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29tbWVudF9fc2VjdGlvbi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgaWQ9XCJidG5DbG9zZVwiIGNsYXNzPVwiYnRuQ2xvc2VcIj54PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3NlY3Rpb24tZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZVVybH1cIiBhbHQ9XCIke2RhdGEuZmlyc3ROYW1lfVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5pZDoke2RhdGEuaWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Zmlyc3QgbmFtZToke2RhdGEuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmxhc3QgbmFtZToke2RhdGEuZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmFtaWx5OiR7ZGF0YS5mYW1pbHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5mdWxsIG5hbWU6JHtkYXRhLmZ1bGxOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+dGl0bGU6JHtkYXRhLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3JldHJpZXZlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0b3RhbENvbW1lbnRzXCI+PGgyPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bENvbW1lbnRzXCI+PC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3NlY3Rpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5BZGQgY29tbWVudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCJhZGQgY29tbWVudCBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blN1Ym1pdHRcIj5zdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bkNsb3NlJyk7XHJcbiAgICAgICAgICAgICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRzKGRhdGEuaWQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBidG5TdWJtaXR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blN1Ym1pdHQnKTtcclxuICAgICAgICAgICAgICBidG5TdWJtaXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtX2lkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZTogbmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50KGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRzKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpID4gY2FyZEVuZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpICs9IDE7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUNvbW1lbnRzID0gKHZhbHVlKSA9PiB7XHJcbiAgZ2V0Q29tbWVudHModmFsdWUpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XHJcbiAgICBjb25zdCB1bENvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ29tbWVudHMnKTtcclxuICAgIHVsQ29tbWVudHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChyZWNvcmQpID0+IHtcclxuICAgICAgdWxDb21tZW50cy5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImxpQ29tbWVudFwiPiR7cmVjb3JkLmNyZWF0aW9uX2RhdGV9ICR7cmVjb3JkLnVzZXJuYW1lfTogJHtyZWNvcmQuY29tbWVudH1cclxuICAgICAgICA8L2xpPmA7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRvdGFsQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWxDb21tZW50cycpO1xyXG4gICAgdG90YWxDb21tZW50cy5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCAke2NvdW50Q29tbWVudHMoKX0gKWA7XHJcbiAgfSk7XG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRGF0YTtcclxuIiwiaW1wb3J0IHJlbmRlckRhdGEgZnJvbSAnLi9kaXNwbGF5RGF0YS5qcyc7XHJcblxyXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvM2xEMER3TGJ1WjZkUk5aaUExQ0UvbGlrZXMnO1xyXG5jb25zdCB1cmxDb21tZW50cyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8zbEQwRHdMYnVaNmRSTlppQTFDRS9jb21tZW50cyc7XHJcblxyXG5jb25zdCBnZXRMaWtlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChkYXRhID0ge30pID0+IHtcclxuICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJlbmRlckRhdGEoTWF0aC50cnVuYyhkYXRhLml0ZW1faWQuc2xpY2UoMykgLyAxMykgKyAxKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChkYXRhID0ge30pID0+IHtcclxuICBhd2FpdCBmZXRjaCh1cmxDb21tZW50cywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChkYXRhID0gJycpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybENvbW1lbnRzfT9pdGVtX2lkPSR7ZGF0YX1gKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXRMaWtlLCBnZXRMaWtlLCBhZGRDb21tZW50LCBnZXRDb21tZW50cyxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVyRGF0YSBmcm9tICcuL21vZHVsZXMvZGlzcGxheURhdGEuanMnO1xyXG5pbXBvcnQgY291bnRDaGFyYWN0ZXIgZnJvbSAnLi9tb2R1bGVzL2NoYXJhY3RlckNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lcGFnZScpO1xyXG5jb25zdCB3ZXN0ZXJvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZXN0ZXJvcycpO1xyXG5jb25zdCBlc3NvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlc3NvcycpO1xyXG5jb25zdCBzb3Rob3J5b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc290aG9yeW9zJyk7XHJcbmNvbnN0IHVsdGhvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bHRob3MnKTtcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICByZW5kZXJEYXRhKDEpO1xyXG4gIGNvdW50Q2hhcmFjdGVyKCk7XHJcbn07XHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVuZGVyRGF0YSgwKTtcclxuICBjb3VudENoYXJhY3RlcigpO1xyXG59KTtcclxuXHJcbndlc3Rlcm9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlbmRlckRhdGEoMSk7XHJcbn0pO1xyXG5cclxuZXNzb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVuZGVyRGF0YSgyKTtcclxufSk7XHJcblxyXG5zb3Rob3J5b3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVuZGVyRGF0YSgzKTtcclxufSk7XHJcblxyXG51bHRob3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVuZGVyRGF0YSg0KTtcclxufSk7XHJcbi8vIHdlc3Rlcm9zLmNsaWNrKCk7XHJcbmNvdW50Q2hhcmFjdGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==