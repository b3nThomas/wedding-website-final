"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
describe(`Ben's website`, function () {
    it('must be awesome', function () {
        const message = 'Congratulations!';
        demand(message).eql('Congratulations!');
    });
});
//# sourceMappingURL=InitialTest.js.map