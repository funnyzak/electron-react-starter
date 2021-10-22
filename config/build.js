const Webpack = require('webpack');

const mainWebpackConfig = require('./webpack.main');
const rendererWebpackConfig = require('./webpack.renderer');

const env = 'production';

function buildMain() {
  mainWebpackConfig.mode = env;
  return new Promise((resolve, reject) => {
    const compiler = Webpack(mainWebpackConfig);
    compiler.watch({}, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
function buildRenderer() {
  rendererWebpackConfig.mode = env;
  return new Promise((resolve, reject) => {
    const compiler = Webpack(rendererWebpackConfig);
    compiler.watch({}, (err) => {
      if (err) {
        reject(err)
      }
      resolve();
    });
  });
}

function main() {
  Promise.all([buildMain(), buildRenderer()]).then(() => {
    console.log('starting build your app');
    process.exit();
  });
}

main();
