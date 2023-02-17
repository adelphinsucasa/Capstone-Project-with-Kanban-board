/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  margin-bottom: 60px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  margin: 0;\r\n  padding-top: 5px;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: rgb(31, 30, 30, 0.8);\r\n}\r\n\r\nheader .logo img {\r\n  width: 120px;\r\n  height: auto;\r\n  margin-left: 40px;\r\n}\r\n\r\nheader nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 80px;\r\n  margin-left: 200px;\r\n}\r\n\r\nheader nav li a {\r\n  font-size: 28px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .cardContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\nmain .card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25%;\r\n  height: 500px;\r\n  margin: 20px 0;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nmain .card .imageCard {\r\n  text-align: center;\r\n}\r\n\r\nmain .card .imageCard img {\r\n  width: 280px;\r\n  height: 250px;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\nmain .card .cardData {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  margin: 0 55px;\r\n}\r\n\r\nmain .card .cardData img {\r\n  width: 24px;\r\n  height: auto;\r\n}\r\n\r\n.comment__retrieved h2 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData h2 {\r\n  font-size: 20px;\r\n}\r\n\r\nmain .card .cardData h3 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData .nameTitle {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 65%;\r\n}\r\n\r\nmain .card .cardData .likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 5px;\r\n  width: 35%;\r\n}\r\n\r\nmain .card .cardData .likes .imageLike {\r\n  cursor: pointer;\r\n}\r\n\r\nmain .card .cardButtons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  gap: 20px;\r\n  margin: 0 50px;\r\n}\r\n\r\nmain .card .cardButtons .btnComment,\r\nmain .card .cardButtons .btnReservation {\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 10px 0;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\nmain .card .cardButtons .btnComment:hover,\r\nmain .card .cardButtons .btnReservation:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\nmain .card .cardButtons .btnComment:active,\r\nmain .card .cardButtons .btnReservation:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.comment__section {\r\n  width: 60%;\r\n  height: 100vh;\r\n  margin-left: -100%;\r\n  position: fixed;\r\n  top: 10vh;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow-y: scroll;\r\n  border: 8px solid white;\r\n}\r\n\r\n.comment__section-close {\r\n  align-self: flex-end;\r\n  color: white;\r\n  text-align: end;\r\n  font-size: 40px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.btnClose {\r\n  cursor: pointer;\r\n}\r\n\r\n.comment__section-detail {\r\n  width: 100%;\r\n  padding: 20px;\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved {\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.comment__section-input {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-bottom: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.add-comment {\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment__section-input .name {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n.comment__section-input .comment {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 100px;\r\n}\r\n\r\n.btnSubmitt {\r\n  width: 160px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 5px;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.btnSubmitt:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\n.btnSubmitt:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  height: 100vh;\r\n  animation: active ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n  margin-left: 20%;\r\n}\r\n\r\n.disable {\r\n  margin-left: -100%;\r\n  animation: disable ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.hide {\r\n  opacity: 0.1;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes active {\r\n  0% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: 20%;\r\n  }\r\n}\r\n\r\n@keyframes disable {\r\n  0% {\r\n    margin-left: 20%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: -100%;\r\n  }\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  color: white;\r\n  background-color: rgb(31, 30, 30);\r\n}\r\n\r\n.textFooter {\r\n  font-size: 15px;\r\n  margin: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header {\r\n    width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    gap: 10px;\r\n  }\r\n\r\n  .comment__section-detail img {\r\n    width: 80%;\r\n  }\r\n\r\n  header .logo img {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  header nav {\r\n    width: 100%;\r\n    margin-left: 0;\r\n    gap: 8px;\r\n    margin-right: 2px;\r\n  }\r\n\r\n  header nav li a {\r\n    list-style: none;\r\n    font-size: 10px;\r\n  }\r\n\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card {\r\n    height: auto;\r\n  }\r\n\r\n  main .cardContainer {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .cardContainer li {\r\n    width: 70%;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .imageCard img {\r\n    width: 180px;\r\n    height: 150px;\r\n  }\r\n\r\n  main .card .cardData {\r\n    margin: 5px;\r\n  }\r\n\r\n  .comment__retrieved h2 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData h2 {\r\n    font-size: 10px;\r\n  }\r\n\r\n  main .card .cardData h3 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData .likes {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .cardData .likes .imageLike {\r\n    width: 14px;\r\n  }\r\n\r\n  .comment__section-detail p {\r\n    font-size: 12px;\r\n  }\r\n\r\n  main .card .cardData .likes p {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardButtons {\r\n    gap: 5px;\r\n  }\r\n\r\n  main .card .cardButtons .btnComment,\r\n  main .card .cardButtons .btnReservation {\r\n    font-size: 10px;\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .comment__section {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment__section-close {\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .comment__section-detail {\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .comment__retrieved ul {\r\n    gap: 5px;\r\n    width: 80%;\r\n    font-size: 8px;\r\n    margin-left: 30px;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__retrieved ul li {\r\n    text-align: left;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__section-input {\r\n    width: 90%;\r\n    margin-bottom: 5px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .add-comment {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .comment__section-input .name {\r\n    margin-bottom: 10px;\r\n    height: 20px;\r\n  }\r\n\r\n  .comment__section-input .comment {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .btnSubmitt {\r\n    width: 80px;\r\n    height: 20px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 2px;\r\n    box-shadow: 2px 2px 2px 2px gray;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .btnSubmitt:active {\r\n    transform: translateY(2px);\r\n  }\r\n\r\n  .active {\r\n    animation-fill-mode: forwards;\r\n    margin-left: 5%;\r\n  }\r\n\r\n  @keyframes active {\r\n    0% {\r\n      margin-left: -100%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: 5%;\r\n    }\r\n  }\r\n\r\n  @keyframes disable {\r\n    0% {\r\n      margin-left: 5%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: -100%;\r\n    }\r\n  }\r\n\r\n  footer .textFooter {\r\n    font-size: 10px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  margin-bottom: 60px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  margin: 0;\r\n  padding-top: 5px;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: rgb(31, 30, 30, 0.8);\r\n}\r\n\r\nheader .logo img {\r\n  width: 120px;\r\n  height: auto;\r\n  margin-left: 40px;\r\n}\r\n\r\nheader nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 80px;\r\n  margin-left: 200px;\r\n}\r\n\r\nheader nav li a {\r\n  font-size: 28px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .cardContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\nmain .card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25%;\r\n  height: 500px;\r\n  margin: 20px 0;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nmain .card .imageCard {\r\n  text-align: center;\r\n}\r\n\r\nmain .card .imageCard img {\r\n  width: 280px;\r\n  height: 250px;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\nmain .card .cardData {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  margin: 0 55px;\r\n}\r\n\r\nmain .card .cardData img {\r\n  width: 24px;\r\n  height: auto;\r\n}\r\n\r\n.comment__retrieved h2 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData h2 {\r\n  font-size: 20px;\r\n}\r\n\r\nmain .card .cardData h3 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData .nameTitle {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 65%;\r\n}\r\n\r\nmain .card .cardData .likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 5px;\r\n  width: 35%;\r\n}\r\n\r\nmain .card .cardData .likes .imageLike {\r\n  cursor: pointer;\r\n}\r\n\r\nmain .card .cardButtons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  gap: 20px;\r\n  margin: 0 50px;\r\n}\r\n\r\nmain .card .cardButtons .btnComment,\r\nmain .card .cardButtons .btnReservation {\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 10px 0;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\nmain .card .cardButtons .btnComment:hover,\r\nmain .card .cardButtons .btnReservation:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\nmain .card .cardButtons .btnComment:active,\r\nmain .card .cardButtons .btnReservation:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.comment__section {\r\n  width: 60%;\r\n  height: 100vh;\r\n  margin-left: -100%;\r\n  position: fixed;\r\n  top: 10vh;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow-y: scroll;\r\n  border: 8px solid white;\r\n}\r\n\r\n.comment__section-close {\r\n  align-self: flex-end;\r\n  color: white;\r\n  text-align: end;\r\n  font-size: 40px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.btnClose {\r\n  cursor: pointer;\r\n}\r\n\r\n.comment__section-detail {\r\n  width: 100%;\r\n  padding: 20px;\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved {\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.comment__section-input {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-bottom: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.add-comment {\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment__section-input .name {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n.comment__section-input .comment {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 100px;\r\n}\r\n\r\n.btnSubmitt {\r\n  width: 160px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 5px;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.btnSubmitt:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\n.btnSubmitt:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  height: 100vh;\r\n  animation: active ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n  margin-left: 20%;\r\n}\r\n\r\n.disable {\r\n  margin-left: -100%;\r\n  animation: disable ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.hide {\r\n  opacity: 0.1;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes active {\r\n  0% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: 20%;\r\n  }\r\n}\r\n\r\n@keyframes disable {\r\n  0% {\r\n    margin-left: 20%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: -100%;\r\n  }\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  color: white;\r\n  background-color: rgb(31, 30, 30);\r\n}\r\n\r\n.textFooter {\r\n  font-size: 15px;\r\n  margin: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header {\r\n    width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    gap: 10px;\r\n  }\r\n\r\n  .comment__section-detail img {\r\n    width: 80%;\r\n  }\r\n\r\n  header .logo img {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  header nav {\r\n    width: 100%;\r\n    margin-left: 0;\r\n    gap: 8px;\r\n    margin-right: 2px;\r\n  }\r\n\r\n  header nav li a {\r\n    list-style: none;\r\n    font-size: 10px;\r\n  }\r\n\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card {\r\n    height: auto;\r\n  }\r\n\r\n  main .cardContainer {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .cardContainer li {\r\n    width: 70%;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .imageCard img {\r\n    width: 180px;\r\n    height: 150px;\r\n  }\r\n\r\n  main .card .cardData {\r\n    margin: 5px;\r\n  }\r\n\r\n  .comment__retrieved h2 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData h2 {\r\n    font-size: 10px;\r\n  }\r\n\r\n  main .card .cardData h3 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData .likes {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .cardData .likes .imageLike {\r\n    width: 14px;\r\n  }\r\n\r\n  .comment__section-detail p {\r\n    font-size: 12px;\r\n  }\r\n\r\n  main .card .cardData .likes p {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardButtons {\r\n    gap: 5px;\r\n  }\r\n\r\n  main .card .cardButtons .btnComment,\r\n  main .card .cardButtons .btnReservation {\r\n    font-size: 10px;\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .comment__section {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment__section-close {\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .comment__section-detail {\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .comment__retrieved ul {\r\n    gap: 5px;\r\n    width: 80%;\r\n    font-size: 8px;\r\n    margin-left: 30px;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__retrieved ul li {\r\n    text-align: left;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__section-input {\r\n    width: 90%;\r\n    margin-bottom: 5px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .add-comment {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .comment__section-input .name {\r\n    margin-bottom: 10px;\r\n    height: 20px;\r\n  }\r\n\r\n  .comment__section-input .comment {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .btnSubmitt {\r\n    width: 80px;\r\n    height: 20px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 2px;\r\n    box-shadow: 2px 2px 2px 2px gray;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .btnSubmitt:active {\r\n    transform: translateY(2px);\r\n  }\r\n\r\n  .active {\r\n    animation-fill-mode: forwards;\r\n    margin-left: 5%;\r\n  }\r\n\r\n  @keyframes active {\r\n    0% {\r\n      margin-left: -100%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: 5%;\r\n    }\r\n  }\r\n\r\n  @keyframes disable {\r\n    0% {\r\n      margin-left: 5%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: -100%;\r\n    }\r\n  }\r\n\r\n  footer .textFooter {\r\n    font-size: 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/icons-sparkling-heart-48.png":
/*!********************************************************!*\
  !*** ./src/assets/images/icons-sparkling-heart-48.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/icons-sparkling-heart-48.png");

/***/ }),

/***/ "./src/assets/images/icons-white-heart-48.png":
/*!****************************************************!*\
  !*** ./src/assets/images/icons-white-heart-48.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/icons-white-heart-48.png");

/***/ }),

/***/ "./src/assets/images/logo3.png":
/*!*************************************!*\
  !*** ./src/assets/images/logo3.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/logo3.png");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _assets_images_logo3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/logo3.png */ "./src/assets/images/logo3.png");
/* harmony import */ var _assets_images_icons_sparkling_heart_48_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/icons-sparkling-heart-48.png */ "./src/assets/images/icons-sparkling-heart-48.png");
/* harmony import */ var _assets_images_icons_white_heart_48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/icons-white-heart-48.png */ "./src/assets/images/icons-white-heart-48.png");
/* harmony import */ var _modules_displayData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/displayData.js */ "./src/modules/displayData.js");
/* harmony import */ var _modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/characterCounter.js */ "./src/modules/characterCounter.js");







const home = document.querySelector('#homepage');
const westeros = document.querySelector('#westeros');
const essos = document.querySelector('#essos');
const sothoryos = document.querySelector('#sothoryos');
const ulthos = document.querySelector('#ulthos');
window.onload = () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(1);
  (0,_modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
};
home.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0);
  (0,_modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

westeros.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(1);
});

essos.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(2);
});

sothoryos.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(3);
});

ulthos.addEventListener('click', () => {
  (0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(4);
});
// westeros.click();
(0,_modules_characterCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDhCQUE4QixLQUFLLGNBQWMsOEJBQThCLDBCQUEwQixLQUFLLGdCQUFnQixvQkFBb0IsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsa0JBQWtCLDZDQUE2QyxLQUFLLDBCQUEwQixtQkFBbUIsbUJBQW1CLHdCQUF3QixLQUFLLG9CQUFvQixvQkFBb0IsdUJBQXVCLGdCQUFnQix5QkFBeUIsS0FBSyx5QkFBeUIsc0JBQXNCLDRCQUE0QixtQkFBbUIsS0FBSyxjQUFjLG9CQUFvQixzQkFBc0IsS0FBSyw2QkFBNkIsb0JBQW9CLHNCQUFzQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixLQUFLLG9CQUFvQixvQkFBb0IsNkJBQTZCLGlCQUFpQixvQkFBb0IscUJBQXFCLDhCQUE4Qiw4QkFBOEIsMEJBQTBCLG1CQUFtQixLQUFLLCtCQUErQix5QkFBeUIsS0FBSyxtQ0FBbUMsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLEtBQUssOEJBQThCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHFCQUFxQixLQUFLLGtDQUFrQyxrQkFBa0IsbUJBQW1CLEtBQUssZ0NBQWdDLHNCQUFzQixLQUFLLGlDQUFpQyxzQkFBc0IsS0FBSyxpQ0FBaUMsc0JBQXNCLEtBQUsseUNBQXlDLG9CQUFvQiw2QkFBNkIsaUJBQWlCLEtBQUsscUNBQXFDLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG1CQUFtQixpQkFBaUIsS0FBSyxnREFBZ0Qsc0JBQXNCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsb0JBQW9CLGdCQUFnQixxQkFBcUIsS0FBSyx5RkFBeUYsMEJBQTBCLDBCQUEwQixzQkFBc0IsdUNBQXVDLHNCQUFzQixrQ0FBa0MsS0FBSyxxR0FBcUcsNkJBQTZCLGtEQUFrRCxLQUFLLHVHQUF1RywwQ0FBMEMsb0RBQW9ELGlDQUFpQyxLQUFLLDJCQUEyQixpQkFBaUIsb0JBQW9CLHlCQUF5QixzQkFBc0IsZ0JBQWdCLDJDQUEyQyx5QkFBeUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLDhCQUE4QixLQUFLLGlDQUFpQywyQkFBMkIsbUJBQW1CLHNCQUFzQixzQkFBc0IseUJBQXlCLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLGtDQUFrQyxrQkFBa0Isb0JBQW9CLG1CQUFtQixLQUFLLDZCQUE2QixtQkFBbUIsS0FBSyxnQ0FBZ0Msa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHVCQUF1QixzQkFBc0IsS0FBSyxpQ0FBaUMsaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDRCQUE0QiwwQkFBMEIsdUJBQXVCLEtBQUssc0JBQXNCLG1CQUFtQiwwQkFBMEIsS0FBSyx1Q0FBdUMsMEJBQTBCLGtCQUFrQixtQkFBbUIsS0FBSywwQ0FBMEMsMEJBQTBCLGtCQUFrQixvQkFBb0IsS0FBSyxxQkFBcUIsbUJBQW1CLG1CQUFtQiwwQkFBMEIsMEJBQTBCLG1CQUFtQix1Q0FBdUMsc0JBQXNCLGtDQUFrQyxLQUFLLDJCQUEyQiw2QkFBNkIsa0RBQWtELEtBQUssNEJBQTRCLDBDQUEwQyxvREFBb0QsaUNBQWlDLEtBQUssaUJBQWlCLDBCQUEwQixvQkFBb0Isa0NBQWtDLG9DQUFvQyx1QkFBdUIsS0FBSyxrQkFBa0IseUJBQXlCLG1DQUFtQyxvQ0FBb0MsS0FBSyxlQUFlLG1CQUFtQix1QkFBdUIsS0FBSywyQkFBMkIsVUFBVSwyQkFBMkIsT0FBTyxnQkFBZ0IseUJBQXlCLE9BQU8sS0FBSyw0QkFBNEIsVUFBVSx5QkFBeUIsT0FBTyxnQkFBZ0IsMkJBQTJCLE9BQU8sS0FBSyxpQkFBaUIsa0JBQWtCLHNCQUFzQixnQkFBZ0IsbUJBQW1CLHdDQUF3QyxLQUFLLHFCQUFxQixzQkFBc0IsbUJBQW1CLEtBQUssbURBQW1ELGNBQWMsb0JBQW9CLGdCQUFnQixrQkFBa0Isa0JBQWtCLE9BQU8sd0NBQXdDLG1CQUFtQixPQUFPLDRCQUE0QiwwQkFBMEIsT0FBTyxzQkFBc0Isb0JBQW9CLHVCQUF1QixpQkFBaUIsMEJBQTBCLE9BQU8sMkJBQTJCLHlCQUF5Qix3QkFBd0IsT0FBTyxnQkFBZ0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sK0JBQStCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLE9BQU8sa0NBQWtDLG1CQUFtQiw0QkFBNEIsT0FBTyxxQ0FBcUMscUJBQXFCLHNCQUFzQixPQUFPLGdDQUFnQyxvQkFBb0IsT0FBTyxrQ0FBa0MsdUJBQXVCLE9BQU8sbUNBQW1DLHdCQUF3QixPQUFPLG1DQUFtQyx1QkFBdUIsT0FBTyx1Q0FBdUMsc0JBQXNCLDRCQUE0QixPQUFPLGtEQUFrRCxvQkFBb0IsT0FBTyxzQ0FBc0Msd0JBQXdCLE9BQU8seUNBQXlDLHVCQUF1QixPQUFPLG1DQUFtQyxpQkFBaUIsT0FBTyw2RkFBNkYsd0JBQXdCLDJCQUEyQixPQUFPLDZCQUE2QixtQkFBbUIsT0FBTyxtQ0FBbUMsd0JBQXdCLDJCQUEyQixPQUFPLG9DQUFvQyxvQkFBb0Isc0JBQXNCLE9BQU8sa0NBQWtDLGlCQUFpQixtQkFBbUIsdUJBQXVCLDBCQUEwQixnQ0FBZ0MsT0FBTyxxQ0FBcUMseUJBQXlCLGdDQUFnQyxPQUFPLG1DQUFtQyxtQkFBbUIsMkJBQTJCLHlCQUF5QixPQUFPLHdCQUF3QiwyQkFBMkIsT0FBTyx5Q0FBeUMsNEJBQTRCLHFCQUFxQixPQUFPLDRDQUE0Qyw0QkFBNEIsT0FBTyx1QkFBdUIsb0JBQW9CLHFCQUFxQiw0QkFBNEIsNEJBQTRCLHFCQUFxQix5Q0FBeUMsd0JBQXdCLE9BQU8sOEJBQThCLG1DQUFtQyxPQUFPLG1CQUFtQixzQ0FBc0Msd0JBQXdCLE9BQU8sNkJBQTZCLFlBQVksNkJBQTZCLFNBQVMsa0JBQWtCLDBCQUEwQixTQUFTLE9BQU8sOEJBQThCLFlBQVksMEJBQTBCLFNBQVMsa0JBQWtCLDZCQUE2QixTQUFTLE9BQU8sOEJBQThCLHdCQUF3QixPQUFPLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFX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ZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zLXNwYXJrbGluZy1oZWFydC00OC5wbmciLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zLXdoaXRlLWhlYXJ0LTQ4LnBuZyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nbzMucG5nIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvYXBpTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvY2hhcmFjdGVyQ291bnRlci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlEYXRhLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9pbnZvbG1lbnRBcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzAsIDMwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiA4MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpIGEge1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmRDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuaW1hZ2VDYXJkIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuaW1hZ2VDYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIG1hcmdpbjogMCA1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSBpbWcge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19yZXRyaWV2ZWQgaDIge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSBoMiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgLm5hbWVUaXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA2NSU7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIC5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSAubGlrZXMgLmltYWdlTGlrZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIG1hcmdpbjogMCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuQ29tbWVudCxcXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuUmVzZXJ2YXRpb24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggZ3JheTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0bkNvbW1lbnQ6aG92ZXIsXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0blJlc2VydmF0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiKDQ1LCA0MywgNDEpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuQ29tbWVudDphY3RpdmUsXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0blJlc2VydmF0aW9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAxODksIDU0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2IoMjQxLCAxNTgsIDM1KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbi1jbG9zZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bkNsb3NlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24tZGV0YWlsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3JldHJpZXZlZCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19yZXRyaWV2ZWQgdWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQgLm5hbWUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbi1pbnB1dCAuY29tbWVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuU3VibWl0dCB7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCBncmF5O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuU3VibWl0dDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYig0NSwgNDMsIDQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0blN1Ym1pdHQ6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDE4OSwgNTQpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYigyNDEsIDE1OCwgMzUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBhbmltYXRpb246IGFjdGl2ZSBlYXNlIDAuNXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gIGFuaW1hdGlvbjogZGlzYWJsZSBlYXNlIDAuNXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgb3BhY2l0eTogMC4xO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhY3RpdmUge1xcclxcbiAgMCUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBkaXNhYmxlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMwLCAzMCk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0Rm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24tZGV0YWlsIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgLmxvZ28gaW1nIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IGxpIGEge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkQ29udGFpbmVyIGxpIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmltYWdlQ2FyZCBpbWcge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3JldHJpZXZlZCBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEgaDIge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIC5saWtlcyAuaW1hZ2VMaWtlIHtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1kZXRhaWwgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIC5saWtlcyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkQnV0dG9ucyB7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0bkNvbW1lbnQsXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuUmVzZXJ2YXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWNsb3NlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1kZXRhaWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19yZXRyaWV2ZWQgdWwge1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19yZXRyaWV2ZWQgdWwgbGkge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jb21tZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQgLm5hbWUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1pbnB1dCAuY29tbWVudCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuU3VibWl0dCB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IGdyYXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG5TdWJtaXR0OmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjdGl2ZSB7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIGFjdGl2ZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIGRpc2FibGUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIC50ZXh0Rm9vdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtB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O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMCwgMzAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDgwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5pbWFnZUNhcmQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5pbWFnZUNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAyODBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWFyZ2luOiAwIDU1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIGltZyB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3JldHJpZXZlZCBoMiB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgaDMge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSAubmFtZVRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDY1JTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIC5saWtlcyAuaW1hZ2VMaWtlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDUwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5Db21tZW50LFxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5SZXNlcnZhdGlvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCBncmF5O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuQ29tbWVudDpob3ZlcixcXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuUmVzZXJ2YXRpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2IoNDUsIDQzLCA0MSk7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5Db21tZW50OmFjdGl2ZSxcXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuUmVzZXJ2YXRpb246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDE4OSwgNTQpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYigyNDEsIDE1OCwgMzUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uLWNsb3NlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuQ2xvc2Uge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbi1kZXRhaWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fcmV0cmlldmVkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3JldHJpZXZlZCB1bCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbi1pbnB1dCB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbi1pbnB1dCAubmFtZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uLWlucHV0IC5jb21tZW50IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5TdWJtaXR0IHtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IGdyYXk7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5idG5TdWJtaXR0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiKDQ1LCA0MywgNDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuU3VibWl0dDphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMTg5LCA1NCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiKDI0MSwgMTU4LCAzNSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGFuaW1hdGlvbjogYWN0aXZlIGVhc2UgMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgYW5pbWF0aW9uOiBkaXNhYmxlIGVhc2UgMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBvcGFjaXR5OiAwLjE7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFjdGl2ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGRpc2FibGUge1xcclxcbiAgMCUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzAsIDMwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRGb290ZXIge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1kZXRhaWwgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciAubG9nbyBpbWcge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgbGkgYSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmRDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmRDb250YWluZXIgbGkge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuaW1hZ2VDYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIHtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fcmV0cmlldmVkIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSAubGlrZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIC5pbWFnZUxpa2Uge1xcclxcbiAgICB3aWR0aDogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWRldGFpbCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIHAge1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmRCdXR0b25zIHtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuQ29tbWVudCxcXHJcXG4gIG1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5SZXNlcnZhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24tY2xvc2Uge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWRldGFpbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3JldHJpZXZlZCB1bCB7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3JldHJpZXZlZCB1bCBsaSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNvbW1lbnQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1pbnB1dCAubmFtZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWlucHV0IC5jb21tZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG5TdWJtaXR0IHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0blN1Ym1pdHQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWN0aXZlIHtcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgYWN0aXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgZGlzYWJsZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIgLnRleHRGb290ZXIge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMtc3BhcmtsaW5nLWhlYXJ0LTQ4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zLXdoaXRlLWhlYXJ0LTQ4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2xvZ28zLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB1cmwgPSAnaHR0cHM6Ly9UaHJvbmVzQXBpLmNvbS9hcGkvdjIvQ2hhcmFjdGVycyc7XHJcblxyXG5jb25zdCBmZXRjaENoYXJhY3RlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoQ2hhcmFjdGVyYnlJZCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS8ke2lkfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgeyBmZXRjaENoYXJhY3RlciwgZmV0Y2hDaGFyYWN0ZXJieUlkIH07XHJcbiIsImltcG9ydCB7IGZldGNoQ2hhcmFjdGVyIH0gZnJvbSAnLi9hcGlNYW5hZ2VtZW50LmpzJztcclxuXHJcbmNvbnN0IHRvdGFsQ2hhcmFjdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXInKTtcclxuY29uc3QgY291bnRDaGFyYWN0ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY291bnRlciA9IGF3YWl0IGZldGNoQ2hhcmFjdGVyKCk7XHJcbiAgdG90YWxDaGFyYWN0ZXIuaW5uZXJIVE1MID0gYCgke2NvdW50ZXIubGVuZ3RofSlgO1xyXG4gIHJldHVybiBjb3VudGVyLmxlbmd0aDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY291bnRDaGFyYWN0ZXI7XHJcbiIsImNvbnN0IGNvdW50Q29tbWVudHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdWxDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bENvbW1lbnRzJyk7XHJcblxyXG4gIHJldHVybiB1bENvbW1lbnRzLmNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkXHJcbiAgICA/IDBcclxuICAgIDogdWxDb21tZW50cy5jaGlsZHJlbi5sZW5ndGg7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3VudENvbW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBmZXRjaENoYXJhY3RlciwgZmV0Y2hDaGFyYWN0ZXJieUlkIH0gZnJvbSAnLi9hcGlNYW5hZ2VtZW50LmpzJztcclxuaW1wb3J0IGNvdW50Q29tbWVudHMgZnJvbSAnLi9jb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IHNldExpa2UsIGdldExpa2UsIGFkZENvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9pbnZvbG1lbnRBcGkuanMnO1xyXG5pbXBvcnQgY291bnRDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXJDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRDb250YWluZXInKTtcclxuY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudF9fc2VjdGlvbicpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRDaGFyYWN0ZXJzJyk7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcclxuXHJcbmNvbnN0IHJlbmRlckRhdGEgPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICBsZXQgY2FyZEluaSA9IDA7XHJcbiAgbGV0IGNhcmRFbmQgPSAwO1xyXG5cclxuICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgIGNhcmRJbmkgPSAxO1xyXG4gICAgY2FyZEVuZCA9IGF3YWl0IGNvdW50Q2hhcmFjdGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNhcmRJbmkgPSAoaW5kZXggLSAxKSAqIDEzICsgMTtcclxuICAgIGNhcmRFbmQgPSBjYXJkSW5pICsgMTI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFyYWN0ZXJlcyA9IGF3YWl0IGZldGNoQ2hhcmFjdGVyKCk7XHJcbiAgY29uc3Qgd2VzdGVyb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VzdGVyb3MnKTtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVwYWdlJyk7XHJcbiAgY29uc3QgZXNzb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXNzb3MnKTtcclxuICBjb25zdCBzb3Rob3J5b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc290aG9yeW9zJyk7XHJcbiAgY29uc3QgdWx0aG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VsdGhvcycpO1xyXG4gIGxldCBlbGVtZW50V2l0aEJveCA9IG51bGw7XHJcbiAgdWwuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGhvbWUuc3R5bGUuYm9yZGVyID0gMDtcclxuICB3ZXN0ZXJvcy5zdHlsZS5ib3JkZXIgPSAwO1xyXG4gIGVzc29zLnN0eWxlLmJvcmRlciA9IDA7XHJcbiAgc290aG9yeW9zLnN0eWxlLmJvcmRlciA9IDA7XHJcbiAgdWx0aG9zLnN0eWxlLmJvcmRlciA9IDA7XHJcblxyXG4gIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgZWxlbWVudFdpdGhCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZXBhZ2UnKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAxOlxyXG4gICAgICBlbGVtZW50V2l0aEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZXN0ZXJvcycpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIGVsZW1lbnRXaXRoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vzc29zJyk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgMzpcclxuICAgICAgZWxlbWVudFdpdGhCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc290aG9yeW9zJyk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgNDpcclxuICAgICAgZWxlbWVudFdpdGhCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWx0aG9zJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpKSB7XHJcbiAgICBlbGVtZW50V2l0aEJveC5zdHlsZS5ib3JkZXIgPSAnMXB4IFNvbGlkIG9yYW5nZSc7XHJcbiAgICBlbGVtZW50V2l0aEJveC5zdHlsZS5wYWRkaW5nID0gJzJweCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1lbnRXaXRoQm94LnN0eWxlLmJvcmRlciA9ICcycHggU29saWQgb3JhbmdlJztcclxuICAgIGVsZW1lbnRXaXRoQm94LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcbiAgfVxyXG5cclxuICBnZXRMaWtlKCkudGhlbigobGlrZXMpID0+IHtcclxuICAgIGxldCBpID0gMTtcclxuICAgIGNoYXJhY3RlcmVzLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xyXG4gICAgICBpZiAoaSA+PSBjYXJkSW5pICYmIGkgPD0gY2FyZEVuZCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Gb3VuZCA9IGxpa2VzLmZpbmQoXHJcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBgaW1nJHtjaGFyYWN0ZXIuaWR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbnVtTGlrZXMgPSBpdGVtRm91bmQgIT09IHVuZGVmaW5lZCA/IGl0ZW1Gb3VuZC5saWtlcyA6IDA7XHJcbiAgICAgICAgY29uc3QgaW1nVXJsID1cclxuICAgICAgICAgIGl0ZW1Gb3VuZCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gJy4vYXNzZXRzL2ltYWdlcy9pY29ucy1zcGFya2xpbmctaGVhcnQtNDgucG5nJ1xyXG4gICAgICAgICAgICA6ICcuL2Fzc2V0cy9pbWFnZXMvaWNvbnMtd2hpdGUtaGVhcnQtNDgucG5nJztcclxuICAgICAgICB1bC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2hhcmFjdGVyLmltYWdlVXJsfVwiIGFsdD1cIkNoYXJhY3RlciBJbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkTmFtZVwiPiR7Y2hhcmFjdGVyLmZ1bGxOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmROYW1lXCI+JHtjaGFyYWN0ZXIudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpbWcke2NoYXJhY3Rlci5pZH1cIiBjbGFzcz1cImltYWdlTGlrZVwiIHNyYz1cIiR7aW1nVXJsfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke251bUxpa2VzfSBsaWtlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkQnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bkNvbW1lbnQke2NoYXJhY3Rlci5pZH1cIiBjbGFzcz1cImJ0bkNvbW1lbnRcIj5jb21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0blJlc2VydmF0aW9uJHtjaGFyYWN0ZXIuaWR9XCIgY2xhc3M9XCJidG5SZXNlcnZhdGlvblwiPnJlc2VydmF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcclxuXHJcbiAgICAgICAgY29uc3QgaW1nTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWFnZUxpa2UnKTtcclxuXHJcbiAgICAgICAgaW1nTGlrZS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9pY29ucy1zcGFya2xpbmctaGVhcnQtNDgucG5nJztcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHsgaXRlbV9pZDogZS50YXJnZXQuaWQgfTtcclxuICAgICAgICAgICAgc2V0TGlrZShpdGVtKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bkNvbW1lbnQnKTtcclxuXHJcbiAgICAgICAgY29tbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGZldGNoQ2hhcmFjdGVyYnlJZChlLnRhcmdldC5pZC5zbGljZSgxMCkpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3NlY3Rpb24tY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGlkPVwiYnRuQ2xvc2VcIiBjbGFzcz1cImJ0bkNsb3NlXCI+eDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19zZWN0aW9uLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2VVcmx9XCIgYWx0PVwiJHtkYXRhLmZpcnN0TmFtZX1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+aWQ6JHtkYXRhLmlkfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmZpcnN0IG5hbWU6JHtkYXRhLmZpcnN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5sYXN0IG5hbWU6JHtkYXRhLmZ1bGxOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmZhbWlseToke2RhdGEuZmFtaWx5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+ZnVsbCBuYW1lOiR7ZGF0YS5mdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnRpdGxlOiR7ZGF0YS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19yZXRyaWV2ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidG90YWxDb21tZW50c1wiPjxoMj5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWxDb21tZW50c1wiPjwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19zZWN0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImFkZC1jb21tZW50XCI+QWRkIGNvbW1lbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiYWRkIGNvbW1lbnQgaGVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5TdWJtaXR0XCI+c3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5DbG9zZScpO1xyXG4gICAgICAgICAgICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICB1cGRhdGVDb21tZW50cyhkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgYnRuU3VibWl0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5TdWJtaXR0Jyk7XHJcbiAgICAgICAgICAgICAgYnRuU3VibWl0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgaXRlbV9pZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IG5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb21tZW50cyhkYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA+IGNhcmRFbmQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaSArPSAxO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVDb21tZW50cyA9ICh2YWx1ZSkgPT4ge1xyXG4gIGdldENvbW1lbnRzKHZhbHVlKS50aGVuKChjb21tZW50cykgPT4ge1xyXG4gICAgY29uc3QgdWxDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bENvbW1lbnRzJyk7XHJcbiAgICB1bENvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29tbWVudHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICAgIHVsQ29tbWVudHMuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJsaUNvbW1lbnRcIj4ke3JlY29yZC5jcmVhdGlvbl9kYXRlfSAke3JlY29yZC51c2VybmFtZX06ICR7cmVjb3JkLmNvbW1lbnR9XHJcbiAgICAgICAgPC9saT5gO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0b3RhbENvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsQ29tbWVudHMnKTtcclxuICAgIHRvdGFsQ29tbWVudHMuaW5uZXJIVE1MID0gYENvbW1lbnRzICggJHtjb3VudENvbW1lbnRzKCl9IClgO1xyXG4gIH0pO1xufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckRhdGE7XHJcbiIsImltcG9ydCByZW5kZXJEYXRhIGZyb20gJy4vZGlzcGxheURhdGEuanMnO1xyXG5cclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzNsRDBEd0xidVo2ZFJOWmlBMUNFL2xpa2VzJztcclxuY29uc3QgdXJsQ29tbWVudHMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvM2xEMER3TGJ1WjZkUk5aaUExQ0UvY29tbWVudHMnO1xyXG5cclxuY29uc3QgZ2V0TGlrZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmNvbnN0IHNldExpa2UgPSBhc3luYyAoZGF0YSA9IHt9KSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZW5kZXJEYXRhKE1hdGgudHJ1bmMoZGF0YS5pdGVtX2lkLnNsaWNlKDMpIC8gMTMpICsgMSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoZGF0YSA9IHt9KSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2godXJsQ29tbWVudHMsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoZGF0YSA9ICcnKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmxDb21tZW50c30/aXRlbV9pZD0ke2RhdGF9YCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0TGlrZSwgZ2V0TGlrZSwgYWRkQ29tbWVudCwgZ2V0Q29tbWVudHMsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbG9nbzMucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaWNvbnMtc3BhcmtsaW5nLWhlYXJ0LTQ4LnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ljb25zLXdoaXRlLWhlYXJ0LTQ4LnBuZyc7XHJcbmltcG9ydCByZW5kZXJEYXRhIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5RGF0YS5qcyc7XHJcbmltcG9ydCBjb3VudENoYXJhY3RlciBmcm9tICcuL21vZHVsZXMvY2hhcmFjdGVyQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVwYWdlJyk7XHJcbmNvbnN0IHdlc3Rlcm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlc3Rlcm9zJyk7XHJcbmNvbnN0IGVzc29zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vzc29zJyk7XHJcbmNvbnN0IHNvdGhvcnlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3Rob3J5b3MnKTtcclxuY29uc3QgdWx0aG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VsdGhvcycpO1xyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIHJlbmRlckRhdGEoMSk7XHJcbiAgY291bnRDaGFyYWN0ZXIoKTtcclxufTtcclxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZW5kZXJEYXRhKDApO1xyXG4gIGNvdW50Q2hhcmFjdGVyKCk7XHJcbn0pO1xyXG5cclxud2VzdGVyb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVuZGVyRGF0YSgxKTtcclxufSk7XHJcblxyXG5lc3Nvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZW5kZXJEYXRhKDIpO1xyXG59KTtcclxuXHJcbnNvdGhvcnlvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZW5kZXJEYXRhKDMpO1xyXG59KTtcclxuXHJcbnVsdGhvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZW5kZXJEYXRhKDQpO1xyXG59KTtcclxuLy8gd2VzdGVyb3MuY2xpY2soKTtcclxuY291bnRDaGFyYWN0ZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9