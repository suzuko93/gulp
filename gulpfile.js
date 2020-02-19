let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync =  require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	twig = require('gulp-twig'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', async function(){
  del.sync('dist')
});

gulp.task('twig', function () { 
    return gulp.src('app/template/*.twig') 
    .pipe(twig())  
    .pipe(gulp.dest('app/')) 
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		// 'app/libs/slick/slick/slick.min.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('export', async function(){
	let buildCss = gulp.src('app/css/**/*.css')
	.pipe(gulp.dest('dist/css'));

	let buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	let buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	let buildHtml = gulp.src('app/**/*.html')
	.pipe(gulp.dest('dist/'));

	let BuildImg = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img')); 
});

gulp.task('watch',  function(){
	gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/template/**/*.twig', gulp.parallel('twig'));
	gulp.watch('app/js/**/*.js', gulp.parallel('scripts'));
});

gulp.task('build', gulp.parallel('clean', 'export'))

gulp.task('default', gulp.parallel('watch', 'css-libs', 'scripts', 'twig', 'browser-sync'));