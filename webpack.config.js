const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
    },
  },
};

const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  // ... other webpack configuration options ...
  plugins: [
    new DotenvWebpackPlugin(),
    // ... other plugins ...
  ],
};
