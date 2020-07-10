#!/usr/bin/env sh

if command -v shellcheck >/dev/null 2>&1; then
	echo "Running ShellCheck on scripts/"
	shellcheck \
		./src/bin/*.bash \
		./scripts/*.sh \
		./scripts/*.bash
else
	echo "shellcheck not found; skipping lint"
fi
