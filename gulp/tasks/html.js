export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
