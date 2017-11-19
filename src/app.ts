import { Navigator } from './controllers/Navigator';
import { Templates } from './controllers/Templates';
import { NavBar } from './templates/partials/NavBar';
import { Footer } from './templates/partials/Footer';
import { Home } from './templates/pages/Home';

const $navId = '#nav-container';
const $footerId = '#footer-container';
const $templateId = '#template-container';

const navigator = new Navigator($navId);
const templates = new Templates();

$(document).ready(() => {
    templates.prependTemplate(NavBar, $navId);
    templates.prependTemplate(Footer, $footerId);
    templates.prependTemplate(Home, $templateId);
    navigator.activateHiding($navId);
});
