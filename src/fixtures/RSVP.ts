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
                    <p>
                        Number of Guests:
                        <select type='number' id='rsvp-guests'>
                            ${ createNumberSelectOptionList(1, 10) }
                        </select>
                    </p>
                    <p>Name(s):</p>
                    <div id='rsvp-names'>
                        <input type='text' maxlength='30' class='rsvp-name rsvp-input'></input>
                    </div>
                    <div>
                        <p>
                            Does anyone require the vegetarian option or have any food allergies?<br>
                            Please provide details:
                        </p>
                        <textarea id='rsvp-options' maxlength='175' class='rsvp-tall-input'></textarea>
                    </div>
                    <div>
                        <p> Is there a particular song you'd like to hear?:</p>
                        <input type='text' maxlength='30' id='rsvp-song' class='rsvp-name rsvp-input'></input>
                    </div>
                    <p>
                        Cars may be left at the venue overnight but must be collected by 10:00am the following morning.<br>
                        (in time for the next wedding!)
                    </p>
                    <p>
                        We're also considering hiring a coach to transport guests between Swindon and the venue,
                        meaning you don't have to worry about transport.<br><br>
                        If this interests you, please tick the box for more details: <input type='checkbox' id='rsvp-interested' value='interested'><br>
                        <div id='rsvp-contact-details' class='fs-xs'><div>
                    </p>
                </div>
            </div>
        </div>
    </div>
`;
