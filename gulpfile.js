/**
 * Buy Me A Coffee JS | Gulpfile
 * By Waren Gonzaga
 */

const { series, parallel } = require('gulp');

function check(cb) {
    cb();
}

exports.default = series(check);