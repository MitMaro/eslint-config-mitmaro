'use strict';

const conditionalRule = require('../lib/conditional-rule');

module.exports = (configs) => ({
	'array-bracket-newline': 'off',
	'array-bracket-spacing': [
		'error',
		'never',
		{singleValue: false},
	],
	'array-element-newline': 'off',
	'block-spacing': 'error',
	'brace-style': [
		'error',
		'stroustrup',
		{allowSingleLine: true},
	],
	camelcase: [
		'error',
		{properties: 'always'},
	],
	'capitalized-comments': 'off',
	'comma-dangle': [
		'error',
		'always-multiline',
	],
	'comma-spacing': 'error',
	'comma-style': 'error',
	'computed-property-spacing': 'error',
	'consistent-this': [
		'error',
		'self',
	],
	'eol-last': 'error',
	'func-call-spacing': conditionalRule(configs, 'error', [
		{configs: ['typescript'], value: 'off'},
	]),
	'func-name-matching': 'off',
	'func-names': 'off',
	'func-style': 'off',
	'function-paren-newline': 'off',
	'id-blacklist': 'off',
	'id-length': 'off',
	'id-match': 'off',
	'implicit-arrow-linebreak': 'error',
	indent: conditionalRule(
		configs,
		[
			'error',
			'tab',
			{SwitchCase: 1},
		],
		[
			{configs: ['typescript'], value: 'off'},
		],
	),
	'jsx-quotes': [
		'error',
		'prefer-double',
	],
	'key-spacing': 'error',
	'keyword-spacing': [
		'error',
		{
			before: true,
			after: true,
		},
	],
	'line-comment-position': 'off',
	'linebreak-style': 'error',
	'lines-around-comment': 'off',
	'lines-between-class-members': conditionalRule(configs, 'error', [
		{configs: ['typescript'], value: 'off'},
	]),
	'max-depth': 'error',
	'max-len': [
		'error',
		{
			code: 120,
			ignoreTrailingComments: true,
			ignoreUrls: true,
		},
	],
	'max-lines': 'off',
	'max-lines-per-function': 'off',
	'max-nested-callbacks': 'off',
	'max-params': 'off',
	'max-statements': 'off',
	'max-statements-per-line': 'off',
	'multiline-comment-style': 'off',
	'multiline-ternary': 'off',
	'new-cap': conditionalRule(configs, 'error', [
		{configs: ['babel'], value: 'off'},
	]),
	'new-parens': 'error',
	'newline-per-chained-call': [
		'error',
		{ignoreChainWithDepth: 4},
	],
	'no-array-constructor': 'error',
	'no-bitwise': 'error',
	'no-continue': 'off',
	'no-inline-comments': 'off',
	'no-lonely-if': 'error',
	'no-mixed-operators': 'off',
	'no-mixed-spaces-and-tabs': [
		'error',
		'smart-tabs',
	],
	'no-multi-assign': 'error',
	'no-multiple-empty-lines': [
		'error',
		{
			max: 1,
			maxEOF: 0,
			maxBOF: 0,
		},
	],
	'no-negated-condition': 'error',
	'no-nested-ternary': 'error',
	'no-new-object': 'error',
	'no-plusplus': 'off',
	'no-restricted-syntax': 'off',
	'no-tabs': 'off',
	'no-ternary': 'off',
	'no-trailing-spaces': [
		'error',
	],
	'no-underscore-dangle': 'off',
	'no-unneeded-ternary': 'error',
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': 'off',
	'object-curly-newline': 'off',
	'object-curly-spacing': conditionalRule(configs, 'error', [
		{configs: ['babel'], value: 'off'},
	]),
	'object-property-newline': [
		'error',
		{
			allowMultiplePropertiesPerLine: true,
		},
	],
	'one-var': [
		'error',
		'never',
	],
	'one-var-declaration-per-line': 'error',
	'operator-assignment': 'off',
	'operator-linebreak': [
		'error',
		'before',
	],
	'padded-blocks': [
		'error',
		'never',
	],
	'padding-line-between-statements': [
		'error',
		// directive padding
		{blankLine: 'always', prev: 'directive', next: '*'},
		{blankLine: 'never', prev: 'directive', next: 'directive'},
	],
	'prefer-object-spread': 'error',
	'quote-props': [
		'error',
		'as-needed',
	],
	quotes: [
		'error',
		'single',
		{
			avoidEscape: true,
		},
	],
	semi: conditionalRule(configs, 'error', [
		{configs: ['babel', 'typescript'], value: 'off'},
	]),
	'semi-spacing': 'error',
	'semi-style': 'error',
	'sort-keys': 'off',
	'sort-imports': 'off',
	'sort-vars': 'off',
	'space-before-blocks': 'error',
	'space-before-function-paren': [
		'error',
		{
			anonymous: 'always',
			named: 'never',
		},
	],
	'space-in-parens': 'error',
	'space-infix-ops': 'error',
	'space-unary-ops': 'error',
	'spaced-comment': 'error',
	'switch-colon-spacing': 'error',
	'template-tag-spacing': 'error',
	'unicode-bom': 'error',
	'wrap-regex': 'error',
});
