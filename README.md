# Vue 3 + Typescript + Vite

## TS版本项目规范示例

### eslint + prettier 配置代码规范

### git-cz 配置git提交规范

### husky 执行钩子 检测代码规范和提交规范

### manualChunks 分包
真正需要更新的只有自己的业务代码，第三方(node_modules)包一般不会更新变动
若不分包 每一次代码修改，请求的js文件体积都很大，响应时间更长

## 配置文件

### tsconfig.node.json 和 tsconfig.json
> tsconfig.node.json 是专门用于 vite.config.ts 的 TypeScript 配置文件。
> tsconfig.json 文件通过 references 字段引入 tsconfig.node.json 中的配置。
> 使用 references 字段引入的配置文件需要设置 composite: true 字段，并用 include 或 files 等等属性指明配置覆盖的文件范围。

### vite 中使用 process
// 安装 @types/node
npm i --save-dev @types/node

## vue-tsc --noEmit --skipLibCheck
--noEmit：不生成输出文件。
--skipLibCheck ：忽略所有的声明文件（ *.d.ts）的类型检查。跳过对node_modules内的检测。
