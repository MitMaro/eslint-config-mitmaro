'use strict';

module.exports = {
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	extends: [
		'../rules/ecmascript-6',
	].map(require.resolve),
};
