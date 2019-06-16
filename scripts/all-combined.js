'use strict';

const includeRules = require('../src/lib/include-rules');

const configs = [];
const options = {};

module.exports = {
	root: true,
	plugins: [
		'babel',
		'chai-expect',
		'filenames',
		'jsdoc',
		'mocha',
		'node',
		'promise',
		'react',
		'security',
		'@typescript-eslint',
	],
	rules: {
		...includeRules('best-practices', configs, options),
		...includeRules('ecmascript-6', configs, options),
		...includeRules('ecmascript-8', configs, options),
		...includeRules('node-and-commonjs', configs, options),
		...includeRules('possible-errors', configs, options),
		...includeRules('strict-mode', configs, options),
		...includeRules('stylistic-issues', configs, options),
		...includeRules('variables', configs, options),
		...includeRules('plugins/babel', configs, options),
		...includeRules('plugins/chai-expect', configs, options),
		...includeRules('plugins/filenames', configs, options),
		...includeRules('plugins/jsdoc', configs, options),
		...includeRules('plugins/mocha', configs, options),
		...includeRules('plugins/node', configs, options),
		...includeRules('plugins/promise', configs, options),
		...includeRules('plugins/react', configs, options),
		...includeRules('plugins/security', configs, options),
		...includeRules('plugins/typescript', configs, options),
	},
};
