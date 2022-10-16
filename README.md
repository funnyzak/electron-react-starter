# Electron React Starter

基于 React Typescript Webpack 构建 Electron 应用脚手架。

[![Build Status][build-status-image]][build-status]
[![tag][tag-image]][rle-url]
[![Release Date][rle-image]][rle-url]
[![license][license-image]][repository-url]
<!-- [![Latest Release Download][down-latest-image]][rle-url] -->
<!-- [![Total Download][down-total-image]][rle-all-url] -->
<!-- [![action][ci-image]][ci-url] -->

[down-latest-image]: https://img.shields.io/github/downloads/funnyzak/electron-react-starter/latest/total.svg
[down-total-image]: https://img.shields.io/github/downloads/funnyzak/electron-react-starter/total.svg
[rle-image]: https://img.shields.io/github/release-date/funnyzak/electron-react-starter.svg
[rle-url]: https://github.com/funnyzak/electron-react-starter/releases/latest
[rle-all-url]: https://github.com/funnyzak/electron-react-starter/releases
[ci-image]: https://img.shields.io/github/workflow/status/funnyzak/electron-react-starter/release
[ci-url]: https://github.com/funnyzak/electron-react-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/electron-react-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/electron-react-starter
[build-status-image]: https://github.com/funnyzak/electron-react-starter/actions/workflows/ci.yml/badge.svg
[build-status]: https://github.com/funnyzak/electron-react-starter/actions
[tag-image]: https://img.shields.io/github/tag/funnyzak/electron-react-starter.svg

## 特点

- babel 转换支持
- typescript 支持
- react 支持
- sass 支持
- less 支持
- hbs 文件 模板支持
- png|svg|jpg|jpeg|gif 引入支持
- git commit hooks, no 💩

## 开发

安装依赖先

```bash
$ yarn
```

然后可执行如下脚本命令：

```bash
# 开发服务启动
$ yarn serve

# Lint 格式化
$ yarn lint

# 源构建输出
$ yarn dist

# 根据当前系统构建
$ yarn build

# 基于 dist 输出，根据当前系统构建
$ yarn build:now

# 构建 Windows 二进制
$ yarn build:windows

# 构建 Mac 二进制
$ yarn build:mac

# 构建 Linux 二进制
$ yarn build:linux

# 构建三平台
$ yarn build:all

```

### 预览

![run](https://raw.githubusercontent.com/funnyzak/electron-react-starter/main/public/_docs/preview.png)

## 依赖

主要依赖库：

- electron-builder
- eslint
- babel
- css-loader
- less
- sass
- typescript
- webpack
- prettier
- [antd](https://ant.design/docs/react/introduce-cn)
- [@ant-design/icons](https://ant.design/components/icon/)
- [react-icons](https://github.com/react-icons/react-icons)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [@emotion/react](https://emotion.sh/docs/introduction)
- [@emotion/styled](https://emotion.sh/docs/introduction)

## 目录

    ├── app.config.js                      // 基础配置
    ├── babel.config.js                    // babel 配置
    ├── build                              // 打包输出文件夹
    │   ├── binary                         // 二进制打包输出
    │   └── bundle                         // renderer main打包源输出
    ├── config                             // 打包配置
    │   ├── dev.js                         // 开发监听启动
    │   ├── dist.js                        // 发布打包源
    │   ├── webpack.main.js                // background 编译
    │   └── webpack.renderer.js            // renderer 编译
    ├── electron.builder.js                // electron.builder 二进制打包配置
    ├── global.d.ts                        // typescript 全局声明
    ├── lint-staged.config.js              // git commit 钩子
    ├── public                             // 静态文件
    ├── src                                // 页面源
    │   ├── App.less                       // 入口样式
    │   ├── assets                         // 资源文件
    │   ├── background.ts                  // electron background
    │   ├── config                         // 应用配置
    │   ├── hook                           // hook
    │   ├── index.tsx                      // entry file
    │   ├── layout                         // 布局
    │   ├── type                           // 声明文件
    │   └── utils                          // 工具
    └── tsconfig.json                      // typescript 配置
    └── tslint.json                        // tslint 配置

## 其他

点击这里访问 [基于 typescript 和 webapck 的 React 脚手架应用](https://github.com/funnyzak/react-starter)。

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

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/electron-react-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/electron-react-starter" />
</a>

## License

MIT License © 2021 [funnyzak](https://github.com/funnyzak)
