//imports always go to the top
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass';

function compileSass(done){
    return gulp.src('sass/**/*.scss') // grab everything in the iamges folder
    .pipe(sass().on('error', sass.logError))// run through this
    .pipe(gulp.dest('css'))// put result here

    done();
}

function squashImages(done) {
    gulp.src('images/*') // grab everything in the iamges folder
		.pipe(imagemin())// run image through imagemin
		.pipe(gulp.dest('images/dist')) // put optimized images here
    done();
}

function sayHi(done) {
    console.log('hello from Gulp');
// anything can do here
done();
}

export { 
    sayHi as hello, 
    squashImages as crunch,
    compileSass as compile
 }