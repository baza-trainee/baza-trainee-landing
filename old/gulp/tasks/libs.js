import flatten from 'gulp-flatten';

export const jsLibs = () => {
  return app.gulp
    .src(app.path.src.jsLibs)
    .pipe(flatten())
    .pipe(app.gulp.dest(app.path.build.js));
};

export const cssLibs = () => {
  return app.gulp
    .src(app.path.src.cssLibs)
    .pipe(flatten())
    .pipe(app.gulp.dest(app.path.build.css));
};
