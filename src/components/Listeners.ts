import { createNumberSelectOptionList } from './Helpers';

export const rsvp = () => {

    $('.rsvp-coach').hide();
    $('.rsvp-robot-message').hide();
    $('.rsvp-check').hide();
    $('.rsvp-sending').hide();
    $('.rsvp-sent').hide();
    
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

    $('.rsvp-robot').click((e) => {
        $('.rsvp-robot-message').fadeOut(100);
    });

    $('.rsvp-btn-check').click((e) => {
        e.preventDefault();
        $('.rsvp-btn-check').blur();

        if ($('.rsvp-robot').is(':checked')) {
            $('#nav-container').fadeOut(100);
            $('.rsvp-form').fadeOut(100);
            window.scrollTo(0, 0);

            const data = getRSVPDetails();
            const confirmTemplate = `
                <p class='font-moon-light'><strong>Details:</strong></p></br>
                <p>Number of guests: <strong>${ data.guests }</strong></p></br>
                <p>Names:</p>
                <p><strong>${ data.names }</strong></p></br>
                <p>Attending: <strong>${ data.attending }</strong></p></br>
                <p>Dietary info: <strong>${ data.dietaryInfo }</strong></p></br>
                <p>Under fives: <strong>${ data.underFives }</strong></p></br>
                <p>Song: <strong>${ data.song }</strong></p></br>
                <p>Message:</p>
                <p><strong>${ data.message }</strong></p></br>
                <p>Coach: <strong>${ data.coach.interested }</strong></p></br>
                <p>Passengers: <strong>${ data.coach.passengers }</strong></p></br>
                <p>Travelling: <strong>${ data.coach.journey }</strong></p></br>
                <p>Contact: <strong>${ data.coach.contact.name }</strong> - <strong>${ data.coach.contact.mobile }</strong></p></br>
                <p>Address:</p>
                <p><strong>${ data.coach.contact.address }</strong></p></br>
                <p><button class='rsvp-btn rsvp-btn-send'>Send</button><button class='rsvp-btn rsvp-btn-edit'>Edit</button></p>
            `;            
            $('.rsvp-check').html(confirmTemplate);
            $('.rsvp-check').fadeIn(100);

            $('.rsvp-btn-send').click(() => {
                $('.rsvp-btn-send').unbind('click');
                $('.rsvp-btn-send').blur();

                $('.rsvp-check').fadeOut(100);
                window.scrollTo(0, 0);
                $('.rsvp-sending').fadeIn(100);

                const url = 'https://qshrdywnlb.execute-api.eu-west-1.amazonaws.com/test/rsvp';
                $.ajax({
                    type: 'POST',
                    url: url,
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: () => {
                        $('.rsvp-sending').fadeOut(100, () => {
                            window.scrollTo(0, 0);
                            $('#nav-container').fadeIn(100);
                            $('.rsvp-sent').fadeIn(100);
                        });
                    },
                    error: (err) => {
                      alert('Server error, please try again. If this problem persists, contact btcswedding@gmail.com for support.');
                      $('.rsvp-sending').fadeOut(100, () => {
                        window.scrollTo(0, 0);
                        $('#nav-container').fadeIn(100);
                        $('.rsvp-form').fadeIn(100);
                    });
                    }
                });
            });

            $('.rsvp-btn-edit').click(() => {
                $('.rsvp-check').fadeOut(100);
                window.scrollTo(0, 0);
                $('#nav-container').fadeIn(100);
                $('.rsvp-form').fadeIn(100);
                $('.rsvp-robot').prop('checked', false);
            });

        } else {
            $('.rsvp-robot-message').fadeIn(100);
        }
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
