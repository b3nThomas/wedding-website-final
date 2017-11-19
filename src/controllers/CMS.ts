export class CMS {

    private currentPage: string;

    public prependTemplate = (templateString, targetElement) => {
        $(targetElement).prepend(templateString);
    }
    
    public appendTemplate = (templateString, targetElement) => {
        $(targetElement).append(templateString);
    }
}
