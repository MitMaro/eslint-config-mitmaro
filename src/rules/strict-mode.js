'use strict';

const conditionalRule = require('../lib/conditional-rule');

module.exports = (configs) => ({
	strict: conditionalRule(configs, 'error', [
		{configs: ['typescript'], value: 'off'},
	]),
});
