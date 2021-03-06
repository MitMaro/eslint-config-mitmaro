'use strict';

const conditionalRule = require('../lib/conditional-rule');

module.exports = (configs) => ({
	'arrow-body-style': 'off',
	'arrow-parens': 'error',
	'arrow-spacing': 'error',
	'constructor-super': 'error',
	'generator-star-spacing': 'error',
	'no-class-assign': 'error',
	'no-confusing-arrow': 'error',
	'no-const-assign': 'error',
	'no-dupe-class-members': 'error',
	'no-duplicate-imports': 'error',
	'no-new-symbol': 'error',
	'no-restricted-imports': 'off',
	'no-this-before-super': 'error',
	'no-useless-computed-key': 'error',
	'no-useless-constructor': 'error',
	'no-useless-rename': 'error',
	'no-var': 'error',
	'object-shorthand': 'error',
	'prefer-arrow-callback': conditionalRule(configs, 'error', [
		{configs: ['mocha'], value: 'off'},
	]),
	'prefer-const': 'error',
	'prefer-destructuring': 'off',
	'prefer-numeric-literals': 'off',
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	'require-yield': 'error',
	'rest-spread-spacing': 'error',
	'sort-imports': 'off', // this rule doesn't match how I sort imports
	'symbol-description': 'error',
	'template-curly-spacing': 'error',
	'yield-star-spacing': 'error',
});
