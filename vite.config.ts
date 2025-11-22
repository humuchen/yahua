import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const getViteEnv = (target: string): any => env[target];
  return {
    base: '/yahua/',
    plugins: [
      vue(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    server: {
      open: true // 启动后自动打开浏览器
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-three': ['three'],
            'vendor-gsap': ['gsap'],
            'vendor-vue': ['vue', 'vue-router']
          }
        }
      }
    },
    esbuild: {
      pure:
        getViteEnv('VITE_CLEAR_LOG') === '1'
          ? ['alert', 'console.log', 'console.warn', 'debugger']
          : []
    }
  };
});
