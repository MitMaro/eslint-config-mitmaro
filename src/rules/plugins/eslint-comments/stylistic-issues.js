'use strict';

// https://mysticatea.github.io/eslint-plugin-eslint-comments/

module.exports = () => ({
	'eslint-comments/no-restricted-disable': 'off',
	'eslint-comments/no-use': ['error', {allow: [
		'eslint-disable',
		'eslint-disable-line',
		'eslint-disable-next-line',
		'eslint-enable',
	]}],
	'eslint-comments/require-description': 'off',
});
