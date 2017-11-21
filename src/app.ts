import * as Fixtures from './fixtures/index';
import { CMS } from './CMS';
import { NavBar } from './NavBar';

const $navId: string = '#nav-container';
const $templateId: string = '#template-container';
const $footerId: string = '#footer-container';


$(document).ready(() => {
    const cms = new CMS();
    cms.prependTemplate(Fixtures.Nav, $navId);

    const navBar = new NavBar($navId);
    navBar.activateHiding(60);

    cms.prependTemplate(Fixtures.Footer, $footerId);
    cms.switchTemplates(Fixtures.Home, $templateId);

    $('#nav-home').click(() => {
        cms.switchTemplates(Fixtures.Home, $templateId);
    });
    $('#nav-venue').click(() => {
        cms.switchTemplates(Fixtures.Venue, $templateId);
    });
});
