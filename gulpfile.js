/*!
 * Buy Me A Coffee JS | Gulpfile
 * By Waren Gonzaga
 */

// modules
const {
    series, 
    src, 
    dest }      = require('gulp'),
    uglify      = require('gulp-uglify-es').default,
    eslint      = require('gulp-eslint'),
    pipeline    = require('readable-stream').pipeline,
    header      = require('gulp-header'),
    fs          = require('fs');

// dev paths
const path = {
    dist: "./dist",
    scripts: "./src/**/*.js"
};

// open source label
const pkg = JSON.parse(fs.readFileSync('package.json'));
const data = {
    banner: [
        '/*!',
        ' * BuyMeACoffeeJS - <%= homepage %>',
        ' * <%= description %>',
        ' * Version: <%= version %>',
        ' * Github: <%= github %>',
        ' * Licensed Under The MIT License: http://opensource.org/licenses/MIT',
        ' * Copyright (c) <%= new Date().getFullYear() %> <%= author %>',
        ' *',
        ' * Facebook: @warengonzagaofficial',
        ' * Twitter: @warengonzaga',
        ' * Github: @warengonzaga',
        ' * Website: warengonzaga.com',
        ' */\n\n',
    ].join('\n'),
};

// lint js
function lintJS() {
    return src(path.scripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// minify js
function minifyJS() {
    return pipeline(
        src(path.scripts), 
        uglify(), 
        dest(path.dist));
}

// add copyright label
function copyright() {
    return src([path.dist+"/**/*.js"], {allowEmpty: true})
        .pipe(header(data.banner, pkg))
        .pipe(dest([path.dist]));
}

exports.default = series(lintJS, minifyJS, copyright);
