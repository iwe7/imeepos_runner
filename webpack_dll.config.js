const path = require('path');
const webpack = require('webpack');

const DllPlugin = require('webpack/lib/DllPlugin');
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    animations: ['@angular/animations', '@angular/platform-browser/animations'],
    elements: ['@angular/elements'],
    cdk: ['@angular/cdk'],
    common: ['@angular/common'],
    router: ['@angular/router'],
    http: ['@angular/common/http'],
    forms: ['@angular/forms'],
    core: ['@angular/core'],
    browser: ['@angular/platform-browser', '@angular/platform-browser-dynamic'],
    rxjs: ['rxjs', 'rxjs/operators'],
    moment: ['moment'],
    lodash: ['lodash']
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist/libs'),
    library: '_dll_[name]',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        commons: {
          name: "meepo",
          chunks: "initial",
          minChunks: 2
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "_dll_[name]",
      path: path.join(__dirname, 'dist/mainfest', "[name].manifest.json"),
    })
  ],
  mode: "production"
};
