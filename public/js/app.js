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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createNumberSelectOptionList = (start, limit, identifier) => {
    let template = ``;
    let index = start;
    while (index <= limit) {
        template += `<option class="${identifier}-${index}" value="${index}">${index}</option>`;
        index++;
    }
    return template;
};
//# sourceMappingURL=Helpers.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Fixtures = __webpack_require__(0);
const CMS_1 = __webpack_require__(9);
const NavBar_1 = __webpack_require__(10);
const Pages_1 = __webpack_require__(11);
const $navId = '#nav-container';
const $templateId = '#template-container';
const $footerId = '#footer-container';
$(document).ready(() => {
    const cms = new CMS_1.CMS();
    cms.prependTemplate(Fixtures.Nav, $navId);
    const navBar = new NavBar_1.NavBar($navId).activateHiding(75);
    cms.prependTemplate(Fixtures.Footer, $footerId);
    for (const page of Pages_1.Pages) {
        $(page.navId).click(() => {
            cms.switchTemplates(page.fixture, $templateId, page.listeners);
        });
    }
    cms.switchTemplates(Fixtures.Home, $templateId);
});
//# sourceMappingURL=app.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = `
    <p>&copy; b3nThomas - MMXVII</p>
`;
//# sourceMappingURL=Footer.js.map

/***/ }),
/* 4 */
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
                    <img src='./images/gallery-bc/bc-img-14.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-6 col-xs-12 thumbnail'>
                    <img src='./images/gallery-bc/bc-img-15.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-6 col-xs-12 thumbnail'>
                    <img src='./images/gallery-bc/bc-img-09.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-6 col-xs-12 thumbnail'>
                    <img src='./images/gallery-bc/bc-img-13.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2'></div>
            </div>
        </div>
    </div>
 `;
//# sourceMappingURL=Home.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = `
    <ul class='box-shadow'>
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = __webpack_require__(1);
exports.RSVP = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='fs-l font-moon-light text-shadow'>RSVP</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
        <div class='rsvp-form'>
            <div class='row'>
                <div class='col-xs-12' >
                    <div>
                        <p class='rsvp-label'>Guests:</p>
                        <select type='number' class='rsvp-no-of-guests rsvp-select-number'>
                            ${Helpers_1.createNumberSelectOptionList(1, 10, 'rsvp-name')}
                        </select>
                    </div>
                    <div>
                        <p class='rsvp-label rsvp-name-text'>Name:</p>
                        <div class='rsvp-names'>
                            <input type='text' maxlength='30' class='rsvp-name rsvp-input'></input>
                        </div>
                    </div>
                    <div>
                        <p class='rsvp-label'>Will you be attending?:</p>
                        <select type='text' class='rsvp-attending'>
                            <option class='rsvp-attending-yes' value='attending'>I'll be there</option>
                            <option class='rsvp-attending-no' value='not-attending'>I can't make it</option>
                        </select>
                    </div>
                    <div class='rsvp-payload'>
                        <div>
                            <p class='rsvp-dietary-text rsvp-label'>
                                Do you require the vegetarian option or have any food allergies? If so, please provide details:
                            </p>
                            <textarea maxlength='175' class='rsvp-dietary rsvp-tall-input'></textarea>
                        </div>
                        <div>
                            <p class='rsvp-label'>Are there any under 5's in your party? If so, how many?:</p>
                            <select type='number' class='rsvp-no-of-under-fives rsvp-select-number'>
                                ${Helpers_1.createNumberSelectOptionList(0, 1, 'rsvp-under-fives-count')}
                            </select>
                        </div>
                        <div>
                            <p class='rsvp-label'> The name of a particular song you'd like to hear:</p>
                            <input type='text' maxlength='30' class='rsvp-song rsvp-name rsvp-input'></input>
                        </div>
                        </br>
                        <div>
                            <p class='rsvp-label'>
                                Cars may be left overnight at the venue but must be collected by <strong>10:00am</strong> the following morning.</br></br>
                                If you fancy pitching-up for the night, Cripps have kindly offered our guests the use of their <a href='https://crippsbarn.com/local-area/camping/' target='_blank'>camping ground</a>.</br></br>
                                Finally, we're considering hiring a coach to transport our Swindon guests to and from the venue.</br>
                                <small>*subject to a small fee.</small></br></br>
                                If this appeals to you, please tick the box and provide some details so we can gauge the level of response and keep you up to date with any news: <input type='checkbox' class='rsvp-interested' value='interested'></br>
                            </p>
                        </div>
                        <div class='rsvp-coach'>
                            <div>
                                <p class='rsvp-label'>Passengers:</p>
                                <select type='number' class='rsvp-coach-passengers rsvp-select-number'>
                                    ${Helpers_1.createNumberSelectOptionList(1, 1, 'rsvp-passenger-count')}
                                </select>
                            </div>
                            <div>
                                <p class='rsvp-label'>Travelling:</p>
                                <select type='text' class='rsvp-coach-journey'>
                                    <option value='return'>To and from the Venue</option>
                                    <option value='there'>To the Venue only</option>
                                    <option value='back'>From the Venue only</option>
                                </select>
                            </div>
                            <div>
                                <p class='rsvp-label'>Your name:</p>
                                <input type='text' maxlength='30' class='rsvp-coach-name rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Your mobile number:</br>
                                <small>*we'll use this to text you with any updates or arrangements.</small></p>
                                <input type='text' maxlength='60' class='rsvp-coach-mobile rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Your address:</br>
                                <small>*we'll use this info to work out the best pick-up/drop-off points.</small></p>
                                <textarea maxlength='175' class='rsvp-coach-address rsvp-tall-input'></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class='rsvp-label'>
                            Leave us a message if you like:
                        </p>
                        <textarea maxlength='175' class='rsvp-message rsvp-tall-input'></textarea>
                    </div>
                    </br>
                    <div>
                        <p class='rsvp-label'><strong>Please tick to confirm you're not a robot: </strong><input type='checkbox' class='rsvp-robot' value='robot'></p>
                        <p class='rsvp-robot-message'>*No robots allowed! Tick the box first</p>
                        <button class='rsvp-btn-send'>Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div class='rsvp-sending'>
            <p>Sending...</p>
        </div>
        <div class='rsvp-sent'></div>
    </div>
