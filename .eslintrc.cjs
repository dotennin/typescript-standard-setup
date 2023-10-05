module.exports = {
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: [".eslintrc.*"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: false,
        bracketSpacing: true,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
      },
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": ["error"],
    "no-console": ["warn", { allow: ["warn", "error", "assert", "table"] }],
    indent: "off",
    "@typescript-eslint/indent": "off",
    eqeqeq: "error",
    "no-var": "error",
    "prefer-const": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        "newlines-between": "never",
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  ignorePatterns: [".eslintrc.[c]js", "vitest.config.ts", "build.js"],
};
