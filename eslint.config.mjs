import js from '@eslint/js';
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
        ...globals.webextensions
      }
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'none',
          singleQuote: true,
          endOfLine: 'auto',
          tabWidth: 2,
          useTabs: false,
          experimentalTernaries: true,
          printWidth: 100,
          proseWrap: 'preserve',
          htmlWhitespaceSensitivity: 'strict',
          plugins: ['prettier-plugin-sh', 'prettier-plugin-toml', '@prettier/plugin-xml'],
          parser: 'flow',
          usePrettierrc: false
        }
      ]
    }
  },
  eslintPluginPrettierRecommended
];
