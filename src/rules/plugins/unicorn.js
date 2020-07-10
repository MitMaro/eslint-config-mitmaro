'use strict';

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = () => ({
	'unicorn/better-regex': 'error',
	'unicorn/catch-error-name': 'off', // allow use err / error
	'unicorn/consistent-function-scoping': 'off', // too many false positives at the moment
	'unicorn/custom-error-definition': 'off',
	'unicorn/error-message': 'error',
	'unicorn/escape-case': 'off',
	'unicorn/expiring-todo-comments': 'error',
	'unicorn/explicit-length-check': 'off',
	'unicorn/filename-case': 'off',
	'unicorn/import-index': 'error',
	'unicorn/new-for-builtins': 'error',
	'unicorn/no-abusive-eslint-disable': 'off', // let eslint-comments take care of this
	'unicorn/no-array-instanceof': 'error',
	'unicorn/no-console-spaces': 'error',
	'unicorn/no-fn-reference-in-iterator': 'off',
	'unicorn/no-for-loop': 'error',
	'unicorn/no-hex-escape': 'off',
	'unicorn/no-keyword-prefix': 'off',
	'unicorn/no-nested-ternary': 'error', // replaces no-nested-ternary from ESLint
	'unicorn/no-new-buffer': 'off', // let eslint take care of this
	'unicorn/no-null': 'off',
	'unicorn/no-process-exit': 'off', // let eslint take care of this
	'unicorn/no-reduce': 'off',
	'unicorn/no-unreadable-array-destructuring': 'error',
	'unicorn/no-unsafe-regex': 'off',
	'unicorn/no-unused-properties': 'off',
	'unicorn/no-useless-undefined': 'off', // conflicts with consistent-return
	'unicorn/no-zero-fractions': 'off',
	'unicorn/number-literal-case': 'off',
	'unicorn/prefer-add-event-listener': 'error',
	'unicorn/prefer-dataset': 'error',
	'unicorn/prefer-event-key': 'error',
	'unicorn/prefer-flat-map': 'error',
	'unicorn/prefer-includes': 'error',
	'unicorn/prefer-modern-dom-apis': 'error',
	'unicorn/prefer-negative-index': 'error',
	'unicorn/prefer-node-append': 'error',
	'unicorn/prefer-node-remove': 'error',
	'unicorn/prefer-number-properties': 'error',
	'unicorn/prefer-optional-catch-binding': 'error',
	'unicorn/prefer-query-selector': 'off',
	'unicorn/prefer-reflect-apply': 'off',
	'unicorn/prefer-replace-all': 'error',
	'unicorn/prefer-set-has': 'error',
	'unicorn/prefer-spread': 'error',
	'unicorn/prefer-starts-ends-with': 'error',
	'unicorn/prefer-trim-start-end': 'error',
	'unicorn/prefer-string-slice': 'error',
	'unicorn/prefer-text-content': 'error',
	'unicorn/prefer-type-error': 'off',
	'unicorn/prevent-abbreviations': 'off',
	'unicorn/string-content': 'off',
	'unicorn/throw-new-error': 'off', // let eslint take care of this
});
