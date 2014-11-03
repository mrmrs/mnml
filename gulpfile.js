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
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;


// Minify all css files in the css directory
// Run this in the root directory of the project with `gulp minify-css `
gulp.task('minify-css', function(){
  gulp.src('./dist/css/mnml.css')
    .pipe(minifyCSS())
    .pipe(rename('mnml.min.css'))
    .pipe(size({gzip:true, showFiles: true}))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-img', function(){
  gulp.src('./src/img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest('./dist/img/'));
});

// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)
gulp.task('csslint', function(){
  gulp.src('./dist/css/mnml.css')
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
  gulp.src('./src/sass/mnml.scss')
      .pipe(watch(function(files) {
        return files.pipe(sass())
          .pipe(prefix())
          .pipe(size({gzip: false, showFiles: true}))
          .pipe(size({gzip: true, showFiles: true}))
          .pipe(gulp.dest('dist/css'))
          .pipe(minifyCSS())
          .pipe(rename('mnml.min.css'))
          .pipe(size({gzip: false, showFiles: true}))
          .pipe(size({gzip: true, showFiles: true}))
          .pipe(gulp.dest('./dist/css/'))
          .pipe(browserSync.reload({stream:true}));
      }));
});

gulp.task('content', function() {
    gulp.src(['src/*.html'])
      .pipe(gulp.dest('dist/'));
});

// Initialize browser-sync which starts a static server also allows for
// browsers to reload on filesave
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./dist/"
        }
    });
});

// Function to call for reloading browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/*
   DEFAULT TASK

 • Process sass then auto-prefixes and lints outputted css
 • Starts a server on port 3000
 • Reloads browsers when you change html or sass files

*/
gulp.task('default', ['pre-process', 'content', 'bs-reload', 'browser-sync'], function(){
  gulp.start('pre-process', 'csslint', 'minify-img');
  gulp.watch('sass/*.scss', ['pre-process']);
  gulp.watch('css/mnml.css', ['bs-reload']);
  gulp.watch('*.html', ['content','bs-reload']);
});

