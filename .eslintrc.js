module.exports = {
  env: {
    browser: true,
    es6: true,
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
    // This is redundant with typescript's type checking.
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "import/prefer-default-export": "off",
  },
};
