#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]}")" && source "./common.bash"

info "Starting tests"
# These tests mostly check for invalid rules or syntax errors
eslint -c config/babel.js config/babel.js
eslint -c config/common.js config/common.js
eslint -c config/mocha.js config/mocha.js
eslint -c config/node.js config/node.js
# some config will fail against themselves, so test against any empty file
echo "" | eslint --stdin -c config/react.js
echo "" | eslint --stdin -c config/ecmascript-7.js

info "All tests passed"
