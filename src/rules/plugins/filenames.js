'use strict';

const conditionalRule = require('../../lib/conditional-rule');

// https://github.com/selaux/eslint-plugin-filenames

module.exports = (configs) => ({
	'filenames/match-regex': conditionalRule(
		configs,
		[
			'error',
			'^[a-z0-9.-]+$',
			true,
		],
		[
			{
				configs: ['mocha'], value: 'off',
			},
			{
				configs: ['react'],
				value: [
					'error',
					'^[A-Za-z0-9.-]+$',
				],
			},
		],
	),
	'filenames/match-exported': conditionalRule(configs, 'off', [
		{configs: ['react'], value: 'error'},
	]),
	'filenames/no-index': 'off',
});
