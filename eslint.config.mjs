import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  {
    // Recommended config applied to all files
    ...js.configs.recommended,
    ignores: ['build/**', 'dist/**', 'node_modules/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
];
