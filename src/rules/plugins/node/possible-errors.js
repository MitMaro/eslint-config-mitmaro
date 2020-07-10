'use strict';

// https://github.com/mysticatea/eslint-plugin-node

const conditionalRule = require('../../../lib/conditional-rule');

module.exports = (configs) => ({
	'node/handle-callback-err': 'error',
	'node/no-callback-literal': 'error',
	'node/no-exports-assign': 'error',
	'node/no-extraneous-import': 'error',
	'node/no-extraneous-require': 'error',
	'node/no-missing-import': 'error',
	'node/no-missing-require': 'error',
	'node/no-new-require': 'error',
	'node/no-path-concat': 'error',
	'node/no-process-exit': 'error',
	'node/no-unpublished-bin': 'error',
	'node/no-unpublished-import': 'off',
	'node/no-unpublished-require': 'off',
	'node/no-unsupported-features/es-builtins': 'error',
	'node/no-unsupported-features/es-syntax': conditionalRule(configs, 'error', [
		{
			configs: ['react'],
			value: [
				'error',
				{
					ignores: ['modules', 'dynamicImport'],
				},
			],
		},
	]),
	'node/no-unsupported-features/node-builtins': 'error',
	'node/process-exit-as-throw': 'error',
	'node/shebang': 'error',
});
