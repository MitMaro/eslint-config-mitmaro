'use strict';

const conditionalRule = require('../lib/conditional-rule');

module.exports = (configs) => ({
	'init-declarations': 'off',
	'no-delete-var': 'off',
	'no-label-var': 'error',
	'no-restricted-globals': 'off',
	'no-shadow': 'error',
	'no-shadow-restricted-names': 'error',
	'no-undef': conditionalRule(configs, 'error', [
		{configs: ['typescript'], value: 'off'},
	]),
	'no-undef-init': 'error',
	'no-undefined': 'off',
	'no-unused-vars': conditionalRule(configs, 'error', [
		{configs: ['typescript'], value: 'off'},
	]),
	'no-use-before-define': 'error',
});
