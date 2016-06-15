# Thought of the day

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Codecov](https://img.shields.io/codecov/c/github/nirajpandkar/thought-of-the-day.svg?maxAge=2592000)](https://codecov.io/gh/nirajpandkar/thought-of-the-day) [![Build Status](https://travis-ci.org/nirajpandkar/thought-of-the-day.svg?branch=master)](https://travis-ci.org/nirajpandkar/thought-of-the-day) [![npm](https://img.shields.io/npm/v/thoughts.svg)](https://www.npmjs.com/package/thoughts) [![npm](https://img.shields.io/npm/dt/thoughts.svg)](https://www.npmjs.com/package/thoughts) [![license](https://img.shields.io/github/license/nirajpandkar/thought-of-the-day.svg)]()

> Provides random thoughts/quotes and corresponding authors.

Implementation of this package in chrome extension - https://github.com/nirajpandkar/thoughts-chrome-extension

Positive thought is a key ingredient of leading a happy and fulfilling life. All the worldwide leaders and speakers have always given us inspiring and motivational thoughts. I am thankful to all the known and unknown people for their thoughts in this library.
## Install

```
$ npm install --save thoughts
```
## Usage

```js
const lib = require('thoughts');
var random = lib.random();    // gives random object from any category
var anotherRandom = lib.random("anonymous");  //gives random object from specified category
var particular = lib.particular("anonymous",2);   //gives particular object from specified category

console.log(random.thought);
//=>If you fully accept the worst that can ever happen in your journey, fear won’t ever be an obstacle in starting-up.

console.log(random.author);
//=>Kunal Shah

console.log(anotherRandom.thought);
//=>Be with people who know your VALUE, not your PRICE.

console.log(anotherRandom.author);
//=>Anonymous

console.log(particular.thought);
//=>I don't plan on being famous, but I do plan on living the dream.

console.log(particular.author);
//=>Anonymous

```

## API

### random(category)
Returns a random object from specified category.[Categories listed below](#categories)

Object has two properties - ```author``` and ```thought```

### random()
If used with no parameters(no category), it returns an object from any one of the categories.

### particular(category,index)
Returns a particular object from specified category. Need to refer to ```thoughts.json```.

## Categories
* startup
* anonymous
* motivation

More categories and thoughts are going to be added. Currently finding out a way to enable users to contribute to the 'thoughts' list easily. 

## License

MIT © [Niraj Pandkar](https://github.com/nirajpandkar)

##To do:

1. Find a way to build an internal thoughts json
2. Add a browser build

