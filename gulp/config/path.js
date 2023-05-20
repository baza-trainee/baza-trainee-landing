import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    ts: `${srcFolder}/ts/**/*.ts`,
    images: `${srcFolder}/img/**/*.*`,
    scss: `${srcFolder}/scss/style.scss`,
    fonts: `${srcFolder}/fonts/*.*`,
    html: `${srcFolder}/*.html`,
    svgicons: `${srcFolder}/svg/*.svg`,
  },
  watch: {
    ts: `${srcFolder}/ts/**/*.ts`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.*`,
    svgicons: `${srcFolder}/svg/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
