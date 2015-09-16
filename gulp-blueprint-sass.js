var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

module.exports = init;

function init(options){
  options = defaultOptions(options);

  registerTask(options);
}

function defaultOptions(options){
  options = options || {};
  options.name = options.name || 'sass';
  options.dependencies = options.dependencies || ['clean'];
  options.src = options.src || 'assets/sass/*.scss';
  options.rename = options.rename || { extname: '.min.css' };
  options.dest = options.dest || 'public';

  return options;
}

function registerTask(options){
  gulp.task(options.name, options.dependencies, function(){
    return gulp.src(options.src)
      .pipe(rename(options.rename))
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(options.dest));
  });
}