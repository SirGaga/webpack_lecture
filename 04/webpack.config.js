const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
module.exports = {
  // 设置默认的打包模式
  mode: 'development',
  // 设置入口js
  entry: './src/main.js',
  devServer: {
    contentBase: './dist', // 为哪一个文件夹提供本地服务，默认是根文件夹
    // port: 8081, // 端口号，默认是8080
    inline: true, // 页面实时刷新
    // historyApiFallback: false, // 在SPA页面中，依赖HTML5的history模式
  },
  // 出口配置
  output: {
    // 需要动态获取路径
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
            'style-loader','css-loader','less-loader'
          // {
          //   loader: 'style-loader',
          // },
          // {
          //   loader: 'css-loader',
          // },
          // {
          //   loader:'less-loader' ,
          //   options: {
          //     lessOptions: {
          //       strictMath: true,
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.css$/i,
        // css-loader 只负责加载css文件不负责解析
        // style-loader负责将样式添加到dom中，使其生效
        // 使用多个loader时，是从右往左
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时会将图片编译成base64字符串形式在页面上进行展示
              // 当加载的图片大于limit时，需要使用file-loader模块进行加载
              limit: 8192,
              name:'img/[name]_[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use:['vue-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.vue','.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  plugins: [
      new VueLoaderPlugin(),
    // 版权声明插件 BannerPlugin
    new webpack.BannerPlugin('最终版权归XXX所有'),
    // 将html文件打包到dist文件夹中
    new HtmlWebpackPlugin({
        template: "index.html"
    }),
      // JS 压缩
      // new UglifyjsWebpackPlugin()
  ]
}