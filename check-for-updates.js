/* eslint-disable no-console */
 'use strict';

const path = require('path');
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({ configFile: path.resolve(__dirname, '.eslintrc') });
const ourRules = Object.keys(cli.getConfigForFile(path.resolve(__dirname, 'check-for-updates.js')).rules);
const supportedRules = Object.keys(require('eslint/lib/load-rules')());
const eslintStrictNewlineRules = Object
	.keys(require('eslint-plugin-strict-newline').rules)
	.map((v) => `strict-newline/${v}`)
;

const allRules = [].concat(
	supportedRules,
	eslintStrictNewlineRules
);

const missing = new Set();
const extra = new Set();

for (const rule of ourRules) {
	if (allRules.indexOf(rule) === -1) {
		extra.add(rule);
	}
}

for (const rule of allRules) {
	if (ourRules.indexOf(rule) === -1) {
		missing.add(rule);
	}
}

if (!extra.size && !missing.size) {
	console.log('No extra or missing rules');
}
else {
	if (missing.size) {
		console.log('The following rules are missing:');
		for (const rule of missing) {
			console.log(`\t${rule}`);
		}
	}

	if (extra.size) {
		console.log('The following rules no longer exist missing:');
		for (const rule of extra) {
			console.log(`\t${rule}`);
		}
	}
	process.exitCode = 1;
}
