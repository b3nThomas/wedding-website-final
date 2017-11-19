export class Templates {
    public prependTemplate = (templateString, targetElement) => {
        $(targetElement).prepend(templateString);
    }
    
    public appendTemplate = (templateString, targetElement) => {
        $(targetElement).append(templateString);
    }
}
