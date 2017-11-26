import { Coach } from '../fixtures/Coach';

export const rsvp = () => {
    $('#rsvp-guests').change(() => {
        const totalGuests = Number($('#rsvp-guests').val());
        let template = '';
        for (let i = 0; i < totalGuests; i++) {
            template += `<input type='text' maxlength='30' class='rsvp-name rsvp-input'></input><br>`;
        }
        $('#rsvp-names').html(template);
    });

    $('#rsvp-interested').change(() => {
        if ($('#rsvp-interested').is(':checked')) {
            $('#rsvp-contact-details').html(Coach);

            $('#rsvp-user-name').click(() => {
                $('#rsvp-user-name').val('');
            });
            $('#rsvp-user-contact').click(() => {
                $('#rsvp-user-contact').val('');
            });
        } else {
            $('#rsvp-contact-details').html('');
        }
    });

};
