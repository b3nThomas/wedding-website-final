'use strict';

const Templates = require('./controllers/Templates');
const navBar = require('./templates/partials/navBar');
const footer = require('./templates/partials/footer');
const home = require('./templates/pages/home');

$(document).ready(() => {
    Templates.prependTemplate(navBar.template, '#nav-container');
    Templates.prependTemplate(footer.template, '#footer-container');
    Templates.prependTemplate(home.template, '#template-container');
});
