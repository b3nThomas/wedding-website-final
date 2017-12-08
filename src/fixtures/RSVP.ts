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
                        <p class='rsvp-label'>Guests:</p>
                        <select type='number' class='rsvp-no-of-guests rsvp-select-number'>
                            ${ createNumberSelectOptionList(1, 10, 'rsvp-guest-count')}
                        </select>
                    </div>
                    <div>
                        <p class='rsvp-label rsvp-name-text'>Name:</p>
                        <div class='rsvp-names'>
                            <input type='text' maxlength='30' class='rsvp-name rsvp-input'></input>
                        </div>
                    </div>
                    <div>
                        <p class='rsvp-label'>Will you be attending?:</p>
                        <select type='text' class='rsvp-attending'>
                            <option class='rsvp-attending-yes' value='attending'>I'll be there</option>
                            <option class='rsvp-attending-no' value='not-attending'>I can't make it</option>
                        </select>
                    </div>
                    <div class='rsvp-payload'>
                        <div>
                            <p class='rsvp-dietary-text rsvp-label'>
                                Do you require the vegetarian option or have any food allergies? If so, please provide details:
                            </p>
                            <textarea maxlength='175' class='rsvp-dietary rsvp-tall-input'></textarea>
                        </div>
                        <div>
                            <p class='rsvp-label'>Are there any under 5's in your party? If so, how many?:</p>
                            <select type='number' class='rsvp-no-of-under-fives rsvp-select-number'>
                                ${ createNumberSelectOptionList(0, 5, 'rsvp-under-fives-count')}
                            </select>
                        </div>
                        <div>
                            <p class='rsvp-label'> The name of a particular song you'd like to hear:</p>
                            <input type='text' maxlength='30' class='rsvp-song rsvp-name rsvp-input'></input>
                        </div>
                        </br>
                        <div>
                            <p class='rsvp-label'>
                                Cars may be left overnight at the venue but must be collected by <strong>10:00am</strong> the following morning.</br></br>
                                If you fancy pitching-up for the night, Cripps have kindly offered our guests the use of their <a href='https://crippsbarn.com/local-area/camping/' target='_blank'>camping ground</a>.</br></br>
                                Finally, we're considering hiring a coach to transport our Swindon guests to and from the venue.</br>
                                <small>*subject to a small fee.</small></br></br>
                                If this appeals to you, please tick the box and provide some details so we can gauge the level of response and keep you up to date with any news: <input type='checkbox' class='rsvp-interested' value='interested'></br>
                            </p>
                        </div>
                        <div class='rsvp-coach'>
                            <div>
                                <p class='rsvp-label'>Passengers:</p>
                                <select type='number' class='rsvp-coach-passengers rsvp-select-number'>
                                    ${ createNumberSelectOptionList(1, 10, 'rsvp-passenger-count')}
                                </select>
                            </div>
                            <div>
                                <p class='rsvp-label'>Travelling:</p>
                                <select type='text' class='rsvp-coach-journey'>
                                    <option value='return'>To and from the Venue</option>
                                    <option value='there'>To the Venue only</option>
                                    <option value='back'>From the Venue only</option>
                                </select>
                            </div>
                            <div>
                                <p class='rsvp-label'>Your name:</p>
                                <input type='text' maxlength='30' class='rsvp-coach-name rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Your mobile number:</br>
                                <small>*we'll use this to text you with any updates or arrangements.</small></p>
                                <input type='text' maxlength='60' class='rsvp-coach-mobile rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Your address:</br>
                                <small>*we'll use this info to work out the best pick-up/drop-off points.</small></p>
                                <textarea maxlength='175' class='rsvp-coach-address rsvp-tall-input'></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class='rsvp-label'>
                            Leave us a message if you like:
                        </p>
                        <textarea maxlength='175' class='rsvp-message rsvp-tall-input'></textarea>
                    </div>
                    </br>
                    <div>
                        <p class='rsvp-label'><strong>Please tick to confirm you're not a robot: </strong><input type='checkbox' class='rsvp-robot' value='robot'></p>
                        <p class='rsvp-robot-message'>*no robots allowed! Tick the box first</p>
                        <button class='rsvp-btn-send'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
