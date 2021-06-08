import { defineConfig } from "vite";
import proxy from './proxy'
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/vite-vue-admin/",
  // 控制台打印
  // logLevel: "silent",
  build: {
    brotliSize: false,
    chunkSizeWarningLimit: 1024,
    // rollupOptions: {
    //   external: ["src/*"],
    // },
  },
  server: {
    hmr: {
      overlay: false,
    },
    // host: "localhost",
    port: 3001,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    proxy,
  },
});
