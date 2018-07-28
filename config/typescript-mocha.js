'use strict';

module.exports = {
	extends: [
		'./typescript',
	].map(require.resolve),
	rules: {
		'typescript/explicit-function-return-type': 'off',
	},
};
