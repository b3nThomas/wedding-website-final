"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Navigator_1 = require("./controllers/Navigator");
const Templates_1 = require("./controllers/Templates");
const NavBar_1 = require("./templates/partials/NavBar");
const Footer_1 = require("./templates/partials/Footer");
const Home_1 = require("./templates/pages/Home");
const $navId = '#nav-container';
const $footerId = '#footer-container';
const $templateId = '#template-container';
const navigator = new Navigator_1.Navigator($navId);
const templates = new Templates_1.Templates();
$(document).ready(() => {
    templates.prependTemplate(NavBar_1.NavBar, $navId);
    templates.prependTemplate(Footer_1.Footer, $footerId);
    templates.prependTemplate(Home_1.Home, $templateId);
    navigator.activateHiding($navId);
});
//# sourceMappingURL=app.js.map