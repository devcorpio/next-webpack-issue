module.exports = {
  // Webpack configuration
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = 'hidden-source-map';
    }

    return config;
  },
};
