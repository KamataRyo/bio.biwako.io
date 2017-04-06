// webpack.config.js

// import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: './src/main.jsx',
  output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [{ loader: 'babel-loader?compact=false' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : './src/index.html',
      hash     : false,
      favicon  : './public/favicon.ico',
      filename : 'index.html',
      inject   : 'body',
      minify   : { collapseWhitespace : true }
    }),
  ]
}
