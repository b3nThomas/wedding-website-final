import * as Fixtures from '../fixtures/index';
import * as Listeners from './Listeners';

export interface IPage {
    navId: string;
    fixture: string;
    listeners?: any;
}

export const Pages: IPage[] = [
    {
        navId: '#nav-home',
        fixture: Fixtures.Home,
        listeners: Listeners.home
    },
    {
        navId: '#nav-venue',
        fixture: Fixtures.Venue,
        listeners: ''
    },
    {
        navId: '#nav-gift-list',
        fixture: Fixtures.GiftList,
        listeners: Listeners.gift
    },
    {
        navId: '#nav-rsvp',
        fixture: Fixtures.RSVP,
        listeners: Listeners.rsvp
    }
];
