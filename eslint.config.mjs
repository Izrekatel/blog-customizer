import { defineFlatConfig } from 'eslint-define-config';
import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default defineFlatConfig([
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
		project: './tsconfig.json',
		warnOnUnsupportedTypeScriptVersion: false,
      },
    },
	settings: {
		react: {
		  version: 'detect',
		},
	},
	plugins: {
		react: pluginReact,
		'@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
		semi: [2, 'always'],
		quotes: [2, 'single', { avoidEscape: true }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/consistent-type-imports': ['error', {prefer: 'type-imports'}],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'import/no-named-as-default': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'react/self-closing-comp': ['error', { component: true, html: true }],
    },
  },
]);
