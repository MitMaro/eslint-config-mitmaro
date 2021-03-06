'use strict';

const conditionalRule = require('../lib/conditional-rule');

module.exports = (configs) => ({
	'accessor-pairs': 'off',
	'array-callback-return': 'error',
	'block-scoped-var': 'error',
	'class-methods-use-this': conditionalRule(configs, 'error', [
		{
			configs: ['react'],
			value: [
				'error',
				{
					exceptMethods: [
						'componentDidMount',
						'componentDidUpdate',
						'componentWillMount',
						'componentWillReceiveProps',
						'componentWillUnmount',
						'componentWillUpdate',
						'render',
						'shouldComponentUpdate',
					],
				},
			],
		},
	]),
	complexity: 'off',
	'consistent-return': 'error',
	curly: 'error',
	'default-case': 'error',
	'dot-location': [
		'error',
		'property',
	],
	'dot-notation': [
		'error',
		{
			allowPattern: '^[a-z]+(_[a-z]+)+$',
		},
	],
	eqeqeq: 'error',
	'guard-for-in': 'off',
	'max-classes-per-file': 'off',
	'no-alert': 'error',
	'no-caller': 'error',
	'no-case-declarations': 'error',
	'no-div-regex': 'error',
	'no-else-return': 'error',
	'no-empty-function': 'off',
	'no-empty-pattern': 'error',
	'no-eq-null': 'off',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-label': 'error',
	'no-fallthrough': 'error',
	'no-floating-decimal': 'error',
	'no-global-assign': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 'error',
	'no-implied-eval': 'error',
	'no-invalid-this': conditionalRule(configs, 'error', [
		{configs: ['babel', 'react', 'typescript'], value: 'off'},
	]),
	'no-iterator': 'error',
	'no-labels': [
		'error',
		{
			allowLoop: true,
			allowSwitch: true,
		},
	],
	'no-lone-blocks': 'error',
	'no-loop-func': 'error',
	'no-magic-numbers': 'off',
	'no-multi-spaces': 'error',
	'no-multi-str': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-new-wrappers': 'error',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-param-reassign': conditionalRule(
		configs,
		[
			'error',
			{
				props: false,
			},
		],
		[
			{configs: ['typescript'], value: 'off'},
		]
	),
	'no-proto': 'error',
	'no-redeclare': 'error',
	'no-restricted-properties': 'off',
	'no-return-assign': 'error',
	'no-return-await': 'error',
	'no-script-url': 'error',
	'no-self-assign': 'error',
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-throw-literal': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unused-expressions': conditionalRule(
		configs,
		[
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
			},
		],
		[
			{configs: ['chai'], value: 'off'},
		]
	),
	'no-unused-labels': 'error',
	'no-useless-call': 'error',
	'no-useless-catch': 'error',
	'no-useless-concat': 'error',
	'no-useless-escape': 'error',
	'no-useless-return': 'error',
	'no-void': 'error',
	'no-warning-comments': 'warn',
	'no-with': 'error',
	'prefer-named-capture-group': 'error',
	'prefer-promise-reject-errors': 'error',
	radix: 'error',
	'require-await': 'off',
	'require-unicode-regexp': 'error',
	'vars-on-top': 'error',
	'wrap-iife': 'error',
	yoda: 'off',
});