`;
//# sourceMappingURL=RSVP.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='fs-l font-moon-light text-shadow'>Registry</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
    </div>
`;
//# sourceMappingURL=Registry.js.map

/***/ }),
/* 8 */
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
        </br>
        <div class='row'>
            <div id='map-container' class='col-xs-12'>
                <iframe class='venue-map box-shadow' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d66477.05148935101!2d-1.9113974717633855!3d51.74276147230118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x688c98a90ca25866!2sCripps+Barn!5e0!3m2!1sen!2suk!4v1487940894833' width='100%' height='330px' frameborder='0' style='border:0' allowfullscreen></iframe>
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
/* 9 */
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
        this.switchTemplates = (templateString, targetElement, listeners) => {
            $(targetElement).fadeOut(240, () => {
                this.removeTemplate(targetElement);
                this.prependTemplate(templateString, targetElement);
                $(targetElement).fadeIn(300, () => {
                    if (listeners) {
                        listeners();
                    }
                });
            });
        };
    }
}
exports.CMS = CMS;
//# sourceMappingURL=CMS.js.map

/***/ }),
/* 10 */
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Fixtures = __webpack_require__(0);
const Listeners = __webpack_require__(12);
exports.Pages = [
    {
        navId: '#nav-home',
        fixture: Fixtures.Home,
        listeners: ''
    },
    {
        navId: '#nav-venue',
        fixture: Fixtures.Venue,
        listeners: ''
    },
    {
        navId: '#nav-registry',
        fixture: Fixtures.Registry,
        listeners: ''
    },
    {
        navId: '#nav-rsvp',
        fixture: Fixtures.RSVP,
        listeners: Listeners.rsvp
    }
];
//# sourceMappingURL=Pages.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = __webpack_require__(1);
exports.rsvp = () => {
    $('.rsvp-coach').hide();
    $('.rsvp-robot-message').hide();
    $('.rsvp-sending').hide();
    $('.rsvp-sent').hide();
    $('.rsvp-no-of-guests').change(() => {
        const totalGuests = Number($('.rsvp-no-of-guests').val());
        $('.rsvp-coach-passengers').html(Helpers_1.createNumberSelectOptionList(1, totalGuests, '.rsvp-coach-passengers-count'));
        $('.rsvp-no-of-under-fives').html(Helpers_1.createNumberSelectOptionList(0, totalGuests, '.rsvp-under-fives-count'));
        let template = '';
        for (let i = 1; i <= totalGuests; i++) {
            template += `<input type='text' maxlength='30' class='rsvp-name-${i} rsvp-input'></input><br>`;
        }
        $('.rsvp-names').hide();
        $('.rsvp-names').html(template).promise().done(() => {
            $('.rsvp-names').fadeIn(100);
        });
        if (totalGuests > 1) {
            $('.rsvp-name-text').text('Names:');
            $('.rsvp-attending-yes').text(`We'll be there`);
            $('.rsvp-attending-no').text(`We can't make it`);
            $('.rsvp-dietary-text').text(`Does anyone require the vegetarian option or have any food allergies? If so, please provide details:`);
        }
        else {
            $('.rsvp-name-text').text('Name:');
            $('.rsvp-attending-yes').text(`I'll be there`);
            $('.rsvp-attending-no').text(`I can't make it`);
            $('.rsvp-dietary-text').text(`Do you require the vegetarian option or have any food allergies? If so, please provide details:`);
        }
    });
    $('.rsvp-attending').change(() => {
        if ($('.rsvp-attending').val() === 'attending') {
            $('.rsvp-payload').fadeIn(100);
        }
        else {
            $('.rsvp-payload').fadeOut(100);
        }
    });
    $('.rsvp-interested').change(() => {
        if ($('.rsvp-interested').is(':checked')) {
            $('.rsvp-coach').fadeIn(100);
        }
        else {
            $('.rsvp-coach').fadeOut(100);
        }
    });
    $('.rsvp-robot').click((e) => {
        $('.rsvp-robot-message').fadeOut(100);
    });
    $('.rsvp-btn-send').click((e) => {
        e.preventDefault();
        $('.rsvp-btn-send').blur();
        if ($('.rsvp-robot').is(':checked')) {
            $('.rsvp-btn-send').unbind('click');
            $('#nav-container').fadeOut(100);
            $('.rsvp-form').fadeOut(100, () => {
                $('.rsvp-sending').fadeIn(100);
            });
            const data = getRSVPDetails();
            const url = 'https://qshrdywnlb.execute-api.eu-west-1.amazonaws.com/test/rsvp';
            const sentTemplate = `
                <p class='font-moon-light'><strong>Success!</strong></p></br>
                <p>Number of guests: <strong>${data.guests}</strong></p></br>
                <p>Names:</p>
                <p><strong>${data.names}</strong></p></br>
                <p>Attending: <strong>${data.attending}</strong></p></br>
                <p>Dietary info: <strong>${data.dietaryInfo}</strong></p></br>
                <p>Under fives: <strong>${data.underFives}</strong></p></br>
                <p>Song: <strong>${data.song}</strong></p></br>
                <p>Message:</p>
                <p><strong>${data.message}</strong></p></br>
                <p>Coach: <strong>${data.coach.interested}</strong></p></br>
                <p>Passengers: <strong>${data.coach.passengers}</strong></p></br>
                <p>Travelling: <strong>${data.coach.journey}</strong></p></br>
                <p>Contact: <strong>${data.coach.contact.name}</strong> - <strong>${data.coach.contact.mobile}</strong></p></br>
                <p>Address:</p>
                <p><strong>${data.coach.contact.address}</strong></p></br>
                <p class='font-moon-light'><strong>Thanks for taking the time to respond</strong></p>
                <p class='font-moon-light'><strong>We look forward to seeing you soon</strong></p></br>
            `;
            $.ajax({
                type: 'POST',
                url: url,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: () => {
                    $('.rsvp-sending').fadeOut(100, () => {
                        $('.rsvp-sent').html(sentTemplate);
                        $('.rsvp-sent').fadeIn(100);
                        $('#nav-container').fadeIn(100);
                    });
                },
                error: (err) => {
                    alert('There was a problem');
                }
            });
        }
        else {
            $('.rsvp-robot-message').fadeIn(100);
        }
    });
};
const getRSVPDetails = () => {
    const totalGuests = Number($('.rsvp-no-of-guests').val());
    const guestNames = [];
    for (let i = 1; i <= totalGuests; i++) {
        guestNames.push($(`.rsvp-name-${i}`).val());
    }
    const details = {
        guests: totalGuests,
        names: guestNames.join(', '),
        attending: $('.rsvp-attending').val() === 'attending' ? 'Y' : 'N',
        dietaryInfo: $('.rsvp-dietary').val(),
        underFives: $('.rsvp-no-of-under-fives').val(),
        song: $('.rsvp-song').val(),
        message: $('.rsvp-message').val(),
        coach: {
            interested: $('.rsvp-interested').is(':checked') ? 'Y' : 'N',
            passengers: $('.rsvp-interested').is(':checked') ? $('.rsvp-coach-passengers').val() : 0,
            journey: $('.rsvp-interested').is(':checked') ? $('.rsvp-coach-journey').val() : 'none',
            contact: {
                name: $('.rsvp-coach-name').val(),
                mobile: $('.rsvp-coach-mobile').val(),
                address: $('.rsvp-coach-address').val()
            }
        }
    };
    return details;
};
//# sourceMappingURL=Listeners.js.map

/***/ })
/******/ ]);