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
		...includeRules('plugins/node/best-practices', configs, options),
		...includeRules('plugins/node/possible-errors', configs, options),
		...includeRules('plugins/node/stylistic-issues', configs, options),
	},
});
