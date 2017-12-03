export const rsvp = () => {

    $('.rsvp-contact-details').hide();

    $('.rsvp-no-of-guests').change(() => {
        const totalGuests = Number($('.rsvp-no-of-guests').val());
        let template = '';
        for (let i = 1; i <= totalGuests; i++) {
            template += `<input type='text' maxlength='30' class='rsvp-name-${i} rsvp-input'></input><br>`;
        }
        $('#rsvp-names').html(template);
        totalGuests > 1 ? $('.rsvp-name-text').text('Names:') : $('.rsvp-name-text').text('Name:');
    });

    $('.rsvp-interested').change(() => {
        if ($('.rsvp-interested').is(':checked')) {
            $('.rsvp-contact-details').show();
        } else {
            $('.rsvp-contact-details').hide();
        }
    });

    $('.rsvp-btn-send').click(() => {
        getRSVPDetails();
    });

};

const getRSVPDetails = () => {
    const totalGuests = Number($('.rsvp-no-of-guests').val());
    const guestNames = [];
    for (let i = 1; i <= totalGuests; i++) {
        guestNames.push($(`.rsvp-name-${i}`).val());
    }
    const details = {
        guests: totalGuests,
        names: guestNames.join(', '),
        dietaryInfo: $('.rsvp-no-of-dietary').val(),
        song: $('.rsvp-song').val(),
        message: $('.rsvp-message').val(),
        coach: {
            interested: $('.rsvp-interested').is(':checked') ? 'Y' : 'N',
            passengers: $('.rsvp-interested').is(':checked') ? $('.rsvp-travel-passengers').val() : 0,
            journey: $('.rsvp-interested').is(':checked') ? $('.rsvp-travel-option').val() : 'none',
            contact: {
                name: $('.rsvp-travel-name').val(),
                details: $('.rsvp-travel-contact').val(),
                address: $('.rsvp-travel-address').val()
            }
        },
        questions: $('.rsvp-comments').val()
    };
    alert(JSON.stringify(details));
};
