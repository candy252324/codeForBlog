var gulp = require('gulp');

var minifycss = require('gulp-minify-css'), // CSS压缩
  uglify = require('gulp-uglify'), // js压缩
  concat = require('gulp-concat'), // 合并文件
  clean = require('gulp-clean'), //清空文件夹
  minhtml = require('gulp-htmlmin'), //html压缩
  jshint = require('gulp-jshint'), //js代码规范性检查
  imagemin = require('gulp-imagemin'); //图片压缩
useref = require('gulp-useref');   //解析html资源定位
rev = require('gulp-rev');  //添加版本号
revReplace = require('gulp-rev-replace'); //替换html中引用的静态资源的名称
browserSync = require('browser-sync').create();   //监控项目文件变动，浏览器自动刷新

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(useref())  //解析html资源定位，即将html中用尖括号包裹起来合并到一起
    .pipe(rev())
    .pipe(revReplace())
    .pipe(minhtml({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function (argument) {
  gulp.src('src/css/*.css')
    .pipe(concat('merge.min.css'))  //将所有的css合并在一起，名字叫做merge.min.css
    .pipe(minifycss())
    .pipe(rev())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function (argument) {
  gulp.src('src/js/*.js')
    .pipe(concat('merge.min.js'))
    .pipe(jshint())
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('img', function (argument) {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('clear', function () {
  gulp.src('dist/*', {read: false})
    .pipe(clean());
});

gulp.task('reload', function(){
  browserSync.reload();
});
gulp.task('server', function() {
  browserSync.init({
    port:3000,
    server: {
      baseDir: "./src"
    },
  });

  gulp.watch(['/**/*.css', '/**/*.js', './**/*.html'], ['reload']);
});


gulp.task('build', ['css', 'js', 'img', 'html']);       // 构建时运行gulp build
// gulp.task('default', ['css', 'js', 'img', 'html']);   // 构建时直接运行gulp
