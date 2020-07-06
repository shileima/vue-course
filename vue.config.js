const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/admin' : ''

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成 .map 文件
  productionSourceMap: false,
  devServer: {
      open: true,
      proxy: {
        '/api': {
            target: 'http://localhost:3001',
            changeOrigin: false
        }

      }
  }
}
