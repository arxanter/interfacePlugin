module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [ "plugin:vue/essential", "prettier"],
  rules: {
    'prefer-destructuring': ['error', { object: false, array: false }],
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    'no-console': 0,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'func-names': ["error", "as-needed"],
    // allow debugger during development
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

