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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #d2f1e4;\n}\n#main {\n  height: 48rem;\n}\n.header {\n  background-color: #272727;\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header h1 {\n  color: white;\n  font-family: poppins;\n}\n.container {\n  display: flex;\n}\n#myForm {\n  position: relative;\n  left: 396px;\n  top: -546px;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  background-color: #202020;\n  border-radius: 12px;\n  padding: 13px;\n  display: none;\n}\n#title-inbox,\n#desc-inbox,\n#title-form,\n#desc-form {\n  background-color: #202020;\n  color: white;\n  border: none;\n  padding: 7px;\n  font-family: poppins;\n  font-size: 17px;\n  border-bottom: solid 1px #646464;\n  border-radius: 0px;\n  width: 254px;\n  outline: none;\n  margin-top: 9px;\n}\n.title-label,\n.desc-label {\n  font-style: poppins;\n  color: white;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n.tabs_content--active,\n.list-container-project {\n    height: 400px;\n    width: fit-content;\n    margin-left: 76px;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n}\n\nul {\n  list-style-type: none;\n}\n.ul-list-inbox,\n.ul-list-project, .ul-form {\n  display: flex;\n  /* grid-template-columns: repeat(2,1fr); */\n  font-family: poppins;\n  position: relative;\n  left: 30em;\n  bottom: 8em;\n  height: fit-content;\n  width: fit-content;\n  /* border: 1px solid gray; */\n  flex-direction: column;\n}\n.inboxTitle,\n.project-title,\n.titleMiddleBar {\n  margin-left: 108px;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  font-family: poppins;\n  color: white;\n}\n.today-title {\n  position: relative;\n  left: 84px;\n  top: 25px;\n  color: white;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  margin-top: 5px;\n}\n.tabs_buttons,\n.add-expand,\n.tabs_proj {\n  width: inherit;\n  background: transparent;\n  font-size: 28px;\n  border-radius: 2px;\n  color: white;\n  border: none;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs_project .default-project {\n  font-size: 19px;\n}\n.subnav {\n  display: flex;\n  flex-direction: column;\n}\n.subnav button {\n  font-size: 17px;\n  display: inline-block;\n}\n[data-for-tab=\"project\"] {\n  display: flex;\n  justify-content: center;\n  font-family: poppins;\n  height: 65px;\n}\n.absoluteP {\n  position: absolute;\n}\n.plus {\n  position: relative;\n  left: 132px;\n  top: 23px;\n  height: 22px;\n  width: 23px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.plus:hover {\n  border: 1px solid whitesmoke;\n  border-radius: 7px;\n}\n\n.tabs_content {\n  display: none;\n}\n.tabs_content--active {\n  display: block;\n}\n.ul-list-project button,\n.ul-list-inbox button {\n  width: fit-content;\n}\n/* .form-container {\n  margin-top: 23px;\n} */\n\n.hidden {\n  display: none;\n}\n.list-border {\n  border: solid grey 1px;\n  cursor: pointer;\n  background-color: #202020;\n  height: fit-content;\n  width: 27em;\n  font-size: 17px;\n}\n.list-border h3 {\n  text-align: center;\n  border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    border-top: 1px dashed gray;\n    border-radius: 0px;\n    padding-top: 5px;\n }\n/* .list-border li {\n  margin-left: 65px;\n} */\n#date-inbox, #date-form {\n  width: 264px;\n  text-align: center;\n  background: #202020;\n  color: white;\n  border: 1px solid;\n  margin-top: 5px;\n}\n#date-inbox:focus, #date-form {\n  outline: 0;\n}\n#date-form:hover{\ncursor: pointer;\n}\n.delete-task {\n  float: right;\n  font-size: 20px;\n  margin-right: 4px;\n}\n.delete-task1 {\n  position: relative;\n  left: 250px;\n  top: -7px;\n  color: white;\n  font-size: 27px;\n  cursor: pointer;\n}\n.submit-btn {\n  font-size: 30px;\n  border: medium none;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n  border-radius: 22px;\n  position: relative;\n  top: 4px;\n  left: 5px;\n}\n.sideBar-container {\n  height: 56rem;\n  width: 21rem;\n  background-color: #565656;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sideBar-container p {\n  font-size: 30px;\n  font-family: poppins;\n  color: white;\n  padding: 10px;\n}\n\n.adder-btn button {\n  position: relative;\n  left: -25px;\n  top: 28px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 30px;\n}\n.adder-btn:hover {\n  cursor: pointer;\n}\n.tabs_buttons:hover {\n  background-color: #6e6e6e;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.middle-container {\n  height: 56rem;\n  width: 99rem;\n  background-color: #2d2d2d;\n}\n.create-project {\n  font-size: 20px;\n}\n.create-project:hover {\n  cursor: pointer;\n  color: #b7adad;\n}\n.add-task {\n  font-size: 25px;\n  color: white;\n  font-family: poppins;\n}\n.tabs_ {\n  display: flex;\n  margin-left: 60px;\n  margin-top: 18px;\n}\n.add span {\n  padding: 15px;\n}\n.add:hover {\n  color: grey;\n  cursor: pointer;\n}\n.formSubmitBtn:hover {\n  cursor: pointer;\n}\n.formSubmitBtn, .submit-inbox-button {\n  width: 267px;\n  margin-top: 7px;\n  background-color: #202020;\n  color: white;\n  font-size: 20px;\n  border: 1px solid;\n}\n@font-face {\n  font-family: \"poppins\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,aAAa;AACf;AACA;;;;EAIE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,eAAe;EACf,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;AACA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;;IAEI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;EACE,qBAAqB;AACvB;AACA;;EAEE,aAAa;EACb,0CAA0C;EAC1C,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;;;EAGE,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,eAAe;AACjB;AACA;;;EAGE,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;;EAEE,kBAAkB;AACpB;AACA;;GAEG;;AAEH;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,8BAA8B;AAChC;AACA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;CACnB;AACD;;GAEG;AACH;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,UAAU;AACZ;AACA;AACA,eAAe;AACf;AACA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,qDAAqD;EACrD,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;AACA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,4CAA+B;AACjC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #d2f1e4;\n}\n#main {\n  height: 48rem;\n}\n.header {\n  background-color: #272727;\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header h1 {\n  color: white;\n  font-family: poppins;\n}\n.container {\n  display: flex;\n}\n#myForm {\n  position: relative;\n  left: 396px;\n  top: -546px;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  background-color: #202020;\n  border-radius: 12px;\n  padding: 13px;\n  display: none;\n}\n#title-inbox,\n#desc-inbox,\n#title-form,\n#desc-form {\n  background-color: #202020;\n  color: white;\n  border: none;\n  padding: 7px;\n  font-family: poppins;\n  font-size: 17px;\n  border-bottom: solid 1px #646464;\n  border-radius: 0px;\n  width: 254px;\n  outline: none;\n  margin-top: 9px;\n}\n.title-label,\n.desc-label {\n  font-style: poppins;\n  color: white;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n.tabs_content--active,\n.list-container-project {\n    height: 400px;\n    width: fit-content;\n    margin-left: 76px;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n}\n\nul {\n  list-style-type: none;\n}\n.ul-list-inbox,\n.ul-list-project, .ul-form {\n  display: flex;\n  /* grid-template-columns: repeat(2,1fr); */\n  font-family: poppins;\n  position: relative;\n  left: 30em;\n  bottom: 8em;\n  height: fit-content;\n  width: fit-content;\n  /* border: 1px solid gray; */\n  flex-direction: column;\n}\n.inboxTitle,\n.project-title,\n.titleMiddleBar {\n  margin-left: 108px;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  font-family: poppins;\n  color: white;\n}\n.today-title {\n  position: relative;\n  left: 84px;\n  top: 25px;\n  color: white;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  margin-top: 5px;\n}\n.tabs_buttons,\n.add-expand,\n.tabs_proj {\n  width: inherit;\n  background: transparent;\n  font-size: 28px;\n  border-radius: 2px;\n  color: white;\n  border: none;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs_project .default-project {\n  font-size: 19px;\n}\n.subnav {\n  display: flex;\n  flex-direction: column;\n}\n.subnav button {\n  font-size: 17px;\n  display: inline-block;\n}\n[data-for-tab=\"project\"] {\n  display: flex;\n  justify-content: center;\n  font-family: poppins;\n  height: 65px;\n}\n.absoluteP {\n  position: absolute;\n}\n.plus {\n  position: relative;\n  left: 132px;\n  top: 23px;\n  height: 22px;\n  width: 23px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.plus:hover {\n  border: 1px solid whitesmoke;\n  border-radius: 7px;\n}\n\n.tabs_content {\n  display: none;\n}\n.tabs_content--active {\n  display: block;\n}\n.ul-list-project button,\n.ul-list-inbox button {\n  width: fit-content;\n}\n/* .form-container {\n  margin-top: 23px;\n} */\n\n.hidden {\n  display: none;\n}\n.list-border {\n  border: solid grey 1px;\n  cursor: pointer;\n  background-color: #202020;\n  height: fit-content;\n  width: 27em;\n  font-size: 17px;\n}\n.list-border h3 {\n  text-align: center;\n  border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    border-top: 1px dashed gray;\n    border-radius: 0px;\n    padding-top: 5px;\n }\n/* .list-border li {\n  margin-left: 65px;\n} */\n#date-inbox, #date-form {\n  width: 264px;\n  text-align: center;\n  background: #202020;\n  color: white;\n  border: 1px solid;\n  margin-top: 5px;\n}\n#date-inbox:focus, #date-form {\n  outline: 0;\n}\n#date-form:hover{\ncursor: pointer;\n}\n.delete-task {\n  float: right;\n  font-size: 20px;\n  margin-right: 4px;\n}\n.delete-task1 {\n  position: relative;\n  left: 250px;\n  top: -7px;\n  color: white;\n  font-size: 27px;\n  cursor: pointer;\n}\n.submit-btn {\n  font-size: 30px;\n  border: medium none;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n  border-radius: 22px;\n  position: relative;\n  top: 4px;\n  left: 5px;\n}\n.sideBar-container {\n  height: 56rem;\n  width: 21rem;\n  background-color: #565656;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sideBar-container p {\n  font-size: 30px;\n  font-family: poppins;\n  color: white;\n  padding: 10px;\n}\n\n.adder-btn button {\n  position: relative;\n  left: -25px;\n  top: 28px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 30px;\n}\n.adder-btn:hover {\n  cursor: pointer;\n}\n.tabs_buttons:hover {\n  background-color: #6e6e6e;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.middle-container {\n  height: 56rem;\n  width: 99rem;\n  background-color: #2d2d2d;\n}\n.create-project {\n  font-size: 20px;\n}\n.create-project:hover {\n  cursor: pointer;\n  color: #b7adad;\n}\n.add-task {\n  font-size: 25px;\n  color: white;\n  font-family: poppins;\n}\n.tabs_ {\n  display: flex;\n  margin-left: 60px;\n  margin-top: 18px;\n}\n.add span {\n  padding: 15px;\n}\n.add:hover {\n  color: grey;\n  cursor: pointer;\n}\n.formSubmitBtn:hover {\n  cursor: pointer;\n}\n.formSubmitBtn, .submit-inbox-button {\n  width: 267px;\n  margin-top: 7px;\n  background-color: #202020;\n  color: white;\n  font-size: 20px;\n  border: 1px solid;\n}\n@font-face {\n  font-family: \"poppins\";\n  src: url(\"./Poppins-Light.ttf\");\n}\n"],"sourceRoot":""}]);
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
// import createInboxContent from './inboxContent'

