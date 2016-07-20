function checkKey(key, type, object) {
	return object.hasOwnProperty(key) && typeof object[key] === type;
}

function checkProps(props, object) {
	const keys = Object.keys(props);
	return keys.every(key => checkKey(key, props[key], object));
}

const check = {
	key: checkKey,
	props: checkProps,
};

module.exports = check;
