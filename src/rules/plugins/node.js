'use strict';

// https://github.com/mysticatea/eslint-plugin-node

const bestPractices = require('./node/best-practices');
const possibleErrors = require('./node/possible-errors');
const stylisticIssues = require('./node/stylistic-issues');

module.exports = (configs, options) => ({
	...bestPractices(configs, options),
	...possibleErrors(configs, options),
	...stylisticIssues(configs, options),
});
