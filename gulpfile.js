function defaultTask(cb) {
    cb();
}
exports.default = defaultTask

// Сжатие css и перенос в dist
const cleanCSS = require('gulp-clean-css');
const { src, dest } = require('gulp');

function minifyСss(cb) {
    return src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css/'))
    cb();
}

// Сжатие файлов js и перенос в dist
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const rename = require("gulp-rename");

function minifyJs(cb) {
    return pipeline(
        src(['./src/js/*.js', '!./src/js/*.min.js']), // Исключаем минифицированные файлы
        uglify(), // Сжимаем JS файл
        rename({suffix: '.min'}), // Добавляем суффикс .min
        dest('dist/js/') // Выгружаем в папку назначения
    );
  cb();
}

function moveJs(cb) {
    return src('./src/js/*min.js')
    .pipe(dest('dist/js/'))
    cb();
}

// Сжатие файлов html и перенос в dist
const htmlmin = require('gulp-htmlmin');

function minifyHtml(cb) {
    return src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'))
    cb();
}

// Перенос шрифтов
function fonts(cb) {
    return src('./src/fonts/**/*')
    .pipe(dest('dist/fonts/'))
    cb();
}

//Выгрузка всех файлов и подготовка к публикации 
const { series } = require('gulp');
exports.build = series(minifyHtml, minifyСss, fonts, minifyJs, moveJs)