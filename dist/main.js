/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins-Light.ttf */ "./src/Poppins-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #d2f1e4;\n}\n#main {\n  height: 48rem;\n}\n.header {\n  background-color: #272727;\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header h1 {\n  color: white;\n  font-family: poppins;\n}\n.container {\n  display: flex;\n}\n#myForm {\n  position: relative;\n  left: 396px;\n  top: -546px;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  background-color: #202020;\n  border-radius: 12px;\n  padding: 13px;\n  display: none;\n}\n#title-inbox,\n#desc-inbox,\n#title-form,\n#desc-form {\n  background-color: #202020;\n  color: white;\n  border: none;\n  padding: 7px;\n  font-family: poppins;\n  font-size: 17px;\n  border-bottom: solid 1px #646464;\n  border-radius: 0px;\n  width: 254px;\n  outline: none;\n  margin-top: 9px;\n}\n.title-label,\n.desc-label {\n  font-style: poppins;\n  color: white;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n.tabs_content--active,\n.list-container-project {\n    height: 400px;\n    width: 269px;\n    margin-left: 76px;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n}\n\nul {\n  list-style-type: none;\n}\n.ul-list-inbox,\n.ul-list-project, .ul-form {\n  display: flex;\n  /* grid-template-columns: repeat(2,1fr); */\n  font-family: poppins;\n  position: relative;\n  left: 30em;\n  bottom: 8em;\n  height: fit-content;\n  width: fit-content;\n  /* border: 1px solid gray; */\n  flex-direction: column;\n}\n.inboxTitle,\n.project-title,\n.titleMiddleBar {\n/* width: initial; */\nfont-family: poppins;\ncolor: white;\ntext-align: center;\ntext-decoration: underline;\n  text-decoration-style: solid;\ntext-decoration-style: dashed;\n}\n.today-title {\n  position: relative;\n  left: 84px;\n  top: 25px;\n  color: white;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  margin-top: 5px;\n}\n.tabs_buttons,\n.add-expand,\n.tabs_proj {\n  width: inherit;\n  background: transparent;\n  font-size: 28px;\n  border-radius: 2px;\n  color: white;\n  border: none;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs_project .default-project {\n  font-size: 19px;\n}\n.subnav {\n  display: flex;\n  flex-direction: column;\n  width: inherit;\n}\n.subnav button {\n  font-size: 17px;\n\n}\n[data-for-tab=\"project\"] {\n  display: flex;\n  justify-content: center;\n  font-family: poppins;\n  height: 65px;\n}\n.absoluteP {\n  position: absolute;\n}\n.plus {\n  position: relative;\n  left: 132px;\n  top: 23px;\n  height: 22px;\n  width: 23px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.plus:hover {\n  border: 1px solid whitesmoke;\n  border-radius: 7px;\n}\n\n.tabs_content {\n  display: none;\n}\n.tabs_content--active {\n  display: block;\n}\n.ul-list-project button,\n.ul-list-inbox button {\n  width: fit-content;\n}\n/* .form-container {\n  margin-top: 23px;\n} */\n\n.hidden {\n  display: none;\n}\n.list-border {\n  border: solid grey 1px;\n  cursor: pointer;\n  background-color: #202020;\n  height: fit-content;\n  width: 27em;\n  font-size: 17px;\n}\n.list-border h3 {\n  text-align: center;\n  border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    border-top: 1px dashed gray;\n    border-radius: 0px;\n    padding-top: 5px;\n }\n/* .list-border li {\n  margin-left: 65px;\n} */\n#date-inbox, #date-form {\n  width: 264px;\n  text-align: center;\n  background: #202020;\n  color: white;\n  border: 1px solid;\n  margin-top: 5px;\n}\n#date-inbox:focus, #date-form {\n  outline: 0;\n}\n#date-form:hover{\ncursor: pointer;\n}\n.delete-task {\n  float: right;\n  font-size: 20px;\n  margin-right: 4px;\n}\n.delete-task1 {\n  position: relative;\n  left: 250px;\n  top: -7px;\n  color: white;\n  font-size: 27px;\n  cursor: pointer;\n}\n.submit-btn {\n  font-size: 30px;\n  border: medium none;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n  border-radius: 22px;\n  position: relative;\n  top: 4px;\n  left: 5px;\n}\n.sideBar-container {\n  height: 56rem;\n  width: 21rem;\n  background-color: #565656;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sideBar-container p {\n  font-size: 30px;\n  font-family: poppins;\n  color: white;\n  padding: 10px;\n}\n\n.adder-btn button {\n  position: relative;\n  left: -25px;\n  top: 28px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 30px;\n}\n.adder-btn:hover {\n  cursor: pointer;\n}\n.tabs_buttons:hover {\n  background-color: #6e6e6e;\n  /* border-radius: 10px; */\n  cursor: pointer;\n}\n.middle-container {\n  height: 56rem;\n  width: 99rem;\n  background-color: #2d2d2d;\n}\n.create-project {\n  font-size: 20px;\n}\n.create-project:hover {\n  cursor: pointer;\n  color: #b7adad;\n}\n.add-task {\n  font-size: 25px;\n  color: white;\n  font-family: poppins;\n}\n.tabs_ {\n  display: flex;\n  margin-left: 60px;\n  margin-top: 18px;\n}\n.add span {\n  padding: 15px;\n}\n.add:hover {\n  color: grey;\n  cursor: pointer;\n}\n.formSubmitBtn:hover {\n  cursor: pointer;\n}\n.formSubmitBtn, .submit-inbox-button {\n  width: 267px;\n  margin-top: 7px;\n  background-color: #202020;\n  color: white;\n  font-size: 20px;\n  border: 1px solid;\n}\n\n@font-face {\n  font-family: \"poppins\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,aAAa;AACf;AACA;;;;EAIE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,eAAe;EACf,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;AACA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;EACE,qBAAqB;AACvB;AACA;;EAEE,aAAa;EACb,0CAA0C;EAC1C,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;;;AAGA,oBAAoB;AACpB,oBAAoB;AACpB,YAAY;AACZ,kBAAkB;AAClB,0BAA0B;EACxB,4BAA4B;AAC9B,6BAA6B;AAC7B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,eAAe;AACjB;AACA;;;EAGE,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,eAAe;;AAEjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;;EAEE,kBAAkB;AACpB;AACA;;GAEG;;AAEH;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,8BAA8B;AAChC;AACA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;CACnB;AACD;;GAEG;AACH;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,UAAU;AACZ;AACA;AACA,eAAe;AACf;AACA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,qDAAqD;EACrD,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;AACA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,4CAA+B;AACjC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #d2f1e4;\n}\n#main {\n  height: 48rem;\n}\n.header {\n  background-color: #272727;\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header h1 {\n  color: white;\n  font-family: poppins;\n}\n.container {\n  display: flex;\n}\n#myForm {\n  position: relative;\n  left: 396px;\n  top: -546px;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  background-color: #202020;\n  border-radius: 12px;\n  padding: 13px;\n  display: none;\n}\n#title-inbox,\n#desc-inbox,\n#title-form,\n#desc-form {\n  background-color: #202020;\n  color: white;\n  border: none;\n  padding: 7px;\n  font-family: poppins;\n  font-size: 17px;\n  border-bottom: solid 1px #646464;\n  border-radius: 0px;\n  width: 254px;\n  outline: none;\n  margin-top: 9px;\n}\n.title-label,\n.desc-label {\n  font-style: poppins;\n  color: white;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n.tabs_content--active,\n.list-container-project {\n    height: 400px;\n    width: 269px;\n    margin-left: 76px;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n}\n\nul {\n  list-style-type: none;\n}\n.ul-list-inbox,\n.ul-list-project, .ul-form {\n  display: flex;\n  /* grid-template-columns: repeat(2,1fr); */\n  font-family: poppins;\n  position: relative;\n  left: 30em;\n  bottom: 8em;\n  height: fit-content;\n  width: fit-content;\n  /* border: 1px solid gray; */\n  flex-direction: column;\n}\n.inboxTitle,\n.project-title,\n.titleMiddleBar {\n/* width: initial; */\nfont-family: poppins;\ncolor: white;\ntext-align: center;\ntext-decoration: underline;\n  text-decoration-style: solid;\ntext-decoration-style: dashed;\n}\n.today-title {\n  position: relative;\n  left: 84px;\n  top: 25px;\n  color: white;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  margin-top: 5px;\n}\n.tabs_buttons,\n.add-expand,\n.tabs_proj {\n  width: inherit;\n  background: transparent;\n  font-size: 28px;\n  border-radius: 2px;\n  color: white;\n  border: none;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs_project .default-project {\n  font-size: 19px;\n}\n.subnav {\n  display: flex;\n  flex-direction: column;\n  width: inherit;\n}\n.subnav button {\n  font-size: 17px;\n\n}\n[data-for-tab=\"project\"] {\n  display: flex;\n  justify-content: center;\n  font-family: poppins;\n  height: 65px;\n}\n.absoluteP {\n  position: absolute;\n}\n.plus {\n  position: relative;\n  left: 132px;\n  top: 23px;\n  height: 22px;\n  width: 23px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.plus:hover {\n  border: 1px solid whitesmoke;\n  border-radius: 7px;\n}\n\n.tabs_content {\n  display: none;\n}\n.tabs_content--active {\n  display: block;\n}\n.ul-list-project button,\n.ul-list-inbox button {\n  width: fit-content;\n}\n/* .form-container {\n  margin-top: 23px;\n} */\n\n.hidden {\n  display: none;\n}\n.list-border {\n  border: solid grey 1px;\n  cursor: pointer;\n  background-color: #202020;\n  height: fit-content;\n  width: 27em;\n  font-size: 17px;\n}\n.list-border h3 {\n  text-align: center;\n  border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    border-top: 1px dashed gray;\n    border-radius: 0px;\n    padding-top: 5px;\n }\n/* .list-border li {\n  margin-left: 65px;\n} */\n#date-inbox, #date-form {\n  width: 264px;\n  text-align: center;\n  background: #202020;\n  color: white;\n  border: 1px solid;\n  margin-top: 5px;\n}\n#date-inbox:focus, #date-form {\n  outline: 0;\n}\n#date-form:hover{\ncursor: pointer;\n}\n.delete-task {\n  float: right;\n  font-size: 20px;\n  margin-right: 4px;\n}\n.delete-task1 {\n  position: relative;\n  left: 250px;\n  top: -7px;\n  color: white;\n  font-size: 27px;\n  cursor: pointer;\n}\n.submit-btn {\n  font-size: 30px;\n  border: medium none;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n  border-radius: 22px;\n  position: relative;\n  top: 4px;\n  left: 5px;\n}\n.sideBar-container {\n  height: 56rem;\n  width: 21rem;\n  background-color: #565656;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sideBar-container p {\n  font-size: 30px;\n  font-family: poppins;\n  color: white;\n  padding: 10px;\n}\n\n.adder-btn button {\n  position: relative;\n  left: -25px;\n  top: 28px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 30px;\n}\n.adder-btn:hover {\n  cursor: pointer;\n}\n.tabs_buttons:hover {\n  background-color: #6e6e6e;\n  /* border-radius: 10px; */\n  cursor: pointer;\n}\n.middle-container {\n  height: 56rem;\n  width: 99rem;\n  background-color: #2d2d2d;\n}\n.create-project {\n  font-size: 20px;\n}\n.create-project:hover {\n  cursor: pointer;\n  color: #b7adad;\n}\n.add-task {\n  font-size: 25px;\n  color: white;\n  font-family: poppins;\n}\n.tabs_ {\n  display: flex;\n  margin-left: 60px;\n  margin-top: 18px;\n}\n.add span {\n  padding: 15px;\n}\n.add:hover {\n  color: grey;\n  cursor: pointer;\n}\n.formSubmitBtn:hover {\n  cursor: pointer;\n}\n.formSubmitBtn, .submit-inbox-button {\n  width: 267px;\n  margin-top: 7px;\n  background-color: #202020;\n  color: white;\n  font-size: 20px;\n  border: 1px solid;\n}\n\n@font-face {\n  font-family: \"poppins\";\n  src: url(\"./Poppins-Light.ttf\");\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectContent)
/* harmony export */ });

