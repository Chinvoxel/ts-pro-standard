module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off', // 关闭多根节点检测
    'no-console': 'off', // 关闭禁止存在打印
    'import/prefer-default-export': 'off', // 关闭推荐export default
    // 解决后缀忽略不识别问题
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/core-modules': ['virtual:windi.css'], // 解决main引入windi报错的问题
    // 解决后缀忽略不识别问题
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {} // 解决不识别路径别名ts文件问题
    }
  }
}
