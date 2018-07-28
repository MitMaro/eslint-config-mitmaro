'use strict';

module.exports = {
	plugins: [
		'node',
	],
	parserOptions: {
		sourceType: 'script',
	},
	env: {
		node: true,
	},
	extends: [
		'../rules/node-and-common',
		'../rules/plugins/node',
	].map(require.resolve),
};
