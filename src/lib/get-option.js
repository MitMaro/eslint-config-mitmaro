'use strict';

module.exports = function getOption(options, path, defaultValue) {
	if (options === null || options === undefined) {
		return defaultValue;
	}
	let index = 0;
	const parts = path.split('.');
	const length = parts.length;
	let root = options;

	while (root !== null && root !== undefined && index < length) {
		root = root[parts[index++]];
	}

	return index && index === length ? root : defaultValue;
};
