<script setup lang="ts">
const { copy, locale, theme } = useAppSettings()
const route = useRoute()
const config = useRuntimeConfig()

const siteUrl = computed(() => config.public.siteUrl.replace(/\/$/, ''))
const canonicalUrl = computed(() => `${siteUrl.value}${route.path === '/' ? '/' : route.path}`)

useHead(() => ({
  htmlAttrs: {
    lang: locale.value === 'zh' ? 'zh-CN' : 'en',
  },
  bodyAttrs: {
    class: `theme-${theme.value}`,
  },
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      key: 'organization-json-ld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Mokelay',
        url: siteUrl.value,
        logo: `${siteUrl.value}/favicon.svg`,
        description: copy.value.home.seoDescription,
        sameAs: ['https://editor.mokelay.com/'],
      }),
    },
    {
      key: 'website-json-ld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Mokelay',
        url: siteUrl.value,
        inLanguage: locale.value === 'zh' ? 'zh-CN' : 'en',
        description: copy.value.home.seoDescription,
      }),
    },
  ],
}))

useSeoMeta({
  title: () => copy.value.home.seoTitle,
  description: () => copy.value.home.seoDescription,
  keywords: () => copy.value.home.seoKeywords,
  ogTitle: () => copy.value.home.seoTitle,
  ogDescription: () => copy.value.home.seoDescription,
  ogSiteName: 'Mokelay',
  ogType: 'website',
  ogUrl: () => canonicalUrl.value,
  twitterCard: 'summary',
  twitterTitle: () => copy.value.home.seoTitle,
  twitterDescription: () => copy.value.home.seoDescription,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
