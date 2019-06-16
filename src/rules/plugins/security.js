'use strict';

const conditionalRule = require('../../lib/conditional-rule');

module.exports = (configs) => ({
	'security/detect-unsafe-regex': 'error',
	'security/detect-buffer-noassert': 'error',
	'security/detect-child-process': conditionalRule(configs, 'error', [
		{configs: ['console'], value: 'off'},
	]),
	'security/detect-disable-mustache-escape': 'error',
	'security/detect-eval-with-expression': 'error',
	'security/detect-new-buffer': 'error',
	'security/detect-no-csrf-before-method-override': 'error',
	'security/detect-non-literal-fs-filename': conditionalRule(configs, 'error', [
		{configs: ['mocha', 'console'], value: 'off'},
	]),
	'security/detect-non-literal-regexp': 'error',
	'security/detect-non-literal-require': 'error',
	'security/detect-object-injection': 'off',
	'security/detect-possible-timing-attacks': 'error',
	'security/detect-pseudoRandomBytes': 'error',
});
