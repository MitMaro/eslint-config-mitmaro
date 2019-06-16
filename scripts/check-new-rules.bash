#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]}")" && source "./common.bash"

## TODO latest version of eslint-find-rules does not support scoped plugins. master does support it.

eslint-find-rules --deprecated --unused ./scripts/all-combined.js
