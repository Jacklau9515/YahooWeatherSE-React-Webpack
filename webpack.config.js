const webpack = require('webpack');
const path = require('path');

// 定义打包目录路径
const BUILD_DIR = path.resolve(__dirname, './build');
// 定义组件目录路径
const APP_DIR = path.resolve(__dirname, './app');

const config = {
  devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
  entry: `${APP_DIR}/index.jsx`, // 文件打包的入口点
  output: {
    path: BUILD_DIR, // 输出目录的绝对路径
    filename: 'bundle.js', // 输出的每个包的相对路径
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'], // 开启后缀名的自动补全
  },
  module: {
    loaders: [
        {test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
        {test: /\.css$/, loader: "style-loader!css-loader"},
        {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        {test: /\.(jpg|png)$/, loader: "url?limit=8192"}
    ]
  }
};

module.exports = config;