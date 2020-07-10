'use strict';

const conditionalRule = require('../lib/conditional-rule');

module.exports = (configs) => ({
	'for-direction': 'error',
	'getter-return': 'error',
	'no-async-promise-executor': 'error',
	'no-await-in-loop': 'off',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': 'error',
	'no-console': conditionalRule(configs, 'error', [
		{configs: ['console'], value: 'off'},
	]),
	'no-constant-condition': [
		'error',
		{
			checkLoops: false,
		},
	],
	'no-control-regex': 'error',
	'no-debugger': 'error',
	'no-dupe-args': 'error',
	'no-dupe-else-if': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-empty': 'error',
	'no-empty-character-class': 'error',
	'no-ex-assign': 'error',
	'no-extra-boolean-cast': 'error',
	'no-extra-parens': conditionalRule(
		configs,
		[
			'error',
			'all',
			{
				nestedBinaryExpressions: false,
			},
		],
		[
			{
				configs: ['react'],
				value: [
					'error',
					'all',
					{
						nestedBinaryExpressions: false,
						ignoreJSX: 'multi-line',
					},
				],
			},
		],
	),
	'no-extra-semi': 'error',
	'no-func-assign': 'error',
	'no-import-assign': 'error',
	'no-inner-declarations': 'error',
	'no-invalid-regexp': 'error',
	'no-irregular-whitespace': 'error',
	'no-loss-of-precision': 'error',
	'no-misleading-character-class': 'error',
	'no-obj-calls': 'error',
	'no-promise-executor-return': 'error',
	'no-prototype-builtins': 'off',
	'no-regex-spaces': 'error',
	'no-setter-return': 'error',
	'no-sparse-arrays': 'error',
	'no-template-curly-in-string': 'error',
	'no-unexpected-multiline': 'error',
	'no-unreachable': 'error',
	'no-unreachable-loop': 'error',
	'no-unsafe-finally': 'error',
	'no-unsafe-negation': 'error',
	'no-useless-backreference': 'error',
	'require-atomic-updates': 'off',
	'use-isnan': 'error',
	'valid-typeof': 'error',
});
