module.exports = {
  root: true,
  ignorePatterns: ['**/dist/**', './node_modules', './.vscode'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-plugin-import/recommended',
    'plugin:rxjs/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
    'import/no-unresolved': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
};
