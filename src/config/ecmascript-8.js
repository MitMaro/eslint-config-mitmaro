'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	parserOptions: {
		ecmaVersion: 8,
	},
	rules: {
		...includeRules('ecmascript-8', configs, options),
	},
});
