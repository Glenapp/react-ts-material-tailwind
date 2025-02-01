// eslint.config.mjs
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
// Correct way to import the parser in a CommonJS module
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      react: eslintPluginReact,
    },

    languageOptions: {
      parser: tsParser, // Use the default import parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', // ES modules support
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
    },

    settings: {
      react: {
        version: 'detect', // Auto-detect the version of React
      },
    },
  },
];
