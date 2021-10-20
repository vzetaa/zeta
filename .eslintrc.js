module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  // ignorePatterns: ['/commands/*', '/SlashCommands/*'],
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-unused-vars': 'off',
  },
};
