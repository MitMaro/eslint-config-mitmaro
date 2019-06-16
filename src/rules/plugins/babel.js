'use strict';

module.exports = () => ({
	'babel/new-cap': 'error',
	'babel/camelcase': 'error',
	'babel/no-invalid-this': 'error',
	'babel/object-curly-spacing': 'error',
	'babel/quotes': [
		'error',
		'single',
		{
			avoidEscape: true,
		},
	],
	'babel/semi': 'error',
	'babel/no-unused-expressions': 'error',
	'babel/valid-typeof': 'error',
});
