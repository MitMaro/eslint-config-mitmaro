'use strict';

module.exports = {
	plugins: [
		'babel',
	],
	parser: 'babel-eslint',
	extends: [
		'../rules/plugins/babel',
	].map(require.resolve),
	rules: {
		'new-cap': 'off',
		'object-curly-spacing': 'off',
		'no-invalid-this': 'off',
		semi: 'off',
	},
};
