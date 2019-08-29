const webpack = require('webpack');
const path = require('path');

module.exports = function (config, env) {
  // Alias paths
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};
  config.resolve.alias['@app'] = path.resolve(__dirname, 'src/');

  // Define API host
  config.plugins.push(
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL || `http://localhost:3000`),
    })
  );
};
