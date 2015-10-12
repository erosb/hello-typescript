var gulp = require("gulp");
var addsrc = require("gulp-add-src");
var tsc = require("gulp-typescript");
// var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
//var jasmine = require('gulp-jasmine');
var vinylPaths = require("vinyl-paths");
var del = require("del");
var tsd = require("gulp-tsd");
var copy = require("gulp-copy");


gulp.task("clean", function () {
	return gulp.src("target")
		.pipe(vinylPaths(del));
});

gulp.task("copy-js", ["clean"], function() {
	gulp.src(["src/**/*.js", "src/template/*"])
		.pipe(copy("target/", {
			"prefix" : 1
		}));
});

// tsc --outDir target --module amd src/*.ts typings/tsd.d.ts
gulp.task("compile", ["copy-js"], function() {
	return gulp.src(["src/**/*.ts", "typings/tsd.d.ts"])
		.pipe(sourcemaps.init())
		.pipe(tsc({
			outDir: "target/main/js",
			module: "amd"
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("target"));
});
