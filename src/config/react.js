'use strict';

const getOption = require('../lib/get-option');
const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	plugins: [
		'react',
		'react-hooks',
		'jsx-a11y',
	],
	env: {
		browser: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
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
		...includeRules('plugins/react-hooks', configs, options),
		...includeRules('plugins/jsx-a11y', configs, options),
	},
});
