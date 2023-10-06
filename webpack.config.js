const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const REACT_REPO_DIR = path.resolve(__dirname, "./react");

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  devtool: 'source-map',
  stats: 'errors-only',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      "react": path.resolve(REACT_REPO_DIR, "packages/react"),
      "react-dom": path.resolve(REACT_REPO_DIR, "packages/react-dom"),
      "react-reconciler": path.resolve(
        REACT_REPO_DIR,
        "packages/react-reconciler"
      ),
      "react-dom-binding": path.resolve(
        REACT_REPO_DIR,
        "packages/react-dom-binding"
      ),
      "scheduler": path.resolve(REACT_REPO_DIR, "packages/scheduler"),
      "shared": path.resolve(REACT_REPO_DIR, "packages/shared"),
    },
  },
  devServer: {},
  plugins: [
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      __PROFILE__: true,
      __UMD__: true,
      __EXPERIMENTAL__: true,
    })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                  development: true,
                },
              ],
              [
                "@babel/preset-typescript",
                { isTSX: true, allExtensions: true },
              ],
            ],
            plugins: [
              'react-refresh/babel'
            ]
          },
        },
      },
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-flow",
            ],
          },
        },
      },
    ],
  },
};
