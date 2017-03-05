const gutil = require('gulp-util')
const {watch, src, task, dest} = require('lodash/bindAll')(require('gulp'), ['watch', 'src', 'task', 'dest'])
const browserSync = require('browser-sync')
const bs = browserSync.create()

task('default', () => {
  gutil.log('Hello')
})

task('scripts', () =>
  src(['src/**/*.js'])
  .pipe(require('gulp-babel')())
  .on('error', function(err) {
    console.error(err)
    this.emit('end')
  })
  .pipe(dest('.'))
  .pipe(bs.stream())
)

task('scripts:watch', ['scripts'], () => {
  watch(['src/**/*.js'], ['scripts'])
})

task('styles', () =>
  src(['src/**/*.css'])
  .pipe(require('gulp-postcss')([
    require('postcss-import')(),
    require('precss')({ import: false }),
    require('postcss-cssnext')()
  ]))
  .on('error', function(err) {
    console.error(err)
    this.emit('end')
  })
  .pipe(dest('.'))
  .pipe(bs.stream())
)

task('styles:watch', ['styles'], () => {
  watch(['src/**/*.css'], ['styles'])
})

task('templates', () =>
  src(['src/**/*.pug'])
  .pipe(require('gulp-pug')())
  .on('error', function(err) {
    console.error(err)
    this.emit('end')
  })
  .pipe(dest('.'))
  .pipe(bs.stream())
)

task('templates:watch', ['templates'], () => {
  watch(['src/**/*.pug'], ['templates'])
})

task('browser-sync', ['scripts'], () => {
  bs.init({
    server: {
      baseDir: '.'
    }
  })
})

task('watch', [
  'browser-sync',
  'scripts:watch',
  'styles:watch',
  'templates:watch'
])

