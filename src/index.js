'use strict';

const path = require('path');
const mergeConfigs = require('./lib/merge-configs');

const configOrder = [
	'chai',
	'mocha',
	'babel',
	'console',
	'node',
	'react',
	'common',
];

const dependencies = {
	babel: [],
	chai: [],
	common: [],
	console: ['node'],
	'ecmascript-2018': [],
	'ecmascript-2019': ['ecmascript-2018'],
	mocha: ['node'],
	node: [],
	react: [],
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

	const resultConfigs = [baseConfig];
	for (const configName of configOrder) {
		if (!configsToLoad.includes(configName)) {
			continue;
		}
		// eslint-disable-next-line security/detect-non-literal-require,node/global-require
		const config = require(path.resolve(__dirname, 'config', configName));
		resultConfigs.push(config(configs, options));
	}

	return mergeConfigs(resultConfigs);
};
