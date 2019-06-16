'use strict';

const path = require('path');
const mergeConfigs = require('./lib/merge-configs');

const configOrder = [
	'chai',
	'mocha',
	'typescript',
	'jsdoc',
	'babel',
	'console',
	'node',
	'ecmascript-9',
	'ecmascript-8',
	'ecmascript-7',
	'common',
];

const dependencies = {
	babel: [],
	chai: [],
	common: [],
	console: ['node'],
	'ecmascript-7': [],
	'ecmascript-8': [],
	'ecmascript-9': ['ecmascript-8'],
	jsdoc: [],
	mocha: ['node'],
	node: [],
	typescript: [],

};

module.exports = (configs = [], baseConfig = {}, options = {}) => {
	const configsToLoad = ['common'];

	for (const configName of configs) {
		if (!dependencies[configName]) {
			throw new Error(`Invalid configuration: ${configName}`);
		}
		if (!configsToLoad.includes(configName)) {
			configsToLoad.push(configName);
		}
		for (const dependencyName of dependencies[configName]) {
			if (!configsToLoad.includes(dependencyName)) {
				configsToLoad.push(dependencyName);
			}
		}
	}

	const resultConfigs = [];
	for (const configName of configOrder) {
		if (!configsToLoad.includes(configName)) {
			continue;
		}
		// eslint-disable-next-line security/detect-non-literal-require
		const config = require(path.resolve(__dirname, 'config', configName));
		resultConfigs.push(config(configs, options));
	}

	resultConfigs.push(baseConfig);
	return mergeConfigs(resultConfigs);
};
