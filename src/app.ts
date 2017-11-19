import { CMS } from './controllers/CMS';
import { Navigator } from './controllers/Navigator';
import { NavBar } from './templates/partials/NavBar';
import { Footer } from './templates/partials/Footer';
import { Home } from './templates/pages/Home';

const $navId = '#nav-container';
const $footerId = '#footer-container';
const $templateId = '#template-container';

const navigator = new Navigator($navId);
const templates = new CMS();

$(document).ready(() => {
    templates.prependTemplate(NavBar, $navId);
    templates.prependTemplate(Footer, $footerId);
    templates.prependTemplate(Home, $templateId);
    navigator.activateHiding($navId);
});
