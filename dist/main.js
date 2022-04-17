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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    background-color: #D2F1E4;\n}\n#main {\n    height: 48rem;\n}\n.header {\n    background-color: #272727;\n    height: 130px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.header h1 {\n    color: white;\n    font-family: poppins;\n}\n.container {\n    display: flex;\n}\n#myForm {\n    position: relative;\n    left: 396px;\n    top: -546px;\n    display: flex;\n    flex-direction: column;\n    width: 270px;\n    background-color: #202020;\n    border-radius: 12px;\n    padding: 13px;\n    display: none;\n}\n#title-inbox, #desc-inbox,#title-project, #desc-project {\n    background-color: #202020;\n    color: white;\n    border: none;\n    padding: 7px;\n    font-family: poppins;\n    font-size: 17px;\n    border-bottom: solid 1px #646464;\n    border-radius: 0px;\n    width: 254px;\n    outline: none;\n    margin-top: 9px;\n}\n.title-label, .desc-label {\n    font-style: poppins;\n    color: white;\n    margin-left: 10px;\n    margin-top: 8px;\n}\n.list-container-inbox, .list-container-project {\n    height: 400px;\n    width: 400px;\n    position: absolute;\n    right: 68em;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n\n  }\n\nul {\n    list-style-type: none;\n}\n.ul-list-inbox, .ul-list-project {\n    display: flex;\n    /* grid-template-columns: repeat(2,1fr); */\n    font-family: poppins;\n    position: relative;\n    left: 30em;\n    bottom: 8em;\n    height: fit-content;\n    width: fit-content;\n    /* border: 1px solid gray; */\n    flex-direction: column;\n}\n.inboxTitle, .project-title {\n    margin-top:5px;\n    border-bottom: 1px dashed #cccbcb;\n    width: fit-content;\n}\nbutton {\n    width: 268px;\n    background: transparent;\n    font-size: 28px;\n    border: 1px #9f9f9f solid;\n    border-radius: 2px;\n    color: white;\n    margin-top: 7px;\n    cursor: pointer;\n}\n.ul-list-project button, .ul-list-inbox button {\n    width: fit-content;\n}\n.form-container { \n    margin-top: 23px\n}\n\n.hidden {\n    display: none;\n}\n.list-border {\n    border: solid grey 1px;\n    cursor: pointer;\n    background-color: #202020;\n    height: fit-content;\n    width: 47em;\n    font-size: 17px;\n}\n.list-border h3{\n    text-align: center;\n    border-bottom: 1px dashed grey;\n}\n.delete-task {\n    float: right;\n    font-size: 20px;\n    margin-right: 4px;\n}\n.delete-task1 {\n    position: relative;\n    left: 250px;\n    top: -7px;\n    color: white;\n    font-size: 27px;\n    cursor: pointer;\n}\n.submit-btn {\n    font-size: 30px;\n    border: medium none;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n    border-radius: 22px;\n    position: relative;\n    top: 4px;\n    left: 5px;\n}\n.sideBar-container {\n    height: 56rem;\n    width: 21rem;\n    background-color: #565656;\n    display: flex;\n    flex-direction: column;\n}\n.sideBar-container p {\n    font-size: 30px;\n    font-family: poppins;\n    color: white;\n    padding: 10px;\n}\n.inbox, .today, .project {\n    width: inherit;\n    height: fit-content;\n    text-align: center;\n}\n.inbox:hover, .today:hover, .project:hover {\n    background-color: #6e6e6e;\n    border-radius: 10px;\n    cursor: pointer;\n}\n.middle-container {\n    height: 56rem;\n    width: 99rem;\n    background-color: #2d2d2d;\n}\n.add-task {\n    font-size: 25px;\n    color: white;\n    font-family: poppins;\n}\n.task-container {\n    display: flex;\n    margin-left: 60px;\n    margin-top: 18px;\n}\n.add span {\n    padding: 15px;\n}\n.add:hover {\n    color: grey;\n    cursor: pointer;\n}\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,gCAAgC;IAChC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;;EAElB;;AAEF;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,0CAA0C;IAC1C,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,4BAA4B;IAC5B,sBAAsB;AAC1B;AACA;IACI,cAAc;IACd,iCAAiC;IACjC,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI;AACJ;;AAEA;IACI,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,qDAAqD;IACrD,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;AACA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,cAAc;IACd,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,sBAAsB;IACtB,4CAA+B;AACnC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    background-color: #D2F1E4;\n}\n#main {\n    height: 48rem;\n}\n.header {\n    background-color: #272727;\n    height: 130px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.header h1 {\n    color: white;\n    font-family: poppins;\n}\n.container {\n    display: flex;\n}\n#myForm {\n    position: relative;\n    left: 396px;\n    top: -546px;\n    display: flex;\n    flex-direction: column;\n    width: 270px;\n    background-color: #202020;\n    border-radius: 12px;\n    padding: 13px;\n    display: none;\n}\n#title-inbox, #desc-inbox,#title-project, #desc-project {\n    background-color: #202020;\n    color: white;\n    border: none;\n    padding: 7px;\n    font-family: poppins;\n    font-size: 17px;\n    border-bottom: solid 1px #646464;\n    border-radius: 0px;\n    width: 254px;\n    outline: none;\n    margin-top: 9px;\n}\n.title-label, .desc-label {\n    font-style: poppins;\n    color: white;\n    margin-left: 10px;\n    margin-top: 8px;\n}\n.list-container-inbox, .list-container-project {\n    height: 400px;\n    width: 400px;\n    position: absolute;\n    right: 68em;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n\n  }\n\nul {\n    list-style-type: none;\n}\n.ul-list-inbox, .ul-list-project {\n    display: flex;\n    /* grid-template-columns: repeat(2,1fr); */\n    font-family: poppins;\n    position: relative;\n    left: 30em;\n    bottom: 8em;\n    height: fit-content;\n    width: fit-content;\n    /* border: 1px solid gray; */\n    flex-direction: column;\n}\n.inboxTitle, .project-title {\n    margin-top:5px;\n    border-bottom: 1px dashed #cccbcb;\n    width: fit-content;\n}\nbutton {\n    width: 268px;\n    background: transparent;\n    font-size: 28px;\n    border: 1px #9f9f9f solid;\n    border-radius: 2px;\n    color: white;\n    margin-top: 7px;\n    cursor: pointer;\n}\n.ul-list-project button, .ul-list-inbox button {\n    width: fit-content;\n}\n.form-container { \n    margin-top: 23px\n}\n\n.hidden {\n    display: none;\n}\n.list-border {\n    border: solid grey 1px;\n    cursor: pointer;\n    background-color: #202020;\n    height: fit-content;\n    width: 47em;\n    font-size: 17px;\n}\n.list-border h3{\n    text-align: center;\n    border-bottom: 1px dashed grey;\n}\n.delete-task {\n    float: right;\n    font-size: 20px;\n    margin-right: 4px;\n}\n.delete-task1 {\n    position: relative;\n    left: 250px;\n    top: -7px;\n    color: white;\n    font-size: 27px;\n    cursor: pointer;\n}\n.submit-btn {\n    font-size: 30px;\n    border: medium none;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n    border-radius: 22px;\n    position: relative;\n    top: 4px;\n    left: 5px;\n}\n.sideBar-container {\n    height: 56rem;\n    width: 21rem;\n    background-color: #565656;\n    display: flex;\n    flex-direction: column;\n}\n.sideBar-container p {\n    font-size: 30px;\n    font-family: poppins;\n    color: white;\n    padding: 10px;\n}\n.inbox, .today, .project {\n    width: inherit;\n    height: fit-content;\n    text-align: center;\n}\n.inbox:hover, .today:hover, .project:hover {\n    background-color: #6e6e6e;\n    border-radius: 10px;\n    cursor: pointer;\n}\n.middle-container {\n    height: 56rem;\n    width: 99rem;\n    background-color: #2d2d2d;\n}\n.add-task {\n    font-size: 25px;\n    color: white;\n    font-family: poppins;\n}\n.task-container {\n    display: flex;\n    margin-left: 60px;\n    margin-top: 18px;\n}\n.add span {\n    padding: 15px;\n}\n.add:hover {\n    color: grey;\n    cursor: pointer;\n}\n@font-face {\n    font-family: 'poppins';\n    src: url('./Poppins-Light.ttf');\n}"],"sourceRoot":""}]);
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
// import addList from './addList';


