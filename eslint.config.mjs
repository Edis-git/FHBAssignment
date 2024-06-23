import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import jest from 'eslint-plugin-jest';

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:jest/recommended'),
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        jest: true,
        require: true,
        module: true,
        console: true
      }
    },
    plugins: {
      jest: jest
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error'
    }
  }
];
