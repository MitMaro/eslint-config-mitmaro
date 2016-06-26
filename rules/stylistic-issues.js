'use strict';

module.exports = {
	rules: {
		'array-bracket-spacing': ['error', 'never', {
			singleValue: true,
			arraysInArrays: true
		}],
		'block-spacing': 'error',
		'brace-style': ['error', 'stroustrup'],
		'camelcase': 'error',
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'consistent-this': ['error', 'self'],
		'eol-last': 'error',
		'func-names': 'error',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'jsx-quotes': 'error',
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': 'error',
		'lines-around-comment': 'off',
		'max-depth': 'error',
		'max-len': ['error', 120],
		'max-lines': 'off',
		'max-nested-callbacks': ['error', 3],
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': 'error',
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-after-var': 'error',
		'newline-before-return': 'off',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'off',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'error',
		'no-spaced-func': 'error',
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': ['error', {
			minProperties: 2,
			multiline: true
		}],
		'object-curly-spacing': ['error', 'always', {
			objectsInObjects: true,
			arraysInObjects: false
		}],
		'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': ['error', 'never'],
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', 'never'],
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true
		}],
		'require-jsdoc': 'off',
		'semi': ['error', 'always'],
		'semi-spacing': 'error',
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'unicode-bom': 'error',
		'wrap-regex': 'error'
	}
};