var main = document.getElementById('main')
var header = document.createElement('div')
var headerTitle = document.createElement('h1')
var sideBar = document.createElement('div')
var middleBar = document.createElement('div')
var container = document.createElement('div')
var inbox = document.createElement('div')
var inboxP = document.createElement('p')
var today = document.createElement('div')
var todayP = document.createElement('p')
var project = document.createElement('div')
var projectP = document.createElement('p')


var listContainerInbox = document.createElement('div')
var listContainerProject = document.createElement('div')
var listContainerToday = document.createElement('div')




// class-add //


listContainerInbox.classList.add('hidden')
listContainerProject.classList.add('hidden')
inbox.classList.add('inbox')
today.classList.add('today')
project.classList.add('project')
container.classList.add('container')
middleBar.classList.add('middle-container')
sideBar.classList.add('sideBar-container')
header.classList.add('header')

// text-content //
headerTitle.textContent = 'To-Do List ✅'
inboxP.textContent = 'Inbox'
todayP.textContent = 'Today'
projectP.textContent = 'Projects'

function createInboxContent() {
    var ul_inbox = document.createElement('ul')
    var div = document.createElement('div')
    var input1 = document.createElement('input')
    var div1 = document.createElement('div')
    var label2 = document.createElement('label')
    var input2 = document.createElement('input')
    var submitB = document.createElement('button')
    var h3 = document.createElement('h3')
    h3.classList.add('inboxTitle')
    var divContainer = document.createElement('form')
    input1.setAttribute('name', 'title')
    input1.id = 'title-inbox'
    input1.setAttribute('type','text')
    input1.setAttribute('placeholder','Title here')
    input2.setAttribute('name', 'desc')
    input2.setAttribute('type','text')
    input2.setAttribute('placeholder','Desc here')
    input2.id = 'desc-inbox'
    h3.textContent = 'Inbox'
    ul_inbox.classList.add('ul-list-inbox')
    divContainer.classList.add('form-container')
    submitB.setAttribute('type','button')
    submitB.setAttribute('value','Submit')
    submitB.textContent = '+'
    
    submitB.addEventListener('click', () => {
        if (input1.value.length == 20 || input2.value.length == 0) {
            alert('Description cannot be empty!')
        } else {
            let todoInfo = {
                title:document.getElementById('title-inbox').value,
                description:document.getElementById('desc-inbox').value
            }
        
            var h3 = document.createElement('h3')
            var li = document.createElement('li')
            var ul = document.querySelector('.ul-list-inbox')
            var div = document.createElement('div')
            var x = document.createElement('div')
            x.classList.add('delete-task')
            div.classList.add('list-border')
        
            h3.textContent = `${todoInfo.title}`
            x.textContent ='✖'
            li.textContent = `${todoInfo.description} `
            li.style.textAlign = 'center'
            h3.style.textAlign ='center'
                div.addEventListener('click', ()=>{
                    div.style.textDecoration = 'line-through'
            })
            x.addEventListener('click', () => {
                div.remove();
            })
           
            ul.appendChild(div)
            div.append(x)
            div.appendChild(h3)
            div.appendChild(li)
            document.getElementById('title-inbox').value = ''
            document.getElementById('desc-inbox').value = ''
        }
    })
    listContainerInbox.appendChild(h3)
    listContainerInbox.appendChild(ul_inbox)
    listContainerInbox.appendChild(divContainer)
    // listContainerInbox.appendChild(h3)
    divContainer.appendChild(div)
    div.appendChild(input1)
    divContainer.appendChild(div1)
    div1.appendChild(input2)
    divContainer.appendChild(submitB)
    return ul_inbox;
}

