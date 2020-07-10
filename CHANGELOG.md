# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
The format conforms to [Keep a Changelog](http://keepachangelog.com/).

## [6.0.0] - 2020-04-06
### Added
- Support for ECMAScript 2020 (11)
- [ESLint Comments](https://github.com/mysticatea/eslint-plugin-eslint-comments) plugin
- [Import](https://github.com/benmosher/eslint-plugin-import) plugin
- [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) plugin
- [React Hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) plugin
- [JSX A11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) plugin

### Removed
- Configuration for ECMAScript 5 (2015)
- Configuration for ECMAScript 7 (2016)
- Configuration for ECMAScript 8 (2017)
- JSDoc plugin and configuration
- Typescript plugin and configuration


## [5.0.2] - 2019-07-18
### Fixed
- Base config would not override rules


## [5.0.1] - 2019-07-12
### Fixed
- React config was not exports

## [5.0.0] - 2019-06-16
### Added
- Console configuration
- [JSDoc](https://github.com/gajus/eslint-plugin-jsdoc) plugin

### Changed
- Drop support for Node < 8.3
- Drop support for Node 6
- Functional system to setup configurations
- Updated to latest rules
- Updated plugins to the latest versions

## [4.0.0] - 2018-07-28
### Added
- ECMAScript 9 support
- [TypeScript](https://github.com/nzakas/eslint-plugin-typescript) plugin
- [Chai Expect](https://github.com/Turbo87/eslint-plugin-chai-expect) plugin
- [Node](https://github.com/mysticatea/eslint-plugin-node) plugin

### Changed
- Updated to support ESLint 5
- Updated plugins to the latest versions

## [3.0.0] - 2017-12-15
### Added
- ECMAScript 6 support
- ECMAScript 7 support
- ECMAScript 8 support
- [Babel](https://github.com/babel/eslint-plugin-babel) plugin
- [Filenames](https://github.com/selaux/eslint-plugin-filenames) plugin
- [Mocha](https://github.com/lo1tuma/eslint-plugin-mocha) plugin
- [Promise](https://github.com/xjamundx/eslint-plugin-promise) plugin
- [React](https://github.com/yannickcr/eslint-plugin-react) plugin
- [Security](https://github.com/nodesecurity/eslint-plugin-security) plugin

### Changed
- Updated to support ESLint 4

## [2.0.0] - 2016-07-24
### Changed
- Updated to support ESLint 3
- Set `checkLoops` to `false` for rule `no-constant-condition`
- Set `nestedBinaryExpressions` for rule `no-extra-parens`

## 1.0.0 - 2016-06-25
### Added
- Initial rule set

[5.0.1]: https://github.com/MitMaro/eslint-config-mitmaro/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/MitMaro/eslint-config-mitmaro/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/MitMaro/eslint-config-mitmaro/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/MitMaro/eslint-config-mitmaro/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/MitMaro/eslint-config-mitmaro/compare/v1.0.0...v2.0.0
