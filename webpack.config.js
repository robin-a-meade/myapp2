const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: 'development',
  entry: { // This is relative to 'context' which, by default, is the current directory
    main: {
      'import': [
        './src'
      ]
    }
  },
  devServer: {
    static: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  module: {
    parser: {
      asset: {
        dataUrlCondition: {
          maxSize: 8096
        }
      }
    },
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ]
}

module.exports = config;

