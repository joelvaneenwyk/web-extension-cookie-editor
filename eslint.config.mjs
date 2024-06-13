import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

// module.exports = {
//     env: {
//         browser: true,
//         es2021: true,
//         webextensions: true,
//     },
//     extends: ['eslint:recommended', 'google', 'plugin:prettier/recommended'],
//     overrides: [
//         {
//             env: {
//                 node: true,
//             },
//             files: ['.eslintrc.{js,cjs}'],
//             parserOptions: {
//                 sourceType: 'script',
//             },
//         },
//     ],
//     parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//     },
//     plugins: ['simple-import-sort'],
//     rules: {
//         'prettier/prettier': 2,
//         'simple-import-sort/imports': 'error',
//         'simple-import-sort/exports': 'error',
//     },
// };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "google", "plugin:prettier/recommended"),
    {
        plugins: {
            // "simple-import-sort": simpleImportSort,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.webextensions,
            },

            ecmaVersion: "latest",
            sourceType: "module",
        },

        rules: {
            // "prettier/prettier": 2,
            // "simple-import-sort/imports": "error",
            // "simple-import-sort/exports": "error",
        },
    },
    {
        files: ["**/.eslintrc.{js,cjs}"],

        languageOptions: {
            globals: {
                ...globals.node,
            },

            ecmaVersion: 5,
            sourceType: "commonjs",
        },
    },
];
