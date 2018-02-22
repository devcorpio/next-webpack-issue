const webpack = require('webpack');

module.exports = {
  // Webpack configuration
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = 'hidden-source-map';
      config.plugins.push(new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        append: `\n//# sourceMappingURL=[url]`
      }));
    }

    return config;
  },
};
