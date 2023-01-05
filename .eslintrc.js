module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true // 解决defineProps、defineEmits 报错未定义的问题
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
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
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off', // 关闭单文件组件名必须多个单词的限制
    // 关闭错误提示开发依赖需安装为生产依赖
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 解决后缀忽略不识别问题
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    // 关闭变量、函数定义前使用报错提示
    'no-use-before-define': ['error', { variables: false, functions: false }],
    // 关闭禁用for-in for-of的规则
    'no-restricted-syntax': 0,
    // 关闭禁止直接修改函数的入参
    'no-param-reassign': ['error', { props: false }]
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
