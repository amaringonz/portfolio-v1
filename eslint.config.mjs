import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: true,
    lessOpinionated: true,
    isInEditor: false,

    stylistic: {
      semi: true,
    },

    formatters: {
      css: true,
    },

    ignores: ['migrations/**/*', 'next-env.d.ts'],
  },
  ...tailwind.configs['flat/recommended'],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    rules: {
      'import/order': 'off',
      'sort-imports': 'off',
      'style/brace-style': ['error', '1tbs'],
      'ts/consistent-type-definitions': ['error', 'type'],
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off',
      'test/padding-around-all': 'error',
      'test/prefer-lowercase-title': 'off',
    },
  },
);
