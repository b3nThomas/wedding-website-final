import * as demand from 'must';

describe('Initial test', function () {
    it('must pass', function () {
        const message = 'Congratulations!';
        demand(message).eql('Congratulations!');
    });
});
