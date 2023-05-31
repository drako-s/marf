const { src, dest, series, watch } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

//Minify all javascript files
function minify(cb){
    return src('src/*.js')
    .pipe(uglify())
    .pipe(dest('dist/'));
    cb();
}

function html(cb){
    return src('src/*.html')
    .pipe(dest('dist/'));
}

function compileSass(){
    return src('src/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css/'))
    .pipe(dest('dist/css/'));
}

function imgSquash(){
    return src('src/images/*')
    .pipe(dest('dist/images/'));
}

exports.default = function(){
    watch('src/*.js', series(minify));
    watch('src/css/style.scss', series(compileSass));
    watch('src/*.html', series(html));
    watch('src/images/*', series(imgSquash));
};

