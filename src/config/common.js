'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			globalReturn: true,
			implicitStrict: false,
			jsx: false,
			experimentalObjectRestSpread: false,
		},
	},
	plugins: [
		'filenames',
		'promise',
		'security',
	],
	env: {
		'shared-node-browser': true,
		es6: true,
	},
	rules: {
		...includeRules('best-practices', configs, options),
		...includeRules('ecmascript-6', configs, options),
		...includeRules('possible-errors', configs, options),
		...includeRules('strict-mode', configs, options),
		...includeRules('stylistic-issues', configs, options),
		...includeRules('variables', configs, options),
		...includeRules('plugins/filenames', configs, options),
		...includeRules('plugins/promise', configs, options),
		...includeRules('plugins/security', configs, options),
	},
});
