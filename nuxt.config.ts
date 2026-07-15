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
      titleTemplate: '%s | Mokelay',
      meta: [
        {
          name: 'description',
          content:
            'Mokelay 是低 token 三端应用生成平台，帮助团队用更低模型要求生成 Web、App、小程序，多语言友好，支持定制化和企业系统集成。',
        },
        {
          name: 'keywords',
          content:
            'Mokelay,低 token 生成,AI 应用生成器,三端生成,Web App 小程序生成,非研发友好,多语言应用生成,企业应用生成,定制化集成',
        },
        { name: 'theme-color', content: '#0f3028' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
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
      cloudflareWebAnalyticsToken: process.env.NUXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN || '',
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
