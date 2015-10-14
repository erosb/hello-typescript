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
var tslint = require('gulp-tslint');

gulp.task("clean", function () {
	return gulp.src("target")
		.pipe(vinylPaths(del));
});

gulp.task("copy-js", ["clean"], function() {
	gulp.src("static-skeleton/**/*")
		.pipe(copy("target", {
			"prefix" : 1
		}));
	gulp.src("src/template/*.html")
		.pipe(copy("target/js", {
			"prefix" : 1
		}));
		
});

var tscOptions = {
	module: "amd",
	target : "ES5"
};

gulp.task("lint", function() {
	gulp.src(["src/**/*.ts", "typings/tsd.d.ts"])
		.pipe(tslint({
			configuration : {
				rules : {
					// add your tslint rules here, see https://www.npmjs.com/package/tslint
				}
			}
		}))
		.pipe(tslint.report("verbose"));
});

// tsc --outDir target --module amd src/*.ts typings/tsd.d.ts
gulp.task("compile", ["lint", "copy-js"], function() {
	return gulp.src(["src/**/*.ts", "typings/tsd.d.ts"])
		.pipe(sourcemaps.init())
		.pipe(tsc(tscOptions))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("target/js"));
});


gulp.task("test-compile", ["copy-js"], function(){
	return gulp.src(["src/**/*.ts", "typings/tsd.d.ts"])
		//.pipe(sourcemaps.init())
		.pipe(tsc(tscOptions))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest("target/js"));
});
