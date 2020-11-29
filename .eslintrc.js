module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        complexity: [2, 10],
        'max-len': [
            'error',
            {
                code: 160,
                ignoreComments: true,
            },
        ],
        'no-trailing-spaces': [2, { skipBlankLines: true }],
        'no-var': 2,
    },
}
