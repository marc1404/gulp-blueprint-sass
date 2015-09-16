# gulp-blueprint-sass
[![npm](https://img.shields.io/npm/v/gulp-blueprint-sass.svg?style=flat-square)](https://www.npmjs.com/package/gulp-blueprint-sass)
[![Travis](https://img.shields.io/travis/marc1404/gulp-blueprint-sass.svg?style=flat-square)](https://travis-ci.org/marc1404/gulp-blueprint-sass)
[![Code Climate](https://img.shields.io/codeclimate/github/marc1404/gulp-blueprint-sass.svg?style=flat-square)](https://codeclimate.com/github/marc1404/gulp-blueprint-sass)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/marc1404/gulp-blueprint-sass.svg?style=flat-square)](https://codeclimate.com/github/marc1404/gulp-blueprint-sass/coverage)
[![npm](https://img.shields.io/npm/l/gulp-blueprint-sass.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-sass/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/gulp-blueprint-sass.svg?style=flat-square)](https://www.npmjs.com/package/gulp-blueprint-sass)

[![David](https://img.shields.io/david/marc1404/gulp-blueprint-sass.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-sass/blob/master/package.json)
[![David](https://img.shields.io/david/dev/marc1404/gulp-blueprint-sass.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-sass/blob/master/package.json)

## Installation
```
$ npm install --save-dev gulp-blueprint-sass
```
  
## Description
This package can be used to setup a [gulp](https://www.npmjs.com/package/gulp) task to compile and minify [SASS](http://sass-lang.com/) stylesheets.

Using:
- [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)

## Usage
*gulpfile.js*
```javascript
var sass = require('gulp-blueprint-sass');

sass(); // gulp task registered with default options
```
  
## Options
You can pass an options object.
- ```task``` (*string*, default: ```'sass'```): The gulp task name
- ```dependencies``` (*string|array*, default: ```['clean']```): The gulp task dependencies
- ```src``` (*string|array*, default: ```'assets/sass/*.scss'```): SASS input file
- ```rename``` (*object*, default: ```{ extname: '.min.css' }```): Options for [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- ```dest``` (*string*, default: ```'public'```): Destination of the compiled and minified CSS stylesheet.

## Test
```
$ npm install -g mocha  
$ mocha
```

## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/gulp-blueprint-sass/blob/master/LICENSE)