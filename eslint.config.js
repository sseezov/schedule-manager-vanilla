import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default defineConfig([
  {
    ignores: ['backend/public/**', 'frontend-admin/dist/**', 'frontend-schedule/dist/**'],
  },
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: {
      ...globals.node,
      ...globals.browser,
    } },
  },
])