function createProjectContent() {
    var ul_project = document.createElement('ul')
    var div = document.createElement('div')
    var label1 = document.createElement('label')
    var input1 = document.createElement('input')
    var div1 = document.createElement('div')
    var label2 = document.createElement('label')
    var input2 = document.createElement('input')
    var submitB = document.createElement('button')
    var h3 = document.createElement('h3')
    h3.classList.add('project-title')
    var divContainer = document.createElement('div')
    
    input1.setAttribute('name', 'title')
    input1.id = 'title-project'
    input1.setAttribute('type','text')
    input1.setAttribute('placeholder','Title here')
    input2.setAttribute('name', 'desc')
    input2.setAttribute('type','text')
    input2.setAttribute('placeholder','Desc here')
    input2.id = 'desc-project'
    h3.textContent = 'Projects'
    ul_project.classList.add('ul-list-project')
    divContainer.classList.add('form-container')
    submitB.setAttribute('type','button')
    submitB.setAttribute('value','Submit')
    submitB.textContent = '+'
    
    submitB.addEventListener('click', () => {
        if (input1.value.length == 0 || input2.value.length == 0) {
            alert('Fields cannot be empty!')
        } else {
            let todoInfo = {
                title:document.getElementById('title-project').value,
                description:document.getElementById('desc-project').value
            }
            var h3 = document.createElement('h3')
            var li = document.createElement('li')
            var ul = document.querySelector('.ul-list-project')
            var div = document.createElement('div')
            var x = document.createElement('div')
            x.classList.add('delete-task')
            div.classList.add('list-border')
            h3.textContent = `${todoInfo.title}`
            x.textContent ='✖'
            li.textContent = `${todoInfo.description} `
            li.style.textAlign = 'center'
            h3.style.textAlign ='center'
                div.addEventListener('click', ()=>{
                    div.style.textDecoration = 'line-through'
            })
            x.addEventListener('click', () => {
                div.remove();
            })
        
            ul.appendChild(div)
            div.append(x)
            div.appendChild(h3)
            div.appendChild(li)
            document.getElementById('title-inbox').value = ''
            document.getElementById('desc-inbox').value = ''
        }
    })

    listContainerProject.appendChild(ul_project)
    listContainerProject.appendChild(h3)
    listContainerProject.appendChild(divContainer)
    // ul_project.appendChild(divContainer)
    divContainer.appendChild(div)
    div.appendChild(label1)
    div.appendChild(input1)
    divContainer.appendChild(div1)
    div1.appendChild(label2)
    div1.appendChild(input2)
    divContainer.appendChild(submitB)
    return ul_project;
}

