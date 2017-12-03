export const rsvp = () => {

    $('.rsvp-contact-details').hide();

    $('.rsvp-no-of-guests').change(() => {
        const totalGuests = Number($('.rsvp-no-of-guests').val());
        let template = '';
        for (let i = 0; i < totalGuests; i++) {
            template += `<input type='text' maxlength='30' class='rsvp-name rsvp-input'></input><br>`;
        }
        $('#rsvp-names').html(template);
        totalGuests > 1 ? $('.rsvp-name-text').text('Names:') : $('.rsvp-name-text').text('Name:');
    });

    $('#rsvp-interested').change(() => {
        if ($('#rsvp-interested').is(':checked')) {
            $('.rsvp-contact-details').show();
        } else {
            $('.rsvp-contact-details').hide();
        }
    });

};
