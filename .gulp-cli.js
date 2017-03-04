const gulp = require('gulp')
const chalk = require('chalk')
const argv = require('minimist')(process.argv.slice(2))

const tasks = argv._.length === 0 ? ['default'] : argv._

gulp.on('task_start', (taskOpts) => {
  console.log(taskOpts)
})

gulp.on('task_err', (taskOpts) => {
  console.log(taskOpts)
})

gulp.on('task_stop', (taskOpts) => {
  console.log(taskOpts)
})

gulp.on('task_not_found', (taskOpts) => {
  console.log(taskOpts)
})

gulp.start.apply(gulp, tasks)
