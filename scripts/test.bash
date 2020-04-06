#!/usr/bin/env bash

# shellcheck disable=SC1091
source "$(npm bin)/build-scripts.bash"

init-node

mkdir -p "build"

# this order should match the reverse order in src/index.js
declare -a configFiles=(
	'common'
	'react'
	'node'
	'console'
	'babel'
	'mocha'
	'chai'
)

build-eslint-config () {
	echo "'use strict;'"
	echo "const mitmaroEslintConfig = require('../src');"
	echo "module.exports = mitmaroEslintConfig("
	echo "	['$1'],"
	echo "	{root: true}"
	echo ");"
}


for config in "${configFiles[@]}"; do
	echo "Testing '${config}' for errors"
	build-eslint-config "$config" > "build/${config}.js"
	printf "" | eslint --no-eslintrc --config "build/${config}.js" --stdin
	echo "Testing '${config}' for deprecated or undefined rules"
	eslint-find-rules --deprecated --unused "build/${config}.js"
done
