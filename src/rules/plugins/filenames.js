'use strict';

const conditionalRule = require('../../lib/conditional-rule');

module.exports = (configs) => ({
	'filenames/match-regex': conditionalRule(
		configs,
		[
			'error',
			/^[a-z0-9.-]+$/u,
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
					/^[A-Za-z0-9.-]+$/u,
				],
			},
		]
	),
	'filenames/match-exported': conditionalRule(configs, 'off', [
		{configs: ['react'], value: 'error'},
	]),
	'filenames/no-index': 'off',
});
