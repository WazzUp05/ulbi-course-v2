module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier', 'plugin:react/jsx-runtime', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'i18next'],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'no-unused-vars': 'warn',
        'prefer-nullish-coalescing': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/no-deprecated': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: { 'i18next/no-literal-string': 'off', 'max-len': 'off' },
        },
    ],
};
