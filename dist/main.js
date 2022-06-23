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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #d2f1e4;\n}\n#main {\n  height: 48rem;\n}\n.header {\n  background-color: #272727;\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header h1 {\n  color: white;\n  font-family: poppins;\n}\n.container {\n  display: flex;\n}\n#myForm {\n  position: relative;\n  left: 396px;\n  top: -546px;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  background-color: #202020;\n  border-radius: 12px;\n  padding: 13px;\n  display: none;\n}\n#title-inbox,\n#desc-inbox,\n#title-form,\n#desc-form {\n  background-color: #202020;\n  color: white;\n  border: none;\n  padding: 7px;\n  font-family: poppins;\n  font-size: 17px;\n  border-bottom: solid 1px #646464;\n  border-radius: 0px;\n  width: 254px;\n  outline: none;\n  margin-top: 9px;\n}\n.title-label,\n.desc-label {\n  font-style: poppins;\n  color: white;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n.tabs_content--active,\n.list-container-project {\n    height: 400px;\n    width: fit-content;\n    margin-left: 76px;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n}\n\nul {\n  list-style-type: none;\n}\n.ul-list-inbox,\n.ul-list-project, .ul-form {\n  display: flex;\n  /* grid-template-columns: repeat(2,1fr); */\n  font-family: poppins;\n  position: relative;\n  left: 30em;\n  bottom: 8em;\n  height: fit-content;\n  width: fit-content;\n  /* border: 1px solid gray; */\n  flex-direction: column;\n}\n.inboxTitle,\n.project-title,\n.titleMiddleBar {\n  margin-left: 108px;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  font-family: poppins;\n  color: white;\n}\n.today-title {\n  position: relative;\n  left: 84px;\n  top: 25px;\n  color: white;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  margin-top: 5px;\n}\n.tabs_buttons,\n.add-expand,\n.tabs_proj {\n  width: inherit;\n  background: transparent;\n  font-size: 28px;\n  border-radius: 2px;\n  color: white;\n  border: none;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs_project .default-project {\n  font-size: 19px;\n}\n.subnav {\n  display: flex;\n  flex-direction: column;\n}\n.subnav button {\n  font-size: 17px;\n}\n[data-for-tab=\"project\"] {\n  display: flex;\n  justify-content: center;\n  font-family: poppins;\n  height: 65px;\n}\n.absoluteP {\n  position: absolute;\n}\n.plus {\n  position: relative;\n  left: 132px;\n  top: 23px;\n  height: 22px;\n  width: 23px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.plus:hover {\n  border: 1px solid whitesmoke;\n  border-radius: 7px;\n}\n\n.tabs_content {\n  display: none;\n}\n.tabs_content--active {\n  display: block;\n}\n.ul-list-project button,\n.ul-list-inbox button {\n  width: fit-content;\n}\n/* .form-container {\n  margin-top: 23px;\n} */\n\n.hidden {\n  display: none;\n}\n.list-border {\n  border: solid grey 1px;\n  cursor: pointer;\n  background-color: #202020;\n  height: fit-content;\n  width: 27em;\n  font-size: 17px;\n}\n.list-border h3 {\n  text-align: center;\n  border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    border-top: 1px dashed gray;\n    border-radius: 0px;\n    padding-top: 5px;\n }\n/* .list-border li {\n  margin-left: 65px;\n} */\n#date-inbox, #date-form {\n  width: 264px;\n  text-align: center;\n  background: #202020;\n  color: white;\n  border: 1px solid;\n  margin-top: 5px;\n}\n#date-inbox:focus, #date-form {\n  outline: 0;\n}\n#date-form:hover{\ncursor: pointer;\n}\n.delete-task {\n  float: right;\n  font-size: 20px;\n  margin-right: 4px;\n}\n.delete-task1 {\n  position: relative;\n  left: 250px;\n  top: -7px;\n  color: white;\n  font-size: 27px;\n  cursor: pointer;\n}\n.submit-btn {\n  font-size: 30px;\n  border: medium none;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n  border-radius: 22px;\n  position: relative;\n  top: 4px;\n  left: 5px;\n}\n.sideBar-container {\n  height: 56rem;\n  width: 21rem;\n  background-color: #565656;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sideBar-container p {\n  font-size: 30px;\n  font-family: poppins;\n  color: white;\n  padding: 10px;\n}\n\n.adder-btn button {\n  position: relative;\n  left: -25px;\n  top: 28px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 30px;\n}\n.adder-btn:hover {\n  cursor: pointer;\n}\n.tabs_buttons:hover {\n  background-color: #6e6e6e;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.middle-container {\n  height: 56rem;\n  width: 99rem;\n  background-color: #2d2d2d;\n}\n.create-project {\n  font-size: 20px;\n}\n.create-project:hover {\n  cursor: pointer;\n  color: #b7adad;\n}\n.add-task {\n  font-size: 25px;\n  color: white;\n  font-family: poppins;\n}\n.tabs_ {\n  display: flex;\n  margin-left: 60px;\n  margin-top: 18px;\n}\n.add span {\n  padding: 15px;\n}\n.add:hover {\n  color: grey;\n  cursor: pointer;\n}\n.formSubmitBtn:hover {\n  cursor: pointer;\n}\n.formSubmitBtn, .submit-inbox-button {\n  width: 267px;\n  margin-top: 7px;\n  background-color: #202020;\n  color: white;\n  font-size: 20px;\n  border: 1px solid;\n}\n@font-face {\n  font-family: \"poppins\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,aAAa;AACf;AACA;;;;EAIE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,eAAe;EACf,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;AACA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;;IAEI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;EACE,qBAAqB;AACvB;AACA;;EAEE,aAAa;EACb,0CAA0C;EAC1C,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;;;EAGE,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,eAAe;AACjB;AACA;;;EAGE,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;;EAEE,kBAAkB;AACpB;AACA;;GAEG;;AAEH;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,8BAA8B;AAChC;AACA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;CACnB;AACD;;GAEG;AACH;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,UAAU;AACZ;AACA;AACA,eAAe;AACf;AACA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,qDAAqD;EACrD,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;AACA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,4CAA+B;AACjC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #d2f1e4;\n}\n#main {\n  height: 48rem;\n}\n.header {\n  background-color: #272727;\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header h1 {\n  color: white;\n  font-family: poppins;\n}\n.container {\n  display: flex;\n}\n#myForm {\n  position: relative;\n  left: 396px;\n  top: -546px;\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  background-color: #202020;\n  border-radius: 12px;\n  padding: 13px;\n  display: none;\n}\n#title-inbox,\n#desc-inbox,\n#title-form,\n#desc-form {\n  background-color: #202020;\n  color: white;\n  border: none;\n  padding: 7px;\n  font-family: poppins;\n  font-size: 17px;\n  border-bottom: solid 1px #646464;\n  border-radius: 0px;\n  width: 254px;\n  outline: none;\n  margin-top: 9px;\n}\n.title-label,\n.desc-label {\n  font-style: poppins;\n  color: white;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n.tabs_content--active,\n.list-container-project {\n    height: 400px;\n    width: fit-content;\n    margin-left: 76px;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n}\n\nul {\n  list-style-type: none;\n}\n.ul-list-inbox,\n.ul-list-project, .ul-form {\n  display: flex;\n  /* grid-template-columns: repeat(2,1fr); */\n  font-family: poppins;\n  position: relative;\n  left: 30em;\n  bottom: 8em;\n  height: fit-content;\n  width: fit-content;\n  /* border: 1px solid gray; */\n  flex-direction: column;\n}\n.inboxTitle,\n.project-title,\n.titleMiddleBar {\n  margin-left: 108px;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  font-family: poppins;\n  color: white;\n}\n.today-title {\n  position: relative;\n  left: 84px;\n  top: 25px;\n  color: white;\n  border-bottom: 1px dashed #cccbcb;\n  width: fit-content;\n  margin-top: 5px;\n}\n.tabs_buttons,\n.add-expand,\n.tabs_proj {\n  width: inherit;\n  background: transparent;\n  font-size: 28px;\n  border-radius: 2px;\n  color: white;\n  border: none;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs_project .default-project {\n  font-size: 19px;\n}\n.subnav {\n  display: flex;\n  flex-direction: column;\n}\n.subnav button {\n  font-size: 17px;\n}\n[data-for-tab=\"project\"] {\n  display: flex;\n  justify-content: center;\n  font-family: poppins;\n  height: 65px;\n}\n.absoluteP {\n  position: absolute;\n}\n.plus {\n  position: relative;\n  left: 132px;\n  top: 23px;\n  height: 22px;\n  width: 23px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.plus:hover {\n  border: 1px solid whitesmoke;\n  border-radius: 7px;\n}\n\n.tabs_content {\n  display: none;\n}\n.tabs_content--active {\n  display: block;\n}\n.ul-list-project button,\n.ul-list-inbox button {\n  width: fit-content;\n}\n/* .form-container {\n  margin-top: 23px;\n} */\n\n.hidden {\n  display: none;\n}\n.list-border {\n  border: solid grey 1px;\n  cursor: pointer;\n  background-color: #202020;\n  height: fit-content;\n  width: 27em;\n  font-size: 17px;\n}\n.list-border h3 {\n  text-align: center;\n  border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    border-top: 1px dashed gray;\n    border-radius: 0px;\n    padding-top: 5px;\n }\n/* .list-border li {\n  margin-left: 65px;\n} */\n#date-inbox, #date-form {\n  width: 264px;\n  text-align: center;\n  background: #202020;\n  color: white;\n  border: 1px solid;\n  margin-top: 5px;\n}\n#date-inbox:focus, #date-form {\n  outline: 0;\n}\n#date-form:hover{\ncursor: pointer;\n}\n.delete-task {\n  float: right;\n  font-size: 20px;\n  margin-right: 4px;\n}\n.delete-task1 {\n  position: relative;\n  left: 250px;\n  top: -7px;\n  color: white;\n  font-size: 27px;\n  cursor: pointer;\n}\n.submit-btn {\n  font-size: 30px;\n  border: medium none;\n  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n  border-radius: 22px;\n  position: relative;\n  top: 4px;\n  left: 5px;\n}\n.sideBar-container {\n  height: 56rem;\n  width: 21rem;\n  background-color: #565656;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sideBar-container p {\n  font-size: 30px;\n  font-family: poppins;\n  color: white;\n  padding: 10px;\n}\n\n.adder-btn button {\n  position: relative;\n  left: -25px;\n  top: 28px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 30px;\n}\n.adder-btn:hover {\n  cursor: pointer;\n}\n.tabs_buttons:hover {\n  background-color: #6e6e6e;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.middle-container {\n  height: 56rem;\n  width: 99rem;\n  background-color: #2d2d2d;\n}\n.create-project {\n  font-size: 20px;\n}\n.create-project:hover {\n  cursor: pointer;\n  color: #b7adad;\n}\n.add-task {\n  font-size: 25px;\n  color: white;\n  font-family: poppins;\n}\n.tabs_ {\n  display: flex;\n  margin-left: 60px;\n  margin-top: 18px;\n}\n.add span {\n  padding: 15px;\n}\n.add:hover {\n  color: grey;\n  cursor: pointer;\n}\n.formSubmitBtn:hover {\n  cursor: pointer;\n}\n.formSubmitBtn, .submit-inbox-button {\n  width: 267px;\n  margin-top: 7px;\n  background-color: #202020;\n  color: white;\n  font-size: 20px;\n  border: 1px solid;\n}\n@font-face {\n  font-family: \"poppins\";\n  src: url(\"./Poppins-Light.ttf\");\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/inboxListCreate.js":
/*!********************************!*\
  !*** ./src/inboxListCreate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createList)
/* harmony export */ });
function createList() {
  var titleInbox = document.getElementById("title-inbox");
  var descInbox = document.getElementById("desc-inbox");
  let todoInfo = {
    title: document.getElementById("title-inbox").value,
    description: document.getElementById("desc-inbox").value,
    date: document.getElementById("date-inbox").value,
  };

  document.getElementById("title-inbox").value = "";
  document.getElementById("desc-inbox").value = "";

  var h3 = document.createElement("h3");
  var li = document.createElement("li");
  var mkDate = document.createElement("p");
  var div = document.createElement("div");
  var x = document.createElement("div");
  var ul_inbox = document.querySelector(".ul-list-inbox");
  x.classList.add("delete-task");
  div.classList.add("list-border");

  h3.textContent = `${todoInfo.title}`;
  x.textContent = "✖";
  li.textContent = `${todoInfo.description} `;
  mkDate.textContent = `${todoInfo.date}`;
  li.style.textAlign = "center";
  h3.style.textAlign = "center";
  div.addEventListener("click", () => {
    div.style.textDecoration = "line-through";
  });
  x.addEventListener("click", () => {
    div.remove();
  });

  ul_inbox.appendChild(div);
  div.append(x);
  div.appendChild(h3);
  div.appendChild(li);
  li.appendChild(mkDate);
  document.getElementById("title-inbox").value = "";
  document.getElementById("desc-inbox").value = "";
  h3.textContent = `${todoInfo.title}`;
  if (`${todoInfo.title}` == "") {
    h3.remove();
  }
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
/* harmony import */ var _inboxListCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxListCreate */ "./src/inboxListCreate.js");
// import createInboxContent from './inboxContent'


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
  (0,_inboxListCreate__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  ul.classList.add("ul-form");
  tabs_content.classList.add("tabs_content");
  tabs_content.dataset.tab = projectName;
  newTab.classList.add("tabs_buttons");
  newTab.dataset.forTab = projectName;
  newTab.textContent = projectName;
  title.textContent = projectName.toUpperCase();
  title.classList.add("titleMiddleBar");

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
    
    let todoInfo = {
      // title: document.getElementById("title-form").value,
      description: document.getElementById("desc-form").value,
      date: document.getElementById("date-form").value,
    }
    if (`${todoInfo.description}` == "" && `${todoInfo.date}` == "") {
      alert("Can't be empty!")
      return;
    } else if (todoInfo.date == "") {
      alert('Needs a date!')
      return;
    }
    // document.getElementById("title-inbox").value = "";
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
    li.textContent = `${todoInfo.description} `;
    mkDate.textContent = `${todoInfo.date}`;
    li.style.textAlign = "center";
    li.style.padding = '5px'
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
    document.getElementById("desc-form").value = "";
    // h3.textContent = `${todoInfo.title}`;
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
  middleBar.appendChild(tabs_content);

  setupTabs();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUIsY0FBYyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUMsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5ib3hMaXN0Q3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWU0O1xcbn1cXG4jbWFpbiB7XFxuICBoZWlnaHQ6IDQ4cmVtO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciBoMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbXlGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDM5NnB4O1xcbiAgdG9wOiAtNTQ2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMTNweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiN0aXRsZS1pbmJveCxcXG4jZGVzYy1pbmJveCxcXG4jdGl0bGUtZm9ybSxcXG4jZGVzYy1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNjQ2NDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgd2lkdGg6IDI1NHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDlweDtcXG59XFxuLnRpdGxlLWxhYmVsLFxcbi5kZXNjLWxhYmVsIHtcXG4gIGZvbnQtc3R5bGU6IHBvcHBpbnM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLnRhYnNfY29udGVudC0tYWN0aXZlLFxcbi5saXN0LWNvbnRhaW5lci1wcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tbGVmdDogNzZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogc2FucztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4udWwtbGlzdC1pbmJveCxcXG4udWwtbGlzdC1wcm9qZWN0LCAudWwtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpOyAqL1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzMGVtO1xcbiAgYm90dG9tOiA4ZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JheTsgKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pbmJveFRpdGxlLFxcbi5wcm9qZWN0LXRpdGxlLFxcbi50aXRsZU1pZGRsZUJhciB7XFxuICBtYXJnaW4tbGVmdDogMTA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2NiY2I7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRvZGF5LXRpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDg0cHg7XFxuICB0b3A6IDI1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2NiY2I7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi50YWJzX2J1dHRvbnMsXFxuLmFkZC1leHBhbmQsXFxuLnRhYnNfcHJvaiB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4udGFic19wcm9qZWN0IC5kZWZhdWx0LXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG4uc3VibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc3VibmF2IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcbltkYXRhLWZvci10YWI9XFxcInByb2plY3RcXFwiXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIGhlaWdodDogNjVweDtcXG59XFxuLmFic29sdXRlUCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5wbHVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEzMnB4O1xcbiAgdG9wOiAyM3B4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDIzcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucGx1czpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4udGFic19jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YWJzX2NvbnRlbnQtLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnVsLWxpc3QtcHJvamVjdCBidXR0b24sXFxuLnVsLWxpc3QtaW5ib3ggYnV0dG9uIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuLyogLmZvcm0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDIzcHg7XFxufSAqL1xcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxpc3QtYm9yZGVyIHtcXG4gIGJvcmRlcjogc29saWQgZ3JleSAxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAyN2VtO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4ubGlzdC1ib3JkZXIgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xcbn1cXG4ubGlzdC1ib3JkZXIgbGkgcCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiB9XFxuLyogLmxpc3QtYm9yZGVyIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xcbn0gKi9cXG4jZGF0ZS1pbmJveCwgI2RhdGUtZm9ybSB7XFxuICB3aWR0aDogMjY0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbiNkYXRlLWluYm94OmZvY3VzLCAjZGF0ZS1mb3JtIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbiNkYXRlLWZvcm06aG92ZXJ7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGVsZXRlLXRhc2sge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcbi5kZWxldGUtdGFzazEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMjUwcHg7XFxuICB0b3A6IC03cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdWJtaXQtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLnNpZGVCYXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTZyZW07XFxuICB3aWR0aDogMjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5zaWRlQmFyLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZGVyLWJ0biBidXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTI1cHg7XFxuICB0b3A6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLmFkZGVyLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YWJzX2J1dHRvbnM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTZyZW07XFxuICB3aWR0aDogOTlyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbn1cXG4uY3JlYXRlLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uY3JlYXRlLXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNiN2FkYWQ7XFxufVxcbi5hZGQtdGFzayB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG59XFxuLnRhYnNfIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogNjBweDtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcbi5hZGQgc3BhbiB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uYWRkOmhvdmVyIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9ybVN1Ym1pdEJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtU3VibWl0QnRuLCAuc3VibWl0LWluYm94LWJ1dHRvbiB7XFxuICB3aWR0aDogMjY3cHg7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwb3BwaW5zXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxc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QUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUErQjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZjFlNDtcXG59XFxuI21haW4ge1xcbiAgaGVpZ2h0OiA0OHJlbTtcXG59XFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI215Rm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzOTZweDtcXG4gIHRvcDogLTU0NnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jdGl0bGUtaW5ib3gsXFxuI2Rlc2MtaW5ib3gsXFxuI3RpdGxlLWZvcm0sXFxuI2Rlc2MtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzY0NjQ2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIHdpZHRoOiAyNTRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA5cHg7XFxufVxcbi50aXRsZS1sYWJlbCxcXG4uZGVzYy1sYWJlbCB7XFxuICBmb250LXN0eWxlOiBwb3BwaW5zO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi50YWJzX2NvbnRlbnQtLWFjdGl2ZSxcXG4ubGlzdC1jb250YWluZXItcHJvamVjdCB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDc2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnM7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnVsLWxpc3QtaW5ib3gsXFxuLnVsLWxpc3QtcHJvamVjdCwgLnVsLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTsgKi9cXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzBlbTtcXG4gIGJvdHRvbTogOGVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaW5ib3hUaXRsZSxcXG4ucHJvamVjdC10aXRsZSxcXG4udGl0bGVNaWRkbGVCYXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjYmNiO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi50b2RheS10aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA4NHB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjYmNiO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4udGFic19idXR0b25zLFxcbi5hZGQtZXhwYW5kLFxcbi50YWJzX3Byb2oge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnRhYnNfcHJvamVjdCAuZGVmYXVsdC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuLnN1Ym5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnN1Ym5hdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5bZGF0YS1mb3ItdGFiPVxcXCJwcm9qZWN0XFxcIl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICBoZWlnaHQ6IDY1cHg7XFxufVxcbi5hYnNvbHV0ZVAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucGx1cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMzJweDtcXG4gIHRvcDogMjNweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyM3B4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnBsdXM6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnRhYnNfY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFic19jb250ZW50LS1hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi51bC1saXN0LXByb2plY3QgYnV0dG9uLFxcbi51bC1saXN0LWluYm94IGJ1dHRvbiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi8qIC5mb3JtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAyM3B4O1xcbn0gKi9cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5saXN0LWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMjdlbTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuLmxpc3QtYm9yZGVyIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG59XFxuLmxpc3QtYm9yZGVyIGxpIHAge1xcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gfVxcbi8qIC5saXN0LWJvcmRlciBsaSB7XFxuICBtYXJnaW4tbGVmdDogNjVweDtcXG59ICovXFxuI2RhdGUtaW5ib3gsICNkYXRlLWZvcm0ge1xcbiAgd2lkdGg6IDI2NHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4jZGF0ZS1pbmJveDpmb2N1cywgI2RhdGUtZm9ybSB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4jZGF0ZS1mb3JtOmhvdmVye1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRlbGV0ZS10YXNrIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4uZGVsZXRlLXRhc2sxIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDI1MHB4O1xcbiAgdG9wOiAtN3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3VibWl0LWJ0biB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3JkZXI6IG1lZGl1bSBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiA1cHg7XFxufVxcbi5zaWRlQmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU2cmVtO1xcbiAgd2lkdGg6IDIxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uc2lkZUJhci1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LWZhbWlseTogcG9wcGlucztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGRlci1idG4gYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC0yNXB4O1xcbiAgdG9wOiAyOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5hZGRlci1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFic19idXR0b25zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTZlNmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDU2cmVtO1xcbiAgd2lkdGg6IDk5cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG59XFxuLmNyZWF0ZS1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjYjdhZGFkO1xcbn1cXG4uYWRkLXRhc2sge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi50YWJzXyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG4uYWRkIHNwYW4ge1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmFkZDpob3ZlciB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvcm1TdWJtaXRCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9ybVN1Ym1pdEJ0biwgLnN1Ym1pdC1pbmJveC1idXR0b24ge1xcbiAgd2lkdGg6IDI2N3B4O1xcbiAgbWFyZ2luLXRvcDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicG9wcGluc1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9Qb3BwaW5zLUxpZ2h0LnR0ZlxcXCIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgdmFyIHRpdGxlSW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWluYm94XCIpO1xuICB2YXIgZGVzY0luYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjLWluYm94XCIpO1xuICBsZXQgdG9kb0luZm8gPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW5ib3hcIikudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzYy1pbmJveFwiKS52YWx1ZSxcbiAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5ib3hcIikudmFsdWUsXG4gIH07XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbmJveFwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzYy1pbmJveFwiKS52YWx1ZSA9IFwiXCI7XG5cbiAgdmFyIGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHZhciBta0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZhciB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmFyIHVsX2luYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bC1saXN0LWluYm94XCIpO1xuICB4LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWJvcmRlclwiKTtcblxuICBoMy50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLnRpdGxlfWA7XG4gIHgudGV4dENvbnRlbnQgPSBcIuKcllwiO1xuICBsaS50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLmRlc2NyaXB0aW9ufSBgO1xuICBta0RhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RvSW5mby5kYXRlfWA7XG4gIGxpLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGgzLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gIH0pO1xuICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGl2LnJlbW92ZSgpO1xuICB9KTtcblxuICB1bF9pbmJveC5hcHBlbmRDaGlsZChkaXYpO1xuICBkaXYuYXBwZW5kKHgpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGkpO1xuICBsaS5hcHBlbmRDaGlsZChta0RhdGUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWluYm94XCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjLWluYm94XCIpLnZhbHVlID0gXCJcIjtcbiAgaDMudGV4dENvbnRlbnQgPSBgJHt0b2RvSW5mby50aXRsZX1gO1xuICBpZiAoYCR7dG9kb0luZm8udGl0bGV9YCA9PSBcIlwiKSB7XG4gICAgaDMucmVtb3ZlKCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLy8gaW1wb3J0IGNyZWF0ZUluYm94Q29udGVudCBmcm9tICcuL2luYm94Q29udGVudCdcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlTGlzdCBmcm9tIFwiLi9pbmJveExpc3RDcmVhdGVcIjtcbi8vIGltcG9ydCBjcmVhdGVGb3JtIGZyb20gXCIuLi9jcmVhdGVGb3JtXCI7XG52YXIgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbmNvbnN0IHN1Ym5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibmF2XCIpO1xuY29uc3QgbWlkZGxlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGUtY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBzZXR1cFRhYnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19idXR0b25zXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgc2lkZUJhciA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IHRhYk51bWJlciA9IGJ1dHRvbi5kYXRhc2V0LmZvclRhYjtcbiAgICAgIGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19jb250ZW50W2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYFxuICAgICAgKTtcblxuICAgICAgc2lkZUJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfYnV0dG9uc1wiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX2J1dHRvbnMtLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19jb250ZW50XCIpLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfY29udGVudC0tYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFic19idXR0b24tLWFjdGl2ZVwiKTtcbiAgICAgIHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZChcInRhYnNfY29udGVudC0tYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cbnNldHVwVGFicygpO1xuXG52YXIgaW5ib3hMaXN0ZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1pbmJveC1idXR0b25cIik7XG5pbmJveExpc3Rlbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjcmVhdGVMaXN0KCk7XG59KTtcblxuY29uc3QgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c1wiKTtcbnBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3JlYXRlUHJvamVjdENvbnRlbnQoKTtcbn0pO1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQoKSB7XG4gIHZhciBwcm9qZWN0TmFtZSA9IHByb21wdChcIldoYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0P1wiKTtcbiAgdmFyIG5ld1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdmFyIHRhYnNfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcInVsLWZvcm1cIik7XG4gIHRhYnNfY29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFic19jb250ZW50XCIpO1xuICB0YWJzX2NvbnRlbnQuZGF0YXNldC50YWIgPSBwcm9qZWN0TmFtZTtcbiAgbmV3VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX2J1dHRvbnNcIik7XG4gIG5ld1RhYi5kYXRhc2V0LmZvclRhYiA9IHByb2plY3ROYW1lO1xuICBuZXdUYWIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVNaWRkbGVCYXJcIik7XG5cbiAgdmFyIGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgdmFyIHVsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWxMaXN0LmNsYXNzTGlzdC5hZGQoXCJ1bC1saXN0XCIpO1xuICAvLyB2YXIgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2YXIgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZhciBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyB2YXIgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgLy8gdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gIC8vIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlLWZvcm1cIjtcbiAgLy8gdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgLy8gdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlIGhlcmUuLi5cIik7XG5cbiAgdmFyIGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY0lucHV0LmlkID0gXCJkZXNjLWZvcm1cIjtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcblxuICB2YXIgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlLWZvcm1cIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGF0ZSBoZXJlflwiKVxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwib25mb2N1c1wiLCBcInRoaXMudHlwZT0nZGF0ZSdcIilcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm9uYmx1clwiLCBcInRoaXMudHlwZT0ndGV4dCdcIilcblxuICB2YXIgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtU3VibWl0QnRuXCIpO1xuICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCIrXCI7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBcbiAgICBsZXQgdG9kb0luZm8gPSB7XG4gICAgICAvLyB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1mb3JtXCIpLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzYy1mb3JtXCIpLnZhbHVlLFxuICAgICAgZGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWZvcm1cIikudmFsdWUsXG4gICAgfVxuICAgIGlmIChgJHt0b2RvSW5mby5kZXNjcmlwdGlvbn1gID09IFwiXCIgJiYgYCR7dG9kb0luZm8uZGF0ZX1gID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiQ2FuJ3QgYmUgZW1wdHkhXCIpXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0b2RvSW5mby5kYXRlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KCdOZWVkcyBhIGRhdGUhJylcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbmJveFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjLWluYm94XCIpLnZhbHVlID0gXCJcIjtcbiAgXG4gICAgLy8gdmFyIGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB2YXIgbWtEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHZhciB1bF9pbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWwtbGlzdC1pbmJveFwiKTtcbiAgICB4LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImxpc3QtYm9yZGVyXCIpO1xuICBcbiAgICAvLyBoMy50ZXh0Q29udGVudCA9IHRvZG9JbmZvLnRpdGxlLnRvVXBwZXJDYXNlKCk7XG4gICAgeC50ZXh0Q29udGVudCA9IFwi4pyWXCI7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgJHt0b2RvSW5mby5kZXNjcmlwdGlvbn0gYDtcbiAgICBta0RhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RvSW5mby5kYXRlfWA7XG4gICAgbGkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBsaS5zdHlsZS5wYWRkaW5nID0gJzVweCdcbiAgICAvLyBoMy5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICB9KTtcbiAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXYucmVtb3ZlKCk7XG4gICAgfSk7XG4gIFxuICAgIHVsLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LmFwcGVuZCh4KTtcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQobWtEYXRlKTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWZvcm1cIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzYy1mb3JtXCIpLnZhbHVlID0gXCJcIjtcbiAgICAvLyBoMy50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLnRpdGxlfWA7XG4gIH0pXG4gIFxuXG4gIHRhYnNfY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRhYnNfY29udGVudC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgdGFic19jb250ZW50LmFwcGVuZENoaWxkKHVsKVxuICAvLyBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgLy8gdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG4gIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gIHN1Ym5hdi5hcHBlbmRDaGlsZChuZXdUYWIpO1xuICBtaWRkbGVCYXIuYXBwZW5kQ2hpbGQodGFic19jb250ZW50KTtcblxuICBzZXR1cFRhYnMoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==