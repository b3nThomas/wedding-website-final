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
                        Number of Guests
                        <select type='number' id='rsvp-guests'>
                            ${ createNumberSelectOptionList(1, 10) }
                        </select>
                    </p>
                    <p>Name(s):</p>
                    <div id='rsvp-names'>
                        <input type='text' class='rsvp-name rsvp-input'></input>
                    </div>
                    <p>
                        Does anyone require the vegetarian option or have any food allergies?<br>
                        Please provide details:
                    </p>
                    <textarea id='rsvp-options' class='rsvp-tall-input'></textarea>
                    <p> Is there a particular song you'd like to hear?:</p>
                    <input type='text' id='rsvp-song' class='rsvp-name rsvp-input'></input>
                    <p>
                        Cars may be left at the venue overnight, but must be collected by 10:00am the following day (in time for the next wedding!)
                    </p>
                    <p>
                        We are also consiering hiring a coach to transport guests to and from the venue from Swindon,
                        relieving people of worrying about accomodation, driving, taxis, etc. 
                    </p>
                    <p>
                        If this interests you, please tick the box and leave us some details so we can keep you updated!
                    </p>
                    <p>
                        <input type='checkbox' id='rsvp-coach' value='interested'> sounds good<br>
                        <i><input type='email' id= 'rsvp-email' class='rsvp-input' value='your email address...'></input></i>
                    </p>
                </div>
            </div>
        </div>
    </div>
`;
