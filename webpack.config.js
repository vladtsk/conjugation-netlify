const path = require('path');

const nodeExternals = require('webpack-node-externals');




//the latest export version below

module.exports = {
  entry: './src/index.js', // Entry point for the app
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules from this rule
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling JavaScript
          options: {
            presets: ['@babel/preset-env'], // Use the preset-env preset
          },
        },
      },
    ],
  },

 
};

