// webpack.config.js
import path from 'path'
import webpack from 'webpack'

export default {
  entry: './src/main.jsx',
  output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}
