export const createNumberSelectOptionList = (start: number, limit: number) => {
    let template = ``;
    let index = start;
    while (index <= limit) {
        template += `<option class="rsvp-guest-count" value="${ index }">${ index }</option>`;
        index++;
    }
    return template;
};
