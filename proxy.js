const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log('Setting up proxy middleware...');
    app.use('/proxy', createProxyMiddleware({
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        selfHandleResponse: true,
        onProxyRes: (proxyRes, req, res) => {
            console.log('Proxy response received for:', req.url);
            proxyRes.pipe(res);
        },
        onError: (err, req, res) => {
            console.error('Proxy error:', err);
            res.status(500).send('Proxy encountered an error.');
        }
    }));
};
