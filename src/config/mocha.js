'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	plugins: [
		'mocha',
	],
	env: {
		mocha: true,
	},
	rules: {
		...includeRules('plugins/mocha', configs, options),
	},
});
