/* eslint no-unused-vars: off */
'use strict';

// this file contains syntax that should always pass linting

const objectSimple = { foo: 'bar' };

const objectNestedArray = { foo: [ 'bar' ]};

const objectNewlineSingle = {
	foo1: 'bar', foo2: 'bar'
};

const objectNewlineMultiple = {
	foo1: 'bar',
	foo2: 'bar'
};

const nestedSingleObject = {
	foo: {
		bar1: 'bar',
		bar2: 'bar',
		bar3: 'bar'
	}
};

while (true) {
	break;
}

const parensFoo = true;
const parensBar = false;
const parensBool = (parensFoo && parensBar) || parensFoo;
