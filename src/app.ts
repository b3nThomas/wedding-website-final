import { CMS } from './controllers/CMS';
import { NavBar } from './controllers/NavBar';
import { Nav } from './templates/partials/Nav';
import { Footer } from './templates/partials/Footer';
import { Home } from './templates/pages/Home';

const $navId = '#nav-container';
const $footerId = '#footer-container';
const $templateId = '#template-container';

const navBar = new NavBar($navId);
const cms = new CMS(Home);

$(document).ready(() => {

    cms.prependTemplate(Nav, $navId);
    navBar.activateHiding(100);

    cms.prependTemplate(Footer, $footerId);
    cms.prependTemplate(Home, $templateId);
});
