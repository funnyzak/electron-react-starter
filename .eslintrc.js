module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    mocha: true,
    amd: true,
    serviceworker: true
  },
  globals: {
    PRODUCTION: 'readonly',
    NODE_ENV: 'readonly'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  plugins: [
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    '@typescript-eslint',
    'html'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    jsxPragma: 'React',
    ecmaVersion: 'latest',
    projectFolderIgnoreList: ['**/node_modules/**'],
    sourceType: 'module'
  },
  rules: {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'func-names': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'no-var-requires': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ]
  }
};
