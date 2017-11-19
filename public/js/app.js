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
const NavBar_1 = __webpack_require__(2);
const Nav_1 = __webpack_require__(3);
const Footer_1 = __webpack_require__(4);
const Pages = __webpack_require__(5);
const $navId = '#nav-container';
const $templateId = '#template-container';
const $footerId = '#footer-container';
const navBar = new NavBar_1.NavBar($navId);
const cms = new CMS_1.CMS();
$(document).ready(() => {
    cms.prependTemplate(Nav_1.Nav, $navId);
    navBar.activateHiding(60);
    cms.prependTemplate(Footer_1.Footer, $footerId);
    cms.switchTemplates(Pages.Home, $templateId);
    $('#nav-home').click(() => {
        cms.switchTemplates(Pages.Home, $templateId);
    });
    $('#nav-venue').click(() => {
        cms.switchTemplates(Pages.Venue, $templateId);
    });
});
//# sourceMappingURL=app.js.map

/***/ }),
/* 1 */
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
            $(targetElement).fadeOut(() => {
                this.removeTemplate(targetElement);
                this.prependTemplate(templateString, targetElement);
                $(targetElement).fadeIn();
            });
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
class NavBar {
    constructor(navBarId) {
        this.hideNavBar = () => {
            const hideDistance = '-50px';
            $(this.$navId).css('margin-top', hideDistance);
        };
        this.showNavBar = () => {
            $(this.$navId).css('margin-top', '0');
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = `
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
//# sourceMappingURL=Nav.js.map

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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Venue = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='fs-xxl theme-text-color font-moon-light text-shadow'>Cripps Barn</p>
                <br>
                <p class='courier'>"We can't wait to share our special day with you at this beautiful location."</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
        <br>
        <div id='ve-pics' class='row'>
            <div class='col-sm-3 col-xs-12 thumbnail'>
                <img src='./images/gallery-cripps/cripps-sign.jpg' class='img-responsive'>
            </div>
            <div class='col-sm-3 col-xs-12 thumbnail'>
                <img src='./images/gallery-cripps/cripps-ceremony.jpg' class='img-responsive'>
            </div>
            <div class='col-sm-3 col-xs-12 thumbnail'>
                <img src='./images/gallery-cripps/cripps-outdoors.jpg' class='img-responsive'>
            </div>
            <div class='col-sm-3 col-xs-12 thumbnail'>
                <img src='./images/gallery-cripps/cripps-night.jpg' class='img-responsive'>
            </div>
        </div>
        <br>
        <br>
        <div class='row'>
            <div id='accom-container' class='col-12 center'>
                <a id='accom-link' class='accom-default theme-background-color font-moon-light box-shadow' title='Click here to view the local accomodation'
                    href='https://crippsbarn.com/local-area/accommodation/' style='text-decoration: none; color: white'>ACCOMMODATION</a>
            </div>
        </div>

        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='courier'>Cripps Barn, Fosscross Lane, Cirencester, GL7 5BA</p>
            </div>
            <div class='col-xs-1'></div>
        </div>

    </div>
`;
//# sourceMappingURL=Venue.js.map

/***/ })
/******/ ]);