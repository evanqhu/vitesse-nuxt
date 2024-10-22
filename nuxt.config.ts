import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  /** 功能模块扩展 */
  modules: [
    '@vueuse/nuxt', // 组合式工具包函数
    '@unocss/nuxt', // 原子化 CSS 框架
    '@pinia/nuxt', // 状态管理
    '@nuxtjs/color-mode', // 颜色模式
    '@nuxt/eslint', // eslint
  ],

  devtools: {
    enabled: true,
  },

  /** Nuxt 应用配置 */
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
      ],
    },
  },

  /** 定义全局 CSS 文件或模块 */
  css: [
    '@unocss/reset/tailwind.css',
  ],

  /** 颜色模式 */
  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
