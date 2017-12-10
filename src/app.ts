import * as Fixtures from './fixtures/index';
import { CMS } from './components/CMS';
import { NavBar } from './components/NavBar';
import { Pages } from './components/Pages';

const $navId: string = '#nav-container';
const $templateId: string = '#template-container';
const $footerId: string = '#footer-container';

$(document).ready(() => {
    const cms = new CMS();

    cms.prependTemplate(Fixtures.Nav, $navId);
    const navBar = new NavBar($navId).activateHiding(30);
    cms.prependTemplate(Fixtures.Footer, $footerId);

    for (const page of Pages) {
        $(page.navId).click(() => {
            cms.switchTemplates(page.fixture, $templateId, page.listeners);
        });
    }

    cms.switchTemplates(Fixtures.Home, $templateId);

});
