import ts from 'gulp-typescript';
import concat from 'gulp-concat';
import stripImportExport from 'gulp-strip-import-export';
import ugligy from 'gulp-uglify';

export const typescript = () => {
  return app.gulp
    .src(app.path.src.ts, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'TS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      ts({
        module: 'es6',
        noImplicitAny: true,
        target: 'es2018',
      })
    )
    .pipe(stripImportExport())
    .pipe(concat('app.min.js'))
    .pipe(ugligy())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
