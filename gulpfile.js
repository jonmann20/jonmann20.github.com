'use strict';

const concat = require('gulp-concat'),
	gulp = require('gulp'),
	iff = require('gulp-if'),
	liveReload = require('gulp-livereload'),
	sourcemaps = require('gulp-sourcemaps'),
	isDev = process.argv.length === 2,
	scssSrc = ['src/scss/**/*.scss', '!vars.scss'];

require('./gulp_tasks/del')(gulp);
require('./gulp_tasks/scss')(gulp, isDev, iff, concat, liveReload, sourcemaps, scssSrc);
require('./gulp_tasks/js')(gulp, isDev, iff, concat, liveReload, sourcemaps);
require('./gulp_tasks/copy')(gulp);
require('./gulp_tasks/include')(gulp, isDev, iff, liveReload);
require('./gulp_tasks/server')(gulp);
require('./gulp_tasks/watch')(gulp, liveReload, scssSrc);

gulp.task('default', gulp.series(
	gulp.parallel('scss', 'js', 'copy', 'include'),
	gulp.parallel('srv', 'watch')
));

gulp.task('test', gulp.parallel('scss-lint', 'jscs', 'jshint'));

gulp.task('prd', gulp.parallel(
	'scss',
	'test',
	'js',
	'copy',
	'include',
	'bundle'
));