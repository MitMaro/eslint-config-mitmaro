'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 7,
	},
	extends: [
		'./ecmascript-6',
	].map(require.resolve),
};
