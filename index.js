'use strict';

/**
 * checks if `key` exists in `object` and is of `type`
 * @param  {object} object  - the object to check for said property
 * @param  {string} key   	- the property to check
 * @param  {string} [type]  - (optional) the type the property is expected to be
 * @return {boolean}        - whether the property meets the above or not
 */
function checkKey(object, key, type) {
	const hasKey = object.hasOwnProperty(key);
	let keyIsType = type ? typeof object[key] === type : true; // return true if type is not given
	return hasKey && keyIsType;
}

/**
 * checks if keys specified in `props` exist in `object`
 * also checks if the values of props[key] are the type of the prop in object if props[key] is not null
 * an example of a props object is { foo: 'string', bar: null }
 */
function checkProps(object, props) {
	const keys = Object.keys(props);
	return keys.every(key => checkKey(object, key, props[key]));
}

const check = {
	key: checkKey,
	props: checkProps,
};

module.exports = check;
