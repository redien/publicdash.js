# publicdash.js
![version](http://img.shields.io/badge/version-0.1.0-blue.svg) [![Public Domain](http://img.shields.io/badge/public%20domain%3F-yes-blue.svg)](http://creativecommons.org/publicdomain/zero/1.0/) [![SemVer](http://img.shields.io/badge/SemVer-2.0.0-blue.svg)](http://semver.org/spec/v2.0.0.html) ![development stage](http://img.shields.io/badge/development%20stage-alpha-orange.svg)

publicdash.js is a functional utility library similar to lodash and underscore.js in the public domain.
Licensing is pretty much the only reason for creating this library.

## Use
```
var _ = require('publicdash');

_.map([1, 2, 3], function (a) { return a * a; });
// Evaluates to [1, 4, 9]

_.reduce([1, 2, 3], function (result, a, index) { return result + (a * index); }, '');
// Evaluates to '029'
```

#### Target platforms
The module is written using node.js-style modules.

| Target Host   | Build Status | Built Configurations | Node.js Versions   |
| :------------ | :----------: | :------------------- | :----------------- |
| linux-gcc | [![travis-ci build status](https://travis-ci.org/redien/publicdash.js.svg?branch=master)](https://travis-ci.org/redien/publicdash.js) | x64 | 0.10, 0.11 |

## Compile
````
grunt
```

## Development
[![Dependencies](https://david-dm.org/redien/publicdash.js.svg)](https://david-dm.org/redien/publicdash.js) [![devDependencies](https://david-dm.org/redien/publicdash.js/dev-status.svg)](https://david-dm.org/redien/publicdash.js#info=devDependencies)

Fork the project and install dependencies:
```
npm install -g mocha
npm install
```

#### Test
publicdash.js performs testing using mocha and should.js.

```
npm test
```

#### Code coverage
[![Coverage Status](https://img.shields.io/coveralls/redien/publicdash.js.svg)](https://coveralls.io/r/redien/publicdash.js?branch=master)

publicdash.js analyzes code coverage using blanket.js. To produce a report, run:
```
npm run-script coverage
```

This will generate a file named `coverage.html` in the project root directory which can be viewed in a browser.

## Copy

publicdash.js - Javascript functional utilities in the public domain.

Written in 2015 by Jesper Oskarsson jesosk@gmail.com

To the extent possible under law, the author(s) have dedicated all copyright
and related and neighboring rights to this software to the public domain worldwide.
This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software.
If not, see <[http://creativecommons.org/publicdomain/zero/1.0/](http://creativecommons.org/publicdomain/zero/1.0/)>.
