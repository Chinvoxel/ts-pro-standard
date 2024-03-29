import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue' // 智能补全导入api
import WindiCSS from 'vite-plugin-windicss'
import viteCompression from 'vite-plugin-compression' // 压缩插件
import visualizer from 'rollup-plugin-visualizer' // 打包体积分析插件
import externalGlobals from 'rollup-plugin-external-globals' // 排除第三方依赖打包

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: env.VITE_APP_BASE_API, // 开发或生产环境服务的公共基础路径
    // 插件
    plugins: [
      vue(),
      WindiCSS(),
      // 压缩
      viteCompression({
        ext: '.gz', // 生成的压缩包后缀
        algorithm: 'gzip', // 压缩算法
        deleteOriginFile: false // 压缩后是否删除源文件
      }),
      // 可视化分析项目体积
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    ],

    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '/img': path.resolve(__dirname, 'src/assets/images/')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'] // 文件后缀拓展
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/style/mixin.scss" as *;` // scss全局变量
        }
      }
    },

    // 打包
    build: {
      chunkSizeWarningLimit: 1600, // 限制分包大小
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', 'vue-router', 'element-plus', 'axios', 'vue-demi'],
        plugins: [
          // 不打包依赖映射的对象
          externalGlobals({
            vue: 'Vue',
            'vue-router': 'VueRouter',
            'element-plus': 'ElementPlus',
            axios: 'axios',
            '@element-plus/icons-vue': 'ElementPlusIconsVue',
            'vue-demi': 'VueDemi'
          })
        ],
        output: {
          chunkFileNames: 'static/js1/[name]-[hash].js',
          entryFileNames: 'static/js2/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 分包 减小main.js体积
          manualChunks: filePath => {
            if (filePath.includes('node_modules')) {
              const arr = filePath.toString().split('node_modules/')[1].split('/')
              const pack: Array<string> = ['vue', 'vue-router']
              if (pack.includes(arr[0])) {
                return `_${arr[0]}`
              }
              return '__vendor'
            }
            return '__vendor'
          }
        }
      }
    },

    // 本地服务
    server: {
      port: 8080, // 端口号
      hmr: true, // 热更新
      // 代理
      proxy: {
        '/api': {
          target: env.VITE_APP_SERVER_API, // 使用环境变量
          changeOrigin: true,
          rewrite: paths => paths.replace(/^\/api/, '')
        }
      }
    }
  })
}
