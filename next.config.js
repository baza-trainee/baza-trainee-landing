const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const url = process.env.NEXT_PUBLIC_PROXY_URL;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/styles.scss";`,
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${url}/api/v1/:path*`,
      },
    ];
  },
  async middleware() {
    const proxy = createProxyMiddleware({
      target: url,
      changeOrigin: true,
      cookieDomainRewrite: '', // Enable cookie sharing
      secure: true, // If the backend is not using HTTPS
    });

    return {
      '/api/v1': proxy,
    };
  },
};
