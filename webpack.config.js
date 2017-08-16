const path = require("path");
const webpack = require("webpack");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: [
      "./client/app.tsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, "./public/js"),
    filename: `bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            target: "es5"
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules"
    ],
    extensions: [
      '.js', '.jsx', '.json', '.ts', '.tsx'
    ]
  },
  plugins: [
    new CleanPlugin([
      'public/js/*.js',
      'public/css/*.css'
    ], {
      verbose: true
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER_ENV': JSON.stringify(true)
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
