/*
created by wangrui on 2017/3/2
*/
//一个常见的Webpack配置文件
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/app/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',//配置生成Source Maps，便于调试

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'//跟前面相比就在后面加上了?modules css模块化
      }
    ]
  },
  //自动添加css浏览器前缀
  postcss: [
    require('autoprefixer')
  ],
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 8060
    },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ]
}
