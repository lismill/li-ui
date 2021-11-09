module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 允许使用 any 类型
    "@typescript-eslint/no-explicit-any": "off",
    // 显式的表明函数返回值
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // 函数定义时括号前面要不要有空格
    "space-before-function-paren": 0,
  },
};
