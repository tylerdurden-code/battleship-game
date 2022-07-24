// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // {
      //   test: /\.(svg|png|jpg|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[hash].[ext]',
      //       outputPath: 'imgs',
      //     },
      //   },
      // },
    ],
  },
  devServer: {
    watchFiles: ['src/*.html'],
    hot: true,
  },
};
