import { createNumberSelectOptionList } from './Helpers';

export const rsvp = () => {

    $('.rsvp-coach').hide();
    
    $('.rsvp-no-of-guests').change(() => {
        const totalGuests = Number($('.rsvp-no-of-guests').val());
        $('.rsvp-coach-passengers').html(createNumberSelectOptionList(1, totalGuests, '.rsvp-coach-passengers-count'));
        $('.rsvp-no-of-under-fives').html(createNumberSelectOptionList(0, totalGuests, '.rsvp-under-fives-count'));

        let template = '';
        for (let i = 1; i <= totalGuests; i++) {
            template += `<input type='text' maxlength='30' class='rsvp-name-${i} rsvp-input'></input><br>`;
        }
        $('.rsvp-names').hide();
        $('.rsvp-names').html(template).promise().done(() => {
            $('.rsvp-names').fadeIn(100);
        });

        if (totalGuests > 1) {
            $('.rsvp-name-text').text('Names:');
            $('.rsvp-attending-yes').text(`We'll be there`);
            $('.rsvp-attending-no').text(`We can't make it`);
            $('.rsvp-dietary-text').text(`Does anyone require the vegetarian option or have any food allergies? If so, please provide details:`);
        } else {    
            $('.rsvp-name-text').text('Name:');
            $('.rsvp-attending-yes').text(`I'll be there`);
            $('.rsvp-attending-no').text(`I can't make it`);
            $('.rsvp-dietary-text').text(`Do you require the vegetarian option or have any food allergies? If so, please provide details:`);
        }
    });

    $('.rsvp-attending').change(() => {
        if ($('.rsvp-attending').val() === 'attending') {
            $('.rsvp-payload').fadeIn(100);
        } else {
            $('.rsvp-payload').fadeOut(100);
        }
    });

    $('.rsvp-interested').change(() => {
        if ($('.rsvp-interested').is(':checked')) {
            $('.rsvp-coach').fadeIn(100);
        } else {
            $('.rsvp-coach').fadeOut(100);
        }
    });

    $('.rsvp-btn-send').click((e) => {
        e.preventDefault();
        const data = getRSVPDetails();
        const url = 'https://qshrdywnlb.execute-api.eu-west-1.amazonaws.com/test/rsvp';

        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: () => {
              alert('Success');
            },
            error: (err) => {
              alert('There was a problem');
            }
        });
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
        attending: $('.rsvp-attending').val() === 'attending' ? 'Y' : 'N',
        dietaryInfo: $('.rsvp-dietary').val(),
        underFives: $('.rsvp-no-of-under-fives').val(),
        song: $('.rsvp-song').val(),
        message: $('.rsvp-message').val(),
        coach: {
            interested: $('.rsvp-interested').is(':checked') ? 'Y' : 'N',
            passengers: $('.rsvp-interested').is(':checked') ? $('.rsvp-coach-passengers').val() : 0,
            journey: $('.rsvp-interested').is(':checked') ? $('.rsvp-coach-journey').val() : 'none',
            contact: {
                name: $('.rsvp-coach-name').val(),
                mobile: $('.rsvp-coach-mobile').val(),
                address: $('.rsvp-coach-address').val()
            }
        }
    };
    return details;
};
