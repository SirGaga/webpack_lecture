const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig,{
  // 设置默认的打包模式
  mode: 'development',
  devServer: {
    contentBase: './dist', // 为哪一个文件夹提供本地服务，默认是根文件夹
    // port: 8081, // 端口号，默认是8080
    inline: true, // 页面实时刷新
    // historyApiFallback: false, // 在SPA页面中，依赖HTML5的history模式
  }
})