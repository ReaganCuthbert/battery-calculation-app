var path = require('path');

module.exports = {
  entry: "./frontend/src/main.js",
  output: {
    path: path.resolve(__dirname, "frontend/dist"),
    filename: "bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}
