import { createNumberSelectOptionList } from '../components/Helpers';

export const RSVP = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='rsvp-title template-title  fs-l font-moon-light text-shadow'>RSVP</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
        <div class='rsvp-form'>
            <div class='row'>
                <div class='col-xs-12' >
                    <div>
                        <p class='rsvp-label'>Guests:</p>
                        <select type='number' class='rsvp-no-of-guests rsvp-select-number'>
                            ${ createNumberSelectOptionList(1, 10, 'rsvp-no-of-guests-option')}
                        </select>
                    </div>
                    <div>
                        <p class='rsvp-label rsvp-name-text'>Name:</p>
                        <div class='rsvp-names'>
                            <input type='text' maxlength='30' class='rsvp-name-1 rsvp-input'></input>
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
                            <p class='rsvp-label'>Are there any children under 5 in your party? If so, how many?:</p>
                            <select type='number' class='rsvp-no-of-under-fives rsvp-select-number'>
                                ${ createNumberSelectOptionList(0, 1, 'rsvp-under-fives-count')}
                            </select>
                        </div>
                        <div>
                            <p class='rsvp-label'> The names of any songs you'd like to hear: </p>
                            <textarea maxlength='175' class='rsvp-song rsvp-name rsvp-tall-input'></textarea>
                        </div>
                        </br>
                        <div>
                            <p class='rsvp-label'>
                                Cars may be left overnight at the venue but must be collected by <strong>10:00am</strong> the following morning.</br></br>
                                If you fancy pitching-up for the night, Cripps have kindly offered our guests the use of their camping ground.</br></br>
                                We're also considering hiring a coach to transport our Swindon guests to and from the venue.</br></br>
                                If you'd like to travel on the coach, please tick the box and provide some details so we can keep you up to date with any news: <input type='checkbox' class='rsvp-interested tickbox' value='interested'></br>
                            </p>
                        </div>
                        <div class='rsvp-coach'>
                            <div>
                                <p class='rsvp-label'>Passengers:</p>
                                <select type='number' class='rsvp-coach-passengers rsvp-select-number'>
                                    ${ createNumberSelectOptionList(1, 1, 'rsvp-passenger-count')}
                                </select>
                            </div>
                            <div>
                                <p class='rsvp-label'>Travelling:</p>
                                <select type='text' class='rsvp-coach-journey'>
                                    <option value='Return'>To and from the Venue</option>
                                    <option value='There'>To the Venue only</option>
                                    <option value='Back'>From the Venue only</option>
                                </select>
                            </div>
                            <div>
                                <p class='rsvp-label'>Contact name:</p>
                                <input type='text' maxlength='30' class='rsvp-coach-name rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Contact mobile number:</br>
                                <small>*we'll use this to text you with any updates or arrangements.</small></p>
                                <input type='text' maxlength='60' class='rsvp-coach-mobile rsvp-input'></input>
                            </div>
                            <div>
                                <p class='rsvp-label'>Contact address:</br>
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
                        <p class='rsvp-label'><strong>Please tick to confirm you're not a robot: </strong><input type='checkbox' class='rsvp-robot tickbox' value='robot'></p>
                        <p class='rsvp-robot-message'>*No robots allowed! Tick the box first</p>
                        </br>
                        <button class='rsvp-btn rsvp-btn-check'>Check & Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div class='rsvp-check'></div>
        <div class='rsvp-sending font-slab'>
            <p>Sending...</p>
        </div>
        <div class='rsvp-sent text-container'>
            <p>Thank you, your RSVP was sent!</p></br>
            <p>Any questions or problems, contact:</p>
            <p><strong>btcswedding@gmail.com</strong></p>
        </div>
    </div>
`;
