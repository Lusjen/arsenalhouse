var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify");

// Скрипты проекта

// All start 
gulp.task('all-js', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/libs/slick.min.js',
		'src/js/libs/TweenLite.min.js',
		'src/js/libs/CSSPlugin.min.js',
		'src/js/common.js',
		])
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// All end 

gulp.task('common-js', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/libs/TweenLite.min.js',
		'src/js/libs/CSSPlugin.min.js',
		'src/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

// Main start
gulp.task('main-js', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/main.js',
		])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Main end

// Documents start
gulp.task('documents-js', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/documents.js',
		])
	.pipe(concat('documents.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Documents end

// Contacts start
gulp.task('contacts-js', function() {
	return gulp.src([
		'src/js/contacts.js',
		])
	.pipe(concat('contacts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Contacts end

// Construction start
gulp.task('construction-js', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/construction.js'
		])
	.pipe(concat('construction.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Construction end

// Gallery start
gulp.task('gallery-js', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/gallery.js'
		])
	.pipe(concat('gallery.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Gallery end

// Developer start
gulp.task('developer-js', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/developer.js'
		])
	.pipe(concat('developer.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Developer end

// Infrastructure start
gulp.task('infrastructure-js', function() {
	return gulp.src([
		'src/js/infrastructure.js'
		])
	.pipe(concat('infrastructure.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Infrastructure end

// News start
gulp.task('news-js', function() {
	return gulp.src([
		'src/js/news.js'
		])
	.pipe(concat('news.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// News end

// News open start
gulp.task('news-open-js', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/news-open.js'
		])
	.pipe(concat('news-open.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// News open end


// Terms Of Purchase
gulp.task('terms-of-purchase-js', function() {
	return gulp.src([
		'src/js/terms-of-purchase.js'
		])
	.pipe(concat('terms-of-purchase.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Terms Of Purchase end

// Choose Apartment
gulp.task('choose-apartment-js', function() {
	return gulp.src([
		'src/js/choose-apartment.js'
		])
	.pipe(concat('choose-apartment.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Choose Apartment end


// Apartments list
gulp.task('apartments-list-js', function() {
	return gulp.src([
		'src/js/apartments-list.js'
		])
	.pipe(concat('apartments-list.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Apartments list

gulp.task('js', [
	'common-js', 
	'main-js', 
	'documents-js', 
	'contacts-js', 
	'construction-js', 
	'gallery-js', 
	'developer-js', 
	'infrastructure-js', 
	'news-js',
	'news-open-js',
	'terms-of-purchase-js',
	'choose-apartment-js',
	'apartments-list-js'], function() {
	return gulp.src([
		'src/js/common.js',
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		//proxy: "http://localhost:80/arsenalhouse/dist",
		proxy: "arsenalhouse/dist",
    	notify: false // Отключаем уведомления
	});
});

gulp.task('sass', function() {
	return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch(['libs/**/*.js', 'src/**/*.js'], ['js']);
	gulp.watch('dist/**/*.php', browserSync.reload);
	gulp.watch('dist/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

	var buildFiles = gulp.src([
		'src/*.html',
		'src/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'src/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'src/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'src/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

/*gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});*/

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
