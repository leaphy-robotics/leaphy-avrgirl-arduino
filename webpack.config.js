const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const resolve = {
  fallback: {
     "util": require.resolve("util/"),
     "stream": require.resolve("stream-browserify"),
     "os": require.resolve("os-browserify/browser"),
  }
}

const plugins = [
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
    process: 'process/browser.js',
  })
];

const importableConfig = {
  entry: './leaphy-avrgirl-arduino.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'leaphy-avrgirl-arduino.js',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false,
  },
  resolve,
  plugins
};

const importableMinConfig = {
  entry: './leaphy-avrgirl-arduino.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'leaphy-avrgirl-arduino.min.js',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve,
  plugins
};


const globalConfig = {
  entry: './leaphy-avrgirl-arduino.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'leaphy-avrgirl-arduino.global.min.js',
    library: 'LeaphyAvrgirlArduino',
    libraryTarget: 'window'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve,
};
const globalConfigNonMin = {
  entry: './leaphy-avrgirl-arduino.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'leaphy-avrgirl-arduino.global.js',
    library: 'LeaphyAvrgirlArduino',
    libraryTarget: 'window',
  },
  optimization: {
    minimize: false,
  },
  resolve,
  plugins
};

module.exports = [importableConfig, importableMinConfig, globalConfig, globalConfigNonMin];
