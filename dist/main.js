/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./createProject.js":
/*!**************************!*\
  !*** ./createProject.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createRanList)
/* harmony export */ });
function createRanList() {
    var titleInbox = document.getElementById('title-inbox')
    var descInbox = document.getElementById('desc-inbox')
    const middleBar = document.querySelector('.middle-container')
    let todoInfo = {
        title:document.getElementById('title-inbox').value,
        description:document.getElementById('desc-inbox').value,
        date:document.getElementById('date-inbox').value
    }

        document.getElementById('title-inbox').value = ''
        document.getElementById('desc-inbox').value = ''


    
            var h3 = document.createElement('h3')
            var li = document.createElement('li')
            var mkDate = document.createElement('p')
            var div = document.createElement('div')
            var x = document.createElement('div')
            var ul = document.createElement('ul')
            x.classList.add('delete-task')
            div.classList.add('list-border')

            h3.textContent = `${todoInfo.title}`
            x.textContent ='✖'
            li.textContent = `${todoInfo.description} `
            mkDate.textContent = `${todoInfo.date}`
            li.style.textAlign = 'center'
            h3.style.textAlign ='center'
                div.addEventListener('click', ()=>{
                    div.style.textDecoration = 'line-through'
            })
            x.addEventListener('click', () => {
                div.remove();
            })

            middleBar.appendChild(ul)
            ul.appendChild(div)
            div.append(x)
            div.appendChild(h3)
            div.appendChild(li)
            li.appendChild(mkDate)
            document.getElementById('title-inbox').value = ''
            document.getElementById('desc-inbox').value = ''
            h3.textContent = `${todoInfo.title}`
            if (`${todoInfo.title}`== '') {
            h3.remove()
            }
        }


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    background-color: #D2F1E4;\n}\n#main {\n    height: 48rem;\n}\n.header {\n    background-color: #272727;\n    height: 130px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.header h1 {\n    color: white;\n    font-family: poppins;\n}\n.container {\n    display: flex;\n}\n#myForm {\n    position: relative;\n    left: 396px;\n    top: -546px;\n    display: flex;\n    flex-direction: column;\n    width: 270px;\n    background-color: #202020;\n    border-radius: 12px;\n    padding: 13px;\n    display: none;\n}\n#title-inbox, #desc-inbox,#title-project, #desc-project {\n    background-color: #202020;\n    color: white;\n    border: none;\n    padding: 7px;\n    font-family: poppins;\n    font-size: 17px;\n    border-bottom: solid 1px #646464;\n    border-radius: 0px;\n    width: 254px;\n    outline: none;\n    margin-top: 9px;\n}\n.title-label, .desc-label {\n    font-style: poppins;\n    color: white;\n    margin-left: 10px;\n    margin-top: 8px;\n}\n.tabs_content--active, .list-container-project {\n    height: 400px;\n    width: 400px;\n    position: absolute;\n    right: 68em;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n\n  }\n\nul {\n    list-style-type: none;\n}\n.ul-list-inbox, .ul-list-project {\n    display: flex;\n    /* grid-template-columns: repeat(2,1fr); */\n    font-family: poppins;\n    position: relative;\n    left: 30em;\n    bottom: 8em;\n    height: fit-content;\n    width: fit-content;\n    /* border: 1px solid gray; */\n    flex-direction: column;\n}\n.inboxTitle, .project-title, .titleMiddleBar {\n    margin-top:5px;\n    border-bottom: 1px dashed #cccbcb;\n    width: fit-content;\n    font-family: poppins;\n    color: white;\n}\n.today-title {\n    position: relative;\n    left: 84px;\n    top: 25px;\n    color: white;\n    border-bottom: 1px dashed #cccbcb;\n    width: fit-content;\n    margin-top:5px;\n}\n.tabs_buttons, .add-expand, .tabs_proj {\n    width: inherit;\n    background: transparent;\n    font-size: 28px;\n    border-radius: 2px;\n    color: white;\n    border: none;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    text-align: center;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n.tabs_project\n\n.default-project {\n    font-size: 19px;\n}\n.subnav {\n    display: flex;\n    flex-direction: column;\n}\n.subnav button{\n    font-size: 17px;\n}\n[data-for-tab = \"project\"] {\n    display: flex;\n    justify-content: center;\n    font-family: poppins;\n    height: 65px;\n}\n.absoluteP {\n    position: absolute;\n}\n.plus {\n    position: relative;\n    left: 132px;\n    top: 23px;\n    height: 22px;\n    width: 23px;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.plus:hover {\n    border: 1px solid whitesmoke;\n    border-radius: 7px;\n}\n\n.tabs_content {\n    display: none;\n}\n.tabs_content--active  {\n    display: block;\n}\n.ul-list-project button, .ul-list-inbox button {\n    width: fit-content;\n}\n.form-container { \n    margin-top: 23px\n}\n\n.hidden {\n    display: none;\n}\n.list-border {\n    border: solid grey 1px;\n    cursor: pointer;\n    background-color: #202020;\n    height: fit-content;\n    width: 40em;\n    font-size: 17px;\n}\n.list-border h3{\n    text-align: center;\n    border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    float: right;\n    margin-right: 15px;\n}\n.list-border li {\n    margin-left: 65px;\n}\n#date-inbox {\n    width: 264px;\n    text-align: center;\n    background: #202020;\n    color: white;\n    border: 1px solid;\n    margin-top: 5px;\n}\n#date-inbox:focus {\n    outline: 0;\n}\n.delete-task {\n    float: right;\n    font-size: 20px;\n    margin-right: 4px;\n}\n.delete-task1 {\n    position: relative;\n    left: 250px;\n    top: -7px;\n    color: white;\n    font-size: 27px;\n    cursor: pointer;\n}\n.submit-btn {\n    font-size: 30px;\n    border: medium none;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n    border-radius: 22px;\n    position: relative;\n    top: 4px;\n    left: 5px;\n}\n.sideBar-container {\n    height: 56rem;\n    width: 21rem;\n    background-color: #565656;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.sideBar-container p {\n    font-size: 30px;\n    font-family: poppins;\n    color: white;\n    padding: 10px;\n}\n\n.adder-btn button {\n    position: relative;\n    left: -25px;\n    top: 28px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 30px;\n}\n.adder-btn:hover {\n    cursor: pointer;\n}\n.tabs_buttons:hover {\n    background-color: #6e6e6e;\n    border-radius: 10px;\n    cursor: pointer;\n}\n.middle-container {\n    height: 56rem;\n    width: 99rem;\n    background-color: #2d2d2d;\n}\n.create-project {\n    font-size: 20px;\n}\n.create-project:hover {\n    cursor: pointer;\n    color: #b7adad;\n}\n.add-task {\n    font-size: 25px;\n    color: white;\n    font-family: poppins;\n}\n.tabs_ {\n    display: flex;\n    margin-left: 60px;\n    margin-top: 18px;\n}\n.add span {\n    padding: 15px;\n}\n.add:hover {\n    color: grey;\n    cursor: pointer;\n}\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,gCAAgC;IAChC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;;EAElB;;AAEF;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,0CAA0C;IAC1C,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,4BAA4B;IAC5B,sBAAsB;AAC1B;AACA;IACI,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,YAAY;IACZ,iCAAiC;IACjC,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,cAAc;IACd,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,SAAS;AACb;AACA;;;IAGI,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,oBAAoB;IACpB,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;AACtB;AACA;IACI;AACJ;;AAEA;IACI,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,UAAU;AACd;AACA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,qDAAqD;IACrD,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;AACA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,cAAc;AAClB;AACA;IACI,eAAe;IACf,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,sBAAsB;IACtB,4CAA+B;AACnC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    background-color: #D2F1E4;\n}\n#main {\n    height: 48rem;\n}\n.header {\n    background-color: #272727;\n    height: 130px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.header h1 {\n    color: white;\n    font-family: poppins;\n}\n.container {\n    display: flex;\n}\n#myForm {\n    position: relative;\n    left: 396px;\n    top: -546px;\n    display: flex;\n    flex-direction: column;\n    width: 270px;\n    background-color: #202020;\n    border-radius: 12px;\n    padding: 13px;\n    display: none;\n}\n#title-inbox, #desc-inbox,#title-project, #desc-project {\n    background-color: #202020;\n    color: white;\n    border: none;\n    padding: 7px;\n    font-family: poppins;\n    font-size: 17px;\n    border-bottom: solid 1px #646464;\n    border-radius: 0px;\n    width: 254px;\n    outline: none;\n    margin-top: 9px;\n}\n.title-label, .desc-label {\n    font-style: poppins;\n    color: white;\n    margin-left: 10px;\n    margin-top: 8px;\n}\n.tabs_content--active, .list-container-project {\n    height: 400px;\n    width: 400px;\n    position: absolute;\n    right: 68em;\n    color: white;\n    font-family: sans;\n    margin-top: 25px;\n\n  }\n\nul {\n    list-style-type: none;\n}\n.ul-list-inbox, .ul-list-project {\n    display: flex;\n    /* grid-template-columns: repeat(2,1fr); */\n    font-family: poppins;\n    position: relative;\n    left: 30em;\n    bottom: 8em;\n    height: fit-content;\n    width: fit-content;\n    /* border: 1px solid gray; */\n    flex-direction: column;\n}\n.inboxTitle, .project-title, .titleMiddleBar {\n    margin-top:5px;\n    border-bottom: 1px dashed #cccbcb;\n    width: fit-content;\n    font-family: poppins;\n    color: white;\n}\n.today-title {\n    position: relative;\n    left: 84px;\n    top: 25px;\n    color: white;\n    border-bottom: 1px dashed #cccbcb;\n    width: fit-content;\n    margin-top:5px;\n}\n.tabs_buttons, .add-expand, .tabs_proj {\n    width: inherit;\n    background: transparent;\n    font-size: 28px;\n    border-radius: 2px;\n    color: white;\n    border: none;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    text-align: center;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n.tabs_project\n\n.default-project {\n    font-size: 19px;\n}\n.subnav {\n    display: flex;\n    flex-direction: column;\n}\n.subnav button{\n    font-size: 17px;\n}\n[data-for-tab = \"project\"] {\n    display: flex;\n    justify-content: center;\n    font-family: poppins;\n    height: 65px;\n}\n.absoluteP {\n    position: absolute;\n}\n.plus {\n    position: relative;\n    left: 132px;\n    top: 23px;\n    height: 22px;\n    width: 23px;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.plus:hover {\n    border: 1px solid whitesmoke;\n    border-radius: 7px;\n}\n\n.tabs_content {\n    display: none;\n}\n.tabs_content--active  {\n    display: block;\n}\n.ul-list-project button, .ul-list-inbox button {\n    width: fit-content;\n}\n.form-container { \n    margin-top: 23px\n}\n\n.hidden {\n    display: none;\n}\n.list-border {\n    border: solid grey 1px;\n    cursor: pointer;\n    background-color: #202020;\n    height: fit-content;\n    width: 40em;\n    font-size: 17px;\n}\n.list-border h3{\n    text-align: center;\n    border-bottom: 1px dashed grey;\n}\n.list-border li p {\n    float: right;\n    margin-right: 15px;\n}\n.list-border li {\n    margin-left: 65px;\n}\n#date-inbox {\n    width: 264px;\n    text-align: center;\n    background: #202020;\n    color: white;\n    border: 1px solid;\n    margin-top: 5px;\n}\n#date-inbox:focus {\n    outline: 0;\n}\n.delete-task {\n    float: right;\n    font-size: 20px;\n    margin-right: 4px;\n}\n.delete-task1 {\n    position: relative;\n    left: 250px;\n    top: -7px;\n    color: white;\n    font-size: 27px;\n    cursor: pointer;\n}\n.submit-btn {\n    font-size: 30px;\n    border: medium none;\n    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\n    border-radius: 22px;\n    position: relative;\n    top: 4px;\n    left: 5px;\n}\n.sideBar-container {\n    height: 56rem;\n    width: 21rem;\n    background-color: #565656;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.sideBar-container p {\n    font-size: 30px;\n    font-family: poppins;\n    color: white;\n    padding: 10px;\n}\n\n.adder-btn button {\n    position: relative;\n    left: -25px;\n    top: 28px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 30px;\n}\n.adder-btn:hover {\n    cursor: pointer;\n}\n.tabs_buttons:hover {\n    background-color: #6e6e6e;\n    border-radius: 10px;\n    cursor: pointer;\n}\n.middle-container {\n    height: 56rem;\n    width: 99rem;\n    background-color: #2d2d2d;\n}\n.create-project {\n    font-size: 20px;\n}\n.create-project:hover {\n    cursor: pointer;\n    color: #b7adad;\n}\n.add-task {\n    font-size: 25px;\n    color: white;\n    font-family: poppins;\n}\n.tabs_ {\n    display: flex;\n    margin-left: 60px;\n    margin-top: 18px;\n}\n.add span {\n    padding: 15px;\n}\n.add:hover {\n    color: grey;\n    cursor: pointer;\n}\n@font-face {\n    font-family: 'poppins';\n    src: url('./Poppins-Light.ttf');\n}"],"sourceRoot":""}]);
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
    var titleInbox = document.getElementById('title-inbox')
    var descInbox = document.getElementById('desc-inbox')
    let todoInfo = {
        title:document.getElementById('title-inbox').value,
        description:document.getElementById('desc-inbox').value,
        date:document.getElementById('date-inbox').value
    }

        document.getElementById('title-inbox').value = ''
        document.getElementById('desc-inbox').value = ''


    
            var h3 = document.createElement('h3')
            var li = document.createElement('li')
            var mkDate = document.createElement('p')
            var div = document.createElement('div')
            var x = document.createElement('div')
            var ul_inbox = document.querySelector('.ul-list-inbox')
            x.classList.add('delete-task')
            div.classList.add('list-border')

            h3.textContent = `${todoInfo.title}`
            x.textContent ='✖'
            li.textContent = `${todoInfo.description} `
            mkDate.textContent = `${todoInfo.date}`
            li.style.textAlign = 'center'
            h3.style.textAlign ='center'
                div.addEventListener('click', ()=>{
                    div.style.textDecoration = 'line-through'
            })
            x.addEventListener('click', () => {
                div.remove();
            })

            ul_inbox.appendChild(div)
            div.append(x)
            div.appendChild(h3)
            div.appendChild(li)
            li.appendChild(mkDate)
            document.getElementById('title-inbox').value = ''
            document.getElementById('desc-inbox').value = ''
            h3.textContent = `${todoInfo.title}`
            if (`${todoInfo.title}`== '') {
            h3.remove()
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
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createProject */ "./createProject.js");
// import createInboxContent from './inboxContent'



