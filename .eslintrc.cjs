/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@stylistic',
        '@typescript-eslint',
        'simple-import-sort',
        'unused-imports'
    ],
    rules: {
        'constructor-super': 'error',
        curly: 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'no-case-declarations': 'error',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': 'error',
        'no-global-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-new-symbol': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-param-reassign': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-this-before-super': 'error',
        'no-undef': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-unused-vars': 'error',
        'no-useless-escape': 'error',
        'no-with': 'error',
        'require-yield': 'error',
        'unused-imports/no-unused-imports': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        yoda: 'error',

        '@stylistic/array-bracket-spacing': 'error',
        '@stylistic/arrow-parens': 'error',
        '@stylistic/arrow-spacing': 'error',
        '@stylistic/brace-style': 'error',
        '@stylistic/comma-dangle': 'error',
        '@stylistic/comma-spacing': 'error',
        '@stylistic/comma-style': 'error',
        '@stylistic/eol-last': 'error',
        '@stylistic/function-call-spacing': 'error',
        '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
        '@stylistic/key-spacing': 'error',
        '@stylistic/keyword-spacing': 'error',
        '@stylistic/member-delimiter-style': [
            'error',
            {
                multiline: { delimiter: 'semi', requireLast: true },
                singleline: { delimiter: 'comma', requireLast: false }
            }
        ],
        '@stylistic/new-parens': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        '@stylistic/no-trailing-spaces': 'error',
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/semi': 'error',
        '@stylistic/semi-spacing': 'error',
        '@stylistic/semi-style': 'error',
        '@stylistic/space-before-blocks': 'error',
        '@stylistic/space-in-parens': 'error',
        '@stylistic/space-infix-ops': 'error',
        '@stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
        '@stylistic/wrap-iife': 'error',

        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error'
    },
    env: {
        browser: true
    },
    overrides: [
        {
            files: ['./**/*.ts'],
            rules: {
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': 'error',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'error',
                'no-redeclare': 'off',
                "@typescript-eslint/no-redeclare": "error",
                'dot-notation': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'error',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/consistent-type-imports': 'error',
            }
        },
        {
            files: ['./generate-manifest.ts'],
            env: {
                node: true,
                browser: false,
            }
        }
    ]
};

module.exports = config;
