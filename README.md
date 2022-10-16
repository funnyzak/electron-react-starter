# Electron React Starter

## 说明

基于 React Typescript Webpack 构建 Electron 应用脚手架。

## 特点

- babel 转换支持
- typescript 支持
- react 支持
- sass 支持
- less 支持
- hbs 文件 模板支持
- png|svg|jpg|jpeg|gif 引入支持
- git commit hooks, no 💩

### 预览

![run](public/_docs/assets/img/run-demo.jpg)

## 环境

主要依赖库：

- electron: ^21.1.1
- electron-builder: ^23.6.0
- eslint: ^8.25.0
- babel: ^7.19.0
- typescript: ^4.8.4
- webpack: ^5.74.0
- prettier: 2.4.1

### UI/组件

- [antd](https://ant.design/docs/react/introduce-cn)
- [@ant-design/icons](https://ant.design/components/icon/)
- [react-icons](https://github.com/react-icons/react-icons)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [@emotion/react](https://emotion.sh/docs/introduction)
- [@emotion/styled](https://emotion.sh/docs/introduction)

## 目录

- `app.config.js`: app 基础配置
- `electron.builder.js`: 打包配置
- `public`：静态资源文件夹
- `config`：webpack 打包配置
- `src/background.ts`：electron main ，code here

## 使用

执行：`yarn install` or `npm install`，然后：

- 开发服务启动：`yarn serve`
- Lint 格式化：`yarn lint`
- 源构建输出：`yarn dist`
- 根据当前系统构建：`yarn build`
- 基于 dist 输出，根据当前系统构建：`yarn build:now`
- 构建 Windows 二进制：`yarn build:windows`
- 构建 Mac 二进制：`yarn build:mac`
- 构建 Linux 二进制：`yarn build:linux`

## 输出

- 源构建输出：`./build/bundle`
- 打包输出目录：`./build/binary`

## 其他

点击这里访问 [基于 typescript 和 webapck 的 React 脚手架应用](https://github.com/funnyzak/react-typescript-quick-start)。

## 参考

- [Electron](https://electronjs.org/docs)
- [Babel Config](https://babel.docschina.org/docs/en/7.0.0/configuration/)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [webpack](https://webpack.docschina.org/guides/getting-started/)
- [prettier](https://prettier.io/docs/en/index.html)

## License

MIT License © 2021 [funnyzak](https://github.com/funnyzak)
