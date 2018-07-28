# eslint-config-mitmaro

[![NPM version](https://img.shields.io/npm/v/eslint-config-mitmaro.svg)][1]
[![Dependency Status](https://david-dm.org/MitMaro/eslint-config-mitmaro.svg)][2]
[![Build Status](https://travis-ci.org/MitMaro/eslint-config-mitmaro.svg?branch=master)][3]
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)][4]

This package provides MitMaro's shared extensible ESLint config.

## Usage

There are two ESLint configurations for your usage.

### General Setup

1. `npm install --save-dev eslint-config-mitmaro eslint-plugin-filenames eslint-plugin-promise eslint-plugin-security eslint`

### `eslint-config-mitmaro`

The default export contains a set of common ESLint rules, including ECMAScript 6+.

1. add `"extends": "mitmaro"` to your ESLint config file

### `eslint-config-mitmaro/config/babel`

Adds support for `babel-eslint` and the [ESLint babel plugin][5].

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev  babel-eslint eslint-plugin-babel`
1. add `"extends": ["mitmaro", "mitmaro/config/babel"]` to your ESLint config file

### `eslint-config-mitmaro/config/typescript`

Adds support for `typescript-eslint-parser` and the [ESLint Typescript Plugin][eslint-plugin-typescript].

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev  babel-eslint eslint-plugin-typescript`
1. add `"extends": ["mitmaro", "mitmaro/config/typescript"]` to your ESLint config file

### `eslint-config-mitmaro/config/chai`

1. Ensure you have installed the dependencies from General Setup
1. add `"extends": "mitmaro/config/chai"` to your ESLint config file

### `eslint-config-mitmaro/config/ecmascript-6`

Adds support for ECMAScript 6 features and sets the source type to `module`.

1. add `"extends": ["mitmaro", "mitmaro/config/ecmascript-6"]` to your ESLint config file

### `eslint-config-mitmaro/config/ecmascript-7`

Adds support for ECMAScript 7 features. This config automatically brings in `eslint-config-mitmaro/config/ecmascript-6`.

1. Ensure you have installed the dependencies from General Setup
1. add `"extends": ["mitmaro", "mitmaro/config/ecmascript-7"]` to your ESLint config file

### `eslint-config-mitmaro/config/ecmascript-8`

Adds support for ECMAScript 8 features. This config automatically brings in `eslint-config-mitmaro/config/ecmascript-7`.

1. Ensure you have installed the dependencies from General Setup
1. add `"extends": ["mitmaro", "mitmaro/config/ecmascript-8]` to your ESLint config file

### `eslint-config-mitmaro/config/ecmascript-9`

Adds support for ECMAScript 9 features. This config automatically brings in `eslint-config-mitmaro/config/ecmascript-8`.

1. Ensure you have installed the dependencies from General Setup
1. add `"extends": ["mitmaro", "mitmaro/config/ecmascript-9]` to your ESLint config file

### `eslint-config-mitmaro/config/mocha`

Adds support for [mocha][6], disabling certain rules and adding the [ESLint mocha plugin][7].

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-mocha`
1. add `"extends": "mitmaro/config/mocha"` to your ESLint config file
1. add `"mitmaro/config/typescript-mocha"` to your ESLint config file to support TypeScript

### `eslint-config-mitmaro/config/node`

1. Ensure you have installed the dependencies from General Setup
1. add `"extends": "mitmaro/config/node"` to your ESLint config file

_Note: You should include this after `ecmascript-*` configurations._

### `eslint-config-mitmaro/config/react`

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-react`
1. add `"extends": "mitmaro/config/react"` to your ESLint config file

## Versioning

This project follows as closely as possible [Semantic Versioning][8]. A MAJOR change would be caused
by including a rule that could cause a passing code base to fail. A MINOR change is a modification or removal of a rule
that would not cause existing passing code to fail. A PATCH would be any fix that doesn't cause any changes to rules. 

## Contributing

Add new rule definitions under the files located in `rules` ensuring to keep the rule correctly categorized and in the
same order as defined on the [ESLint rules][9] page.

This project self-lints and ensure that all file paths are correct. You can run these checks with the `npm run test`
command.

## License

This project is released under the ISC license. See [LICENSE].

[1]:https://www.npmjs.com/package/eslint-config-mitmaro
[2]:https://david-dm.org/MitMaro/eslint-config-mitmaro
[3]:https://travis-ci.org/MitMaro/eslint-config-mitmaro
[4]:https://raw.githubusercontent.com/MitMaro/eslint-config-mitmaro/master/LICENSE
[5]:https://github.com/babel/eslint-plugin-babel
[eslint-plugin-typescript]:https://github.com/nzakas/eslint-plugin-typescript
[6]:mochajs.org
[7]:https://github.com/lo1tuma/eslint-plugin-mocha
[8]:http://semver.org/
[9]:http://eslint.org/docs/rules/
[LICENSE]:LICENSE
