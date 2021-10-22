// document https://babel.docschina.org/docs/en/7.0.0/configuration/
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
      },
    ],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
