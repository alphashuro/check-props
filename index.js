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
 * @params {object} object - the object to check
 * @params {object}  props  - object with the propertiess to look for
 */
function checkProps(object, props) {
	const keys = Object.keys(props);
	return keys.every(key => checkKey(object, key, props[key]));
}

/**
 * checks if the specified value is an array
 * also checks if the array is not empty
 * also checks if every item in the array is of the specified type
 * @param  {Array}  array    - object that is expected to be an array
 * @param  {string} type     - the type that every item in the array is expected to be
 * @param  {boolean} [notEmpty] - (optional) whether the function should check if the array is empty or not, default is true
 * @return {boolean}         - true if all the checks pass, else false
 */
function checkArray(array, type, notEmpty) {
	if (typeof notEmpty === 'undefined') {
		notEmpty = true;
	}
	if (!Array.isArray(array)) {
		return false;
	}
	if (notEmpty && !array.length) {
		return false;
	}
	return type ? array.every(item => typeof item === type) : true;
}

const check = {
	key: checkKey,
	props: checkProps,
	array: checkArray,
};

module.exports = check;
