'use strict';

module.exports = {
	parserOptions: {
		sourceType: 'script',
	},
	env: {
		node: true,
	},
	extends: [
		'../rules/node-and-common',
	].map(require.resolve),
};
