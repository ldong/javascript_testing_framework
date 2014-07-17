var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// will pass
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);


var answer = 43;

// will fail
// AssertionError: expected 43 to equal 42.
expect(answer).to.equal(42);

// AssertionError: topic [answer]: expected 43 to equal 42.
// with comments
expect(answer, 'topic [answer]').to.equal(42);

