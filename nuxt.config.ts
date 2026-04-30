export default defineNuxtConfig({
  modules: ['nuxt-auth-utils'],
  srcDir: 'app',
  serverDir: 'server',
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
    databaseUrl: process.env.NUXT_DATABASE_URL || process.env.DATABASE_URL || '',
    stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET || '',
    public: {
      siteUrl: 'http://localhost:3000',
      productAppUrl: '/dashboard',
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/pricing': { prerender: true },
  },
})
