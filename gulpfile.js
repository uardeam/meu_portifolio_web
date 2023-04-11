// Importanto Plugins
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'))

// Importação dos arquivos
const SRC = {
  STYLES: './src/styles/*.scss',
  SCRIPTS: './src/scripts/*.js',
  IMAGES: './src/images/*.{jpg,png}',
}

// Exportação dos arquvios
const DIST = {
  STYLES: './dist/css',
  SCRIPTS: './dist/scripts',
  IMAGES: './dist/images',
}

// Criando função para compila um arquivo SASS para CSS minificado e mapeando a origem.
function compilaSass() {
  return gulp
    .src(SRC.STYLES)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(DIST.STYLES))
}

// Função para comprimir o codigo JavaScript
function compressedJS() {
  return gulp
    .src(SRC.SCRIPTS)
    .pipe(uglify())
    .pipe(gulp.dest(DIST.SCRIPTS))
}

// Função para comprimir imagens
function compressedIMG() {
  return gulp.src(SRC.IMAGES).pipe(imagemin()).pipe(gulp.dest(DIST.IMAGES))
}

// Função para monitorar alterações nos arquivos automaticamente.
// Criando tarefas e atribuindo a ela uma função para executa-la no terminal.
// definindo para executar imediatamente, mesmo que nenhum arquivo seja modificado.
exports.default = function () {
  gulp.watch(SRC.STYLES, { ignoreInitial: false }, gulp.series(compilaSass))
  gulp.watch(SRC.IMAGES, { ignoreInitial: false }, gulp.series(compressedIMG))
  gulp.watch(SRC.SCRIPTS, { ignoreInitial: false }, gulp.series(compressedJS))
}
