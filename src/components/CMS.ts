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

    public switchTemplates = (templateString: string, targetElement: string, listeners?: any) => {
        $(targetElement).fadeOut(240, () => {
            this.removeTemplate(targetElement);
            this.prependTemplate(templateString, targetElement);
            window.scrollTo(0, 0);
            $(targetElement).fadeIn(300, () => {
                if (listeners) {
                    listeners();
                }
            });
        });
    }
}
