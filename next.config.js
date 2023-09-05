/** @type {import('next').NextConfig} */

const url = process.env.NEXT_PUBLIC_PROXY_URL;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION', // your next configs go here
  },
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${url}/api/v1/:path*`,
      },
      {
        source: '/admin/api/v1/:path*',
        destination: `${url}/api/v1/:path*`,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });

    return config;
  },
  images: {
    domains: ['baza-trainee.tech'],
  },
});