function createProjectContent() {
    const subnav = document.querySelector(".subnav");
    const middleBar = document.querySelector(".middle-container");
    var projectName = prompt("What is the name of your project?");
    var newTab = document.createElement("button");
    var title = document.createElement("h3");
    var tabs_content = document.createElement("div");
    var ul = document.createElement("ul");
    var deleteProjectCross = document.createElement('div')
    deleteProjectCross.classList.add('projectx')
    deleteProjectCross.textContent = '✖'
    ul.classList.add("ul-form");
    tabs_content.classList.add("tabs_content");
    tabs_content.dataset.tab = projectName;
    newTab.classList.add("tabs_buttons");
    newTab.dataset.forTab = projectName;
    newTab.textContent = projectName;
    title.textContent = projectName.toUpperCase();
    title.classList.add("titleMiddleBar");
    deleteProjectCross.dataset.tab = projectName;
  
  
    // Delete project tab by data attribute //
    deleteProjectCross.addEventListener('click', () => {
    if (deleteProjectCross[`'data-tab ="${projectName}"`] == tabs_content[`'data-tab ="${projectName}`]) {
      tabs_content.remove()
      newTab.remove()
    }
    })
  
    var formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    var ulList = document.createElement("ul");
    ulList.classList.add("ul-list");
    var descDiv = document.createElement("div");
    var dateDiv = document.createElement("div");
  
  
  
    var descInput = document.createElement("input");
    descInput.setAttribute("name", "description");
    descInput.id = "desc-form";
    descInput.setAttribute("type", "text");
    descInput.setAttribute("placeholder", "Description");
  
    var dateInput = document.createElement("input");
    dateInput.setAttribute("id", "date-form");
    dateInput.setAttribute("type", "text");
    dateInput.setAttribute("placeholder", "Date here~")
    dateInput.setAttribute("onfocus", "this.type='date'")
    dateInput.setAttribute("onblur", "this.type='text'")
  
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    submitButton.classList.add("formSubmitBtn");
    submitButton.innerText = "+";
    submitButton.addEventListener('click', () => {
      
  
      if (`${descInput.value}` == "" && `${dateInput.value}` == "") {
        alert("Can't be empty!")
        return;
      } else if (dateInput.value == "" && typeof descInput.value === "string") {
        alert('Needs a date!')
        return;
      } else if (descInput.value == "" && typeof dateInput.value === "string") {
        alert ('You need a description~!')
        return;
      }
  
      var li = document.createElement("li");
      var mkDate = document.createElement("p");
      var div = document.createElement("div");
      var x = document.createElement("div");
      x.classList.add("delete-task");
      div.classList.add("list-border");
    
  
      x.textContent = "✖";
      li.textContent = `${descInput.value} `;
      mkDate.textContent = `${dateInput.value}`;
      li.style.textAlign = "center";
      div.addEventListener("click", () => {
        div.style.textDecoration = "line-through";
      });
      x.addEventListener("click", () => {
        div.remove();
      });
    
      ul.appendChild(div);
      div.append(x);
      div.appendChild(li);
      li.appendChild(mkDate);
   descInput.value = "";
   dateInput.value = "";
      console.log(descInput.value)
    })
    
  
    tabs_content.appendChild(title);
    tabs_content.appendChild(formContainer);
    tabs_content.appendChild(ul)
    formContainer.appendChild(descDiv);
    descDiv.appendChild(descInput);
    formContainer.appendChild(dateDiv);
    dateDiv.appendChild(dateInput);
    formContainer.appendChild(submitButton);
    subnav.appendChild(newTab);
    newTab.appendChild(deleteProjectCross)
    middleBar.appendChild(tabs_content);
  }

