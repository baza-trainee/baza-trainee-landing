/** @type {import('next').NextConfig} 
const nextConfig = {};
module.exports = nextConfig;*/
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'pl', 'ua'],
    defaultLocale: 'ua',
    localeDetection: false,
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/styles.scss";`,
  },
};
