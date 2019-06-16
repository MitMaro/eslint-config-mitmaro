'use strict';

const includeRules = require('../lib/include-rules');

module.exports = (configs, options) => ({
	plugins: [
		'babel',
	],
	parser: 'babel-eslint',
	rules: {
		...includeRules('plugins/babel', configs, options),
	},
});
