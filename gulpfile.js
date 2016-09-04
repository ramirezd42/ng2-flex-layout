'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('./tsconfig.json')

const distDir = './dist'
const srcDir = './src'

gulp.task('sass', function() {
  return gulp.src(`${srcDir}/**/*.scss`)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(distDir))
})

gulp.task('default', ['sass'])
