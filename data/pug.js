const { src, dest } = require('gulp');
const { onError } = require('gulp-notify');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const { readFileSync } = require('fs');
const route = require('../routes');

module.exports = function php() {
  return src(route.pug.src)
    .pipe(plumber())
    .pipe(pug({
      locals: {
        menu: JSON.parse(readFileSync('data/menu.json', 'utf8')),
        content: JSON.parse(readFileSync('data/content.json', 'utf8'))
      },
      pretty: true
    }))
    .on('error', onError({
      title: 'Pug',
      message: 'Error: <%= error.message %>'
    }))
    .pipe(rename({
      extname: '.php'
    }))
    .pipe(dest(route.pug.dest))
    .on('end', $.sync.reload);
};
