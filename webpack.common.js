const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlWebpackPluginConfig = {
  meta: {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  },
  templateParameters: {
    brandName: "Story App",
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // css loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: ["image-loader"],
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Dashboard",
      filename: "index.html",
      template: path.resolve(__dirname, "src/views/dashboard.html"),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: "Add Story",
      filename: "add.html",
      template: path.resolve(__dirname, "src/views/add.html"),
      ...htmlWebpackPluginConfig,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
