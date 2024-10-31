var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 120 for Fac(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('First two terms', function() {
  it('should return 1 for first two terms of fac(0) fac(1)', function() {
      assert.strictEqual(main.factorial(0), 1);
      assert.strictEqual(main.factorial(1), 1);
    });
});