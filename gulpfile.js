var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var nib = require('nib');

var path = {
	scripts: {
		watch: './src/scripts/**/*.js',
		output: './build/js',
		main: './src/scripts/main.js'
	},
	styles: {
		watch: './src/styles/**/*.styl',
		output: './build/css',
		main: './src/styles/main.styl'
	},
	html: {
		watch: './src/**/*.html',
		output: './build'
	}
}

gulp.task('server', function() {
	connect.server({
		root: './build',
		livereload: true
		});
	});

gulp.task('build:js', function() {
	gulp.src(path.scripts.main)
		.pipe(gulp.dest(path.scripts.output))
		.pipe(connect.reload());
	});

gulp.task('build:css', function() {
	gulp.src(path.styles.main)
		.pipe(stylus({ use: nib(), compress: true, 'include css': true }))
		.pipe(gulp.dest(path.styles.output))
		.pipe(connect.reload());
	});

gulp.task('build:html', function() {
	gulp.src(path.html.watch)
		.pipe(gulp.dest(path.html.output))
		.pipe(connect.reload());
	});

gulp.task('build:images', function() {
	gulp.src('./src/images/**/*.*')
		.pipe(gulp.dest('./build/img'));
	})

gulp.task('watch', function() {
	gulp.watch('./src/images/**/*.*', ['build:images']);
	gulp.watch(path.scripts.watch, ['build:js']);
	gulp.watch(path.styles.watch, ['build:css']);
	gulp.watch(path.html.watch, ['build:html']);
	});

gulp.task('build', ['build:css','build:js','build:html', 'build:images']);

gulp.task('default', ['server', 'watch', 'build']);