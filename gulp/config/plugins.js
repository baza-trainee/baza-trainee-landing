import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import replace from 'gulp-replace';
import notify from 'gulp-notify';
import ifPlugin from 'gulp-if';

export const plugins = {
  plumber: plumber,
  browsersync: browsersync,
  notify: notify,
  if: ifPlugin,
  replace: replace,
};
