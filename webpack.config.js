const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
},
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html"
    })
  ],
  entry: './src/client/bundle.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
}
