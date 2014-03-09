var gulp = require('gulp'); 
var gulpUtil = require('gulp-util'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function(){
  gulp.src('js/lib/*')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/min'))

});

gulp.task('default', function(){
  console.log('default');
});

