const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    output: {
      path: path.resolve(__dirname, 'dist'),
    }
  }),
  new CopyPlugin({
    patterns: [{
      from: "src/assets",
      to: "assets"
    }, ],
    options: {
      concurrency: 100,
    },
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
};

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [{
        test: /\.(s[ac]|c)ss$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ""
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    watchFiles: ["src/index.html"],
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
};