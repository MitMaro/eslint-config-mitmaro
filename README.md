# eslint-config-mitmaro

[![NPM version](https://img.shields.io/npm/v/eslint-config-mitmaro.svg)][1]
[![Dependency Status](https://david-dm.org/MitMaro/eslint-config-mitmaro.svg)][2]
[![Build Status](https://travis-ci.org/MitMaro/eslint-config-mitmaro.svg?branch=master)][3]
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)][4]

This package provides MitMaro's shared extensible ESLint config.

## Usage

This project provides an interface for generating ESLint configurations.

```javascript
// .eslintrc.js
const eslintConfig = require('eslint-config-mitmaro');

module.exports = eslintConfig(
	[
		'node',
		'ecmascript-9',
		// other configurations
	],
	{
		root: true,
		// other base configurations
	},
	{
		// options
	}
);

```

### General Setup

Install this project and it's base dependencies:

```
npm install --save-dev \
    eslint-config-mitmaro \
    eslint \
    eslint-plugin-filenames \
    eslint-plugin-promise \
    eslint-plugin-security
```

### Babel configuration

Adds support for `babel-eslint` and the [ESLint babel plugin][5].

Add `'babel'` to configurations array and install the required dependencies:

```
npm install --save-dev babel-eslint eslint-plugin-babel
```

### Typescript configuration

Adds support for `@typescript-eslint/parser` and the [ESLint Typescript Plugin][eslint-plugin-typescript].

Add `'typescript'` to configurations array and install the required dependencies:

```
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Chai Expect configuration

Adds support for the [ESLint Chai Expect Plugin][eslint-plugin-chai-expect].

Add `'chai'` to configurations array and install the required dependencies:

```
npm install --save-dev eslint-plugin-chai-expect
```

### ECMAScript 7 configuration

Adds support for ECMAScript 7 features.

Add `'ecmascript-7'` to configurations array.


### ECMAScript 8 configuration

Adds support for ECMAScript 8 features including previous versions.

Add `'ecmascript-8'` to configurations array.

### ECMAScript 9 configuration

Adds support for ECMAScript 9 features including previous versions.

Add `'ecmascript-9'` to configurations array.

### Mocha configuration

Adds support for [mocha][6] and adds the [ESLint mocha plugin][7].

Add `'mocha'` to configurations array and install the required dependencies:

```
npm install --save-dev eslint-plugin-mocha
```

### Node.js configuration

Adds support for Node.js and adds the [ESLint node plugin][eslint-plugin-node].

Add `'node'` to configurations array and install the required dependencies:

```
npm install --save-dev eslint-plugin-node
```

### Console applications configuration

Extends the Node.js configuration to modify rules for console applications.

Add `'console'` to configurations array.

### React configuration

Adds support for React and adds the [ESLint react plugin][eslint-plugin-react].

Add `'react'` to configurations array and install the required dependencies:

```
npm install --save-dev eslint-plugin-react
```

#### Options

* `react.version` to set a custom React version. Default to auto-detect.


### JSDoc configuration

Adds support for JSDoc and adds the [ESLint jsdoc plugin][eslint-plugin-jsdoc].

Add `'jsdoc'` to configurations array and install the required dependencies:

```
npm install --save-dev eslint-plugin-jsdoc
```

#### Options

* `jsdoc.ignorePrivate` - default to `true`.
* `jsdoc.additionalTagNames` - default to and empty array (`[]`).


## Versioning

This project follows as closely as possible [Semantic Versioning][8]. A MAJOR change would be caused
by including a rule that could cause a passing code base to fail. A MINOR change is a modification or removal of a rule
that would not cause existing passing code to fail. A PATCH would be any fix that doesn't cause any changes to rules. 

## License

This project is released under the ISC license. See [LICENSE].

[1]:https://www.npmjs.com/package/eslint-config-mitmaro
[2]:https://david-dm.org/MitMaro/eslint-config-mitmaro
[3]:https://travis-ci.org/MitMaro/eslint-config-mitmaro
[4]:https://raw.githubusercontent.com/MitMaro/eslint-config-mitmaro/master/LICENSE
[5]:https://github.com/babel/eslint-plugin-babel
[eslint-plugin-typescript]:https://github.com/nzakas/eslint-plugin-typescript
[eslint-plugin-chai-expect]:https://github.com/Turbo87/eslint-plugin-chai-expect
[eslint-plugin-node]:https://github.com/mysticatea/eslint-plugin-node
[eslint-plugin-react]:https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-jsdoc]:https://github.com/gajus/eslint-plugin-jsdoc
[6]:mochajs.org
[7]:https://github.com/lo1tuma/eslint-plugin-mocha
[8]:http://semver.org/
[9]:http://eslint.org/docs/rules/
[LICENSE]:LICENSE
