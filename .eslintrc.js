module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: [
		'./config/common.js',
		'./config/ecmascript-6.js',
		'./config/node.js',
	]
};
