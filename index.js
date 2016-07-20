'use strict';

/**
 * checks if `key` exists in `object` and is of `type`
 * @param  {string} key   	- the property to check
 * @param  {string} type    - the type the property is expected to be
 * @param  {object} object  - the object to check for said property
 * @return {boolean}        - whether the property meets the above or not
 */
function checkKey(key, type, object) {
	return object.hasOwnProperty(key) && typeof object[key] === type;
}

/**
 * checks if keys specified in `props` exist in `object`
 * also checks if the values of props[key] are the type of the prop in object
 * an example of a props object is { foo: 'string' }
 */
function checkProps(props, object) {
	const keys = Object.keys(props);
	return keys.every(key => checkKey(key, props[key], object));
}

const check = {
	key: checkKey,
	props: checkProps,
};

module.exports = check;
