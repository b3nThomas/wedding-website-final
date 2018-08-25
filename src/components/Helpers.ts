export const createNumberSelectOptionList = (start: number, limit: number, identifier: string) => {
    let template = ``;
    let index = start;
    while (index <= limit) {
        template += `<option class="${ identifier }" value="${ index }">${ index }</option>`;
        index++;
    }
    return template;
};

export const daysMarriedTimer = (targetElement: string) => {
    const getTime = () => {
        const targetDate = new Date("Mar 30, 2018 14:00:00").getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;
    
        const days = (Math.floor(diff / (1000 * 60 * 60 * 24)) * -1);
        const hours = (Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * -1);
        const minutes = (Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) * -1);
        const seconds = (Math.floor((diff % (1000 * 60)) / 1000) * -1);

        let daysStr = days.toString();
        let hoursStr = hours.toString();
        let minutesStr = minutes.toString();
        let secondsStr = seconds.toString();
        
        if (days < 10) {
            daysStr = `0${daysStr}`;
        }
        if (hours < 10) {
            hoursStr = `0${hoursStr}`;
        }
        if (minutes < 10) {
            minutesStr = `0${minutesStr}`;
        }
        if (seconds < 10) {
            secondsStr = `0${secondsStr}`;
        }

        return `${ daysStr }d ${ hoursStr }h ${ minutesStr }m ${ secondsStr }s`;
    };

    $(targetElement).text(getTime());
    setInterval(() => {
        $(targetElement).text(getTime());
    }, 1000);

};
