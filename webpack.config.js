const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = function(config, { webpack }) {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
      })
    );
  }
  return config;
}
