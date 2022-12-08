module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  plugins: ['react'],
  rules: {
    semi: [1, 'never'],
    'comma-dangle': [1, 'never'],
    'object-curly-spacing': [1, 'always']
  }
}
