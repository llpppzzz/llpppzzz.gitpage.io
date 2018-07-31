const API_SERVICE = 'http://wmdev.gf.com.cn:8000'

module.exports = {
  proxyServer: {
    '/api': {
      target: API_SERVICE,
      changeOrigin: true,

      // 代理请求发送前做处理
      onProxyReq: function (proxyReq, req, res) {

        // 重新设置 headers.host
        proxyReq.setHeader('host', API_SERVICE);

        // 对 POST/PUT 请求，把参数缓存起来
        // if (req.method === 'POST' || req.method === 'PUT') {
        //   let params = '';
        //   req.on('data', function (chunk) {
        //     params += chunk;
        //   }).on('end', function () {
        //     req.paramsCache = params;
        //   })
        // }
      }
    }
  }
}
