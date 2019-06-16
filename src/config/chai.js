'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	plugins: [
		'chai-expect',
	],
	globals: {
		expect: true,
		chai: true,
	},
	rules: {
		...includeRules('plugins/chai-expect', configs, options),
	},
});
