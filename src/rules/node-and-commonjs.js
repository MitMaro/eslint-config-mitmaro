'use strict';

const conditionalRule = require('../lib/conditional-rule');

module.exports = (configs) => ({
	'callback-return': [
		'error',
		['callback', 'cb', 'next', 'done'],
	],
	'global-require': 'off',
	'handle-callback-err': 'error',
	'no-buffer-constructor': 'error',
	'no-mixed-requires': 'error',
	'no-new-require': 'error',
	'no-path-concat': 'error',
	'no-process-env': conditionalRule(configs, 'error', [
		{configs: ['console'], value: 'off'},
	]),
	'no-process-exit': 'error', // should never be used
	'no-restricted-modules': 'off',
	'no-sync': conditionalRule(configs, 'error', [
		{configs: ['mocha'], value: 'off'},
	]),
});
