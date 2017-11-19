"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Templates {
    constructor() {
        this.prependTemplate = (templateString, targetElement) => {
            $(targetElement).prepend(templateString);
        };
        this.appendTemplate = (templateString, targetElement) => {
            $(targetElement).append(templateString);
        };
    }
}
exports.Templates = Templates;
//# sourceMappingURL=Templates.js.map