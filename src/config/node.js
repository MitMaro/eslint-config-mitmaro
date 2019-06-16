'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	plugins: [
		'node',
	],
	parserOptions: {
		sourceType: 'script',
	},
	env: {
		node: true,
	},
	rules: {
		...includeRules('node-and-commonjs', configs, options),
		...includeRules('plugins/node', configs, options),
	},
});
