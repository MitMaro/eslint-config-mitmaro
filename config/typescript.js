'use strict';

module.exports = {
	parser: 'typescript-eslint-parser',
	plugins: [
		'typescript',
	],
	parserOptions: {
		sourceType: 'module',
	},
	extends: [
		'../rules/plugins/typescript',
	].map(require.resolve),
	rules: {
		// handled by tslint
		'no-undef': 'off',
		// does not make sense in a typescript project
		strict: 'off',
		// does not work as expected
		'lines-between-class-members': 'off',
		// typedoc is not jsdoc
		'valid-jsdoc': 'off',
	},
};
