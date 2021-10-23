const devServiceConfig = {
  host: '0.0.0.0',
  client: {
    overlay: true,
  },
  port: 2088,
  // 代理设置
  proxy: {
    // example: /api/login => http://localhost:3000/login
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/api': '' },
    },
    // example: /api2/login => http://localhost:3000/api2/login
    '/api2': 'http://localhost:3001',
  },
}

module.exports = {
  devServiceConfig,
}
