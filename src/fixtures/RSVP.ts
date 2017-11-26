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
                    <span class='font-moon-light'>Number of Guests</span>
                    <select type='number' id='rsvp-guests'>
                        ${ createNumberSelectOptionList(1, 10) }
                    </select>
                    <p class='font-moon-light'>Names:</p>
                    <div id='rsvp-names'>
                        <input type='text' class='rsvp-name'></input>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
