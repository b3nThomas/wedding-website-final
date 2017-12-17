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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
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
        template += `<option class="${identifier}" value="${index}">${index}</option>`;
        index++;
    }
    return template;
};
exports.daysToGoTimer = (targetElement) => {
    const getTime = () => {
        const targetDate = new Date("Mar 30, 2018 14:00:00").getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        let daysStr = days.toString();
        let hoursStr = hours.toString();
        let minutesStr = minutes.toString();
        let secondsStr = seconds.toString();
        if (days < 10) {
            daysStr = `0${daysStr}`;
        }
        if (hours < 10) {
            hoursStr = `0${hoursStr}`;
        }
        if (minutes < 10) {
            minutesStr = `0${minutesStr}`;
        }
        if (seconds < 10) {
            secondsStr = `0${secondsStr}`;
        }
        return `${daysStr}d ${hoursStr}h ${minutesStr}m ${secondsStr}s`;
    };
    $(targetElement).text(getTime());
    setInterval(() => {
        $(targetElement).text(getTime());
    }, 1000);
};
//# sourceMappingURL=Helpers.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = __webpack_require__(1);
exports.rsvp = () => {
    $('.rsvp-coach').hide();
    $('.rsvp-robot-message').hide();
    $('.rsvp-check').hide();
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
    $('.rsvp-btn-check').click((e) => {
        e.preventDefault();
        $('.rsvp-btn-check').blur();
        if ($('.rsvp-robot').is(':checked')) {
            $('#nav-container').fadeOut(100);
            $('.rsvp-title').fadeOut(100);
            $('.rsvp-form').fadeOut(100);
            window.scrollTo(0, 0);
            const data = getRSVPDetails();
            let confirmTemplate = `
                <p class='font-moon-light fs-m'><strong>RSVP Details:</strong></p></br>
                <p>Number of guests:</p>
                <p><strong>${data.guests}</strong></p></br>
                <p>Names:</p>
                <p><strong>${data.names}</strong></p></br>
                <p>Attending:</p>
                </p><strong>${data.attending}</strong></p></br>
            `;
            if (data.attending === 'Y') {
                confirmTemplate += `
                    <p>Dietary info:</p>
                    <p><strong>${data.dietaryInfo}</strong></p></br>
                    <p>Under fives:</p>
                    <p><strong>${data.underFives}</strong></p></br>
                    <p>Song:<p>
                    <p><strong>${data.song}</strong></p></br>
                `;
            }
            if (data.coach.interested === 'Y') {
                confirmTemplate += `
                    <p>Coach:</p>
                    <p><strong>${data.coach.interested}</strong></p></br>
                    <p>Passengers:</p>
                    <p><strong>${data.coach.passengers}</strong></p></br>
                    <p>Travelling:</p>
                    <p><strong>${data.coach.journey}</strong></p></br>
                    <p>Contact:</p>
                    <p><strong>${data.coach.contact.name}</strong> - <strong>${data.coach.contact.mobile}</strong></p></br>
                    <p>Address:</p>
                    <p><strong>${data.coach.contact.address}</strong></p></br>
                `;
            }
            confirmTemplate += `
                <p>Message:</p>
                <p><strong>${data.message}</strong></p></br>
                <button class='rsvp-btn rsvp-btn-send'>Send</button>
                <button class='rsvp-btn rsvp-btn-edit'>Edit</button>
            `;
            $('.rsvp-check').html(confirmTemplate);
            $('.rsvp-check').fadeIn(100);
            $('.rsvp-btn-send').click(() => {
                $('.rsvp-btn-send').unbind('click');
                $('.rsvp-btn-send').blur();
                $('.rsvp-check').fadeOut(100);
                window.scrollTo(0, 0);
                $('.rsvp-sending').fadeIn(100);
                const url = 'https://qshrdywnlb.execute-api.eu-west-1.amazonaws.com/test/rsvp';
                $.ajax({
                    type: 'POST',
                    url: url,
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: () => {
                        $('.rsvp-sending').fadeOut(100, () => {
                            window.scrollTo(0, 0);
                            $('#nav-container').fadeIn(100);
                            $('.rsvp-title').fadeIn(100);
                            $('.rsvp-sent').fadeIn(100);
                        });
                    },
                    error: (err) => {
                        alert('Server error, please try again. If this problem persists, contact btcswedding@gmail.com for support.');
                        $('.rsvp-sending').fadeOut(100, () => {
                            window.scrollTo(0, 0);
                            $('#nav-container').fadeIn(100);
                            $('.rsvp-title').fadeIn(100);
                            $('.rsvp-form').fadeIn(100);
                        });
                    }
                });
            });
            $('.rsvp-btn-edit').click(() => {
                $('.rsvp-check').fadeOut(100);
                window.scrollTo(0, 0);
                $('#nav-container').fadeIn(100);
                $('.rsvp-form').fadeIn(100);
                $('.rsvp-robot').prop('checked', false);
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
exports.home = () => {
    Helpers_1.daysToGoTimer('.home-countdown');
};
//# sourceMappingURL=Listeners.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Fixtures = __webpack_require__(0);
const Listeners = __webpack_require__(2);
const CMS_1 = __webpack_require__(10);
const NavBar_1 = __webpack_require__(11);
const Pages_1 = __webpack_require__(12);
const $navId = '#nav-container';
const $templateId = '#template-container';
const $footerId = '#footer-container';
$(document).ready(() => {
    const cms = new CMS_1.CMS();
    cms.prependTemplate(Fixtures.Nav, $navId);
    const navBar = new NavBar_1.NavBar($navId).activateHiding(30);
    cms.prependTemplate(Fixtures.Footer, $footerId);
    for (const page of Pages_1.Pages) {
        $(page.navId).click(() => {
            cms.switchTemplates(page.fixture, $templateId, page.listeners);
        });
    }
    cms.switchTemplates(Fixtures.Home, $templateId, Listeners.home);
});
//# sourceMappingURL=app.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = `
    <p>&copy; b3nThomas - MMXVII</p>
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
                </br>
                <p class='fs-s theme-text-color'>The Wedding of</p>
                <p class='fs-xl'>Clare Sealey
                    <span class='rose'>&</span>
                </p>
                <p class='fs-xl' style='margin-top:-18px'>Ben Thomas</p>
                <div class='home-date theme-background-color'>
                    <p class='font-moon-bold fs-s'>March 30th - 2018</p>
                    <p class='home-countdown fs-s'>-</p>
                </div>
            </div>
        </div>
    </div>
    </br>
    <div class='container-fluid center'>
        <div class='container-fluid'>

            <div class='row'>
                <div class='col-lg-2'></div>

                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail home-img'>
                    <img src='./images/gallery-bc/bc-img-14.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail home-img'>
                    <img src='./images/gallery-bc/bc-img-15.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail home-img'>
                    <img src='./images/gallery-bc/bc-img-09.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail home-img'>
                    <img src='./images/gallery-bc/bc-img-13.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2'></div>
            </div>
        </div>
    </div>
 `;
//# sourceMappingURL=Home.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = `
    <ul class='box-shadow'>
        <li>
            <a id=nav-home class='nav-left nav-btn theme-background-color'>Home</a>
        </li>
        <li>
            <a id=nav-venue class='nav-btn theme-background-color'>Venue</a>
        </li>
        <li>
            <a id=nav-gift-list class='nav-btn theme-background-color'>Gifts</a>
        </li>
        <li>
            <a id=nav-rsvp class='nav-right nav-btn theme-background-color'>RSVP</a>
        </li>
    </ul>
`;
//# sourceMappingURL=Nav.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = __webpack_require__(1);
exports.RSVP = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='rsvp-title template-title  fs-l font-moon-light text-shadow'>RSVP</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
        <div class='rsvp-form'>
            <div class='row'>
                <div class='col-xs-12' >
                    <div>
                        <p class='rsvp-label'>Guests:</p>
                        <select type='number' class='rsvp-no-of-guests rsvp-select-number'>
                            ${Helpers_1.createNumberSelectOptionList(1, 10, 'rsvp-no-of-guests-option')}
                        </select>
                    </div>
                    <div>
                        <p class='rsvp-label rsvp-name-text'>Name:</p>
                        <div class='rsvp-names'>
                            <input type='text' maxlength='30' class='rsvp-name-1 rsvp-input'></input>
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
                            <p class='rsvp-label'>Are there any children under 5 in your party? If so, how many?:</p>
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
                                If you fancy pitching-up for the night, Cripps have kindly offered our guests the use of their camping ground.</br></br>
                                We're also considering hiring a coach to transport our Swindon guests to and from the venue.</br></br>
                                If you'd like to travel on the coach, please tick the box and provide some details so we can keep you up to date with any news: <input type='checkbox' class='rsvp-interested tickbox' value='interested'></br>
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
                                    <option value='Return'>To and from the Venue</option>
                                    <option value='There'>To the Venue only</option>
                                    <option value='Back'>From the Venue only</option>
                                </select>
                            </div>
                            <div>
                                <p class='rsvp-label'>Contact name:</p>
                                <input type='text' maxlength='30' class='rsvp-coach-name rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Contact mobile number:</br>
                                <small>*we'll use this to text you with any updates or arrangements.</small></p>
                                <input type='text' maxlength='60' class='rsvp-coach-mobile rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Contact address:</br>
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
                        <p class='rsvp-label'><strong>Please tick to confirm you're not a robot: </strong><input type='checkbox' class='rsvp-robot tickbox' value='robot'></p>
                        <p class='rsvp-robot-message'>*No robots allowed! Tick the box first</p>
                        </br>
                        <button class='rsvp-btn rsvp-btn-check'>Check & Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div class='rsvp-check'></div>
        <div class='rsvp-sending'>
            <p>Sending...</p>
        </div>
        <div class='rsvp-sent'>
            <p>Thank you, your RSVP was sent!</p></br>
            <p>Any questions or problems, contact:</p>
            <p><strong>btcswedding@gmail.com</strong></p>
        </div>
    </div>
`;
//# sourceMappingURL=RSVP.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftList = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='template-title  fs-l font-moon-light text-shadow'>Gift List</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
        <div class='text-container fs-s row'>
            <p>Your presence is the only present</p>
            <p>we need for our wedding.</p>
            </br>
            <p>However if you would like to give us</p>
            <p>a gift to mark the occasion,</p>
            <p>please click the button below</p>
            <p>to see our honeymoon gift list.</p>
        </div>
        <button class='gift-btn'><a href='https://prezola.com/wishlists/10180830/'>Sri Lanka gift list</a></button>
        </br>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-lg-2'></div>
                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail gift-img'>
                    <img src='./images/gallery-gift/gift-img-4.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail gift-img'>
                    <img src='./images/gallery-gift/gift-img-5.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail gift-img'>
                    <img src='./images/gallery-gift/gift-img-3.jpg' class='img-responsive'>
                </div>

                <div class='col-lg-2 col-md-3 col-sm-3 col-xs-12 thumbnail gift-img'>
                    <img src='./images/gallery-gift/gift-img-2.jpg' class='img-responsive'>
                </div>
                <div class='col-lg-2'></div>
            </div>
        </div>
    </div>
`;
//# sourceMappingURL=GiftList.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Venue = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-12 center'>
                <p class='template-title fs-l font-moon-light text-shadow'>Cripps Barn</p>
            </div>
        </div>
        </br>
        <div class='row'>
            <div class='map-container col-xs-12'>
                <iframe class='venue-map box-shadow' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d66477.05148935101!2d-1.9113974717633855!3d51.74276147230118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x688c98a90ca25866!2sCripps+Barn!5e0!3m2!1sen!2suk!4v1487940894833' width='100%' height='330px' frameborder='0' style='border:0' allowfullscreen></iframe>
            </div>
        </div>
        <div class='text-container fs-s col-12 center'>
            <p>For more information</p>
            <p>visit the Cripps Barn <a href='https://www.crippsbarn.com/' class='link-text'>website</a></p>
            <p>or view local accommodation <a href='https://www.crippsbarn.com/directory/' class='link-text'>here</a></p>
        </div>
    </div>
    </br>
`;
//# sourceMappingURL=Venue.js.map

/***/ }),
/* 10 */
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
                window.scrollTo(0, 0);
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
/* 11 */
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
                if (direction === 'down' && (currentScroll - lastShown) > (scrollWindow * 2)) {
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Fixtures = __webpack_require__(0);
const Listeners = __webpack_require__(2);
exports.Pages = [
    {
        navId: '#nav-home',
        fixture: Fixtures.Home,
        listeners: Listeners.home
    },
    {
        navId: '#nav-venue',
        fixture: Fixtures.Venue,
        listeners: ''
    },
    {
        navId: '#nav-gift-list',
        fixture: Fixtures.GiftList,
        listeners: ''
    },
    {
        navId: '#nav-rsvp',
        fixture: Fixtures.RSVP,
        listeners: Listeners.rsvp
    }
];
//# sourceMappingURL=Pages.js.map

/***/ })
/******/ ]);