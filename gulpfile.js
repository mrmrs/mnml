// Gulp tasks for MNML

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    csslint = require('gulp-csslint'),
    browserSync = require('browser-sync').create('mnml'),
    browserReload = browserSync.reload;


// Minify all css files in the css directory
// Run this in the root directory of the project with `gulp minify-css `
gulp.task('minify-css', function(){
  gulp.src('./css/mnml.css')
    .pipe(minifyCSS())
    .pipe(rename('mnml.min.css'))
    .pipe(size({gzip:true, showFiles: true}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('minify-img', function(){
  gulp.src('./img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest('./img/'));
});

// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)
gulp.task('csslint', function(){
  gulp.src('./css/mnml.css')
    .pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false,
          'important': false,
          'known-properties': false
        }))
    .pipe(csslint.reporter());
});

// Task that compiles scss files down to good old css
gulp.task('pre-process', function(){
    return gulp.src("./sass/mnml.scss")
        .pipe(sass())
        .on('error', swallowError)
        .pipe(prefix())
        .pipe(size({gzip: false, showFiles: true}))
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(gulp.dest('css'))
        .pipe(minifyCSS())
        .pipe(rename('mnml.min.css'))
        .pipe(size({gzip: false, showFiles: true}))
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

// Initialize browser-sync which starts a static server also allows for
// browsers to reload on filesave
gulp.task('browser-sync', function() {
    browserSync.init({
        server: true
    });
});

// Allows gulp to not break after a sass error.
// Spits error out to console
function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

/*
   DEFAULT TASK

 • Process sass then auto-prefixes and lints outputted css
 • Starts a server on port 3000
 • Reloads browsers when you change html or sass files

*/
gulp.task('default', ['pre-process', 'browser-sync'], function(){
  gulp.start('pre-process', 'csslint', 'minify-img');
  gulp.watch('sass/*', ['pre-process']);
  gulp.watch('*.html', browserReload);
});

