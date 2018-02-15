const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loaders: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,

        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './dist'
  }
};
