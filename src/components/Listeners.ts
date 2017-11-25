export const rsvp = () => {
    $('#rsvp-guests').change(() => {
        alert(`New value: ${$('#rsvp-guests').val()}`);
    });
};
