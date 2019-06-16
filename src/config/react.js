'use strict';

const getOption = require('../lib/get-option');
const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'filenames',
		'promise',
		'security',
	],
	env: {
		browser: true,
	},
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			version: getOption(options, 'react.version', 'detect'),
		},
	},
	rules: {
		...includeRules('plugins/react', configs, options),
	},
});
