#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]}")" && source "./common.bash"

info "Starting tests"
# These tests mostly check for invalid rules or syntax errors
eslint -c config/babel.js config/babel.js
eslint -c config/chai.js config/chai.js
eslint -c config/common.js config/common.js
eslint -c config/mocha.js config/mocha.js
eslint -c config/node.js config/node.js
eslint -c config/typescript.js config/typescript.js
eslint -c config/typescript-mocha.js config/typescript-mocha.js
# some config will fail against themselves, so test against a simple file
echo -n "" | eslint --stdin -c config/react.js
echo -n "" | eslint --stdin -c config/ecmascript-6.js
echo -n "" | eslint --stdin -c config/ecmascript-7.js
echo -n "" | eslint --stdin -c config/ecmascript-8.js
echo -n "" | eslint --stdin -c config/ecmascript-9.js

info "All tests passed"
