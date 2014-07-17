var should = require('chai').should()
    , foo = 'bar';

// will pass
foo.should.be.a('string');
foo.should.equal('bar');

// will fail
foo.should.equal('foo');

