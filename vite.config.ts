/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
        './src/stores',
        './src/api',
        './src/components/ui/**', // for shadcn-vue
        './src/utils',
        './src/lib',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true, // enabled by default if `typescript` is installed
    }),

    vue(),

    // https://github.com/vuejs/devtools-next
    VueDevTools(),
  ],

  //  Remove this `server` comments if you want to use the proxy
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: env.VITE_API_BASE_URL,
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