// event Listeners //

project.addEventListener('click', () => {
let projectContainer = document.querySelector('.list-container-project')
let inbox = document.querySelector('.list-container-inbox')
let today = document.querySelector('.ul-list-today')
listContainerProject.className = 'list-container-project'
listContainerInbox.className = 'hidden'
})

inbox.addEventListener('click', () => {
    let inboxContainer = document.querySelector('.list-container-inbox')
    let today = document.querySelector('.ul-list-today')
    listContainerProject.className = 'hidden'
    listContainerInbox.className ='list-container-inbox'
})

main.append(header)
main.append(container)
listContainerProject.appendChild(createProjectContent())
listContainerInbox.appendChild(createInboxContent())
container.append(sideBar)
sideBar.appendChild(inbox)
inbox.appendChild(inboxP)
sideBar.appendChild(today)
today.appendChild(todayP)
sideBar.appendChild(project)
project.appendChild(projectP)
container.append(middleBar)
middleBar.append(listContainerInbox)
middleBar.appendChild(listContainerProject)
header.appendChild(headerTitle)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw2Q0FBNkMsZ0JBQWdCLGlCQUFpQixHQUFHLFFBQVEsZ0NBQWdDLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxXQUFXLGdDQUFnQyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxjQUFjLG1CQUFtQiwyQkFBMkIsR0FBRyxjQUFjLG9CQUFvQixHQUFHLFdBQVcseUJBQXlCLGtCQUFrQixrQkFBa0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsZ0NBQWdDLDBCQUEwQixvQkFBb0Isb0JBQW9CLEdBQUcsMkRBQTJELGdDQUFnQyxtQkFBbUIsbUJBQW1CLG1CQUFtQiwyQkFBMkIsc0JBQXNCLHVDQUF1Qyx5QkFBeUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsR0FBRyw2QkFBNkIsMEJBQTBCLG1CQUFtQix3QkFBd0Isc0JBQXNCLEdBQUcsa0RBQWtELG9CQUFvQixtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHVCQUF1QixPQUFPLFFBQVEsNEJBQTRCLEdBQUcsb0NBQW9DLG9CQUFvQiwrQ0FBK0MsNkJBQTZCLHlCQUF5QixpQkFBaUIsa0JBQWtCLDBCQUEwQix5QkFBeUIsaUNBQWlDLCtCQUErQixHQUFHLCtCQUErQixxQkFBcUIsd0NBQXdDLHlCQUF5QixHQUFHLFVBQVUsbUJBQW1CLDhCQUE4QixzQkFBc0IsZ0NBQWdDLHlCQUF5QixtQkFBbUIsc0JBQXNCLHNCQUFzQixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRyxvQkFBb0IseUJBQXlCLGFBQWEsb0JBQW9CLEdBQUcsZ0JBQWdCLDZCQUE2QixzQkFBc0IsZ0NBQWdDLDBCQUEwQixrQkFBa0Isc0JBQXNCLEdBQUcsa0JBQWtCLHlCQUF5QixxQ0FBcUMsR0FBRyxnQkFBZ0IsbUJBQW1CLHNCQUFzQix3QkFBd0IsR0FBRyxpQkFBaUIseUJBQXlCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLHNCQUFzQixzQkFBc0IsR0FBRyxlQUFlLHNCQUFzQiwwQkFBMEIsNERBQTRELDBCQUEwQix5QkFBeUIsZUFBZSxnQkFBZ0IsR0FBRyxzQkFBc0Isb0JBQW9CLG1CQUFtQixnQ0FBZ0Msb0JBQW9CLDZCQUE2QixHQUFHLHdCQUF3QixzQkFBc0IsMkJBQTJCLG1CQUFtQixvQkFBb0IsR0FBRyw0QkFBNEIscUJBQXFCLDBCQUEwQix5QkFBeUIsR0FBRyw4Q0FBOEMsZ0NBQWdDLDBCQUEwQixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLG1CQUFtQixnQ0FBZ0MsR0FBRyxhQUFhLHNCQUFzQixtQkFBbUIsMkJBQTJCLEdBQUcsbUJBQW1CLG9CQUFvQix3QkFBd0IsdUJBQXVCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxjQUFjLGtCQUFrQixzQkFBc0IsR0FBRyxjQUFjLDZCQUE2QiwyREFBMkQsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEdBQUcsUUFBUSxnQ0FBZ0MsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFdBQVcsZ0NBQWdDLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGNBQWMsbUJBQW1CLDJCQUEyQixHQUFHLGNBQWMsb0JBQW9CLEdBQUcsV0FBVyx5QkFBeUIsa0JBQWtCLGtCQUFrQixvQkFBb0IsNkJBQTZCLG1CQUFtQixnQ0FBZ0MsMEJBQTBCLG9CQUFvQixvQkFBb0IsR0FBRywyREFBMkQsZ0NBQWdDLG1CQUFtQixtQkFBbUIsbUJBQW1CLDJCQUEyQixzQkFBc0IsdUNBQXVDLHlCQUF5QixtQkFBbUIsb0JBQW9CLHNCQUFzQixHQUFHLDZCQUE2QiwwQkFBMEIsbUJBQW1CLHdCQUF3QixzQkFBc0IsR0FBRyxrREFBa0Qsb0JBQW9CLG1CQUFtQix5QkFBeUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsdUJBQXVCLE9BQU8sUUFBUSw0QkFBNEIsR0FBRyxvQ0FBb0Msb0JBQW9CLCtDQUErQyw2QkFBNkIseUJBQXlCLGlCQUFpQixrQkFBa0IsMEJBQTBCLHlCQUF5QixpQ0FBaUMsK0JBQStCLEdBQUcsK0JBQStCLHFCQUFxQix3Q0FBd0MseUJBQXlCLEdBQUcsVUFBVSxtQkFBbUIsOEJBQThCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLG1CQUFtQixzQkFBc0Isc0JBQXNCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLG9CQUFvQix5QkFBeUIsYUFBYSxvQkFBb0IsR0FBRyxnQkFBZ0IsNkJBQTZCLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLGtCQUFrQixzQkFBc0IsR0FBRyxrQkFBa0IseUJBQXlCLHFDQUFxQyxHQUFHLGdCQUFnQixtQkFBbUIsc0JBQXNCLHdCQUF3QixHQUFHLGlCQUFpQix5QkFBeUIsa0JBQWtCLGdCQUFnQixtQkFBbUIsc0JBQXNCLHNCQUFzQixHQUFHLGVBQWUsc0JBQXNCLDBCQUEwQiw0REFBNEQsMEJBQTBCLHlCQUF5QixlQUFlLGdCQUFnQixHQUFHLHNCQUFzQixvQkFBb0IsbUJBQW1CLGdDQUFnQyxvQkFBb0IsNkJBQTZCLEdBQUcsd0JBQXdCLHNCQUFzQiwyQkFBMkIsbUJBQW1CLG9CQUFvQixHQUFHLDRCQUE0QixxQkFBcUIsMEJBQTBCLHlCQUF5QixHQUFHLDhDQUE4QyxnQ0FBZ0MsMEJBQTBCLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IsbUJBQW1CLGdDQUFnQyxHQUFHLGFBQWEsc0JBQXNCLG1CQUFtQiwyQkFBMkIsR0FBRyxtQkFBbUIsb0JBQW9CLHdCQUF3Qix1QkFBdUIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGNBQWMsa0JBQWtCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLHNDQUFzQyxHQUFHLG1CQUFtQjtBQUMvbFM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ29COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJGMUU0O1xcbn1cXG4jbWFpbiB7XFxuICAgIGhlaWdodDogNDhyZW07XFxufVxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbXlGb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAzOTZweDtcXG4gICAgdG9wOiAtNTQ2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMTNweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI3RpdGxlLWluYm94LCAjZGVzYy1pbmJveCwjdGl0bGUtcHJvamVjdCwgI2Rlc2MtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNjQ2NDY0O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHdpZHRoOiAyNTRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogOXB4O1xcbn1cXG4udGl0bGUtbGFiZWwsIC5kZXNjLWxhYmVsIHtcXG4gICAgZm9udC1zdHlsZTogcG9wcGlucztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4ubGlzdC1jb250YWluZXItaW5ib3gsIC5saXN0LWNvbnRhaW5lci1wcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA2OGVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcblxcbiAgfVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4udWwtbGlzdC1pbmJveCwgLnVsLWxpc3QtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMzBlbTtcXG4gICAgYm90dG9tOiA4ZW07XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JheTsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmluYm94VGl0bGUsIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY2JjYjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMjY4cHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4ICM5ZjlmOWYgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnVsLWxpc3QtcHJvamVjdCBidXR0b24sIC51bC1saXN0LWluYm94IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuLmZvcm0tY29udGFpbmVyIHsgXFxuICAgIG1hcmdpbi10b3A6IDIzcHhcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5saXN0LWJvcmRlciB7XFxuICAgIGJvcmRlcjogc29saWQgZ3JleSAxcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDQ3ZW07XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuLmxpc3QtYm9yZGVyIGgze1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG59XFxuLmRlbGV0ZS10YXNrIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4uZGVsZXRlLXRhc2sxIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3VibWl0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuLnNpZGVCYXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA1NnJlbTtcXG4gICAgd2lkdGg6IDIxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZUJhci1jb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmluYm94LCAudG9kYXksIC5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluYm94OmhvdmVyLCAudG9kYXk6aG92ZXIsIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTZyZW07XFxuICAgIHdpZHRoOiA5OXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG59XFxuLmFkZC10YXNrIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbn1cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuLmFkZCBzcGFuIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuLmFkZDpob3ZlciB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0VBRWxCOztBQUVGO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFEQUFxRDtJQUNyRCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNENBQStCO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJGMUU0O1xcbn1cXG4jbWFpbiB7XFxuICAgIGhlaWdodDogNDhyZW07XFxufVxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbXlGb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAzOTZweDtcXG4gICAgdG9wOiAtNTQ2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMTNweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI3RpdGxlLWluYm94LCAjZGVzYy1pbmJveCwjdGl0bGUtcHJvamVjdCwgI2Rlc2MtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNjQ2NDY0O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHdpZHRoOiAyNTRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogOXB4O1xcbn1cXG4udGl0bGUtbGFiZWwsIC5kZXNjLWxhYmVsIHtcXG4gICAgZm9udC1zdHlsZTogcG9wcGlucztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4ubGlzdC1jb250YWluZXItaW5ib3gsIC5saXN0LWNvbnRhaW5lci1wcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA2OGVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcblxcbiAgfVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4udWwtbGlzdC1pbmJveCwgLnVsLWxpc3QtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMzBlbTtcXG4gICAgYm90dG9tOiA4ZW07XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JheTsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmluYm94VGl0bGUsIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY2JjYjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMjY4cHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4ICM5ZjlmOWYgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnVsLWxpc3QtcHJvamVjdCBidXR0b24sIC51bC1saXN0LWluYm94IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuLmZvcm0tY29udGFpbmVyIHsgXFxuICAgIG1hcmdpbi10b3A6IDIzcHhcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5saXN0LWJvcmRlciB7XFxuICAgIGJvcmRlcjogc29saWQgZ3JleSAxcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDQ3ZW07XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuLmxpc3QtYm9yZGVyIGgze1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JleTtcXG59XFxuLmRlbGV0ZS10YXNrIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4uZGVsZXRlLXRhc2sxIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3VibWl0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuLnNpZGVCYXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA1NnJlbTtcXG4gICAgd2lkdGg6IDIxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZUJhci1jb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmluYm94LCAudG9kYXksIC5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluYm94OmhvdmVyLCAudG9kYXk6aG92ZXIsIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTZyZW07XFxuICAgIHdpZHRoOiA5OXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG59XFxuLmFkZC10YXNrIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbn1cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuLmFkZCBzcGFuIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuLmFkZDpob3ZlciB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnLi9Qb3BwaW5zLUxpZ2h0LnR0ZicpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBpbXBvcnQgYWRkTGlzdCBmcm9tICcuL2FkZExpc3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxudmFyIG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG52YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnZhciBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbnZhciBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnZhciBtaWRkbGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG52YXIgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudmFyIGluYm94UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxudmFyIHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnZhciB0b2RheVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnZhciBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnZhciBwcm9qZWN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG5cbnZhciBsaXN0Q29udGFpbmVySW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudmFyIGxpc3RDb250YWluZXJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnZhciBsaXN0Q29udGFpbmVyVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cblxuXG4vLyBjbGFzcy1hZGQgLy9cblxuXG5saXN0Q29udGFpbmVySW5ib3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbmxpc3RDb250YWluZXJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5pbmJveC5jbGFzc0xpc3QuYWRkKCdpbmJveCcpXG50b2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpXG5wcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG5taWRkbGVCYXIuY2xhc3NMaXN0LmFkZCgnbWlkZGxlLWNvbnRhaW5lcicpXG5zaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXItY29udGFpbmVyJylcbmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuXG4vLyB0ZXh0LWNvbnRlbnQgLy9cbmhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1RvLURvIExpc3Qg4pyFJ1xuaW5ib3hQLnRleHRDb250ZW50ID0gJ0luYm94J1xudG9kYXlQLnRleHRDb250ZW50ID0gJ1RvZGF5J1xucHJvamVjdFAudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUluYm94Q29udGVudCgpIHtcbiAgICB2YXIgdWxfaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdmFyIGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB2YXIgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdmFyIGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB2YXIgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHZhciBzdWJtaXRCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB2YXIgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnaW5ib3hUaXRsZScpXG4gICAgdmFyIGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKVxuICAgIGlucHV0MS5pZCA9ICd0aXRsZS1pbmJveCdcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZSBoZXJlJylcbiAgICBpbnB1dDIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2MnKVxuICAgIGlucHV0Mi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICBpbnB1dDIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2MgaGVyZScpXG4gICAgaW5wdXQyLmlkID0gJ2Rlc2MtaW5ib3gnXG4gICAgaDMudGV4dENvbnRlbnQgPSAnSW5ib3gnXG4gICAgdWxfaW5ib3guY2xhc3NMaXN0LmFkZCgndWwtbGlzdC1pbmJveCcpXG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJylcbiAgICBzdWJtaXRCLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpXG4gICAgc3VibWl0Qi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnU3VibWl0JylcbiAgICBzdWJtaXRCLnRleHRDb250ZW50ID0gJysnXG4gICAgXG4gICAgc3VibWl0Qi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0MS52YWx1ZS5sZW5ndGggPT0gMjAgfHwgaW5wdXQyLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBhbGVydCgnRGVzY3JpcHRpb24gY2Fubm90IGJlIGVtcHR5IScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9kb0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWluYm94JykudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5ib3gnKS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHZhciBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIHZhciB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bC1saXN0LWluYm94JylcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbGlzdC1ib3JkZXInKVxuICAgICAgICBcbiAgICAgICAgICAgIGgzLnRleHRDb250ZW50ID0gYCR7dG9kb0luZm8udGl0bGV9YFxuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9J+KclidcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7dG9kb0luZm8uZGVzY3JpcHRpb259IGBcbiAgICAgICAgICAgIGxpLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInXG4gICAgICAgICAgICBoMy5zdHlsZS50ZXh0QWxpZ24gPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgIFxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgZGl2LmFwcGVuZCh4KVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWluYm94JykudmFsdWUgPSAnJ1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5ib3gnKS52YWx1ZSA9ICcnXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGxpc3RDb250YWluZXJJbmJveC5hcHBlbmRDaGlsZChoMylcbiAgICBsaXN0Q29udGFpbmVySW5ib3guYXBwZW5kQ2hpbGQodWxfaW5ib3gpXG4gICAgbGlzdENvbnRhaW5lckluYm94LmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcilcbiAgICAvLyBsaXN0Q29udGFpbmVySW5ib3guYXBwZW5kQ2hpbGQoaDMpXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYxKVxuICAgIGRpdjEuYXBwZW5kQ2hpbGQoaW5wdXQyKVxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCKVxuICAgIHJldHVybiB1bF9pbmJveDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQoKSB7XG4gICAgdmFyIHVsX3Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdmFyIGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB2YXIgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHZhciBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB2YXIgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHZhciBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdmFyIHN1Ym1pdEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHZhciBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBoMy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcbiAgICB2YXIgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcbiAgICBpbnB1dDEuaWQgPSAndGl0bGUtcHJvamVjdCdcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZSBoZXJlJylcbiAgICBpbnB1dDIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2MnKVxuICAgIGlucHV0Mi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICBpbnB1dDIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2MgaGVyZScpXG4gICAgaW5wdXQyLmlkID0gJ2Rlc2MtcHJvamVjdCdcbiAgICBoMy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcbiAgICB1bF9wcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3VsLWxpc3QtcHJvamVjdCcpXG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJylcbiAgICBzdWJtaXRCLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpXG4gICAgc3VibWl0Qi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnU3VibWl0JylcbiAgICBzdWJtaXRCLnRleHRDb250ZW50ID0gJysnXG4gICAgXG4gICAgc3VibWl0Qi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0MS52YWx1ZS5sZW5ndGggPT0gMCB8fCBpbnB1dDIudmFsdWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdGaWVsZHMgY2Fubm90IGJlIGVtcHR5IScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9kb0luZm8gPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXByb2plY3QnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1wcm9qZWN0JykudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIHZhciB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bC1saXN0LXByb2plY3QnKVxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrJylcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWJvcmRlcicpXG4gICAgICAgICAgICBoMy50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLnRpdGxlfWBcbiAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSfinJYnXG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLmRlc2NyaXB0aW9ufSBgXG4gICAgICAgICAgICBsaS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJ1xuICAgICAgICAgICAgaDMuc3R5bGUudGV4dEFsaWduID0nY2VudGVyJ1xuICAgICAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICAgIGRpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoeClcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMylcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbmJveCcpLnZhbHVlID0gJydcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjLWluYm94JykudmFsdWUgPSAnJ1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxpc3RDb250YWluZXJQcm9qZWN0LmFwcGVuZENoaWxkKHVsX3Byb2plY3QpXG4gICAgbGlzdENvbnRhaW5lclByb2plY3QuYXBwZW5kQ2hpbGQoaDMpXG4gICAgbGlzdENvbnRhaW5lclByb2plY3QuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKVxuICAgIC8vIHVsX3Byb2plY3QuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKVxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsMSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYxKVxuICAgIGRpdjEuYXBwZW5kQ2hpbGQobGFiZWwyKVxuICAgIGRpdjEuYXBwZW5kQ2hpbGQoaW5wdXQyKVxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCKVxuICAgIHJldHVybiB1bF9wcm9qZWN0O1xufVxuXG4vLyBldmVudCBMaXN0ZW5lcnMgLy9cblxucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyLXByb2plY3QnKVxubGV0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyLWluYm94JylcbmxldCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bC1saXN0LXRvZGF5Jylcbmxpc3RDb250YWluZXJQcm9qZWN0LmNsYXNzTmFtZSA9ICdsaXN0LWNvbnRhaW5lci1wcm9qZWN0J1xubGlzdENvbnRhaW5lckluYm94LmNsYXNzTmFtZSA9ICdoaWRkZW4nXG59KVxuXG5pbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgaW5ib3hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXItaW5ib3gnKVxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bC1saXN0LXRvZGF5JylcbiAgICBsaXN0Q29udGFpbmVyUHJvamVjdC5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuICAgIGxpc3RDb250YWluZXJJbmJveC5jbGFzc05hbWUgPSdsaXN0LWNvbnRhaW5lci1pbmJveCdcbn0pXG5cbm1haW4uYXBwZW5kKGhlYWRlcilcbm1haW4uYXBwZW5kKGNvbnRhaW5lcilcbmxpc3RDb250YWluZXJQcm9qZWN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDb250ZW50KCkpXG5saXN0Q29udGFpbmVySW5ib3guYXBwZW5kQ2hpbGQoY3JlYXRlSW5ib3hDb250ZW50KCkpXG5jb250YWluZXIuYXBwZW5kKHNpZGVCYXIpXG5zaWRlQmFyLmFwcGVuZENoaWxkKGluYm94KVxuaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hQKVxuc2lkZUJhci5hcHBlbmRDaGlsZCh0b2RheSlcbnRvZGF5LmFwcGVuZENoaWxkKHRvZGF5UClcbnNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdClcbnByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFApXG5jb250YWluZXIuYXBwZW5kKG1pZGRsZUJhcilcbm1pZGRsZUJhci5hcHBlbmQobGlzdENvbnRhaW5lckluYm94KVxubWlkZGxlQmFyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXJQcm9qZWN0KVxuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==