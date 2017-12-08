import * as demand from 'must';

describe(`Ben's website`, function () {
    it('must be awesome', function () {
        const message = 'Congratulations!';
        demand(message).eql('Congratulations!');
    });
});
