module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    // This is redundant with typescript's type checking.
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
  },
};
