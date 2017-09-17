'use strict';

module.exports = {
	globals: {
		expect: true,
	},
	extends: [
		'../rules/plugins/mocha',
	].map(require.resolve),
	rules: {
		// chai uses what appears to be unused expressions
		'no-unused-expressions': 'off',
	},
};
