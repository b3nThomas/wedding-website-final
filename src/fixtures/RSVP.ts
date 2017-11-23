const createNumberDropdown = (limit: number) => {
    let template = ``;
    let index = 1;
    while (index <= limit) {
        template += `<option value="${ index }">${ index }</option>`;
        index++;
    }
    return template;
};

export const RSVP = `
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10 center'>
                <p class='fs-l font-moon-light text-shadow'>RSVP</p>
            </div>
            <div class='col-xs-1'></div>
        </div>
        <div class='row'>
            <div class='col-xs-1'></div>
            <div class='col-xs-10'>
                Number of Guests:
                <select id='rsvp-guests' type='number'>
                    ${ createNumberDropdown(10) }
                </select>
            </div>
            <div class='col-xs-1'></div>
        </div>
    </div>
`;


