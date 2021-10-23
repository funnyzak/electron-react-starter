const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    main: path.resolve(process.cwd(), 'src/main/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'], // tsconfig.json 设置 "target": "es6" ，再用 babel 转换一次
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.js',
  },
  target: 'electron-main',
};
