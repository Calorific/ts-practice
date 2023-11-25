const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin');
const commonConfig = require('./common')


module.exports = merge(commonConfig,{
  mode: 'development',
  devtool: 'eval',
  devServer: {
    hot: true,
    open: true,
    allowedHosts: 'all',
    host: '127.0.1.1',
    port: 3000,
    https: true,
    watchFiles: ['src/**/*.html'],
    historyApiFallback: true,
  },
  plugins: [new ESLintPlugin()],
})