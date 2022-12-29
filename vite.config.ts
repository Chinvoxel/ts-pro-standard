import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [WindiCSS(), vue()],
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_API, // 使用环境变量
          changeOrigin: true,
          rewrite: paths => paths.replace(/^\/api/, '')
        }
      }
    }
  })
