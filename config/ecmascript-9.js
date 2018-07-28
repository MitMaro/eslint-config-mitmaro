'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 9,
	},
	extends: [
		'./ecmascript-8',
	].map(require.resolve),
};
