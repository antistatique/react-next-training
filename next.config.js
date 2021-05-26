const path = require('path');

module.exports = {
  future: { webpack5: true },
  webpack(config, options) {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      // fallback: {
      //   fs: false,
      //   module: false
      // },
    };
    return config;
  },
}