/***/ }),

/***/ "./src/setuptabs.js":
/*!**************************!*\
  !*** ./src/setuptabs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupTabs)
/* harmony export */ });
function setupTabs() {
    document.querySelectorAll(".tabs_buttons").forEach((button) => {
      button.addEventListener("click", () => {
        const sideBar = button.parentElement;
        const tabsContainer = document.querySelector(".middle-container");
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabsContainer.querySelector(
          `.tabs_content[data-tab="${tabNumber}"]`
        );
  
        sideBar.querySelectorAll(".tabs_buttons").forEach((button) => {
          button.classList.remove("tabs_buttons--active");
        });
  
        tabsContainer.querySelectorAll(".tabs_content").forEach((tab) => {
          tab.classList.remove("tabs_content--active");
        });
  
        button.classList.add("tabs_button--active");
        tabToActivate.classList.add("tabs_content--active");
      });
    });
  }

/***/ }),

/***/ "./src/Poppins-Light.ttf":
/*!*******************************!*\
  !*** ./src/Poppins-Light.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7641a0f76ca9ef6c252c.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _setuptabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setuptabs */ "./src/setuptabs.js");

// import createList from "./inboxListCreate";



// function setupTabs() {
//   document.querySelectorAll(".tabs_buttons").forEach((button) => {
//     button.addEventListener("click", () => {
//       const sideBar = button.parentElement;
//       const tabsContainer = document.querySelector(".middle-container");
//       const tabNumber = button.dataset.forTab;
//       const tabToActivate = tabsContainer.querySelector(
//         `.tabs_content[data-tab="${tabNumber}"]`
//       );