// import createList from "./inboxListCreate";
// import createForm from "../createForm";
var main = document.getElementById("main");
const subnav = document.querySelector(".subnav");
const middleBar = document.querySelector(".middle-container");

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
setupTabs();

var inboxListen = document.querySelector(".submit-inbox-button");
inboxListen.addEventListener("click", () => {
  // createList();
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  createProjectContent();
});
function createProjectContent() {
  var projectName = prompt("What is the name of your project?");
  var newTab = document.createElement("button");
  var title = document.createElement("h3");
  var tabs_content = document.createElement("div");
  var ul = document.createElement("ul");
  var deleteProjectCross = document.createElement('div')

  deleteProjectCross.textContent = '✖'
  deleteProjectCross.style.float = 'right';
  deleteProjectCross.style.marginRight = '4px'
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
  // var titleDiv = document.createElement("div");
  var descDiv = document.createElement("div");
  var dateDiv = document.createElement("div");

  // var titleInput = document.createElement("input");
  // titleInput.setAttribute("name", "title");
  // titleInput.id = "title-form";
  // titleInput.setAttribute("type", "text");
  // titleInput.setAttribute("placeholder", "Title here...");

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
    
    // let todoInfo = {
    //   // title: document.getElementById("title-form").value,
    //   description: document.getElementById("desc-form").value,
    //   date: document.getElementById("date-form").value,
    // }
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
    // document.getElementById("title-inbox").val ue = "";
    // document.getElementById("desc-inbox").value = "";
  
    // var h3 = document.createElement("h3");
    var li = document.createElement("li");
    var mkDate = document.createElement("p");
    var div = document.createElement("div");
    var x = document.createElement("div");
    // var ul_inbox = document.querySelector(".ul-list-inbox");
    x.classList.add("delete-task");
    div.classList.add("list-border");
  
    // h3.textContent = todoInfo.title.toUpperCase();
    x.textContent = "✖";
    li.textContent = `${descInput.value} `;
    mkDate.textContent = `${dateInput.value}`;
    li.style.textAlign = "center";
    // li.style.padding = '5px'
    // h3.style.textAlign = "center";
    div.addEventListener("click", () => {
      div.style.textDecoration = "line-through";
    });
    x.addEventListener("click", () => {
      div.remove();
    });
  
    ul.appendChild(div);
    div.append(x);
    // div.appendChild(h3);
    div.appendChild(li);
    li.appendChild(mkDate);
    // document.getElementById("title-form").value = "";
 descInput.value = "";
 dateInput.value = "";
    // h3.textContent = `${todoInfo.title}`;
    console.log(descInput.value)
  })
  

  tabs_content.appendChild(title);
  tabs_content.appendChild(formContainer);
  tabs_content.appendChild(ul)
  // formContainer.appendChild(titleDiv);
  // titleDiv.appendChild(titleInput);
  formContainer.appendChild(descDiv);
  descDiv.appendChild(descInput);
  formContainer.appendChild(dateDiv);
  dateDiv.appendChild(dateInput);
  formContainer.appendChild(submitButton);
  subnav.appendChild(newTab);
  newTab.appendChild(deleteProjectCross)
  middleBar.appendChild(tabs_content);
  setupTabs();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekMsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUG9wcGlucy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZjFlNDtcXG59XFxuI21haW4ge1xcbiAgaGVpZ2h0OiA0OHJlbTtcXG59XFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI215Rm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzOTZweDtcXG4gIHRvcDogLTU0NnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jdGl0bGUtaW5ib3gsXFxuI2Rlc2MtaW5ib3gsXFxuI3RpdGxlLWZvcm0sXFxuI2Rlc2MtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzY0NjQ2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIHdpZHRoOiAyNTRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA5cHg7XFxufVxcbi50aXRsZS1sYWJlbCxcXG4uZGVzYy1sYWJlbCB7XFxuICBmb250LXN0eWxlOiBwb3BwaW5zO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi50YWJzX2NvbnRlbnQtLWFjdGl2ZSxcXG4ubGlzdC1jb250YWluZXItcHJvamVjdCB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDc2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnM7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnVsLWxpc3QtaW5ib3gsXFxuLnVsLWxpc3QtcHJvamVjdCwgLnVsLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTsgKi9cXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzBlbTtcXG4gIGJvdHRvbTogOGVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaW5ib3hUaXRsZSxcXG4ucHJvamVjdC10aXRsZSxcXG4udGl0bGVNaWRkbGVCYXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjYmNiO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi50b2RheS10aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA4NHB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjYmNiO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4udGFic19idXR0b25zLFxcbi5hZGQtZXhwYW5kLFxcbi50YWJzX3Byb2oge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnRhYnNfcHJvamVjdCAuZGVmYXVsdC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuLnN1Ym5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnN1Ym5hdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5bZGF0YS1mb3ItdGFiPVxcXCJwcm9qZWN0XFxcIl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBoZWlnaHQ6IDY1cHg7XFxufVxcbi5hYnNvbHV0ZVAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucGx1cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMzJweDtcXG4gIHRvcDogMjNweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyM3B4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnBsdXM6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnRhYnNfY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFic19jb250ZW50LS1hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi51bC1saXN0LXByb2plY3QgYnV0dG9uLFxcbi51bC1saXN0LWluYm94IGJ1dHRvbiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi8qIC5mb3JtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAyM3B4O1xcbn0gKi9cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5saXN0LWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMjdlbTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuLmxpc3QtYm9yZGVyIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG59XFxuLmxpc3QtYm9yZGVyIGxpIHAge1xcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gfVxcbi8qIC5saXN0LWJvcmRlciBsaSB7XFxuICBtYXJnaW4tbGVmdDogNjVweDtcXG59ICovXFxuI2RhdGUtaW5ib3gsICNkYXRlLWZvcm0ge1xcbiAgd2lkdGg6IDI2NHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4jZGF0ZS1pbmJveDpmb2N1cywgI2RhdGUtZm9ybSB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4jZGF0ZS1mb3JtOmhvdmVye1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRlbGV0ZS10YXNrIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4uZGVsZXRlLXRhc2sxIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDI1MHB4O1xcbiAgdG9wOiAtN3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3VibWl0LWJ0biB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3JkZXI6IG1lZGl1bSBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiA1cHg7XFxufVxcbi5zaWRlQmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU2cmVtO1xcbiAgd2lkdGg6IDIxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uc2lkZUJhci1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGRlci1idG4gYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC0yNXB4O1xcbiAgdG9wOiAyOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5hZGRlci1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFic19idXR0b25zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTZlNmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU2cmVtO1xcbiAgd2lkdGg6IDk5cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG59XFxuLmNyZWF0ZS1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjYjdhZGFkO1xcbn1cXG4uYWRkLXRhc2sge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi50YWJzXyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG4uYWRkIHNwYW4ge1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmFkZDpob3ZlciB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvcm1TdWJtaXRCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9ybVN1Ym1pdEJ0biwgLnN1Ym1pdC1pbmJveC1idXR0b24ge1xcbiAgd2lkdGg6IDI2N3B4O1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicG9wcGluc1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFDQTs7OztFQUlFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7OztFQUdFLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTs7O0VBR0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDs7R0FFRztBQUNIO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBK0I7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZTQ7XFxufVxcbiNtYWluIHtcXG4gIGhlaWdodDogNDhyZW07XFxufVxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcXG4gIGhlaWdodDogMTMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNteUZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzk2cHg7XFxuICB0b3A6IC01NDZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxM3B4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI3RpdGxlLWluYm94LFxcbiNkZXNjLWluYm94LFxcbiN0aXRsZS1mb3JtLFxcbiNkZXNjLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM2NDY0NjQ7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICB3aWR0aDogMjU0cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLXRvcDogOXB4O1xcbn1cXG4udGl0bGUtbGFiZWwsXFxuLmRlc2MtbGFiZWwge1xcbiAgZm9udC1zdHlsZTogcG9wcGlucztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4udGFic19jb250ZW50LS1hY3RpdmUsXFxuLmxpc3QtY29udGFpbmVyLXByb2plY3Qge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi51bC1saXN0LWluYm94LFxcbi51bC1saXN0LXByb2plY3QsIC51bC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7ICovXFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDMwZW07XFxuICBib3R0b206IDhlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmF5OyAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmluYm94VGl0bGUsXFxuLnByb2plY3QtdGl0bGUsXFxuLnRpdGxlTWlkZGxlQmFyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDhweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY2JjYjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4udG9kYXktdGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogODRweDtcXG4gIHRvcDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY2JjYjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLnRhYnNfYnV0dG9ucyxcXG4uYWRkLWV4cGFuZCxcXG4udGFic19wcm9qIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxufVxcbi50YWJzX3Byb2plY3QgLmRlZmF1bHQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcbi5zdWJuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zdWJuYXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuW2RhdGEtZm9yLXRhYj1cXFwicHJvamVjdFxcXCJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgaGVpZ2h0OiA2NXB4O1xcbn1cXG4uYWJzb2x1dGVQIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnBsdXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTMycHg7XFxuICB0b3A6IDIzcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB3aWR0aDogMjNweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wbHVzOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi50YWJzX2NvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhYnNfY29udGVudC0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udWwtbGlzdC1wcm9qZWN0IGJ1dHRvbixcXG4udWwtbGlzdC1pbmJveCBidXR0b24ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4vKiAuZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjNweDtcXG59ICovXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubGlzdC1ib3JkZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDI3ZW07XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5saXN0LWJvcmRlciBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyZXk7XFxufVxcbi5saXN0LWJvcmRlciBsaSBwIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuIH1cXG4vKiAubGlzdC1ib3JkZXIgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XFxufSAqL1xcbiNkYXRlLWluYm94LCAjZGF0ZS1mb3JtIHtcXG4gIHdpZHRoOiAyNjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuI2RhdGUtaW5ib3g6Zm9jdXMsICNkYXRlLWZvcm0ge1xcbiAgb3V0bGluZTogMDtcXG59XFxuI2RhdGUtZm9ybTpob3ZlcntcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kZWxldGUtdGFzayB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuLmRlbGV0ZS10YXNrMSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAyNTBweDtcXG4gIHRvcDogLTdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN1Ym1pdC1idG4ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG4uc2lkZUJhci1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA1NnJlbTtcXG4gIHdpZHRoOiAyMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjU2NTY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnNpZGVCYXItY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkZXItYnRuIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtMjVweDtcXG4gIHRvcDogMjhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uYWRkZXItYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhYnNfYnV0dG9uczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2ZTZlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1pZGRsZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA1NnJlbTtcXG4gIHdpZHRoOiA5OXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxufVxcbi5jcmVhdGUtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5jcmVhdGUtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2I3YWRhZDtcXG59XFxuLmFkZC10YXNrIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbn1cXG4udGFic18ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuLmFkZCBzcGFuIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5hZGQ6aG92ZXIge1xcbiAgY29sb3I6IGdyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtU3VibWl0QnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvcm1TdWJtaXRCdG4sIC5zdWJtaXQtaW5ib3gtYnV0dG9uIHtcXG4gIHdpZHRoOiAyNjdweDtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInBvcHBpbnNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vUG9wcGlucy1MaWdodC50dGZcXFwiKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLy8gaW1wb3J0IGNyZWF0ZUluYm94Q29udGVudCBmcm9tICcuL2luYm94Q29udGVudCdcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgY3JlYXRlTGlzdCBmcm9tIFwiLi9pbmJveExpc3RDcmVhdGVcIjtcbi8vIGltcG9ydCBjcmVhdGVGb3JtIGZyb20gXCIuLi9jcmVhdGVGb3JtXCI7XG52YXIgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbmNvbnN0IHN1Ym5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibmF2XCIpO1xuY29uc3QgbWlkZGxlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGUtY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBzZXR1cFRhYnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19idXR0b25zXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgc2lkZUJhciA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IHRhYk51bWJlciA9IGJ1dHRvbi5kYXRhc2V0LmZvclRhYjtcbiAgICAgIGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19jb250ZW50W2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYFxuICAgICAgKTtcblxuICAgICAgc2lkZUJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfYnV0dG9uc1wiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX2J1dHRvbnMtLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19jb250ZW50XCIpLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfY29udGVudC0tYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFic19idXR0b24tLWFjdGl2ZVwiKTtcbiAgICAgIHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZChcInRhYnNfY29udGVudC0tYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cbnNldHVwVGFicygpO1xuXG52YXIgaW5ib3hMaXN0ZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1pbmJveC1idXR0b25cIik7XG5pbmJveExpc3Rlbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBjcmVhdGVMaXN0KCk7XG59KTtcblxuY29uc3QgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c1wiKTtcbnBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3JlYXRlUHJvamVjdENvbnRlbnQoKTtcbn0pO1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQoKSB7XG4gIHZhciBwcm9qZWN0TmFtZSA9IHByb21wdChcIldoYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0P1wiKTtcbiAgdmFyIG5ld1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdmFyIHRhYnNfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdmFyIGRlbGV0ZVByb2plY3RDcm9zcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGVsZXRlUHJvamVjdENyb3NzLnRleHRDb250ZW50ID0gJ+KclidcbiAgZGVsZXRlUHJvamVjdENyb3NzLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0JztcbiAgZGVsZXRlUHJvamVjdENyb3NzLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzRweCdcbiAgdWwuY2xhc3NMaXN0LmFkZChcInVsLWZvcm1cIik7XG4gIHRhYnNfY29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFic19jb250ZW50XCIpO1xuICB0YWJzX2NvbnRlbnQuZGF0YXNldC50YWIgPSBwcm9qZWN0TmFtZTtcbiAgbmV3VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX2J1dHRvbnNcIik7XG4gIG5ld1RhYi5kYXRhc2V0LmZvclRhYiA9IHByb2plY3ROYW1lO1xuICBuZXdUYWIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVNaWRkbGVCYXJcIik7XG4gIGRlbGV0ZVByb2plY3RDcm9zcy5kYXRhc2V0LnRhYiA9IHByb2plY3ROYW1lO1xuICBcbiAgLy8gRGVsZXRlIHByb2plY3QgdGFiIGJ5IGRhdGEgYXR0cmlidXRlIC8vXG4gIGRlbGV0ZVByb2plY3RDcm9zcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGRlbGV0ZVByb2plY3RDcm9zc1tgJ2RhdGEtdGFiID1cIiR7cHJvamVjdE5hbWV9XCJgXSA9PSB0YWJzX2NvbnRlbnRbYCdkYXRhLXRhYiA9XCIke3Byb2plY3ROYW1lfWBdKSB7XG4gICAgdGFic19jb250ZW50LnJlbW92ZSgpXG4gICAgbmV3VGFiLnJlbW92ZSgpXG4gIH1cbiAgfSlcblxuICB2YXIgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICB2YXIgdWxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB1bExpc3QuY2xhc3NMaXN0LmFkZChcInVsLWxpc3RcIik7XG4gIC8vIHZhciB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZhciBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmFyIGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIHZhciB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAvLyB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgLy8gdGl0bGVJbnB1dC5pZCA9IFwidGl0bGUtZm9ybVwiO1xuICAvLyB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAvLyB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGUgaGVyZS4uLlwiKTtcblxuICB2YXIgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjSW5wdXQuaWQgPSBcImRlc2MtZm9ybVwiO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuXG4gIHZhciBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGUtZm9ybVwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEYXRlIGhlcmV+XCIpXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJvbmZvY3VzXCIsIFwidGhpcy50eXBlPSdkYXRlJ1wiKVxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwib25ibHVyXCIsIFwidGhpcy50eXBlPSd0ZXh0J1wiKVxuXG4gIHZhciBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImZvcm1TdWJtaXRCdG5cIik7XG4gIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIitcIjtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxuICAgIC8vIGxldCB0b2RvSW5mbyA9IHtcbiAgICAvLyAgIC8vIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWZvcm1cIikudmFsdWUsXG4gICAgLy8gICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjLWZvcm1cIikudmFsdWUsXG4gICAgLy8gICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtZm9ybVwiKS52YWx1ZSxcbiAgICAvLyB9XG4gICAgaWYgKGAke2Rlc2NJbnB1dC52YWx1ZX1gID09IFwiXCIgJiYgYCR7ZGF0ZUlucHV0LnZhbHVlfWAgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJDYW4ndCBiZSBlbXB0eSFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PSBcIlwiICYmIHR5cGVvZiBkZXNjSW5wdXQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGFsZXJ0KCdOZWVkcyBhIGRhdGUhJylcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGRlc2NJbnB1dC52YWx1ZSA9PSBcIlwiICYmIHR5cGVvZiBkYXRlSW5wdXQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGFsZXJ0ICgnWW91IG5lZWQgYSBkZXNjcmlwdGlvbn4hJylcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbmJveFwiKS52YWwgdWUgPSBcIlwiO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzYy1pbmJveFwiKS52YWx1ZSA9IFwiXCI7XG4gIFxuICAgIC8vIHZhciBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdmFyIG1rRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhciB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyB2YXIgdWxfaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsLWxpc3QtaW5ib3hcIik7XG4gICAgeC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWJvcmRlclwiKTtcbiAgXG4gICAgLy8gaDMudGV4dENvbnRlbnQgPSB0b2RvSW5mby50aXRsZS50b1VwcGVyQ2FzZSgpO1xuICAgIHgudGV4dENvbnRlbnQgPSBcIuKcllwiO1xuICAgIGxpLnRleHRDb250ZW50ID0gYCR7ZGVzY0lucHV0LnZhbHVlfSBgO1xuICAgIG1rRGF0ZS50ZXh0Q29udGVudCA9IGAke2RhdGVJbnB1dC52YWx1ZX1gO1xuICAgIGxpLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgLy8gbGkuc3R5bGUucGFkZGluZyA9ICc1cHgnXG4gICAgLy8gaDMuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgfSk7XG4gICAgeC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGl2LnJlbW92ZSgpO1xuICAgIH0pO1xuICBcbiAgICB1bC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5hcHBlbmQoeCk7XG4gICAgLy8gZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGkpO1xuICAgIGxpLmFwcGVuZENoaWxkKG1rRGF0ZSk7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1mb3JtXCIpLnZhbHVlID0gXCJcIjtcbiBkZXNjSW5wdXQudmFsdWUgPSBcIlwiO1xuIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgLy8gaDMudGV4dENvbnRlbnQgPSBgJHt0b2RvSW5mby50aXRsZX1gO1xuICAgIGNvbnNvbGUubG9nKGRlc2NJbnB1dC52YWx1ZSlcbiAgfSlcbiAgXG5cbiAgdGFic19jb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGFic19jb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICB0YWJzX2NvbnRlbnQuYXBwZW5kQ2hpbGQodWwpXG4gIC8vIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAvLyB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjRGl2KTtcbiAgZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgc3VibmF2LmFwcGVuZENoaWxkKG5ld1RhYik7XG4gIG5ld1RhYi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0Q3Jvc3MpXG4gIG1pZGRsZUJhci5hcHBlbmRDaGlsZCh0YWJzX2NvbnRlbnQpO1xuICBzZXR1cFRhYnMoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==