const path = require('path');

// https://github.com/FormidableLabs/webpack-dashboard
const DashboardPlugin = require('webpack-dashboard/plugin');
// https://www.webpackjs.com/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://www.webpackjs.com/plugins/copy-webpack-plugin/
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  context: path.join(__dirname, '../src/renderer'),
  entry: {
    main: path.resolve(__dirname, '../src/renderer/index.tsx'),
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    client: {
      overlay: true,
    },
    port: 2088,
  },
  module: {
    rules: [
      {
        // https://webpack.docschina.org/guides/asset-modules/
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
        generator: {
          filename: 'static/[hash][ext][query]',
        },
      },
      {
        test: /\.(txt|conf)$/i,
        type: 'asset/source',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'], // tsconfig.json 设置 "target": "es6" ，再用 babel 转换一次
        exclude: /node_modules/,
      },
      {
        test: /src\/renderer\/[^\s]+\.js$/i, // src/renderer 下所有js
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: {
            removeComments: false,
            collapseWhitespace: false,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // assetModuleFilename: 'assets/[hash][ext][query]',
    filename: '[name].[hash].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/renderer/index.html'),
    }),
    // 复制public下资源到dist目录
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
        },
      ],
    }),
    // webpack-dev-server 强化插件
    new DashboardPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/renderer/'),
    },
    mainFiles: ['index', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.html'],
  },
  target: 'electron-renderer',
};
