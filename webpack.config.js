/*
created by wangrui on 2017/3/2
*/
//一个常见的Webpack配置文件
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
//webpack内置的优化插件 UglifyJsPlugin：压缩JS代码 ExtractTextPlugin：分离CSS和JS文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + "/app/index.js",
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
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
        loader: ExtractTextPlugin.extract('style','css')//跟前面相比就在后面加上了?modules css模块化
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.js', '.scss'],
    alias: {
      components: path.resolve(__dirname, './app/components'),
      actions: path.resolve(__dirname, './app/actions'),
      reducers: path.resolve(__dirname, './app/reducers'),
      images: path.resolve(__dirname, './app/images'),
      containers: path.resolve(__dirname, './app/containers'),
      common: path.resolve(__dirname, './app/common'),
      utils: path.resolve(__dirname, './app/utils'),
      scripts: path.resolve(__dirname, './app/scripts')
    }
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
    new webpack.optimize.OccurenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.UglifyJsPlugin(),//压缩jjs
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new ExtractTextPlugin("[name]-[hash].css"),
    // new ExtractTextPlugin('./[name].[contenthash].css', {
    //         allChunks: true
    //     }),
  ]
}
