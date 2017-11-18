'use strict';

console.log('You having a nosey at my code are you? ;) ~ b3nThomas');

const Templates = require('./controllers/Templates');
const navBar = require('./templates/NavBar');
const homePage = require('./templates/HomePage');

$(document).ready(() => {
    Templates.prependTemplate(navBar.template, 'body');
    Templates.prependTemplate(homePage.template, '#template-canvas');
});
