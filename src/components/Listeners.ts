export const rsvp = () => {
    $('#rsvp-guests').change(() => {
        const totalGuests = Number($('#rsvp-guests').val());
        let template = '';
        for (let i = 0; i < totalGuests; i++) {
            template += `<input type='text' class='rsvp-name'></input><br>`;
        }
        $('#rsvp-names').html(template);
    });
};
