# eslint-config-mitmaro

[![NPM version](https://img.shields.io/npm/v/eslint-config-mitmaro.svg)](https://www.npmjs.com/package/eslint-config-mitmaro)
[![Dependency Status](https://david-dm.org/MitMaro/eslint-config-mitmaro.svg)](https://david-dm.org/MitMaro/eslint-config-mitmaro)
[![Build Status](https://travis-ci.org/MitMaro/eslint-config-mitmaro.svg?branch=master)](https://travis-ci.org/MitMaro/eslint-config-mitmaro)
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://raw.githubusercontent.com/MitMaro/eslint-config-mitmaro/master/LICENSE)

This package provides MitMaro's `.eslintrc` as an extensible shared config.

## Usage

There are two ESLint configurations for your usage.

### eslint-config-mitmaro

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-strict-newline`.

1. `npm install --save-dev eslint-config-mitmaro eslint-plugin-strict-newline eslint`
2. add `"extends": "mitmaro"` to your `.eslintrc`

### eslint-config-mitmaro/mocha

An extension of `eslint-config-mitmaro` that adds support for mocha.

1. `npm install --save-dev eslint-config-mitmaro eslint-plugin-strict-newline eslint`
2. add `"extends": "mitmaro/mocha"` to your `.eslintrc`

## Versioning

This project follows as closely as possible [Semantic Versioning](http://semver.org/). A MAJOR change would be caused
by including a rule that could cause a passing code base to fail. A MINOR change is a modification or removal of a rule
that would not cause existing passing code to fail. A PATCH would be any fix that doesn't cause any changes to rules. 

## Contributing

Add new rule definitions under the files located in `rules` ensuring to keep the rule correctly categorized and in the
same order as defined on the [ESLint rules](http://eslint.org/docs/rules/) page.

This project self-lints and ensure that all file paths are correct. You can run these checks with the `npm run test`
command.

## License

This project is released under the ISC license. See [LICENSE](LICENSE).
