'use strict';

const assert = require('assert');
const check = require('.');

let expected;
let actual;

// check.key should return false if a key does not exist on the obect
actual = check.key({}, 'foo');
expected = false;

assert.equal(actual, expected, 'check.key should return false if key does not exist on object');

// check.key should return false if a key exists but is not of the specified type
actual = check.key({ foo: 0 }, 'foo', 'string');
expected = false;
assert.equal(actual, expected, 'check.key should return false if a key exists but is not of the specified type');

// check.key should return true if a key exists but and is of the specified type
actual = check.key({foo: 'bar'}, 'foo', 'string');
expected = true;

assert.equal(actual, expected, 'check.key should return true if a key exists but and is of the specified type');

// check.props should return false if one of the keys does not exist
actual = check.props({foo: 'bar'}, {foo: 'string', bar: 'number'});
expected = false;

assert.equal(actual, expected, 'check.props should return false if one of the keys does not exist');

// check.props should return false if one of the keys is not of the specified type
actual = check.props({foo: 'bar', bar: 'foo'}, {foo: 'string', bar: 'number'});
expected = false;

assert.equal(actual, expected, 'check.props should return false if one of the keys is not of the specified type')

// check.props should return true if all of the keys are of the specified type
actual = check.props({foo: 'bar', bar: 0}, {foo: 'string', bar: 'number'});
expected = true;

assert.equal(actual, expected, 'check.props should return true if all of the keys are of the specified type');

// check.array should return false if the value is not an array
actual = check.array('string');
expected = false;

assert.equal(actual, expected, 'check.array should return false if the value is not an array');

// check.array should return false if notEmpty is true and the array is empty
actual = check.array([]);
expected = false;

assert.equal(actual, expected, 'check.array should return false if notEmpty is true and the array is empty');

// check.array should return false if any value in the array is not of the specified type
actual = check.array(['a', 'b', 2, 'c'], 'string');
expected = false;

assert.equal(actual, expected, 'check.array should return false if any value in the array is not of the specified type');

// check.array should return true if all checks are valid
actual = check.array([1, 2, 3, 4], 'number');
expected = true;

assert.equal(actual, expected, 'check.array should return true if all checks are valid');
