const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass');
const clean = require('gulp-clean-css')

// Compilando SCSS para CSS
gulp.task('sass', function() {
  return gulp.src('./src/styles/custom-styles.scss')
    .pipe(sass())
    .pipe(clean({ compatibility: 'ie11' }))
    .pipe(gulp.dest('assets'))
})

//Monitorar as mudanças do scss
gulp.task('watch', function() {
  // Todas as pastas e subpastas da pasta styles
  gulp.watch('./src/styles/**/*.scss', gulp.series('sass'));

  // Theme Kit
  themeKit.command('watch', {
    //Objeto de opções - Config.yml
    env: 'development'
  })
})