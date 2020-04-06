'use strict';

// https://github.com/mysticatea/eslint-plugin-node

const conditionalRule = require('../../../lib/conditional-rule');

module.exports = (configs) => ({
	'node/callback-return': [
		'error',
		['callback', 'cb', 'next', 'done'],
	],
	'node/exports-style': [
		'error',
		'module.exports',
	],
	'node/global-require': 'error',
	'node/no-mixed-requires': 'error',
	'node/no-process-env': conditionalRule(configs, 'error', [
		{configs: ['console'], value: 'off'},
	]),
	'node/no-restricted-import': 'off',
	'node/no-restricted-require': 'off',
	'node/no-sync': 'error',
	'node/file-extension-in-import': 'error',
	'node/prefer-global/buffer': 'error',
	'node/prefer-global/console': 'error',
	'node/prefer-global/process': 'error',
	'node/prefer-global/text-decoder': 'error',
	'node/prefer-global/text-encoder': 'error',
	'node/prefer-global/url-search-params': 'error',
	'node/prefer-global/url': 'error',
	'node/prefer-promises/dns': 'error',
	'node/prefer-promises/fs': 'error',
});