//       sideBar.querySelectorAll(".tabs_buttons").forEach((button) => {
//         button.classList.remove("tabs_buttons--active");
//       });

//       tabsContainer.querySelectorAll(".tabs_content").forEach((tab) => {
//         tab.classList.remove("tabs_content--active");
//       });

//       button.classList.add("tabs_button--active");
//       tabToActivate.classList.add("tabs_content--active");
//     });
//   });
// }
(0,_setuptabs__WEBPACK_IMPORTED_MODULE_2__["default"])();


var inboxListen = document.querySelector(".submit-inbox-button");
inboxListen.addEventListener("click", () => {
  // createList();
});
var cond = true;
console.log(cond)
const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  (0,_createProject__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_setuptabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

// function createProjectContent() {
//   var projectName = prompt("What is the name of your project?");
//   var newTab = document.createElement("button");
//   var title = document.createElement("h3");
//   var tabs_content = document.createElement("div");
//   var ul = document.createElement("ul");
//   var deleteProjectCross = document.createElement('div')
//   deleteProjectCross.classList.add('projectx')
//   deleteProjectCross.textContent = '✖'
//   ul.classList.add("ul-form");
//   tabs_content.classList.add("tabs_content");
//   tabs_content.dataset.tab = projectName;
//   newTab.classList.add("tabs_buttons");
//   newTab.dataset.forTab = projectName;
//   newTab.textContent = projectName;
//   title.textContent = projectName.toUpperCase();
//   title.classList.add("titleMiddleBar");
//   deleteProjectCross.dataset.tab = projectName;


//   // Delete project tab by data attribute //
//   deleteProjectCross.addEventListener('click', () => {
//   if (deleteProjectCross[`'data-tab ="${projectName}"`] == tabs_content[`'data-tab ="${projectName}`]) {
//     tabs_content.remove()
//     newTab.remove()
//   }
//   })

//   var formContainer = document.createElement("div");
//   formContainer.classList.add("form-container");
//   var ulList = document.createElement("ul");
//   ulList.classList.add("ul-list");
//   var descDiv = document.createElement("div");
//   var dateDiv = document.createElement("div");



//   var descInput = document.createElement("input");
//   descInput.setAttribute("name", "description");
//   descInput.id = "desc-form";
//   descInput.setAttribute("type", "text");
//   descInput.setAttribute("placeholder", "Description");

//   var dateInput = document.createElement("input");
//   dateInput.setAttribute("id", "date-form");
//   dateInput.setAttribute("type", "text");
//   dateInput.setAttribute("placeholder", "Date here~")
//   dateInput.setAttribute("onfocus", "this.type='date'")
//   dateInput.setAttribute("onblur", "this.type='text'")

//   var submitButton = document.createElement("button");
//   submitButton.setAttribute("type", "submit");
//   submitButton.setAttribute("value", "Submit");
//   submitButton.classList.add("formSubmitBtn");
//   submitButton.innerText = "+";
//   submitButton.addEventListener('click', () => {
    

//     if (`${descInput.value}` == "" && `${dateInput.value}` == "") {
//       alert("Can't be empty!")
//       return;
//     } else if (dateInput.value == "" && typeof descInput.value === "string") {
//       alert('Needs a date!')
//       return;
//     } else if (descInput.value == "" && typeof dateInput.value === "string") {
//       alert ('You need a description~!')
//       return;
//     }

//     var li = document.createElement("li");
//     var mkDate = document.createElement("p");
//     var div = document.createElement("div");
//     var x = document.createElement("div");
//     x.classList.add("delete-task");
//     div.classList.add("list-border");
  

//     x.textContent = "✖";
//     li.textContent = `${descInput.value} `;
//     mkDate.textContent = `${dateInput.value}`;
//     li.style.textAlign = "center";
//     div.addEventListener("click", () => {
//       div.style.textDecoration = "line-through";
//     });
//     x.addEventListener("click", () => {
//       div.remove();
//     });
  
//     ul.appendChild(div);
//     div.append(x);
//     div.appendChild(li);
//     li.appendChild(mkDate);
//  descInput.value = "";
//  dateInput.value = "";
//     console.log(descInput.value)
//   })
  

//   tabs_content.appendChild(title);
//   tabs_content.appendChild(formContainer);
//   tabs_content.appendChild(ul)
//   formContainer.appendChild(descDiv);
//   descDiv.appendChild(descInput);
//   formContainer.appendChild(dateDiv);
//   dateDiv.appendChild(dateInput);
//   formContainer.appendChild(submitButton);
//   subnav.appendChild(newTab);
//   newTab.appendChild(deleteProjectCross)
//   middleBar.appendChild(tabs_content);
//   setupTabs();
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJCQUEyQixpQkFBaUI7QUFDNUMsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zZXR1cHRhYnMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1BvcHBpbnMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZTQ7XFxufVxcbiNtYWluIHtcXG4gIGhlaWdodDogNDhyZW07XFxufVxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXG4gIGhlaWdodDogMTMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNteUZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzk2cHg7XFxuICB0b3A6IC01NDZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxM3B4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI3RpdGxlLWluYm94LFxcbiNkZXNjLWluYm94LFxcbiN0aXRsZS1mb3JtLFxcbiNkZXNjLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM2NDY0NjQ7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICB3aWR0aDogMjU0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLXRvcDogOXB4O1xcbn1cXG4udGl0bGUtbGFiZWwsXFxuLmRlc2MtbGFiZWwge1xcbiAgZm9udC1zdHlsZTogcG9wcGlucztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4udGFic19jb250ZW50LS1hY3RpdmUsXFxuLmxpc3QtY29udGFpbmVyLXByb2plY3Qge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogMjY5cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi51bC1saXN0LWluYm94LFxcbi51bC1saXN0LXByb2plY3QsIC51bC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7ICovXFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDMwZW07XFxuICBib3R0b206IDhlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmF5OyAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmluYm94VGl0bGUsXFxuLnByb2plY3QtdGl0bGUsXFxuLnRpdGxlTWlkZGxlQmFyIHtcXG4vKiB3aWR0aDogaW5pdGlhbDsgKi9cXG5mb250LWZhbWlseTogcG9wcGlucztcXG5jb2xvcjogd2hpdGU7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcXG50ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRhc2hlZDtcXG59XFxuLnRvZGF5LXRpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDg0cHg7XFxuICB0b3A6IDI1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2NiY2I7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi50YWJzX2J1dHRvbnMsXFxuLmFkZC1leHBhbmQsXFxuLnRhYnNfcHJvaiB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4udGFic19wcm9qZWN0IC5kZWZhdWx0LXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG4uc3VibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxufVxcbi5zdWJuYXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG5cXG59XFxuW2RhdGEtZm9yLXRhYj1cXFwicHJvamVjdFxcXCJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgaGVpZ2h0OiA2NXB4O1xcbn1cXG4uYWJzb2x1dGVQIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnBsdXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTMycHg7XFxuICB0b3A6IDIzcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB3aWR0aDogMjNweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wbHVzOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi50YWJzX2NvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhYnNfY29udGVudC0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udWwtbGlzdC1wcm9qZWN0IGJ1dHRvbixcXG4udWwtbGlzdC1pbmJveCBidXR0b24ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4vKiAuZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjNweDtcXG59ICovXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubGlzdC1ib3JkZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDI3ZW07XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5saXN0LWJvcmRlciBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyZXk7XFxufVxcbi5saXN0LWJvcmRlciBsaSBwIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuIH1cXG4vKiAubGlzdC1ib3JkZXIgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XFxufSAqL1xcbiNkYXRlLWluYm94LCAjZGF0ZS1mb3JtIHtcXG4gIHdpZHRoOiAyNjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuI2RhdGUtaW5ib3g6Zm9jdXMsICNkYXRlLWZvcm0ge1xcbiAgb3V0bGluZTogMDtcXG59XFxuI2RhdGUtZm9ybTpob3ZlcntcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kZWxldGUtdGFzayB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuLmRlbGV0ZS10YXNrMSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAyNTBweDtcXG4gIHRvcDogLTdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN1Ym1pdC1idG4ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG4uc2lkZUJhci1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA1NnJlbTtcXG4gIHdpZHRoOiAyMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjU2NTY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnNpZGVCYXItY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkZXItYnRuIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtMjVweDtcXG4gIHRvcDogMjhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uYWRkZXItYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhYnNfYnV0dG9uczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2ZTZlO1xcbiAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1pZGRsZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA1NnJlbTtcXG4gIHdpZHRoOiA5OXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxufVxcbi5jcmVhdGUtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5jcmVhdGUtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2I3YWRhZDtcXG59XFxuLmFkZC10YXNrIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbn1cXG4udGFic18ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuLmFkZCBzcGFuIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5hZGQ6aG92ZXIge1xcbiAgY29sb3I6IGdyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtU3VibWl0QnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvcm1TdWJtaXRCdG4sIC5zdWJtaXQtaW5ib3gtYnV0dG9uIHtcXG4gIHdpZHRoOiAyNjdweDtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInBvcHBpbnNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBQ0E7Ozs7RUFJRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBOztFQUVFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4QjtBQUNBOzs7QUFHQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsMEJBQTBCO0VBQ3hCLDRCQUE0QjtBQUM5Qiw2QkFBNkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTs7O0VBR0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTs7QUFFakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDs7R0FFRztBQUNIO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQStCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWU0O1xcbn1cXG4jbWFpbiB7XFxuICBoZWlnaHQ6IDQ4cmVtO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciBoMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbXlGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDM5NnB4O1xcbiAgdG9wOiAtNTQ2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMTNweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiN0aXRsZS1pbmJveCxcXG4jZGVzYy1pbmJveCxcXG4jdGl0bGUtZm9ybSxcXG4jZGVzYy1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNjQ2NDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgd2lkdGg6IDI1NHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDlweDtcXG59XFxuLnRpdGxlLWxhYmVsLFxcbi5kZXNjLWxhYmVsIHtcXG4gIGZvbnQtc3R5bGU6IHBvcHBpbnM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLnRhYnNfY29udGVudC0tYWN0aXZlLFxcbi5saXN0LWNvbnRhaW5lci1wcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDI2OXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNzZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogc2FucztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4udWwtbGlzdC1pbmJveCxcXG4udWwtbGlzdC1wcm9qZWN0LCAudWwtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpOyAqL1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzMGVtO1xcbiAgYm90dG9tOiA4ZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JheTsgKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pbmJveFRpdGxlLFxcbi5wcm9qZWN0LXRpdGxlLFxcbi50aXRsZU1pZGRsZUJhciB7XFxuLyogd2lkdGg6IGluaXRpYWw7ICovXFxuZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuY29sb3I6IHdoaXRlO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG50ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XFxudGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBkYXNoZWQ7XFxufVxcbi50b2RheS10aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA4NHB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjYmNiO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4udGFic19idXR0b25zLFxcbi5hZGQtZXhwYW5kLFxcbi50YWJzX3Byb2oge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnRhYnNfcHJvamVjdCAuZGVmYXVsdC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuLnN1Ym5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbn1cXG4uc3VibmF2IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuXFxufVxcbltkYXRhLWZvci10YWI9XFxcInByb2plY3RcXFwiXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIGhlaWdodDogNjVweDtcXG59XFxuLmFic29sdXRlUCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5wbHVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEzMnB4O1xcbiAgdG9wOiAyM3B4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDIzcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucGx1czpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4udGFic19jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YWJzX2NvbnRlbnQtLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnVsLWxpc3QtcHJvamVjdCBidXR0b24sXFxuLnVsLWxpc3QtaW5ib3ggYnV0dG9uIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuLyogLmZvcm0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDIzcHg7XFxufSAqL1xcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxpc3QtYm9yZGVyIHtcXG4gIGJvcmRlcjogc29saWQgZ3JleSAxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAyN2VtO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4ubGlzdC1ib3JkZXIgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xcbn1cXG4ubGlzdC1ib3JkZXIgbGkgcCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiB9XFxuLyogLmxpc3QtYm9yZGVyIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xcbn0gKi9cXG4jZGF0ZS1pbmJveCwgI2RhdGUtZm9ybSB7XFxuICB3aWR0aDogMjY0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbiNkYXRlLWluYm94OmZvY3VzLCAjZGF0ZS1mb3JtIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbiNkYXRlLWZvcm06aG92ZXJ7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGVsZXRlLXRhc2sge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcbi5kZWxldGUtdGFzazEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMjUwcHg7XFxuICB0b3A6IC03cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdWJtaXQtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLnNpZGVCYXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTZyZW07XFxuICB3aWR0aDogMjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5zaWRlQmFyLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZGVyLWJ0biBidXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTI1cHg7XFxuICB0b3A6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLmFkZGVyLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YWJzX2J1dHRvbnM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZTtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTZyZW07XFxuICB3aWR0aDogOTlyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbn1cXG4uY3JlYXRlLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uY3JlYXRlLXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNiN2FkYWQ7XFxufVxcbi5hZGQtdGFzayB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG59XFxuLnRhYnNfIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogNjBweDtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcbi5hZGQgc3BhbiB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uYWRkOmhvdmVyIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9ybVN1Ym1pdEJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtU3VibWl0QnRuLCAuc3VibWl0LWluYm94LWJ1dHRvbiB7XFxuICB3aWR0aDogMjY3cHg7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwb3BwaW5zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL1BvcHBpbnMtTGlnaHQudHRmXFxcIik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250ZW50KCkge1xuICAgIGNvbnN0IHN1Ym5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibmF2XCIpO1xuICAgIGNvbnN0IG1pZGRsZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlLWNvbnRhaW5lclwiKTtcbiAgICB2YXIgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdD9cIik7XG4gICAgdmFyIG5ld1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHZhciB0YWJzX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB2YXIgZGVsZXRlUHJvamVjdENyb3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZWxldGVQcm9qZWN0Q3Jvc3MuY2xhc3NMaXN0LmFkZCgncHJvamVjdHgnKVxuICAgIGRlbGV0ZVByb2plY3RDcm9zcy50ZXh0Q29udGVudCA9ICfinJYnXG4gICAgdWwuY2xhc3NMaXN0LmFkZChcInVsLWZvcm1cIik7XG4gICAgdGFic19jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJzX2NvbnRlbnRcIik7XG4gICAgdGFic19jb250ZW50LmRhdGFzZXQudGFiID0gcHJvamVjdE5hbWU7XG4gICAgbmV3VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX2J1dHRvbnNcIik7XG4gICAgbmV3VGFiLmRhdGFzZXQuZm9yVGFiID0gcHJvamVjdE5hbWU7XG4gICAgbmV3VGFiLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZU1pZGRsZUJhclwiKTtcbiAgICBkZWxldGVQcm9qZWN0Q3Jvc3MuZGF0YXNldC50YWIgPSBwcm9qZWN0TmFtZTtcbiAgXG4gIFxuICAgIC8vIERlbGV0ZSBwcm9qZWN0IHRhYiBieSBkYXRhIGF0dHJpYnV0ZSAvL1xuICAgIGRlbGV0ZVByb2plY3RDcm9zcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZGVsZXRlUHJvamVjdENyb3NzW2AnZGF0YS10YWIgPVwiJHtwcm9qZWN0TmFtZX1cImBdID09IHRhYnNfY29udGVudFtgJ2RhdGEtdGFiID1cIiR7cHJvamVjdE5hbWV9YF0pIHtcbiAgICAgIHRhYnNfY29udGVudC5yZW1vdmUoKVxuICAgICAgbmV3VGFiLnJlbW92ZSgpXG4gICAgfVxuICAgIH0pXG4gIFxuICAgIHZhciBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICB2YXIgdWxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsTGlzdC5jbGFzc0xpc3QuYWRkKFwidWwtbGlzdFwiKTtcbiAgICB2YXIgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBcbiAgXG4gIFxuICAgIHZhciBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjSW5wdXQuaWQgPSBcImRlc2MtZm9ybVwiO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgXG4gICAgdmFyIGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlLWZvcm1cIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRhdGUgaGVyZX5cIilcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwib25mb2N1c1wiLCBcInRoaXMudHlwZT0nZGF0ZSdcIilcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwib25ibHVyXCIsIFwidGhpcy50eXBlPSd0ZXh0J1wiKVxuICBcbiAgICB2YXIgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtU3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIitcIjtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBcbiAgXG4gICAgICBpZiAoYCR7ZGVzY0lucHV0LnZhbHVlfWAgPT0gXCJcIiAmJiBgJHtkYXRlSW5wdXQudmFsdWV9YCA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiQ2FuJ3QgYmUgZW1wdHkhXCIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZUlucHV0LnZhbHVlID09IFwiXCIgJiYgdHlwZW9mIGRlc2NJbnB1dC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBhbGVydCgnTmVlZHMgYSBkYXRlIScpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZGVzY0lucHV0LnZhbHVlID09IFwiXCIgJiYgdHlwZW9mIGRhdGVJbnB1dC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBhbGVydCAoJ1lvdSBuZWVkIGEgZGVzY3JpcHRpb25+IScpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgXG4gICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB2YXIgbWtEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHguY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWJvcmRlclwiKTtcbiAgICBcbiAgXG4gICAgICB4LnRleHRDb250ZW50ID0gXCLinJZcIjtcbiAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7ZGVzY0lucHV0LnZhbHVlfSBgO1xuICAgICAgbWtEYXRlLnRleHRDb250ZW50ID0gYCR7ZGF0ZUlucHV0LnZhbHVlfWA7XG4gICAgICBsaS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICB9KTtcbiAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgXG4gICAgICB1bC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZCh4KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsaSk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChta0RhdGUpO1xuICAgZGVzY0lucHV0LnZhbHVlID0gXCJcIjtcbiAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICBjb25zb2xlLmxvZyhkZXNjSW5wdXQudmFsdWUpXG4gICAgfSlcbiAgICBcbiAgXG4gICAgdGFic19jb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YWJzX2NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgdGFic19jb250ZW50LmFwcGVuZENoaWxkKHVsKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG4gICAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBzdWJuYXYuYXBwZW5kQ2hpbGQobmV3VGFiKTtcbiAgICBuZXdUYWIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdENyb3NzKVxuICAgIG1pZGRsZUJhci5hcHBlbmRDaGlsZCh0YWJzX2NvbnRlbnQpO1xuICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBUYWJzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19idXR0b25zXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGVCYXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdGFiTnVtYmVyID0gYnV0dG9uLmRhdGFzZXQuZm9yVGFiO1xuICAgICAgICBjb25zdCB0YWJUb0FjdGl2YXRlID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAudGFic19jb250ZW50W2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYFxuICAgICAgICApO1xuICBcbiAgICAgICAgc2lkZUJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfYnV0dG9uc1wiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfYnV0dG9ucy0tYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgXG4gICAgICAgIHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX2NvbnRlbnRcIikuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX2NvbnRlbnQtLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInRhYnNfYnV0dG9uLS1hY3RpdmVcIik7XG4gICAgICAgIHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZChcInRhYnNfY29udGVudC0tYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgY3JlYXRlTGlzdCBmcm9tIFwiLi9pbmJveExpc3RDcmVhdGVcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0Q29udGVudCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgc2V0dXBUYWJzIGZyb20gXCIuL3NldHVwdGFic1wiXG5cbi8vIGZ1bmN0aW9uIHNldHVwVGFicygpIHtcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX2J1dHRvbnNcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4vLyAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICBjb25zdCBzaWRlQmFyID0gYnV0dG9uLnBhcmVudEVsZW1lbnQ7XG4vLyAgICAgICBjb25zdCB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGUtY29udGFpbmVyXCIpO1xuLy8gICAgICAgY29uc3QgdGFiTnVtYmVyID0gYnV0dG9uLmRhdGFzZXQuZm9yVGFiO1xuLy8gICAgICAgY29uc3QgdGFiVG9BY3RpdmF0ZSA9IHRhYnNDb250YWluZXIucXVlcnlTZWxlY3Rvcihcbi8vICAgICAgICAgYC50YWJzX2NvbnRlbnRbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXG4vLyAgICAgICApO1xuXG4vLyAgICAgICBzaWRlQmFyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19idXR0b25zXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuLy8gICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfYnV0dG9ucy0tYWN0aXZlXCIpO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICAgIHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX2NvbnRlbnRcIikuZm9yRWFjaCgodGFiKSA9PiB7XG4vLyAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwidGFic19jb250ZW50LS1hY3RpdmVcIik7XG4vLyAgICAgICB9KTtcblxuLy8gICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX2J1dHRvbi0tYWN0aXZlXCIpO1xuLy8gICAgICAgdGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKFwidGFic19jb250ZW50LS1hY3RpdmVcIik7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuc2V0dXBUYWJzKCk7XG5cblxudmFyIGluYm94TGlzdGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtaW5ib3gtYnV0dG9uXCIpO1xuaW5ib3hMaXN0ZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gY3JlYXRlTGlzdCgpO1xufSk7XG52YXIgY29uZCA9IHRydWU7XG5jb25zb2xlLmxvZyhjb25kKVxuY29uc3QgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c1wiKTtcbnBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3JlYXRlUHJvamVjdENvbnRlbnQoKTtcbiAgc2V0dXBUYWJzKCk7XG59KTtcblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQoKSB7XG4vLyAgIHZhciBwcm9qZWN0TmFtZSA9IHByb21wdChcIldoYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0P1wiKTtcbi8vICAgdmFyIG5ld1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbi8vICAgdmFyIHRhYnNfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbi8vICAgdmFyIGRlbGV0ZVByb2plY3RDcm9zcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgIGRlbGV0ZVByb2plY3RDcm9zcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0eCcpXG4vLyAgIGRlbGV0ZVByb2plY3RDcm9zcy50ZXh0Q29udGVudCA9ICfinJYnXG4vLyAgIHVsLmNsYXNzTGlzdC5hZGQoXCJ1bC1mb3JtXCIpO1xuLy8gICB0YWJzX2NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhYnNfY29udGVudFwiKTtcbi8vICAgdGFic19jb250ZW50LmRhdGFzZXQudGFiID0gcHJvamVjdE5hbWU7XG4vLyAgIG5ld1RhYi5jbGFzc0xpc3QuYWRkKFwidGFic19idXR0b25zXCIpO1xuLy8gICBuZXdUYWIuZGF0YXNldC5mb3JUYWIgPSBwcm9qZWN0TmFtZTtcbi8vICAgbmV3VGFiLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4vLyAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudG9VcHBlckNhc2UoKTtcbi8vICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlTWlkZGxlQmFyXCIpO1xuLy8gICBkZWxldGVQcm9qZWN0Q3Jvc3MuZGF0YXNldC50YWIgPSBwcm9qZWN0TmFtZTtcblxuXG4vLyAgIC8vIERlbGV0ZSBwcm9qZWN0IHRhYiBieSBkYXRhIGF0dHJpYnV0ZSAvL1xuLy8gICBkZWxldGVQcm9qZWN0Q3Jvc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGlmIChkZWxldGVQcm9qZWN0Q3Jvc3NbYCdkYXRhLXRhYiA9XCIke3Byb2plY3ROYW1lfVwiYF0gPT0gdGFic19jb250ZW50W2AnZGF0YS10YWIgPVwiJHtwcm9qZWN0TmFtZX1gXSkge1xuLy8gICAgIHRhYnNfY29udGVudC5yZW1vdmUoKVxuLy8gICAgIG5ld1RhYi5yZW1vdmUoKVxuLy8gICB9XG4vLyAgIH0pXG5cbi8vICAgdmFyIGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbi8vICAgdmFyIHVsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbi8vICAgdWxMaXN0LmNsYXNzTGlzdC5hZGQoXCJ1bC1saXN0XCIpO1xuLy8gICB2YXIgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIHZhciBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXG5cbi8vICAgdmFyIGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbi8vICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbi8vICAgZGVzY0lucHV0LmlkID0gXCJkZXNjLWZvcm1cIjtcbi8vICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuLy8gICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcblxuLy8gICB2YXIgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlLWZvcm1cIik7XG4vLyAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbi8vICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGF0ZSBoZXJlflwiKVxuLy8gICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwib25mb2N1c1wiLCBcInRoaXMudHlwZT0nZGF0ZSdcIilcbi8vICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm9uYmx1clwiLCBcInRoaXMudHlwZT0ndGV4dCdcIilcblxuLy8gICB2YXIgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4vLyAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbi8vICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtU3VibWl0QnRuXCIpO1xuLy8gICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCIrXCI7XG4vLyAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBcblxuLy8gICAgIGlmIChgJHtkZXNjSW5wdXQudmFsdWV9YCA9PSBcIlwiICYmIGAke2RhdGVJbnB1dC52YWx1ZX1gID09IFwiXCIpIHtcbi8vICAgICAgIGFsZXJ0KFwiQ2FuJ3QgYmUgZW1wdHkhXCIpXG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfSBlbHNlIGlmIChkYXRlSW5wdXQudmFsdWUgPT0gXCJcIiAmJiB0eXBlb2YgZGVzY0lucHV0LnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4vLyAgICAgICBhbGVydCgnTmVlZHMgYSBkYXRlIScpXG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfSBlbHNlIGlmIChkZXNjSW5wdXQudmFsdWUgPT0gXCJcIiAmJiB0eXBlb2YgZGF0ZUlucHV0LnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4vLyAgICAgICBhbGVydCAoJ1lvdSBuZWVkIGEgZGVzY3JpcHRpb25+IScpXG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfVxuXG4vLyAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuLy8gICAgIHZhciBta0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICB2YXIgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgeC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIik7XG4vLyAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWJvcmRlclwiKTtcbiAgXG5cbi8vICAgICB4LnRleHRDb250ZW50ID0gXCLinJZcIjtcbi8vICAgICBsaS50ZXh0Q29udGVudCA9IGAke2Rlc2NJbnB1dC52YWx1ZX0gYDtcbi8vICAgICBta0RhdGUudGV4dENvbnRlbnQgPSBgJHtkYXRlSW5wdXQudmFsdWV9YDtcbi8vICAgICBsaS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuLy8gICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgICAgZGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbi8vICAgICB9KTtcbi8vICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICBkaXYucmVtb3ZlKCk7XG4vLyAgICAgfSk7XG4gIFxuLy8gICAgIHVsLmFwcGVuZENoaWxkKGRpdik7XG4vLyAgICAgZGl2LmFwcGVuZCh4KTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQobGkpO1xuLy8gICAgIGxpLmFwcGVuZENoaWxkKG1rRGF0ZSk7XG4vLyAgZGVzY0lucHV0LnZhbHVlID0gXCJcIjtcbi8vICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuLy8gICAgIGNvbnNvbGUubG9nKGRlc2NJbnB1dC52YWx1ZSlcbi8vICAgfSlcbiAgXG5cbi8vICAgdGFic19jb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbi8vICAgdGFic19jb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuLy8gICB0YWJzX2NvbnRlbnQuYXBwZW5kQ2hpbGQodWwpXG4vLyAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG4vLyAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcbi8vICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbi8vICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuLy8gICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4vLyAgIHN1Ym5hdi5hcHBlbmRDaGlsZChuZXdUYWIpO1xuLy8gICBuZXdUYWIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdENyb3NzKVxuLy8gICBtaWRkbGVCYXIuYXBwZW5kQ2hpbGQodGFic19jb250ZW50KTtcbi8vICAgc2V0dXBUYWJzKCk7XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=