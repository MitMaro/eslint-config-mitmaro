'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		...includeRules('plugins/typescript', configs, options),
	},
});
