"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
describe('Initial test', function () {
    it('must pass', function () {
        const message = 'Congratulations!';
        demand(message).eql('Congratulations!');
    });
});
//# sourceMappingURL=InitialTest.js.map