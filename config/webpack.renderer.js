const path = require('path')
// https://handlebarsjs.com/guide
const Handlebars = require('handlebars')

// https://github.com/FormidableLabs/webpack-dashboard
const DashboardPlugin = require('webpack-dashboard/plugin')
// https://www.webpackjs.com/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin')
// https://www.webpackjs.com/plugins/copy-webpack-plugin/
const CopyWebpackPlugin = require('copy-webpack-plugin')
// https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// https://www.npmjs.com/package/git-revision-webpack-plugin
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')

const gitRevisionPlugin = new GitRevisionPlugin({
  branch: true,
})

const package = require('../package.json')
const config = require('.')

const gitInfo = {
  VERSION: gitRevisionPlugin.version(),
  COMMITHASH: gitRevisionPlugin.commithash(),
  BRANCH: gitRevisionPlugin.branch(),
  LASTCOMMITDATETIME: gitRevisionPlugin.lastcommitdatetime(),
}

// 模板参数，应用 index.html、hbs文件
const templateParameters = {
  // package.json信息
  package,
  // 配置信息
  config,
  // 进程信息
  process,
  // git信息
  gitInfo,
}

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  context: path.join(__dirname, '../src/renderer'),
  entry: {
    main: path.resolve(__dirname, '../src/renderer/index.tsx'),
  },
  devtool: 'source-map',
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
        test: /\.hbs$/i,
        loader: 'html-loader',
        options: {
          preprocessor: (content, loaderContext) => {
            let result
            try {
              result = Handlebars.compile(content)({
                ...templateParameters,
              })
            } catch (error) {
              loaderContext.emitError(error)
              return content
            }
            return result
          },
        },
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
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // assetModuleFilename: 'assets/[hash][ext][query]',

    // entry file output name
    filename: '[name].[git-revision-hash].bundle.js',
    // filename: '[name].[hash].bundle.js',

    // un entey file output name
    chunkFilename: '[id].chunk.js',

    // 该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，此选项的值都会以 / 结束。
    publicPath: '/',
  },

  plugins: [
    gitRevisionPlugin,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/renderer/index.html'),
      templateParameters: {
        ...templateParameters,
      },
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
    // 支持Tsconfig paths
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx'],
      }),
    ],
    mainFiles: ['index', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.html'],
  },
  target: 'electron-renderer',
}
