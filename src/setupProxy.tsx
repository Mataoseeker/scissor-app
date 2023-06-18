
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

module.exports = function (app: any) {
  app.use(
    '/v4/shorten',
    cors(),
    createProxyMiddleware({
      target: 'https://api-ssl.bitly.com',
      changeOrigin: true,
      pathRewrite: {
        '^/v4/shorten': '/v4/shorten',
      },
    })
  );
};
