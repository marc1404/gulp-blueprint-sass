require('should');

var gulp = require('gulp');
var sass = require('../lib/gulp-blueprint-sass');
var sinon = require('sinon');
var clean = sinon.spy();

gulp.task('clean', clean);
sass();

describe('when running the sass task', function(){

  it('should complete without an error', function(){
    gulp.start('sass');
  });

  it('should have called clean() exactly once', function(){
    clean.calledOnce.should.be.exactly(true);
  });

});