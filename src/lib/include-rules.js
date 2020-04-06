'use strict';

const path = require('path');

module.exports = (category, configs, options) => {
	// eslint-disable-next-line security/detect-non-literal-require,node/global-require
	const rules = require(path.resolve(__dirname, '..', 'rules', `${category}.js`));
	return rules(configs, options);
};
