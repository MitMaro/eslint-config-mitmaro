'use strict';

const mitmaroEslintConfig = require('./src/');

module.exports = mitmaroEslintConfig(
	[
		'node',
		'ecmascript-9',
	],
	{
		root: true,
	},
);
