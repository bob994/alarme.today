'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      '@babel/preset-react',
      '@babel/preset-env',
      [
        '@emotion/babel-preset-css-prop',
        {
          autoLabel: true,
          labelFormat: '[local]',
        },
      ],
    ],
  },
};

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          {
            loader: 'source-map-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
