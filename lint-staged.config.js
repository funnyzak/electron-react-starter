// lint-staged.config.js
// https://www.npmjs.com/package/lint-staged
// https://github.com/DavidAnson/markdownlint
// https://github.com/micromatch/micromatch
const micromatch = require('micromatch')

module.exports = (allStagedFiles) => {
  const shFiles = micromatch(allStagedFiles, ['**/src/**/*.sh'])
  if (shFiles.length) {
    return 'printf \'%s\n\' "Script files aren\'t allowed in src directory" >&2'
  }
  const codeFiles = micromatch(allStagedFiles, ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'])
  const docFiles = micromatch(allStagedFiles, ['**/*.md'])
  return [`eslint --fix --cache ${codeFiles.join(' ')}`, `mdl ${docFiles.join(' ')}`]
}
