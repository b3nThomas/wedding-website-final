export const createNumberSelectOptionList = (start: number, limit: number, identifier: string) => {
    let template = ``;
    let index = start;
    while (index <= limit) {
        template += `<option class="${ identifier }" value="${ index }">${ index }</option>`;
        index++;
    }
    return template;
};

export const daysToGoTimer = (targetElement: string) => {
    const getTime = () => {
        const targetDate = new Date("Mar 30, 2018 14:00:00").getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;
    
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        return `${ days }d ${ hours }h ${ minutes }m ${ seconds }s`;
    };

    $(targetElement).text(getTime());
    setInterval(() => {
        $(targetElement).text(getTime());
    }, 1000);

};
