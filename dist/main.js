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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  margin-bottom: 60px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  margin: 0;\r\n  padding-top: 5px;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: rgb(31, 30, 30, 0.8);\r\n}\r\n\r\nheader .logo img {\r\n  width: 120px;\r\n  height: auto;\r\n  margin-left: 40px;\r\n}\r\n\r\nheader nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 80px;\r\n  margin-left: 200px;\r\n}\r\n\r\nheader nav li a {\r\n  font-size: 28px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .cardContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\nmain .card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25%;\r\n  height: 500px;\r\n  margin: 20px 0;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nmain .card .imageCard {\r\n  text-align: center;\r\n}\r\n\r\nmain .card .imageCard img {\r\n  width: 280px;\r\n  height: 250px;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\nmain .card .cardData {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  margin: 0 55px;\r\n}\r\n\r\nmain .card .cardData img {\r\n  width: 24px;\r\n  height: auto;\r\n}\r\n\r\n.comment__retrieved h2 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData h2 {\r\n  font-size: 20px;\r\n}\r\n\r\nmain .card .cardData h3 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData .nameTitle {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 65%;\r\n}\r\n\r\nmain .card .cardData .likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 5px;\r\n  width: 35%;\r\n}\r\n\r\nmain .card .cardData .likes .imageLike {\r\n  cursor: pointer;\r\n}\r\n\r\nmain .card .cardButtons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  gap: 20px;\r\n  margin: 0 50px;\r\n}\r\n\r\nmain .card .cardButtons .btnComment,\r\nmain .card .cardButtons .btnReservation {\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 10px 0;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\nmain .card .cardButtons .btnComment:hover,\r\nmain .card .cardButtons .btnReservation:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\nmain .card .cardButtons .btnComment:active,\r\nmain .card .cardButtons .btnReservation:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.comment__section {\r\n  width: 60%;\r\n  height: 100vh;\r\n  margin-left: -100%;\r\n  position: fixed;\r\n  top: 0vh;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow-y: scroll;\r\n  border: 8px solid white;\r\n}\r\n\r\n.comment__section-close {\r\n  align-self: flex-end;\r\n  color: white;\r\n  text-align: end;\r\n  font-size: 40px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.btnClose {\r\n  cursor: pointer;\r\n}\r\n\r\n.comment__section-detail {\r\n  width: 100%;\r\n  padding: 20px;\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved {\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.comment__section-input {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-bottom: 100px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.add-comment {\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment__section-input .name {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n.comment__section-input .comment {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 100px;\r\n}\r\n\r\n.btnSubmitt {\r\n  width: 160px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 5px;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.btnSubmitt:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\n.btnSubmitt:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  height: 100vh;\r\n  animation: active ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n  margin-left: 20%;\r\n}\r\n\r\n.disable {\r\n  margin-left: -100%;\r\n  animation: disable ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.hide {\r\n  opacity: 0.1;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes active {\r\n  0% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: 20%;\r\n  }\r\n}\r\n\r\n@keyframes disable {\r\n  0% {\r\n    margin-left: 20%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: -100%;\r\n  }\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  color: white;\r\n  background-color: rgb(31, 30, 30);\r\n}\r\n\r\n.textFooter {\r\n  font-size: 15px;\r\n  margin: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header {\r\n    width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    gap: 10px;\r\n  }\r\n\r\n  .comment__section-detail img {\r\n    width: 80%;\r\n  }\r\n\r\n  header .logo img {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  header nav {\r\n    width: 100%;\r\n    margin-left: 0;\r\n    gap: 8px;\r\n    margin-right: 2px;\r\n  }\r\n\r\n  header nav li a {\r\n    list-style: none;\r\n    font-size: 10px;\r\n  }\r\n\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card {\r\n    height: auto;\r\n  }\r\n\r\n  main .cardContainer {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .cardContainer li {\r\n    width: 70%;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .imageCard img {\r\n    width: 180px;\r\n    height: 150px;\r\n  }\r\n\r\n  main .card .cardData {\r\n    margin: 5px;\r\n  }\r\n\r\n  .comment__retrieved h2 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData h2 {\r\n    font-size: 10px;\r\n  }\r\n\r\n  main .card .cardData h3 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData .likes {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .cardData .likes .imageLike {\r\n    width: 14px;\r\n  }\r\n\r\n  .comment__section-detail p {\r\n    font-size: 12px;\r\n  }\r\n\r\n  main .card .cardData .likes p {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardButtons {\r\n    gap: 5px;\r\n  }\r\n\r\n  main .card .cardButtons .btnComment,\r\n  main .card .cardButtons .btnReservation {\r\n    font-size: 10px;\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .comment__section {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment__section-close {\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .comment__section-detail {\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .comment__retrieved ul {\r\n    gap: 5px;\r\n    width: 80%;\r\n    font-size: 8px;\r\n    margin-left: 30px;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__retrieved ul li {\r\n    text-align: left;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__section-input {\r\n    width: 90%;\r\n    margin-bottom: 5px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .add-comment {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .comment__section-input .name {\r\n    margin-bottom: 10px;\r\n    height: 20px;\r\n  }\r\n\r\n  .comment__section-input .comment {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .btnSubmitt {\r\n    width: 80px;\r\n    height: 20px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 2px;\r\n    box-shadow: 2px 2px 2px 2px gray;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .btnSubmitt:active {\r\n    transform: translateY(2px);\r\n  }\r\n\r\n  .active {\r\n    animation-fill-mode: forwards;\r\n    margin-left: 5%;\r\n  }\r\n\r\n  @keyframes active {\r\n    0% {\r\n      margin-left: -100%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: 5%;\r\n    }\r\n  }\r\n\r\n  @keyframes disable {\r\n    0% {\r\n      margin-left: 5%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: -100%;\r\n    }\r\n  }\r\n\r\n  footer .textFooter {\r\n    font-size: 10px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  margin-bottom: 60px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  margin: 0;\r\n  padding-top: 5px;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: rgb(31, 30, 30, 0.8);\r\n}\r\n\r\nheader .logo img {\r\n  width: 120px;\r\n  height: auto;\r\n  margin-left: 40px;\r\n}\r\n\r\nheader nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 80px;\r\n  margin-left: 200px;\r\n}\r\n\r\nheader nav li a {\r\n  font-size: 28px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nmain .cardContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\nmain .card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25%;\r\n  height: 500px;\r\n  margin: 20px 0;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nmain .card .imageCard {\r\n  text-align: center;\r\n}\r\n\r\nmain .card .imageCard img {\r\n  width: 280px;\r\n  height: 250px;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\nmain .card .cardData {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  margin: 0 55px;\r\n}\r\n\r\nmain .card .cardData img {\r\n  width: 24px;\r\n  height: auto;\r\n}\r\n\r\n.comment__retrieved h2 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData h2 {\r\n  font-size: 20px;\r\n}\r\n\r\nmain .card .cardData h3 {\r\n  font-size: 14px;\r\n}\r\n\r\nmain .card .cardData .nameTitle {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 65%;\r\n}\r\n\r\nmain .card .cardData .likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 5px;\r\n  width: 35%;\r\n}\r\n\r\nmain .card .cardData .likes .imageLike {\r\n  cursor: pointer;\r\n}\r\n\r\nmain .card .cardButtons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  gap: 20px;\r\n  margin: 0 50px;\r\n}\r\n\r\nmain .card .cardButtons .btnComment,\r\nmain .card .cardButtons .btnReservation {\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 10px 0;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\nmain .card .cardButtons .btnComment:hover,\r\nmain .card .cardButtons .btnReservation:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\nmain .card .cardButtons .btnComment:active,\r\nmain .card .cardButtons .btnReservation:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.comment__section {\r\n  width: 60%;\r\n  height: 100vh;\r\n  margin-left: -100%;\r\n  position: fixed;\r\n  top: 0vh;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow-y: scroll;\r\n  border: 8px solid white;\r\n}\r\n\r\n.comment__section-close {\r\n  align-self: flex-end;\r\n  color: white;\r\n  text-align: end;\r\n  font-size: 40px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.btnClose {\r\n  cursor: pointer;\r\n}\r\n\r\n.comment__section-detail {\r\n  width: 100%;\r\n  padding: 20px;\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved {\r\n  color: white;\r\n}\r\n\r\n.comment__retrieved ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.comment__section-input {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-bottom: 100px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.add-comment {\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment__section-input .name {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n.comment__section-input .comment {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  height: 100px;\r\n}\r\n\r\n.btnSubmitt {\r\n  width: 160px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 5px;\r\n  box-shadow: 5px 5px 5px 5px gray;\r\n  font-size: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.btnSubmitt:hover {\r\n  background-color: gray;\r\n  box-shadow: 2px 2px 5px 2px rgb(45, 43, 41);\r\n}\r\n\r\n.btnSubmitt:active {\r\n  background-color: rgb(227, 189, 54);\r\n  box-shadow: 2px 2px 5px 2px rgb(241, 158, 35);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.active {\r\n  visibility: visible;\r\n  height: 100vh;\r\n  animation: active ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n  margin-left: 20%;\r\n}\r\n\r\n.disable {\r\n  margin-left: -100%;\r\n  animation: disable ease 0.5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.hide {\r\n  opacity: 0.1;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes active {\r\n  0% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: 20%;\r\n  }\r\n}\r\n\r\n@keyframes disable {\r\n  0% {\r\n    margin-left: 20%;\r\n  }\r\n\r\n  100% {\r\n    margin-left: -100%;\r\n  }\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  color: white;\r\n  background-color: rgb(31, 30, 30);\r\n}\r\n\r\n.textFooter {\r\n  font-size: 15px;\r\n  margin: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header {\r\n    width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    gap: 10px;\r\n  }\r\n\r\n  .comment__section-detail img {\r\n    width: 80%;\r\n  }\r\n\r\n  header .logo img {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  header nav {\r\n    width: 100%;\r\n    margin-left: 0;\r\n    gap: 8px;\r\n    margin-right: 2px;\r\n  }\r\n\r\n  header nav li a {\r\n    list-style: none;\r\n    font-size: 10px;\r\n  }\r\n\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card {\r\n    height: auto;\r\n  }\r\n\r\n  main .cardContainer {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main .cardContainer li {\r\n    width: 70%;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .imageCard img {\r\n    width: 180px;\r\n    height: 150px;\r\n  }\r\n\r\n  main .card .cardData {\r\n    margin: 5px;\r\n  }\r\n\r\n  .comment__retrieved h2 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData h2 {\r\n    font-size: 10px;\r\n  }\r\n\r\n  main .card .cardData h3 {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardData .likes {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  main .card .cardData .likes .imageLike {\r\n    width: 14px;\r\n  }\r\n\r\n  .comment__section-detail p {\r\n    font-size: 12px;\r\n  }\r\n\r\n  main .card .cardData .likes p {\r\n    font-size: 8px;\r\n  }\r\n\r\n  main .card .cardButtons {\r\n    gap: 5px;\r\n  }\r\n\r\n  main .card .cardButtons .btnComment,\r\n  main .card .cardButtons .btnReservation {\r\n    font-size: 10px;\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .comment__section {\r\n    width: 90%;\r\n  }\r\n\r\n  .comment__section-close {\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .comment__section-detail {\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .comment__retrieved ul {\r\n    gap: 5px;\r\n    width: 80%;\r\n    font-size: 8px;\r\n    margin-left: 30px;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__retrieved ul li {\r\n    text-align: left;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .comment__section-input {\r\n    width: 90%;\r\n    margin-bottom: 5px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .add-comment {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .comment__section-input .name {\r\n    margin-bottom: 10px;\r\n    height: 20px;\r\n  }\r\n\r\n  .comment__section-input .comment {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .btnSubmitt {\r\n    width: 80px;\r\n    height: 20px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 2px;\r\n    box-shadow: 2px 2px 2px 2px gray;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .btnSubmitt:active {\r\n    transform: translateY(2px);\r\n  }\r\n\r\n  .active {\r\n    animation-fill-mode: forwards;\r\n    margin-left: 5%;\r\n  }\r\n\r\n  @keyframes active {\r\n    0% {\r\n      margin-left: -100%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: 5%;\r\n    }\r\n  }\r\n\r\n  @keyframes disable {\r\n    0% {\r\n      margin-left: 5%;\r\n    }\r\n\r\n    100% {\r\n      margin-left: -100%;\r\n    }\r\n  }\r\n\r\n  footer .textFooter {\r\n    font-size: 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxN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b2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMtc3BhcmtsaW5nLWhlYXJ0LTQ4LnBuZyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMtd2hpdGUtaGVhcnQtNDgucG5nIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvMy5wbmciLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9hcGlNYW5hZ2VtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9jaGFyYWN0ZXJDb3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvZGlzcGxheURhdGEuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2ludm9sbWVudEFwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qtd2l0aC1rYW5iYW4tYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC13aXRoLWthbmJhbi1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LXdpdGgta2FuYmFuLWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMCwgMzAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDgwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5pbWFnZUNhcmQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5pbWFnZUNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAyODBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWFyZ2luOiAwIDU1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIGltZyB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3JldHJpZXZlZCBoMiB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgaDMge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSAubmFtZVRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDY1JTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIC5saWtlcyAuaW1hZ2VMaWtlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDUwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5Db21tZW50LFxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5SZXNlcnZhdGlvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCBncmF5O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuQ29tbWVudDpob3ZlcixcXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuUmVzZXJ2YXRpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2IoNDUsIDQzLCA0MSk7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5Db21tZW50OmFjdGl2ZSxcXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuUmVzZXJ2YXRpb246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDE4OSwgNTQpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYigyNDEsIDE1OCwgMzUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBib3JkZXI6IDhweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24tY2xvc2Uge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5DbG9zZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uLWRldGFpbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19yZXRyaWV2ZWQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fcmV0cmlldmVkIHVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbi1pbnB1dCAubmFtZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uLWlucHV0IC5jb21tZW50IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5TdWJtaXR0IHtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IGdyYXk7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5idG5TdWJtaXR0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiKDQ1LCA0MywgNDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuU3VibWl0dDphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMTg5LCA1NCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiKDI0MSwgMTU4LCAzNSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGFuaW1hdGlvbjogYWN0aXZlIGVhc2UgMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgYW5pbWF0aW9uOiBkaXNhYmxlIGVhc2UgMC41cztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBvcGFjaXR5OiAwLjE7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFjdGl2ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGRpc2FibGUge1xcclxcbiAgMCUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzAsIDMwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRGb290ZXIge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1kZXRhaWwgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciAubG9nbyBpbWcge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgbGkgYSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmRDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmRDb250YWluZXIgbGkge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuaW1hZ2VDYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIHtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fcmV0cmlldmVkIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSAubGlrZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIC5pbWFnZUxpa2Uge1xcclxcbiAgICB3aWR0aDogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWRldGFpbCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIHAge1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmRCdXR0b25zIHtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkQnV0dG9ucyAuYnRuQ29tbWVudCxcXHJcXG4gIG1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5SZXNlcnZhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24tY2xvc2Uge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWRldGFpbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3JldHJpZXZlZCB1bCB7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3JldHJpZXZlZCB1bCBsaSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNvbW1lbnQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1pbnB1dCAubmFtZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWlucHV0IC5jb21tZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG5TdWJtaXR0IHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0blN1Ym1pdHQ6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWN0aXZlIHtcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgYWN0aXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgZGlzYWJsZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIgLnRleHRGb290ZXIge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JC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QTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBOztJQUVFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFFBQVE7SUFDUixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMwLCAzMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogODBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmltYWdlQ2FyZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmltYWdlQ2FyZCBpbWcge1xcclxcbiAgd2lkdGg6IDI4MHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBtYXJnaW46IDAgNTVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgaW1nIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fcmV0cmlldmVkIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgaDIge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSBoMyB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmREYXRhIC5uYW1lVGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNjUlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkRGF0YSAubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZERhdGEgLmxpa2VzIC5pbWFnZUxpa2Uge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jYXJkIC5jYXJkQnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNTBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0bkNvbW1lbnQsXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0blJlc2VydmF0aW9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IGdyYXk7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5Db21tZW50OmhvdmVyLFxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5SZXNlcnZhdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYig0NSwgNDMsIDQxKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0bkNvbW1lbnQ6YWN0aXZlLFxcclxcbm1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5SZXNlcnZhdGlvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMTg5LCA1NCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiKDI0MSwgMTU4LCAzNSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24ge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9fc2VjdGlvbi1jbG9zZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bkNsb3NlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24tZGV0YWlsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3JldHJpZXZlZCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19yZXRyaWV2ZWQgdWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50X19zZWN0aW9uLWlucHV0IC5uYW1lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQgLmNvbW1lbnQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0blN1Ym1pdHQge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggZ3JheTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0blN1Ym1pdHQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2IoNDUsIDQzLCA0MSk7XFxyXFxufVxcclxcblxcclxcbi5idG5TdWJtaXR0OmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAxODksIDU0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2IoMjQxLCAxNTgsIDM1KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYW5pbWF0aW9uOiBhY3RpdmUgZWFzZSAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEwMCU7XFxyXFxuICBhbmltYXRpb246IGRpc2FibGUgZWFzZSAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIG9wYWNpdHk6IDAuMTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYWN0aXZlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZGlzYWJsZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMCwgMzApO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dEZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWRldGFpbCBpbWcge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIC5sb2dvIGltZyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiBsaSBhIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZENvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZENvbnRhaW5lciBsaSB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5pbWFnZUNhcmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19yZXRyaWV2ZWQgaDIge1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZERhdGEgaDMge1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmREYXRhIC5saWtlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSAubGlrZXMgLmltYWdlTGlrZSB7XFxyXFxuICAgIHdpZHRoOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24tZGV0YWlsIHAge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5jYXJkIC5jYXJkRGF0YSAubGlrZXMgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMge1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLmNhcmQgLmNhcmRCdXR0b25zIC5idG5Db21tZW50LFxcclxcbiAgbWFpbiAuY2FyZCAuY2FyZEJ1dHRvbnMgLmJ0blJlc2VydmF0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1jbG9zZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24tZGV0YWlsIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fcmV0cmlldmVkIHVsIHtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fcmV0cmlldmVkIHVsIGxpIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudF9fc2VjdGlvbi1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtY29tbWVudCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50X19zZWN0aW9uLWlucHV0IC5uYW1lIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRfX3NlY3Rpb24taW5wdXQgLmNvbW1lbnQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0blN1Ym1pdHQge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCBncmF5O1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuU3VibWl0dDphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUge1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyBhY3RpdmUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyBkaXNhYmxlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciAudGV4dEZvb3RlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy1zcGFya2xpbmctaGVhcnQtNDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMtd2hpdGUtaGVhcnQtNDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbG9nbzMucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHVybCA9ICdodHRwczovL1Rocm9uZXNBcGkuY29tL2FwaS92Mi9DaGFyYWN0ZXJzJztcclxuXHJcbmNvbnN0IGZldGNoQ2hhcmFjdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hDaGFyYWN0ZXJieUlkID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9LyR7aWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGZldGNoQ2hhcmFjdGVyLCBmZXRjaENoYXJhY3RlcmJ5SWQgfTtcclxuIiwiaW1wb3J0IHsgZmV0Y2hDaGFyYWN0ZXIgfSBmcm9tICcuL2FwaU1hbmFnZW1lbnQuanMnO1xyXG5cclxuY29uc3QgdG90YWxDaGFyYWN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlcicpO1xyXG5jb25zdCBjb3VudENoYXJhY3RlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb3VudGVyID0gYXdhaXQgZmV0Y2hDaGFyYWN0ZXIoKTtcclxuICB0b3RhbENoYXJhY3Rlci5pbm5lckhUTUwgPSBgKCR7Y291bnRlci5sZW5ndGh9KWA7XHJcbiAgcmV0dXJuIGNvdW50ZXIubGVuZ3RoO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb3VudENoYXJhY3RlcjtcclxuIiwiY29uc3QgY291bnRDb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCB1bENvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ29tbWVudHMnKTtcclxuXHJcbiAgcmV0dXJuIHVsQ29tbWVudHMuY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWRcclxuICAgID8gMFxyXG4gICAgOiB1bENvbW1lbnRzLmNoaWxkcmVuLmxlbmd0aDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50Q29tbWVudHM7XHJcbiIsImltcG9ydCB7IGZldGNoQ2hhcmFjdGVyLCBmZXRjaENoYXJhY3RlcmJ5SWQgfSBmcm9tICcuL2FwaU1hbmFnZW1lbnQuanMnO1xyXG5pbXBvcnQgY291bnRDb21tZW50cyBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuaW1wb3J0IHsgc2V0TGlrZSwgZ2V0TGlrZSwgYWRkQ29tbWVudCwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2ludm9sbWVudEFwaS5qcyc7XHJcbmltcG9ydCBjb3VudENoYXJhY3RlciBmcm9tICcuL2NoYXJhY3RlckNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZENvbnRhaW5lcicpO1xyXG5jb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50X19zZWN0aW9uJyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZENoYXJhY3RlcnMnKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG5cclxuY29uc3QgcmVuZGVyRGF0YSA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gIGxldCBjYXJkSW5pID0gMDtcclxuICBsZXQgY2FyZEVuZCA9IDA7XHJcblxyXG4gIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgY2FyZEluaSA9IDE7XHJcbiAgICBjYXJkRW5kID0gYXdhaXQgY291bnRDaGFyYWN0ZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2FyZEluaSA9IChpbmRleCAtIDEpICogMTMgKyAxO1xyXG4gICAgY2FyZEVuZCA9IGNhcmRJbmkgKyAxMjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlcmVzID0gYXdhaXQgZmV0Y2hDaGFyYWN0ZXIoKTtcclxuICBjb25zdCB3ZXN0ZXJvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZXN0ZXJvcycpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZXBhZ2UnKTtcclxuICBjb25zdCBlc3NvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlc3NvcycpO1xyXG4gIGNvbnN0IHNvdGhvcnlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3Rob3J5b3MnKTtcclxuICBjb25zdCB1bHRob3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWx0aG9zJyk7XHJcbiAgbGV0IGVsZW1lbnRXaXRoQm94ID0gbnVsbDtcclxuICB1bC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgaG9tZS5zdHlsZS5ib3JkZXIgPSAwO1xyXG4gIHdlc3Rlcm9zLnN0eWxlLmJvcmRlciA9IDA7XHJcbiAgZXNzb3Muc3R5bGUuYm9yZGVyID0gMDtcclxuICBzb3Rob3J5b3Muc3R5bGUuYm9yZGVyID0gMDtcclxuICB1bHRob3Muc3R5bGUuYm9yZGVyID0gMDtcclxuXHJcbiAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICBlbGVtZW50V2l0aEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lcGFnZScpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIGVsZW1lbnRXaXRoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlc3Rlcm9zJyk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgMjpcclxuICAgICAgZWxlbWVudFdpdGhCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXNzb3MnKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAzOlxyXG4gICAgICBlbGVtZW50V2l0aEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3Rob3J5b3MnKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSA0OlxyXG4gICAgICBlbGVtZW50V2l0aEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bHRob3MnKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykpIHtcclxuICAgIGVsZW1lbnRXaXRoQm94LnN0eWxlLmJvcmRlciA9ICcxcHggU29saWQgb3JhbmdlJztcclxuICAgIGVsZW1lbnRXaXRoQm94LnN0eWxlLnBhZGRpbmcgPSAnMnB4JztcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlbWVudFdpdGhCb3guc3R5bGUuYm9yZGVyID0gJzJweCBTb2xpZCBvcmFuZ2UnO1xyXG4gICAgZWxlbWVudFdpdGhCb3guc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICB9XHJcblxyXG4gIGdldExpa2UoKS50aGVuKChsaWtlcykgPT4ge1xyXG4gICAgbGV0IGkgPSAxO1xyXG4gICAgY2hhcmFjdGVyZXMuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XHJcbiAgICAgIGlmIChpID49IGNhcmRJbmkgJiYgaSA8PSBjYXJkRW5kKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUZvdW5kID0gbGlrZXMuZmluZChcclxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGBpbWcke2NoYXJhY3Rlci5pZH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBudW1MaWtlcyA9IGl0ZW1Gb3VuZCAhPT0gdW5kZWZpbmVkID8gaXRlbUZvdW5kLmxpa2VzIDogMDtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPVxyXG4gICAgICAgICAgaXRlbUZvdW5kICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAnLi9hc3NldHMvaW1hZ2VzL2ljb25zLXNwYXJrbGluZy1oZWFydC00OC5wbmcnXHJcbiAgICAgICAgICAgIDogJy4vYXNzZXRzL2ltYWdlcy9pY29ucy13aGl0ZS1oZWFydC00OC5wbmcnO1xyXG4gICAgICAgIHVsLmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZUNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjaGFyYWN0ZXIuaW1hZ2VVcmx9XCIgYWx0PVwiQ2hhcmFjdGVyIEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmREYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmROYW1lXCI+JHtjaGFyYWN0ZXIuZnVsbE5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZE5hbWVcIj4ke2NoYXJhY3Rlci50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImltZyR7Y2hhcmFjdGVyLmlkfVwiIGNsYXNzPVwiaW1hZ2VMaWtlXCIgc3JjPVwiJHtpbWdVcmx9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7bnVtTGlrZXN9IGxpa2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCdXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuQ29tbWVudCR7Y2hhcmFjdGVyLmlkfVwiIGNsYXNzPVwiYnRuQ29tbWVudFwiPmNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuUmVzZXJ2YXRpb24ke2NoYXJhY3Rlci5pZH1cIiBjbGFzcz1cImJ0blJlc2VydmF0aW9uXCI+cmVzZXJ2YXRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xyXG5cclxuICAgICAgICBjb25zdCBpbWdMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlTGlrZScpO1xyXG5cclxuICAgICAgICBpbWdMaWtlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL2ljb25zLXNwYXJrbGluZy1oZWFydC00OC5wbmcnO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0geyBpdGVtX2lkOiBlLnRhcmdldC5pZCB9O1xyXG4gICAgICAgICAgICBzZXRMaWtlKGl0ZW0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuQ29tbWVudCcpO1xyXG5cclxuICAgICAgICBjb21tZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZmV0Y2hDaGFyYWN0ZXJieUlkKGUudGFyZ2V0LmlkLnNsaWNlKDEwKSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29tbWVudF9fc2VjdGlvbi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgaWQ9XCJidG5DbG9zZVwiIGNsYXNzPVwiYnRuQ2xvc2VcIj54PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3NlY3Rpb24tZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZVVybH1cIiBhbHQ9XCIke2RhdGEuZmlyc3ROYW1lfVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5pZDoke2RhdGEuaWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Zmlyc3QgbmFtZToke2RhdGEuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmxhc3QgbmFtZToke2RhdGEuZnVsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmFtaWx5OiR7ZGF0YS5mYW1pbHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5mdWxsIG5hbWU6JHtkYXRhLmZ1bGxOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+dGl0bGU6JHtkYXRhLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3JldHJpZXZlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0b3RhbENvbW1lbnRzXCI+PGgyPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bENvbW1lbnRzXCI+PC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3NlY3Rpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5BZGQgY29tbWVudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCJhZGQgY29tbWVudCBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blN1Ym1pdHRcIj5zdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bkNsb3NlJyk7XHJcbiAgICAgICAgICAgICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRzKGRhdGEuaWQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBidG5TdWJtaXR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blN1Ym1pdHQnKTtcclxuICAgICAgICAgICAgICBidG5TdWJtaXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtX2lkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICB1c2VybmFtZTogbmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50KGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRzKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpID4gY2FyZEVuZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpICs9IDE7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUNvbW1lbnRzID0gKHZhbHVlKSA9PiB7XHJcbiAgZ2V0Q29tbWVudHModmFsdWUpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XHJcbiAgICBjb25zdCB1bENvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ29tbWVudHMnKTtcclxuICAgIHVsQ29tbWVudHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChyZWNvcmQpID0+IHtcclxuICAgICAgdWxDb21tZW50cy5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImxpQ29tbWVudFwiPiR7cmVjb3JkLmNyZWF0aW9uX2RhdGV9ICR7cmVjb3JkLnVzZXJuYW1lfTogJHtyZWNvcmQuY29tbWVudH1cclxuICAgICAgICA8L2xpPmA7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRvdGFsQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWxDb21tZW50cycpO1xyXG4gICAgdG90YWxDb21tZW50cy5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCAke2NvdW50Q29tbWVudHMoKX0gKWA7XHJcbiAgfSk7XG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRGF0YTtcclxuIiwiaW1wb3J0IHJlbmRlckRhdGEgZnJvbSAnLi9kaXNwbGF5RGF0YS5qcyc7XHJcblxyXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvM2xEMER3TGJ1WjZkUk5aaUExQ0UvbGlrZXMnO1xyXG5jb25zdCB1cmxDb21tZW50cyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8zbEQwRHdMYnVaNmRSTlppQTFDRS9jb21tZW50cyc7XHJcblxyXG5jb25zdCBnZXRMaWtlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChkYXRhID0ge30pID0+IHtcclxuICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIHJlbmRlckRhdGEoTWF0aC50cnVuYyhkYXRhLml0ZW1faWQuc2xpY2UoMykgLyAxMykgKyAxKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChkYXRhID0ge30pID0+IHtcclxuICBhd2FpdCBmZXRjaCh1cmxDb21tZW50cywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChkYXRhID0gJycpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybENvbW1lbnRzfT9pdGVtX2lkPSR7ZGF0YX1gKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXRMaWtlLCBnZXRMaWtlLCBhZGRDb21tZW50LCBnZXRDb21tZW50cyxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9sb2dvMy5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pY29ucy1zcGFya2xpbmctaGVhcnQtNDgucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaWNvbnMtd2hpdGUtaGVhcnQtNDgucG5nJztcclxuaW1wb3J0IHJlbmRlckRhdGEgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlEYXRhLmpzJztcclxuaW1wb3J0IGNvdW50Q2hhcmFjdGVyIGZyb20gJy4vbW9kdWxlcy9jaGFyYWN0ZXJDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZXBhZ2UnKTtcclxuY29uc3Qgd2VzdGVyb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VzdGVyb3MnKTtcclxuY29uc3QgZXNzb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXNzb3MnKTtcclxuY29uc3Qgc290aG9yeW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdGhvcnlvcycpO1xyXG5jb25zdCB1bHRob3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWx0aG9zJyk7XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgcmVuZGVyRGF0YSgxKTtcclxuICBjb3VudENoYXJhY3RlcigpO1xyXG59O1xyXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlbmRlckRhdGEoMCk7XHJcbiAgY291bnRDaGFyYWN0ZXIoKTtcclxufSk7XHJcblxyXG53ZXN0ZXJvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZW5kZXJEYXRhKDEpO1xyXG59KTtcclxuXHJcbmVzc29zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlbmRlckRhdGEoMik7XHJcbn0pO1xyXG5cclxuc290aG9yeW9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlbmRlckRhdGEoMyk7XHJcbn0pO1xyXG5cclxudWx0aG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlbmRlckRhdGEoNCk7XHJcbn0pO1xyXG4vLyB3ZXN0ZXJvcy5jbGljaygpO1xyXG5jb3VudENoYXJhY3RlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=