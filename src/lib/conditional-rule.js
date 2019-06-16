'use strict';

module.exports = (configurations, defaultValue, optionals) => {
	for (const option of optionals) {
		for (const config of configurations) {
			if (option.configs.includes(config)) {
				return option.value;
			}
		}
	}
	return defaultValue;
};
