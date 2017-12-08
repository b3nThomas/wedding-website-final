export const createNumberSelectOptionList = (start: number, limit: number, identifier: string) => {
    let template = ``;
    let index = start;
    while (index <= limit) {
        template += `<option class="${ identifier }" value="${ index }">${ index }</option>`;
        index++;
    }
    return template;
};
