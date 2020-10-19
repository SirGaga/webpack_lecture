const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    // 需要动态获取路径
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
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

    ],
  }
}