<script setup lang="ts">
const { copy, locale, theme } = useAppSettings()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value === 'zh' ? 'zh-CN' : 'en',
  },
  bodyAttrs: {
    class: `theme-${theme.value}`,
  },
}))

useSeoMeta({
  title: () => copy.value.home.seoTitle,
  description: () => copy.value.home.seoDescription,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
