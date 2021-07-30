module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'plugin:prettier/recommended',
    'airbnb-typescript',
    'plugin:sonarjs/recommended',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'hardcore',
  ],
  plugins: ['prettier', '@typescript-eslint', 'no-loops', 'sonarjs', 'react-native', 'react-hooks', 'better-styled-components', 'deprecate', 'no-secrets', 'jest'],
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', 'jest.setup.ts', 'jest.config.js'],
      rules: {
        'import/unambiguous': 0,
        'unicorn/consistent-function-scoping': 0,
      },
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/unambiguous': 0,
      },
    },
  ],
  rules: {
    'promise/avoid-new': 0,
    'import/no-commonjs': 0,
    'unicorn/prefer-module': 0,
    '@typescript-eslint/no-var-requires': 0,
    'security/detect-unsafe-regex': 0,
    'unicorn/no-unsafe-regex': 0,
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['^draft'] }],
    'unicorn/no-array-callback-reference': 0,
    'import/no-namespace': 0,
    'unicorn/no-null': 0,
    'unicorn/no-useless-undefined': 0,
    'import/max-dependencies': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'unicorn/no-array-for-each': 0,
    'unicorn/prevent-abbreviations': 0,
    'import/order': 0,
    'import/extensions': 0,
    'ext/lines-between-object-properties': 0,
    'putout/putout': 0,
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'deprecate/function': 1,
    'deprecate/member-expression': 1,
    'deprecate/import': 1,
    'no-secrets/no-secrets': 'error',
    'arrow-body-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    semi: 0,
    'react-native/no-unused-styles': 2,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/indent': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'operator-linebreak': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unused-modules': [1, { unusedExports: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    quotes: ['warn', 'single'],
    'no-restricted-syntax': 2,
    'no-await-in-loop': 2,
    'object-curly-newline': 0,
    'no-constant-condition': 2,
    'react/state-in-constructor': [2, 'never'],
    'no-mixed-operators': 1,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'jsx-a11y/media-has-caption': 1,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-underscore-dangle': 0,
    'no-global-assign': 2,
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'max-lines': [
      'error',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-len': [
      2,
      200,
      {
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    curly: 0,
    'arrow-parens': 0,
    'react/no-array-index-key': 2,
    'no-return-assign': 2,
    'comma-dangle': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 0,
    'no-multi-str': 0,
    'newline-before-return': 2,
    'newline-after-var': 2,
    'newline-per-chained-call': 2,
    'import/newline-after-import': 2,
    'react/jsx-props-no-spreading': 2,
    'react/require-default-props': 0,
    'no-loops/no-loops': 2,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  globals: {
    JSX: true,
  },
};
