import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';

export const svgicons = () => {
  return app.gulp
    .src(app.path.src.svgicons)
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename({ basename: 'sprite' }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
