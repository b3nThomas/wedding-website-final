export class CMS {
    public prependTemplate = (templateString, targetElement) => {
        $(targetElement).prepend(templateString);
    }
    
    public appendTemplate = (templateString, targetElement) => {
        $(targetElement).append(templateString);
    }
}
