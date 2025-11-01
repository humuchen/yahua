import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const getViteEnv = (target: string): any => env[target];
  return {
    plugins: [vue()],
    server: {
      open: true // 启动后自动打开浏览器
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    esbuild: {
      pure:
        getViteEnv('VITE_CLEAR_LOG') === '1'
          ? ['alert', 'console.log', 'console.warn', 'debugger']
          : []
    },
    build: {
      outDir: 'docs'
    }
  };
});
