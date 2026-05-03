export default defineNuxtConfig({
  srcDir: 'app',
  compatibilityDate: '2026-04-30',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      titleTemplate: '%s | Mokelay IDE',
      meta: [
        {
          name: 'description',
          content:
            'Mokelay IDE 是面向 AI 协作开发的在线 IDE，帮助个人开发者和小团队更快构建、调试与发布产品。',
        },
        { name: 'theme-color', content: '#0f3028' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      productAppUrl: process.env.NUXT_PUBLIC_PRODUCT_APP_URL || '/dashboard',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8787',
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/pricing': { prerender: true },
    '/login': { prerender: true },
    '/register': { prerender: true },
    '/dashboard': { prerender: true },
  },
})
