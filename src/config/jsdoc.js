'use strict';

const getOption = require('../lib/get-option');
const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	plugins: [
		'jsdoc',
	],
	settings: {
		jsdoc: {
			ignorePrivate: getOption(options, 'jsdoc.ignorePrivate', true),
			exemptEmptyFunctions: false,
			additionalTagNames: getOption(options, 'jsdoc.additionalTagNames', []),
		},
	},
	rules: {
		...includeRules('plugins/jsdoc', configs, options),
	},
});
