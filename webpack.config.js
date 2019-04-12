const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {

    entry: './src/demo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    // context: path.join(__dirname, 'src'),
    devtool: false,
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
          ]
    },
    
    plugins: [
        // new CopyWebpackPlugin( [ {from: './src/source/**/*.png' , to: './source/**/*'}]),
        new webpack.SourceMapDevToolPlugin({  filename: '[name].js.map', }),
        new HtmlWebpackPlugin({template: './src/index.html'}),
      ]
};