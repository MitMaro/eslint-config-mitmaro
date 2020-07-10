'use strict';

// Based on https://github.com/eslint/eslint/blob/master/lib/cli-engine/config-array/config-array.js

function isNonNullObject(x) {
	return typeof x === 'object' && x !== null;
}

function mergeWithoutOverwrite(target, source) {
	if (!isNonNullObject(source)) {
		return;
	}

	for (const key of Object.keys(source)) {
		if (key === '__proto__') {
			continue;
		}

		if (isNonNullObject(target[key])) {
			mergeWithoutOverwrite(target[key], source[key]);
		}
		else if (target[key] === undefined) {
			if (isNonNullObject(source[key])) {
				target[key] = Array.isArray(source[key]) ? [] : {};
				mergeWithoutOverwrite(target[key], source[key]);
			}
			else if (source[key] !== undefined) {
				target[key] = source[key];
			}
		}
	}
}

function mergePlugins(target, source) {
	if (!isNonNullObject(source)) {
		return;
	}

	for (const plugin of source) {
		if (!target.includes(plugin)) {
			target.push(plugin);
		}
	}
}

function mergeRuleConfigs(target, source) {
	if (!isNonNullObject(source)) {
		return;
	}

	for (const key of Object.keys(source)) {
		if (key === '__proto__') {
			continue;
		}
		const targetDef = target[key];
		const sourceDef = source[key];

		// Adopt the rule config which was found at first.
		if (targetDef === undefined) {
			target[key] = Array.isArray(sourceDef) ? [...sourceDef] : target[key] = [sourceDef];
		}
		else if (targetDef.length === 1 && Array.isArray(sourceDef) && sourceDef.length >= 2) {
			targetDef.push(...sourceDef.slice(1));
		}
	}
}

module.exports = (configs) => {
	const resultConfig = {
		env: {},
		globals: {},
		parserOptions: {},
		settings: {},
		plugins: [],
		rules: {},
	};
	for (const config of configs) {
		if (!resultConfig.root && config.root) {
			resultConfig.root = config.root;
		}

		if (!resultConfig.parser && config.parser) {
			resultConfig.parser = config.parser;
		}

		if (!resultConfig.processor && config.processor) {
			resultConfig.processor = config.processor;
		}

		mergeWithoutOverwrite(resultConfig.env, config.env);
		mergeWithoutOverwrite(resultConfig.globals, config.globals);
		mergeWithoutOverwrite(resultConfig.parserOptions, config.parserOptions);
		mergeWithoutOverwrite(resultConfig.settings, config.settings);
		mergePlugins(resultConfig.plugins, config.plugins);
		mergeRuleConfigs(resultConfig.rules, config.rules);
	}
	return resultConfig;
};
