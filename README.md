# Thought of the day

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Build Status](https://travis-ci.org/nirajpandkar/thought-of-the-day.svg?branch=master)](https://travis-ci.org/nirajpandkar/thought-of-the-day) [![npm](https://img.shields.io/npm/v/thoughts.svg?maxAge=2592000)](https://www.npmjs.com/package/thoughts) [![npm](https://img.shields.io/npm/dt/thoughts.svg?maxAge=2592000)](https://www.npmjs.com/package/thoughts) [![license](https://img.shields.io/github/license/nirajpandkar/thought-of-the-day.svg?maxAge=2592000)]()

> Provides random thoughts/quotes and corresponding authors.

## Install

```
$ npm install --save thoughts
```
## Usage

```js
const lib = require('thoughts');
var random = lib.random();
var particular = lib.particular(3); //indexing starts from 0

console.log(random.thought);
//=>If you fully accept the worst that can ever happen in your journey, fear won’t ever be an obstacle in starting-up.

console.log(random.author);
//=>Kunal Shah

console.log(particular.thought);
//=>Be so sharp that you cut

console.log(particular.author);
//=>Vijay Shekhar Sharma

```

## License

MIT © [Niraj Pandkar](https://github.com/nirajpandkar)

To do:

1. random() should take category of thought as a parameter

2. Find a way to build an internal thoughts json

3. Add code coverage

4. Add more relevant tests 

