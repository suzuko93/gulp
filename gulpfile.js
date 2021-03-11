const 	gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync =  require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs'),
		postcss = require('gulp-postcss'),
		nano = require('cssnano'),
		rename = require('gulp-rename'),
		del = require('del'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		cache = require('gulp-cache'),
		twig = require('gulp-twig'),
		autoprefixer = require('gulp-autoprefixer'),
		svgSprite = require('gulp-svg-sprite'),
		htmlbeautify = require('gulp-html-beautify');

// svgSprite
const sprite = () => {
	return gulp.src('app/img/sprite/*.svg') 
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg" 
                    }
                },
            }
        ))
        .pipe(gulp.dest('app/img/'));
}

exports.sprite = sprite;

// twig
const twigTemplate = () => {
	return gulp.src('app/template/*.twig') 
    .pipe(twig())  
    .pipe(htmlbeautify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('app/')) 
    .pipe(browserSync.reload({stream: true}));
}

exports.twigTemplate = twigTemplate;

// sass
const scss = () => {
	return gulp.src('app/sass/**/*.scss')
	.pipe(sass())
	.pipe(postcss([
		require('autoprefixer'),
	]))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
}

exports.scss = scss;

// css-libs
const csslibs = () => {
	return gulp.src('app/css/libs.css')
	.pipe(postcss([nano()]))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
}

exports.csslibs = csslibs

// libscripst
const libscripts = () => {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/focus-visible/dist/focus-visible.min.js',
		// 'app/libs/slick/slick/slick.min.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
}

exports.libscripts = libscripts;

// scripts
const scripts = () => {
	return gulp.src('app/js/**/*.js')
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
}

exports.scripts = scripts;

// browser-sync
const sync = () => {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
}

exports.sync = sync;

// img
const img = () => {
	return gulp.src('app/img/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
}

exports.img = img;

// copyBuild
const copyBuild = () => {
	return gulp.src([
		'app/*.html',
		'app/fonts/**/*',
		'app/img/*',
		'app/js/*.js',
		'app/css/style.css',
		'app/css/libs.min.css'
	], { base: 'app' })
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream: true}));
}

exports.copyBuild = copyBuild;

// clean
const cleanDist = () => {
	return del('dist/**/*', { force: true })
}

exports.cleanDist = cleanDist;

// watch
const watch = () => {
	gulp.watch('app/sass/**/*.scss', gulp.series(scss));
	gulp.watch('app/template/**/*.twig', gulp.series(twigTemplate));
	gulp.watch('app/js/**/*.js', gulp.series(scripts));
	gulp.watch('app/img/sprite/*.svg', gulp.series(sprite));
}

exports.watch = watch;

// build
exports.build = gulp.series(cleanDist, scss, csslibs, scripts, libscripts, img, twigTemplate, copyBuild);

// default
exports.default = gulp.parallel(watch, scss, csslibs, sprite, scripts, libscripts, twigTemplate, sync);
