'use strict';

module.exports = {
	extends: [
		'./typescript',
	].map(require.resolve),
	rules: {
		'typescript/explicit-function-return-type': 'off',
		'typescript/no-non-null-assertion': 'off',
	},
};
