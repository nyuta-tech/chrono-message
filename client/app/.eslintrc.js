module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "prettier", "plugin:storybook/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  rules: {},
  settings: {
    react: {
      version: "detect"
    }
  }
};