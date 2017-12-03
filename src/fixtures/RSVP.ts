import { createNumberSelectOptionList } from '../components/Helpers';

export const RSVP = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='fs-l font-moon-light text-shadow'>RSVP</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
        <div class='rsvp-form'>
            <div class='row'>
                <div class='col-xs-12' >
                    <div>
                        <p>Guests:</p>
                        <select type='number' class='rsvp-no-of-guests'>
                            ${ createNumberSelectOptionList(1, 10, 'rsvp-guest-count')}
                        </select>
                    </div>
                    <div>
                        <p class='rsvp-name-text'>Name:</p>
                        <div id='rsvp-names'>
                            <input type='text' maxlength='30' class='rsvp-name rsvp-input'></input>
                        </div>
                        <div>
                            <p>
                                Does anyone require the vegetarian option or have any food allergies? If so, please provide details:
                            </p>
                            <textarea maxlength='175' class='rsvp-dietary rsvp-tall-input'></textarea>
                        </div>
                    </div>
                    <div>
                        <p> The name of a particular song you'd like to hear:</p>
                        <input type='text' maxlength='30' class='rsvp-song rsvp-name rsvp-input'></input>
                    </div>
                    <div>
                        <p>
                            Leave us a message if you like:
                        </p>
                        <textarea maxlength='175' class='rsvp-message rsvp-tall-input'></textarea>
                    </div>
                    <div>
                        <p>
                            Cars may be left at the venue overnight but must be collected by <strong>10:00am</strong> the following morning.<br><br>
                            If you fancy pitching-up for the night, Cripps have kindly offered our guests the use of their <a href='https://crippsbarn.com/local-area/camping/' target='_blank'>camping ground</a>.<br><br>
                            Finally, we're considering hiring a coach to transport our Swindon guests to and from the venue.<br>
                            <small>*subject to a small fee.</small><br><br>
                            If this appeals to you, please tick the box and provide some details so we can gauge the level of response and keep you up to date with any news: <input type='checkbox' class='rsvp-interested' value='interested'><br>
                        </p>
                    </div>
                    <div class='rsvp-contact-details'>
                        <p>Passengers:</p>
                        <select type='number' class='rsvp-travel-passengers'>
                            ${ createNumberSelectOptionList(1, 10, 'rsvp-guest-count')}
                        </select>
                        <div>
                            <p>Travelling:</p>
                            <select type='text' class='rsvp-travel-option'>
                                <option value='return'>To and from the Venue</option>
                                <option value='there'>To the Venue only</option>
                                <option value='back'>From the Venue only</option>
                            </select>
                        </div>
                        <div>
                            <p>Your Name:</p>
                            <input type='text' maxlength='30' class='rsvp-travel-name rsvp-input'></input>
                        </div>
                        <div>
                            <p>Your Email/Phone Number</p>
                            <input type='text' maxlength='60' class='rsvp-travel-contact rsvp-input'></input>
                        </div>
                        <div>
                            <p>Your address:<br>
                            <small>*we'll use this info to work out the best pick-up/drop-off points.</small></p>
                            <textarea maxlength='175' class='rsvp-travel-address rsvp-tall-input'></textarea>
                        </div>
                    </div>
                    <div>
                        <p>Any questions or comments?:</p>
                        <textarea maxlength='175' class='rsvp-comments rsvp-tall-input'></textarea>
                    </div>
                    <button class='rsvp-btn-send'>Send</button>
                </div>
            </div>
        </div>
    </div>
`;
