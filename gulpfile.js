/**
 * Created by Administrator on 2016/10/31.
 */
//导入需要的工具包require('node_modules里对应模块')
var gulp = require('gulp'),sass = require('gulp-sass');
//sass任务
gulp.task('sass',function () {
   return gulp.src('src/sass/home/*.scss')//获取该任务需要的文件
       .pipe(sass())//该任务调用的模块
       .pipe(gulp.dest('src/css'));//将在src/css/test.scss文件夹中生产test.css
});
//监听文件
gulp.task('watch1',function () {
   return gulp.watch('src/sass/home/*.scss',['sass']); //监听src/css/test.scss
   // 文件，修改时自动执行sass任务
});
//默认任务
gulp.task('default',['sass','watch1']);

