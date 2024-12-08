import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import path from 'node:path'
import sortImportsEs6Autofix from 'eslint-plugin-sort-imports-es6-autofix'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['**/node_modules', '**/out', '**/.next'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'sort-imports-es6-autofix': sortImportsEs6Autofix,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],

      '@typescript-eslint/no-unused-vars': 'error',

      'sort-imports-es6-autofix/sort-imports-es6': [
        2,
        {
          ignoreCase: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
    },
  },
]
