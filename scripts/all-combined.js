'use strict';

const rules = {};

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
		'../rules/plugins/chai-expect.js',
		'../rules/plugins/filenames.js',
		'../rules/plugins/mocha.js',
		'../rules/plugins/node.js',
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
