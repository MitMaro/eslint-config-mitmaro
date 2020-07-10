'use strict';

const mitmaroEslintConfig = require('./src');

module.exports = mitmaroEslintConfig(
	[
		'node',
	],
	{
		root: true,
	},
);
