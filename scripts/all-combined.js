'use strict';

const deprecatedRules = [
	'babel/array-bracket-spacing',
	'babel/arrow-parens',
	'babel/flow-object-type',
	'babel/func-params-comma-dangle',
	'babel/generator-star-spacing',
	'babel/no-await-in-loop',
	'babel/object-shorthand',
	'indent-legacy',
	'lines-around-directive',
	'newline-after-var',
	'newline-before-return',
	'no-native-reassign',
	'no-negated-in-lhs',
	'no-spaced-func',
	'prefer-reflect',
	'react/jsx-space-before-closing',
];

const rules = {};

for (const rule of deprecatedRules) {
	rules[rule] = 'off';
}

module.exports = {
	root: true,
	plugins: [
		'babel',
		'filenames',
		'mocha',
		'promise',
		'react',
		'security',
	],
	extends: [
		'../rules/plugins/babel.js',
		'../rules/plugins/filenames.js',
		'../rules/plugins/mocha.js',
		'../rules/plugins/promise.js',
		'../rules/plugins/react.js',
		'../rules/plugins/security.js',
		'../rules/best-practices.js',
		'../rules/ecmascript-6.js',
		'../rules/ecmascript-8.js',
		'../rules/node-and-common.js',
		'../rules/possible-errors.js',
		'../rules/strict-mode.js',
		'../rules/stylistic-issues.js',
		'../rules/variables.js',
	].map(require.resolve),
	rules,
};
