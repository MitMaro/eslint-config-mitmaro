'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 5,
		sourceType: 'script',
		ecmaFeatures: {
			globalReturn: true,
			implicitStrict: false,
			jsx: false,
			experimentalObjectRestSpread: false,
		},
	},
	plugins: [
		'filenames',
		'promise',
		'security',
	],
	env: {
		'shared-node-browser': true,
		es6: true,
	},
	extends: [
		'../rules/best-practices',
		'../rules/possible-errors',
		'../rules/strict-mode',
		'../rules/stylistic-issues',
		'../rules/variables',
		'../rules/plugins/filenames',
		'../rules/plugins/promise',
		'../rules/plugins/security',
	].map(require.resolve),
};
