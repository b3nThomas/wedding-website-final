/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('You having a nosey at my code are you? ;) ~ b3nThomas');

const Templates = __webpack_require__(1);
const navBar = __webpack_require__(2);
const homePage = __webpack_require__(3);

$(document).ready(() => {
    Templates.prependTemplate(navBar.template, 'body');
    Templates.prependTemplate(homePage.template, '#template-canvas');
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.prependTemplate = (templateString, target) => {
    $(target).prepend(templateString);
};

module.exports.appendTemplate = (templateString, target) => {
    $(target).append(templateString);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.template = `
<div class="topnav theme-text-color">
    <ul class="theme-background-color box-shadow">
        <li>
            <a id=nav-home href="#">Home</a>
        </li>
        <li>
            <a id=nav-venue href="#">Venue</a>
        </li>
        <li>
            <a id=nav-registry href="#">Registry</a>
        </li>
        <li>
            <a id=nav-rsvp href="#">RSVP</a>
        </li>
    </ul>
</div>`


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.template = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='center col-12 font-moon-light text-shadow'>
                <p class='fs-s theme-text-color'>The Epic Wedding of</p>
                <p class='fs-xl'>Ben Thomas
                    <span class='rose'>&</span>
                </p>
                <p class='fs-xl' style='margin-top:-18px'>Clare Sealey</p>
                <br>
                <br>
                <p class='fs-m theme-text-color'>March 30th - 2018</p>
            </div>
        </div>
    </div>

    <div class='container-fluid center'>
        <div class='container-fluid'>

            <div class='row'>
                <div class='col-lg-2'></div>

                <div class='col-lg-2 col-md-3 col-sm-6 col-xs-12 thumbnail'>
                    <img src='./images/gallery-bc/bc-img-09.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-6 col-xs-12 thumbnail'>
                    <img src='./images/gallery-bc/bc-img-13.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-6 col-xs-12 thumbnail'>
                    <img src='./images/gallery-bc/bc-img-14.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-6 col-xs-12 thumbnail'>
                    <img src='./images/gallery-bc/bc-img-15.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2'></div>
            </div>

            <p class='theme-text-color'>♥</p>
        </div>
    </div>
 `;


/***/ })
/******/ ]);