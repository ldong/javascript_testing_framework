# JavaScript frameworks

## Node

These frameworks/libraries are node plugins

## A list of libraries

* [Chai](http://chaijs.com)
-- BDD/TDD assertion library

* [Mocha](http://mochajs.org/)
-- Mocha is a feature-rich JavaScript test framework

* [Sinon](http://sinonjs.org)
-- Standalone test spies, stubs and mocks for JavaScript.
No dependencies, works with any unit testing framework.

* [Sinon-chai](https://github.com/domenic/sinon-chai)
-- Sinon–Chai provides a set of custom assertions for using the Sinon.JS
spy, stub, and mocking framework with the Chai assertion library.


### Chai

Chai has 3
, keywords *[should](http://chaijs.com/guide/styles/#should)*
, *[expect](http://chaijs.com/guide/styles/#expect)*
, *[assert](http://chaijs.com/guide/styles/#assert)*
, types of tests.

See examples in './examples/chai', run `node should.js`

## Mocha

**Mocha** is the *test runner* runs [Chai](###Chai) and some other tests,
which has keywords and hooks.

The "hooks" are: *before()*, *after()*, *beforeEach()*, *afterEach()*

Mocha can also run tests asynchronously:

1. Just add callback function to *it()* and usually named the function *done*.

2. Just return a *promise* after the test runs


Add only to *describe* or *it*, i.e. `describe.only()` `it.only()` to explicitly
state which test to run. Or use word *skip* `describe.skip()` `it.skip()` to
explicitly state which test to omit.

There are 3 type of testing interfaces

1. BDD: interface provides
: describe(), it(), before(), after(), beforeEach(), and afterEach().

    ```
    describe('Array', function(){
      before(function(){
        // ...
      });

      describe('#indexOf()', function(){
        it('should return -1 when not present', function(){
          [1,2,3].indexOf(4).should.equal(-1);
        });
      });
    });
    ```

2. TDD:  interface provides
: suite(), test(), setup(), and teardown().

    ```
    suite('Array', function(){
      setup(function(){
        // ...
      });

      suite('#indexOf()', function(){
        test('should return -1 when not present', function(){
          assert.equal(-1, [1,2,3].indexOf(4));
        });
      });
    });
    ```

3. Exports: keys *before*, *after*, *beforeEach*, and *afterEach* are
special-cased, object values are suites, and function values are test-cases.
We don't really use it, so we can ignore it for now.

    ```
    module.exports = {
      before: function(){
        // ...
      },

      'Array': {
        '#indexOf()': {
          'should return -1 when not present': function(){
            [1,2,3].indexOf(4).should.equal(-1);
          }
        }
      }
    };
    ```

See a simple example in './examples/mocha', run `mocha test.js`

Go read the docs if you want to know more.


## Sinon

Sinon is like python [Mock](http://python-mock.sourceforge.net) module.

Oh, if you don't know what Mock is, please read this
[doc](http://techblog.appnexus.com/2012/testing-in-python-using-nose-mocks/)

There are so many things Sinon can mock of, for example:

1. **Spies**, are functions that monitors the target function.
Creates an anonymous function that records arguments, this value,
exceptions and return values for all calls.

2. **Stubs**, are functions (spies) with pre-programmed behavior.

3. **Mocks**, Mocks (and mock expectations) are fake methods (like spies) with
 pre-programmed behavior (like stubs) as well as pre-programmed expectations
 . A mock will fail your test if it is not used as expected.

4. **Fake timers**, is a synchronous implementation of setTimeout
 and friends that Sinon.JS can overwrite the global functions with
 to allow you to more easily test code using them.

[More](http://sinonjs.org/docs/#server)
: **Fake timers**, **Fake XMLHttpRequest**, **Fake JSON-P**, **Assertions**

## Sinon-chai

[Sinon-chai](https://github.com/domenic/sinon-chai)
(Sinon.JS Assertions for Chai) is a plugin for Sinon.

It provides a set of custom assertions for using the Sinon.JS spy, stub, and mocking framework with the Chai assertion library.

