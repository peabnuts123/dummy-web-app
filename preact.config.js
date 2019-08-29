// const webpack = require('webpack');
// const path = require('path');
import webpack from 'webpack';
import path from 'path';
import asyncPlugin from 'preact-cli-plugin-async';


export default function (config, env) {
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

  // Transform uh async or something?
  asyncPlugin(config);
}
