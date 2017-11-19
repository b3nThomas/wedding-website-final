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

Object.defineProperty(exports, "__esModule", { value: true });
const CMS_1 = __webpack_require__(1);
const Navigator_1 = __webpack_require__(2);
const NavBar_1 = __webpack_require__(3);
const Footer_1 = __webpack_require__(4);
const Home_1 = __webpack_require__(5);
const $navId = '#nav-container';
const $footerId = '#footer-container';
const $templateId = '#template-container';
const navigator = new Navigator_1.Navigator($navId);
const cms = new CMS_1.CMS();
$(document).ready(() => {
    cms.prependTemplate(NavBar_1.NavBar, $navId);
    cms.prependTemplate(Footer_1.Footer, $footerId);
    cms.prependTemplate(Home_1.Home, $templateId);
    navigator.activateHiding($navId);
});
//# sourceMappingURL=app.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CMS {
    constructor() {
        this.prependTemplate = (templateString, targetElement) => {
            $(targetElement).prepend(templateString);
        };
        this.appendTemplate = (templateString, targetElement) => {
            $(targetElement).append(templateString);
        };
    }
}
exports.CMS = CMS;
//# sourceMappingURL=CMS.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Navigator {
    constructor(navigatorId) {
        this.activateHiding = (navigatorId) => {
            let lastScroll = $(window).scrollTop();
            $(window).on('scroll', () => {
                const currentScroll = $(window).scrollTop();
                const maxScroll = -($(window).height() - $(document).height());
                console.log(currentScroll === maxScroll);
                const direction = lastScroll < currentScroll ? 'down' : 'up';
                if (direction === 'down' && (currentScroll > 25 || currentScroll === maxScroll)) {
                    this.hideNavigator(navigatorId);
                }
                else {
                    this.showNavigator(navigatorId);
                }
                lastScroll = currentScroll;
            });
        };
        this.hideNavigator = (navigatorId) => {
            $(navigatorId).css('margin-top', '-50px');
        };
        this.showNavigator = (navigatorId) => {
            $(navigatorId).css('margin-top', '0');
        };
        this.$navId = navigatorId;
    }
}
exports.Navigator = Navigator;
//# sourceMappingURL=Navigator.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = `
<ul class='box-shadow'>
    <li>
        <a id=nav-home class='nav-button theme-background-color' href='#'>Home</a>
    </li>
    <li>
        <a id=nav-venue class='nav-button theme-background-color' href='#'>Venue</a>
    </li>
    <li>
        <a id=nav-registry class='nav-button theme-background-color' href='#'>Registry</a>
    </li>
    <li>
        <a id=nav-rsvp class='nav-button theme-background-color' href='#'>RSVP</a>
    </li>
</ul>
`;
//# sourceMappingURL=NavBar.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = `
    <p>&copy; b3nThomas</p>
`;
//# sourceMappingURL=Footer.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='center col-12 font-moon-light text-shadow'>
                <p class='fs-s theme-text-color'>The Wedding of</p>
                <p class='fs-xl'>Clare Sealey
                    <span class='rose'>&</span>
                </p>
                <p class='fs-xl' style='margin-top:-18px'>Ben Thomas</p>
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
        </div>
    </div>
 `;
//# sourceMappingURL=Home.js.map

/***/ })
/******/ ]);