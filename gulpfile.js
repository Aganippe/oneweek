var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require('gulp-rename');
    gulp.task("合并",  function(){
        gulp.src(["./qc1.js", "./qc2.js"])
            .pipe(concat("qc.js"))
            .pipe(gulp.dest('./js'))
    })
   
    gulp.task("压缩", function(){
        gulp.src(["js/qc.js"])
            .pipe(uglify())
            .pipe(rename('qc.min.js'))
            .pipe(gulp.dest("./js"))
    })

    gulp.task("default", ["合并", "压缩"])
    