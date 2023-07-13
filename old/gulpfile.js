import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { typescript } from './gulp/tasks/typescript.js';
import { fonts } from './gulp/tasks/fonts.js';
import { images } from './gulp/tasks/images.js';
import { svgicons } from './gulp/tasks/svgicons.js';
import { jsLibs } from './gulp/tasks/libs.js';
import { cssLibs } from './gulp/tasks/libs.js';

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.ts, typescript);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.svgicons, svgicons);
}

const commonTasks = gulp.parallel(
  html,
  fonts,
  scss,
  typescript,
  images,
  svgicons,
  jsLibs,
  cssLibs
);

const dev = gulp.series(reset, commonTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, commonTasks);

export { dev };
export { build };

gulp.task('default', dev);
