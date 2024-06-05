/*import path from 'path';
import nodeExternals from 'webpack-node-externals';

import { fileURLToPath } from 'url';


// Convert the URL to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name from the file path
const __dirname = path.dirname(__filename);

export default 
*/



// Latest version below

/*

const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
    //entry: './.netlify/functions/app.js', 

    entry: {
        app: './.netlify/functions/app.js',
        config: './.netlify/functions/config.js',
        subscriptionHandler: './.netlify/functions/subscriptionHandler.js',
        stripeCheckOutRouter: './.netlify/functions/stripeCheckOutRouter.js'
      },

    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, '.netlify/functions-build'),
      filename: '[name].js',
      //libraryTarget: 'commonjs2' 
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },

    resolve: {
        extensions: ['.js']
      },
    
    devtool: 'source-map',
    
  };
  */