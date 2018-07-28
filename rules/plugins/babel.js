'use strict';

module.exports = {
	rules: {
		'babel/new-cap': 'error',
		'babel/object-curly-spacing': 'error',
		'babel/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'babel/no-invalid-this': 'error',
		'babel/no-unused-expressions': 'error',
		'babel/semi': 'error',
	},
};