var main = document.getElementById('main')
const subnav = document.querySelector('.subnav')
const middleBar = document.querySelector('.middle-container');
// var inbox = document.querySelector('.inbox')
// var today = document.querySelector('.today')
// var project = document.querySelector('.project')
// var middleBar = document.querySelector('.middle-container')
// var listContainerProject = document.createElement('div')
// var listContainerToday = document.createElement('div')

function setupTabs() {
    document.querySelectorAll(".tabs_buttons").forEach(button => {
        button.addEventListener('click', () => {
            const sideBar = button.parentElement;
            const tabsContainer = document.querySelector('.middle-container');
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs_content[data-tab="${tabNumber}"]`)

            sideBar.querySelectorAll('.tabs_buttons').forEach(button => {
                button.classList.remove("tabs_buttons--active")
            })

            tabsContainer.querySelectorAll('.tabs_content').forEach(tab => {
                tab.classList.remove("tabs_content--active")
            })

            button.classList.add('tabs_button--active');
            tabToActivate.classList.add('tabs_content--active')
        })
    })
}
setupTabs();

var inboxListen = document.querySelector('.submit-inbox-button')
inboxListen.addEventListener('click', () => {
    ;(0,_inboxListCreate__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

// var createProjectListener = document.querySelector('.create-project')
// createProjectListener.addEventListener('click', () => {
//     createProjectContent()
// })
// var defaultProjectListen = document.querySelector('.default-project')
// defaultProjectListen.addEventListener('click', () => {

// })
const plus = document.querySelector('.plus')
plus.addEventListener('click', () => {
    createProjectContent();
})
function createProjectContent() {
let projectName = prompt('What is the name of your project?')
var newTab = document.createElement('button')
const prDisplay = document.querySelector('.create-project')
var title = document.createElement('h3')
var tabs_content = document.createElement('div')
tabs_content.classList.add('tabs_content')
tabs_content.dataset.tab = projectName;
newTab.classList.add('tabs_buttons')
newTab.dataset.forTab = projectName;
newTab.textContent = projectName;
title.textContent = projectName;
title.classList.add('titleMiddleBar')

subnav.appendChild(newTab)
middleBar.appendChild(tabs_content)
tabs_content.appendChild(title)
;(0,_createProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
setupTabs();

} 
// function createTodayContent() {
//     var todayTitle = document.createElement('h3')
//     todayTitle.textContent = 'Today'
//     todayTitle.classList.add('today-title')
//     listContainerToday.appendChild(todayTitle)
//     return todayTitle
// }
// // event Listeners //

// project.addEventListener('click', () => {
// listContainerProject.className = 'list-container-project'
// listContainerInbox.className = 'hidden'
// listContainerToday.className = 'hidden'
// // createProjectContent()
// })

// inbox.addEventListener('click', () => {
//     listContainerProject.className = 'hidden'
//     listContainerInbox.className ='list-container-inbox'
//     listContainerToday.className = 'hidden'
// })

// today.addEventListener('click', () => {
//     listContainerInbox.className = 'hidden'
//     listContainerProject.className = 'hidden'
//     listContainerToday.className = 'list-container-today'
// })


// middleBar.appendChild(createInboxContent())
// middleBar.appendChild(listContainerProject)
// middleBar.appendChild(listContainerToday)
// // listContainerProject.appendChild(createProjectContent())
// // listContainerInbox.appendChild(createInboxContent())
// listContainerToday.appendChild(createTodayContent())

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRyxRQUFRLGdDQUFnQyxHQUFHLFNBQVMsb0JBQW9CLEdBQUcsV0FBVyxnQ0FBZ0Msb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsY0FBYyxtQkFBbUIsMkJBQTJCLEdBQUcsY0FBYyxvQkFBb0IsR0FBRyxXQUFXLHlCQUF5QixrQkFBa0Isa0JBQWtCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLGdDQUFnQywwQkFBMEIsb0JBQW9CLG9CQUFvQixHQUFHLDJEQUEyRCxnQ0FBZ0MsbUJBQW1CLG1CQUFtQixtQkFBbUIsMkJBQTJCLHNCQUFzQix1Q0FBdUMseUJBQXlCLG1CQUFtQixvQkFBb0Isc0JBQXNCLEdBQUcsNkJBQTZCLDBCQUEwQixtQkFBbUIsd0JBQXdCLHNCQUFzQixHQUFHLGtEQUFrRCxvQkFBb0IsbUJBQW1CLHlCQUF5QixrQkFBa0IsbUJBQW1CLHdCQUF3Qix1QkFBdUIsT0FBTyxRQUFRLDRCQUE0QixHQUFHLG9DQUFvQyxvQkFBb0IsK0NBQStDLDZCQUE2Qix5QkFBeUIsaUJBQWlCLGtCQUFrQiwwQkFBMEIseUJBQXlCLGlDQUFpQywrQkFBK0IsR0FBRyxnREFBZ0QscUJBQXFCLHdDQUF3Qyx5QkFBeUIsMkJBQTJCLG1CQUFtQixHQUFHLGdCQUFnQix5QkFBeUIsaUJBQWlCLGdCQUFnQixtQkFBbUIsd0NBQXdDLHlCQUF5QixxQkFBcUIsR0FBRywwQ0FBMEMscUJBQXFCLDhCQUE4QixzQkFBc0IseUJBQXlCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDhCQUE4QixzQkFBc0IseUJBQXlCLHNCQUFzQixnQkFBZ0IsR0FBRyxxQ0FBcUMsc0JBQXNCLEdBQUcsV0FBVyxvQkFBb0IsNkJBQTZCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLGdDQUFnQyxvQkFBb0IsOEJBQThCLDJCQUEyQixtQkFBbUIsR0FBRyxjQUFjLHlCQUF5QixHQUFHLFNBQVMseUJBQXlCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLGtCQUFrQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixHQUFHLGVBQWUsbUNBQW1DLHlCQUF5QixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLG9CQUFvQix5QkFBeUIsYUFBYSxvQkFBb0IsR0FBRyxnQkFBZ0IsNkJBQTZCLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLGtCQUFrQixzQkFBc0IsR0FBRyxrQkFBa0IseUJBQXlCLHFDQUFxQyxHQUFHLHFCQUFxQixtQkFBbUIseUJBQXlCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGVBQWUsbUJBQW1CLHlCQUF5QiwwQkFBMEIsbUJBQW1CLHdCQUF3QixzQkFBc0IsR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcsZ0JBQWdCLG1CQUFtQixzQkFBc0Isd0JBQXdCLEdBQUcsaUJBQWlCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLG1CQUFtQixzQkFBc0Isc0JBQXNCLEdBQUcsZUFBZSxzQkFBc0IsMEJBQTBCLDREQUE0RCwwQkFBMEIseUJBQXlCLGVBQWUsZ0JBQWdCLEdBQUcsc0JBQXNCLG9CQUFvQixtQkFBbUIsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsd0JBQXdCLHNCQUFzQiwyQkFBMkIsbUJBQW1CLG9CQUFvQixHQUFHLHVCQUF1Qix5QkFBeUIsa0JBQWtCLGdCQUFnQixvQ0FBb0MsbUJBQW1CLG1CQUFtQixzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsdUJBQXVCLGdDQUFnQywwQkFBMEIsc0JBQXNCLEdBQUcscUJBQXFCLG9CQUFvQixtQkFBbUIsZ0NBQWdDLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLHlCQUF5QixzQkFBc0IscUJBQXFCLEdBQUcsYUFBYSxzQkFBc0IsbUJBQW1CLDJCQUEyQixHQUFHLFVBQVUsb0JBQW9CLHdCQUF3Qix1QkFBdUIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGNBQWMsa0JBQWtCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLHNDQUFzQyxHQUFHLG1CQUFtQjtBQUM5N1o7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3RELG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0MsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDb0I7QUFDc0I7QUFDRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLFVBQVU7O0FBRW5HO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNkRBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luYm94TGlzdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmFuTGlzdCgpIHtcbiAgICB2YXIgdGl0bGVJbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbmJveCcpXG4gICAgdmFyIGRlc2NJbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjLWluYm94JylcbiAgICBjb25zdCBtaWRkbGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkZGxlLWNvbnRhaW5lcicpXG4gICAgbGV0IHRvZG9JbmZvID0ge1xuICAgICAgICB0aXRsZTpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5ib3gnKS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5ib3gnKS52YWx1ZSxcbiAgICAgICAgZGF0ZTpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbmJveCcpLnZhbHVlXG4gICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbmJveCcpLnZhbHVlID0gJydcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5ib3gnKS52YWx1ZSA9ICcnXG5cblxuICAgIFxuICAgICAgICAgICAgdmFyIGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgdmFyIG1rRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB2YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrJylcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWJvcmRlcicpXG5cbiAgICAgICAgICAgIGgzLnRleHRDb250ZW50ID0gYCR7dG9kb0luZm8udGl0bGV9YFxuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9J+KclidcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7dG9kb0luZm8uZGVzY3JpcHRpb259IGBcbiAgICAgICAgICAgIG1rRGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLmRhdGV9YFxuICAgICAgICAgICAgbGkuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcidcbiAgICAgICAgICAgIGgzLnN0eWxlLnRleHRBbGlnbiA9J2NlbnRlcidcbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbWlkZGxlQmFyLmFwcGVuZENoaWxkKHVsKVxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICAgICAgZGl2LmFwcGVuZCh4KVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobWtEYXRlKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWluYm94JykudmFsdWUgPSAnJ1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5ib3gnKS52YWx1ZSA9ICcnXG4gICAgICAgICAgICBoMy50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLnRpdGxlfWBcbiAgICAgICAgICAgIGlmIChgJHt0b2RvSW5mby50aXRsZX1gPT0gJycpIHtcbiAgICAgICAgICAgIGgzLnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1BvcHBpbnMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkYxRTQ7XFxufVxcbiNtYWluIHtcXG4gICAgaGVpZ2h0OiA0OHJlbTtcXG59XFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNteUZvcm0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDM5NnB4O1xcbiAgICB0b3A6IC01NDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jdGl0bGUtaW5ib3gsICNkZXNjLWluYm94LCN0aXRsZS1wcm9qZWN0LCAjZGVzYy1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM2NDY0NjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgd2lkdGg6IDI1NHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA5cHg7XFxufVxcbi50aXRsZS1sYWJlbCwgLmRlc2MtbGFiZWwge1xcbiAgICBmb250LXN0eWxlOiBwb3BwaW5zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi50YWJzX2NvbnRlbnQtLWFjdGl2ZSwgLmxpc3QtY29udGFpbmVyLXByb2plY3Qge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDY4ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnM7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuXFxuICB9XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi51bC1saXN0LWluYm94LCAudWwtbGlzdC1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpOyAqL1xcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAzMGVtO1xcbiAgICBib3R0b206IDhlbTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmF5OyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaW5ib3hUaXRsZSwgLnByb2plY3QtdGl0bGUsIC50aXRsZU1pZGRsZUJhciB7XFxuICAgIG1hcmdpbi10b3A6NXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2NiY2I7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRvZGF5LXRpdGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA4NHB4O1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjYmNiO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi10b3A6NXB4O1xcbn1cXG4udGFic19idXR0b25zLCAuYWRkLWV4cGFuZCwgLnRhYnNfcHJvaiB7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4udGFic19wcm9qZWN0XFxuXFxuLmRlZmF1bHQtcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuLnN1Ym5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zdWJuYXYgYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcbltkYXRhLWZvci10YWIgPSBcXFwicHJvamVjdFxcXCJdIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxufVxcbi5hYnNvbHV0ZVAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5wbHVzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMzJweDtcXG4gICAgdG9wOiAyM3B4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiAyM3B4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnBsdXM6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi50YWJzX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFic19jb250ZW50LS1hY3RpdmUgIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi51bC1saXN0LXByb2plY3QgYnV0dG9uLCAudWwtbGlzdC1pbmJveCBidXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi5mb3JtLWNvbnRhaW5lciB7IFxcbiAgICBtYXJnaW4tdG9wOiAyM3B4XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubGlzdC1ib3JkZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA0MGVtO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5saXN0LWJvcmRlciBoM3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyZXk7XFxufVxcbi5saXN0LWJvcmRlciBsaSBwIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi5saXN0LWJvcmRlciBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xcbn1cXG4jZGF0ZS1pbmJveCB7XFxuICAgIHdpZHRoOiAyNjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbiNkYXRlLWluYm94OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuLmRlbGV0ZS10YXNrIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4uZGVsZXRlLXRhc2sxIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3VibWl0LWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuLnNpZGVCYXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA1NnJlbTtcXG4gICAgd2lkdGg6IDIxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5zaWRlQmFyLWNvbnRhaW5lciBwIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkZXItYnRuIGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTI1cHg7XFxuICAgIHRvcDogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5hZGRlci1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YWJzX2J1dHRvbnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2ZTZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA1NnJlbTtcXG4gICAgd2lkdGg6IDk5cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbn1cXG4uY3JlYXRlLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5jcmVhdGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNiN2FkYWQ7XFxufVxcbi5hZGQtdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXG59XFxuLnRhYnNfIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcbi5hZGQgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5hZGQ6aG92ZXIge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3Nz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QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxREFBcUQ7SUFDckQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNENBQStCO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJGMUU0O1xcbn1cXG4jbWFpbiB7XFxuICAgIGhlaWdodDogNDhyZW07XFxufVxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbXlGb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAzOTZweDtcXG4gICAgdG9wOiAtNTQ2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMTNweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI3RpdGxlLWluYm94LCAjZGVzYy1pbmJveCwjdGl0bGUtcHJvamVjdCwgI2Rlc2MtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNjQ2NDY0O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHdpZHRoOiAyNTRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogOXB4O1xcbn1cXG4udGl0bGUtbGFiZWwsIC5kZXNjLWxhYmVsIHtcXG4gICAgZm9udC1zdHlsZTogcG9wcGlucztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4udGFic19jb250ZW50LS1hY3RpdmUsIC5saXN0LWNvbnRhaW5lci1wcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA2OGVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcblxcbiAgfVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4udWwtbGlzdC1pbmJveCwgLnVsLWxpc3QtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMzBlbTtcXG4gICAgYm90dG9tOiA4ZW07XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JheTsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmluYm94VGl0bGUsIC5wcm9qZWN0LXRpdGxlLCAudGl0bGVNaWRkbGVCYXIge1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjYmNiO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi50b2RheS10aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogODRweDtcXG4gICAgdG9wOiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY2JjYjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG59XFxuLnRhYnNfYnV0dG9ucywgLmFkZC1leHBhbmQsIC50YWJzX3Byb2oge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLnRhYnNfcHJvamVjdFxcblxcbi5kZWZhdWx0LXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxufVxcbi5zdWJuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc3VibmF2IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5bZGF0YS1mb3ItdGFiID0gXFxcInByb2plY3RcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbn1cXG4uYWJzb2x1dGVQIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucGx1cyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMTMycHg7XFxuICAgIHRvcDogMjNweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICB3aWR0aDogMjNweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wbHVzOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4udGFic19jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhYnNfY29udGVudC0tYWN0aXZlICB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udWwtbGlzdC1wcm9qZWN0IGJ1dHRvbiwgLnVsLWxpc3QtaW5ib3ggYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4uZm9ybS1jb250YWluZXIgeyBcXG4gICAgbWFyZ2luLXRvcDogMjNweFxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxpc3QtYm9yZGVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNDBlbTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4ubGlzdC1ib3JkZXIgaDN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xcbn1cXG4ubGlzdC1ib3JkZXIgbGkgcCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ubGlzdC1ib3JkZXIgbGkge1xcbiAgICBtYXJnaW4tbGVmdDogNjVweDtcXG59XFxuI2RhdGUtaW5ib3gge1xcbiAgICB3aWR0aDogMjY0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4jZGF0ZS1pbmJveDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7XFxufVxcbi5kZWxldGUtdGFzayB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuLmRlbGV0ZS10YXNrMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMjUwcHg7XFxuICAgIHRvcDogLTdweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN1Ym1pdC1idG4ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxufVxcbi5zaWRlQmFyLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTZyZW07XFxuICAgIHdpZHRoOiAyMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uc2lkZUJhci1jb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZGVyLWJ0biBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0yNXB4O1xcbiAgICB0b3A6IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uYWRkZXItYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFic19idXR0b25zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTZyZW07XFxuICAgIHdpZHRoOiA5OXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG59XFxuLmNyZWF0ZS1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uY3JlYXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjYjdhZGFkO1xcbn1cXG4uYWRkLXRhc2sge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxufVxcbi50YWJzXyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG4uYWRkIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uYWRkOmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCcuL1BvcHBpbnMtTGlnaHQudHRmJyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xuICAgIHZhciB0aXRsZUluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWluYm94JylcbiAgICB2YXIgZGVzY0luYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5ib3gnKVxuICAgIGxldCB0b2RvSW5mbyA9IHtcbiAgICAgICAgdGl0bGU6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWluYm94JykudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjLWluYm94JykudmFsdWUsXG4gICAgICAgIGRhdGU6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5ib3gnKS52YWx1ZVxuICAgIH1cblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5ib3gnKS52YWx1ZSA9ICcnXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjLWluYm94JykudmFsdWUgPSAnJ1xuXG5cbiAgICBcbiAgICAgICAgICAgIHZhciBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIHZhciBta0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdmFyIHVsX2luYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsLWxpc3QtaW5ib3gnKVxuICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbGlzdC1ib3JkZXInKVxuXG4gICAgICAgICAgICBoMy50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLnRpdGxlfWBcbiAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSfinJYnXG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGAke3RvZG9JbmZvLmRlc2NyaXB0aW9ufSBgXG4gICAgICAgICAgICBta0RhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RvSW5mby5kYXRlfWBcbiAgICAgICAgICAgIGxpLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInXG4gICAgICAgICAgICBoMy5zdHlsZS50ZXh0QWxpZ24gPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHVsX2luYm94LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoeClcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMylcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKG1rRGF0ZSlcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbmJveCcpLnZhbHVlID0gJydcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjLWluYm94JykudmFsdWUgPSAnJ1xuICAgICAgICAgICAgaDMudGV4dENvbnRlbnQgPSBgJHt0b2RvSW5mby50aXRsZX1gXG4gICAgICAgICAgICBpZiAoYCR7dG9kb0luZm8udGl0bGV9YD09ICcnKSB7XG4gICAgICAgICAgICBoMy5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIGltcG9ydCBjcmVhdGVJbmJveENvbnRlbnQgZnJvbSAnLi9pbmJveENvbnRlbnQnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGNyZWF0ZUxpc3QgZnJvbSAnLi9pbmJveExpc3RDcmVhdGUnXG5pbXBvcnQgY3JlYXRlUmFuTGlzdCBmcm9tICcuLi9jcmVhdGVQcm9qZWN0J1xudmFyIG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG5jb25zdCBzdWJuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibmF2JylcbmNvbnN0IG1pZGRsZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGUtY29udGFpbmVyJyk7XG4vLyB2YXIgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKVxuLy8gdmFyIHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jylcbi8vIHZhciBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKVxuLy8gdmFyIG1pZGRsZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGUtY29udGFpbmVyJylcbi8vIHZhciBsaXN0Q29udGFpbmVyUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyB2YXIgbGlzdENvbnRhaW5lclRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuZnVuY3Rpb24gc2V0dXBUYWJzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19idXR0b25zXCIpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2lkZUJhciA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGUtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCB0YWJOdW1iZXIgPSBidXR0b24uZGF0YXNldC5mb3JUYWI7XG4gICAgICAgICAgICBjb25zdCB0YWJUb0FjdGl2YXRlID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAudGFic19jb250ZW50W2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYClcblxuICAgICAgICAgICAgc2lkZUJhci5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19idXR0b25zJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwidGFic19idXR0b25zLS1hY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfY29udGVudCcpLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfY29udGVudC0tYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndGFic19idXR0b24tLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKCd0YWJzX2NvbnRlbnQtLWFjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cbnNldHVwVGFicygpO1xuXG52YXIgaW5ib3hMaXN0ZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWluYm94LWJ1dHRvbicpXG5pbmJveExpc3Rlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVMaXN0KCk7XG59KVxuXG4vLyB2YXIgY3JlYXRlUHJvamVjdExpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1wcm9qZWN0Jylcbi8vIGNyZWF0ZVByb2plY3RMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjcmVhdGVQcm9qZWN0Q29udGVudCgpXG4vLyB9KVxuLy8gdmFyIGRlZmF1bHRQcm9qZWN0TGlzdGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcHJvamVjdCcpXG4vLyBkZWZhdWx0UHJvamVjdExpc3Rlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuLy8gfSlcbmNvbnN0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpXG5wbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3RDb250ZW50KCk7XG59KVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRlbnQoKSB7XG5sZXQgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0PycpXG52YXIgbmV3VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IHByRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpXG52YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG52YXIgdGFic19jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRhYnNfY29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWJzX2NvbnRlbnQnKVxudGFic19jb250ZW50LmRhdGFzZXQudGFiID0gcHJvamVjdE5hbWU7XG5uZXdUYWIuY2xhc3NMaXN0LmFkZCgndGFic19idXR0b25zJylcbm5ld1RhYi5kYXRhc2V0LmZvclRhYiA9IHByb2plY3ROYW1lO1xubmV3VGFiLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG50aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xudGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGVNaWRkbGVCYXInKVxuXG5zdWJuYXYuYXBwZW5kQ2hpbGQobmV3VGFiKVxubWlkZGxlQmFyLmFwcGVuZENoaWxkKHRhYnNfY29udGVudClcbnRhYnNfY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbmNyZWF0ZVJhbkxpc3QoKTtcbnNldHVwVGFicygpO1xuXG59IFxuLy8gZnVuY3Rpb24gY3JlYXRlVG9kYXlDb250ZW50KCkge1xuLy8gICAgIHZhciB0b2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuLy8gICAgIHRvZGF5VGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknXG4vLyAgICAgdG9kYXlUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RheS10aXRsZScpXG4vLyAgICAgbGlzdENvbnRhaW5lclRvZGF5LmFwcGVuZENoaWxkKHRvZGF5VGl0bGUpXG4vLyAgICAgcmV0dXJuIHRvZGF5VGl0bGVcbi8vIH1cbi8vIC8vIGV2ZW50IExpc3RlbmVycyAvL1xuXG4vLyBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gbGlzdENvbnRhaW5lclByb2plY3QuY2xhc3NOYW1lID0gJ2xpc3QtY29udGFpbmVyLXByb2plY3QnXG4vLyBsaXN0Q29udGFpbmVySW5ib3guY2xhc3NOYW1lID0gJ2hpZGRlbidcbi8vIGxpc3RDb250YWluZXJUb2RheS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuLy8gLy8gY3JlYXRlUHJvamVjdENvbnRlbnQoKVxuLy8gfSlcblxuLy8gaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgbGlzdENvbnRhaW5lclByb2plY3QuY2xhc3NOYW1lID0gJ2hpZGRlbidcbi8vICAgICBsaXN0Q29udGFpbmVySW5ib3guY2xhc3NOYW1lID0nbGlzdC1jb250YWluZXItaW5ib3gnXG4vLyAgICAgbGlzdENvbnRhaW5lclRvZGF5LmNsYXNzTmFtZSA9ICdoaWRkZW4nXG4vLyB9KVxuXG4vLyB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBsaXN0Q29udGFpbmVySW5ib3guY2xhc3NOYW1lID0gJ2hpZGRlbidcbi8vICAgICBsaXN0Q29udGFpbmVyUHJvamVjdC5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuLy8gICAgIGxpc3RDb250YWluZXJUb2RheS5jbGFzc05hbWUgPSAnbGlzdC1jb250YWluZXItdG9kYXknXG4vLyB9KVxuXG5cbi8vIG1pZGRsZUJhci5hcHBlbmRDaGlsZChjcmVhdGVJbmJveENvbnRlbnQoKSlcbi8vIG1pZGRsZUJhci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyUHJvamVjdClcbi8vIG1pZGRsZUJhci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyVG9kYXkpXG4vLyAvLyBsaXN0Q29udGFpbmVyUHJvamVjdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q29udGVudCgpKVxuLy8gLy8gbGlzdENvbnRhaW5lckluYm94LmFwcGVuZENoaWxkKGNyZWF0ZUluYm94Q29udGVudCgpKVxuLy8gbGlzdENvbnRhaW5lclRvZGF5LmFwcGVuZENoaWxkKGNyZWF0ZVRvZGF5Q29udGVudCgpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9