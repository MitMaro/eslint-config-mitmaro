'use strict';

module.exports = {
	plugins: [
		'babel',
	],
	parser: 'babel-eslint',
	extends: [
		'../rules/plugins/babel',
	].map(require.resolve),
};
