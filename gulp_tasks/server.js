'use strict';

module.exports = (gulp) => {
	const connect = require('gulp-connect');

	return (() => {
		gulp.task('srv', done => {
			connect.server({
				root: './'//,
				//port: 8080,
				//livereload: true
			});

			done();
		});
	})();
};