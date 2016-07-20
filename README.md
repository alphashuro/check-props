# check-props

basic type checking for javascript objects.

## usage
```
const check = require('check');

const object_to_check = {
  foo: 0,
};

check.key('foo', 'string', object_to_check); // returns false
check.key('foo', 'number', object_to_check); // returns true

check.props({ foo: 'number', bar: 'string' }, object_to_check); // returns false

const advanced_object = {
  foo: 0,
  bar: 'super advanced feature',
};

check.props({ foo: 'number', bar: 'string' }, advanced_object); // returns true
```
