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
const Fixtures = __webpack_require__(1);
const CMS_1 = __webpack_require__(7);
const NavBar_1 = __webpack_require__(8);
const $navId = '#nav-container';
const $templateId = '#template-container';
const $footerId = '#footer-container';
$(document).ready(() => {
    const cms = new CMS_1.CMS();
    cms.prependTemplate(Fixtures.Nav, $navId);
    const navBar = new NavBar_1.NavBar($navId);
    navBar.activateHiding(60);
    cms.prependTemplate(Fixtures.Footer, $footerId);
    cms.switchTemplates(Fixtures.Home, $templateId);
    $('#nav-home').click(() => {
        cms.switchTemplates(Fixtures.Home, $templateId);
    });
    $('#nav-venue').click(() => {
        cms.switchTemplates(Fixtures.Venue, $templateId);
    });
    $('#nav-rsvp').click(() => {
        cms.switchTemplates(Fixtures.RSVP, $templateId);
    });
});
//# sourceMappingURL=app.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = `
    <p>&copy; b3nThomas</p>
`;
//# sourceMappingURL=Footer.js.map

/***/ }),
/* 3 */
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = `
<ul>
    <li>
        <a id=nav-home class='nav-left nav-button theme-background-color'>Home</a>
    </li>
    <li>
        <a id=nav-venue class='nav-button theme-background-color'>Venue</a>
    </li>
    <li>
        <a id=nav-registry class='nav-button theme-background-color'>Registry</a>
    </li>
    <li>
        <a id=nav-rsvp class='nav-right nav-button theme-background-color'>RSVP</a>
    </li>
</ul>
`;
//# sourceMappingURL=Nav.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RSVP = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='fs-xxl theme-text-color font-moon-light text-shadow'>RSVP</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
    </div>
`;
//# sourceMappingURL=RSVP.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Venue = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-12 center'>
                <p class='fs-l font-moon-light text-shadow'>Cripps Barn</p>
            </div>
        </div>
        <div class='row'>
            <div id='map-container' class='col-xs-12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d66477.05148935101!2d-1.9113974717633855!3d51.74276147230118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x688c98a90ca25866!2sCripps+Barn!5e0!3m2!1sen!2suk!4v1487940894833" width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <div class='row'>
            <div id='accom-container' class='col-12 center'>
                <a id='accom-link' class='accom-default theme-background-color font-moon-light' title='Click here to view the local accomodation'
                    href='https://crippsbarn.com/local-area/accommodation/' style='text-decoration: none; color: white'>ACCOMMODATION</a>
            </div>
        </div>
    </div>
`;
//# sourceMappingURL=Venue.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CMS {
    constructor() {
        this.appendTemplate = (templateString, targetElement) => {
            $(targetElement).append(templateString);
        };
        this.prependTemplate = (templateString, targetElement) => {
            $(targetElement).prepend(templateString);
        };
        this.removeTemplate = (targetElement) => {
            $(targetElement).empty();
        };
        this.switchTemplates = (templateString, targetElement) => {
            $(targetElement).fadeOut(240, () => {
                this.removeTemplate(targetElement);
                this.prependTemplate(templateString, targetElement);
                $(targetElement).fadeIn(300);
            });
        };
    }
}
exports.CMS = CMS;
//# sourceMappingURL=CMS.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NavBar {
    constructor(navBarId) {
        this.hideNavBar = () => {
            $(this.$navId).addClass('nav-hidden');
        };
        this.showNavBar = () => {
            $(this.$navId).removeClass('nav-hidden');
        };
        this.activateHiding = (scrollWindow) => {
            let lastScroll = $(window).scrollTop();
            let lastHidden = 0;
            let lastShown = 0;
            $(window).on('scroll', () => {
                const currentScroll = $(window).scrollTop();
                const direction = lastScroll < currentScroll ? 'down' : 'up';
                if (direction === 'down' && (currentScroll - lastShown) > scrollWindow) {
                    this.hideNavBar();
                    lastHidden = currentScroll;
                }
                if (direction === 'up' && (lastHidden - currentScroll) > scrollWindow) {
                    this.showNavBar();
                    lastShown = currentScroll;
                }
                lastScroll = currentScroll;
            });
        };
        this.$navId = navBarId;
    }
}
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map

/***/ })
/******/ ]);