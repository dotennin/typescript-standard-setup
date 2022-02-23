module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: false,
        bracketSpacing: true,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false
      }
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "off",
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    "eqeqeq": 2,
    "no-var": 2,
    "prefer-const": 2,
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0
      }
    }
  ]
}
