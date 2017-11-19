export class CMS {

    private currentPage: string;

    constructor (landingPage: string) {
        this.currentPage = landingPage;
    }

    public prependTemplate = (templateString, targetElement) => {
        $(targetElement).prepend(templateString);
    }
    
    public appendTemplate = (templateString, targetElement) => {
        $(targetElement).append(templateString);
    }
}
