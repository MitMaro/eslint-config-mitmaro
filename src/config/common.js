'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'script',
		ecmaFeatures: {
			globalReturn: true,
			implicitStrict: false,
			jsx: false,
			experimentalObjectRestSpread: false,
		},
	},
	plugins: [
		'eslint-comments',
		'filenames',
		'import',
		'promise',
		'security',
		'unicorn',
	],
	env: {
		'shared-node-browser': true,
		es6: true,
	},
	rules: {
		...includeRules('best-practices', configs, options),
		...includeRules('ecmascript-2015', configs, options),
		...includeRules('ecmascript-2017', configs, options),
		...includeRules('ecmascript-2018', configs, options),
		...includeRules('possible-errors', configs, options),
		...includeRules('strict-mode', configs, options),
		...includeRules('stylistic-issues', configs, options),
		...includeRules('variables', configs, options),
		...includeRules('plugins/eslint-comments/best-practices', configs, options),
		...includeRules('plugins/eslint-comments/stylistic-issues', configs, options),
		...includeRules('plugins/filenames', configs, options),
		...includeRules('plugins/import', configs, options),
		...includeRules('plugins/promise', configs, options),
		...includeRules('plugins/security', configs, options),
		...includeRules('plugins/unicorn', configs, options),
	},
});
