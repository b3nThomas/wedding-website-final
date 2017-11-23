export class CMS {
    
    public appendTemplate = (templateString: string, targetElement: string) => {
        $(targetElement).append(templateString);
    }

    public prependTemplate = (templateString: string, targetElement: string) => {
        $(targetElement).prepend(templateString);
    }

    public removeTemplate = (targetElement: string) => {
        $(targetElement).empty();
    }

    public switchTemplates = (templateString: string, targetElement: string) => {
        $(targetElement).fadeOut(240, () => {
            this.removeTemplate(targetElement);
            this.prependTemplate(templateString, targetElement);
            $(targetElement).fadeIn(300);
        });
    }
}
