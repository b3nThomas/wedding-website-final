'use strict';

module.exports.prependTemplate = (templateString, target) => {
    $(target).prepend(templateString);
};

module.exports.appendTemplate = (templateString, target) => {
    $(target).append(templateString);
};
