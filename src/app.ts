import * as Fixtures from './fixtures/index';
import { CMS } from './components/CMS';
import { NavBar } from './components/NavBar';

const $navId: string = '#nav-container';
const $templateId: string = '#template-container';
const $footerId: string = '#footer-container';

const pages = ['Home', 'Venue', 'Registry', 'RSVP'];

$(document).ready(() => {
    const cms = new CMS();
    cms.prependTemplate(Fixtures.Nav, $navId);

    const navBar = new NavBar($navId);
    navBar.activateHiding(60);

    for (const page of pages) {
        $(`#nav-${ page.toLowerCase() }`).click(() => {
            cms.switchTemplates(Fixtures[page], $templateId);
        });
    }

    cms.prependTemplate(Fixtures.Footer, $footerId);
    cms.switchTemplates(Fixtures.RSVP, $templateId);

});
