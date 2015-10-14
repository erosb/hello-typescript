var gulp = require("gulp");
var addsrc = require("gulp-add-src");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var vinylPaths = require("vinyl-paths");
var del = require("del");
var tsd = require("gulp-tsd");
var copy = require("gulp-copy");
var tslint = require('gulp-tslint');

gulp.task("clean", function () {
	return gulp.src("js/*/**")
		.pipe(vinylPaths(del));
});

gulp.task("copy-templates", ["clean"], function() {
	gulp.src("src/template/*.html")
		.pipe(copy("js", {
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


var tsProject = tsc.createProject(tscOptions);

gulp.task("compile", function() {
	var tsResult = gulp.src(["src/**/*.ts", "typings/tsd.d.ts"])
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));
		
	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('js'));
});

gulp.task("watch", ["compile"], function() {
    gulp.watch("src/**/*.ts", ["compile"]);
});
