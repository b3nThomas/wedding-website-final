import { CMS } from './controllers/CMS';
import { NavBar } from './controllers/NavBar';
import { Nav } from './templates/partials/Nav';
import { Footer } from './templates/partials/Footer';
import * as Pages from './templates/pages';

const $navId = '#nav-container';
const $templateId = '#template-container';
const $footerId = '#footer-container';

const navBar = new NavBar($navId);
const cms = new CMS();

$(document).ready(() => {

    cms.prependTemplate(Nav, $navId);
    navBar.activateHiding(100);

    cms.prependTemplate(Footer, $footerId);
    cms.prependTemplate(Pages.Home, $templateId);
});
