// webpack.config.js
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// import webpack from 'webpack'

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
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : './src/index.html',
      hash     : false,
      favicon  : './src/favicon.ico',
      filename : 'index.html',
      inject   : 'body',
      minify   : { collapseWhitespace : true }
    }),
  ]
}
