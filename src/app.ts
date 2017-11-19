import { CMS } from './controllers/CMS';
import { Navigator } from './controllers/Navigator';
import { NavBar } from './templates/partials/NavBar';
import { Footer } from './templates/partials/Footer';
import { Home } from './templates/pages/Home';

const $navId = '#nav-container';
const $footerId = '#footer-container';
const $templateId = '#template-container';

const navigator = new Navigator($navId);
const cms = new CMS();

$(document).ready(() => {
    cms.prependTemplate(NavBar, $navId);
    cms.prependTemplate(Footer, $footerId);
    cms.prependTemplate(Home, $templateId);
    navigator.activateHiding($navId);
});
