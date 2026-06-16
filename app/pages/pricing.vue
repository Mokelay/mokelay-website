<script setup lang="ts">
const { copy } = useAppSettings()
const config = useRuntimeConfig()

const siteUrl = computed(() => config.public.siteUrl.replace(/\/$/, ''))

useSeoMeta({
  title: () => copy.value.pricing.seoTitle,
  description: () => copy.value.pricing.seoDescription,
  keywords: () => copy.value.pricing.seoKeywords,
  ogTitle: () => `Mokelay - ${copy.value.pricing.seoTitle}`,
  ogDescription: () => copy.value.pricing.seoDescription,
  ogUrl: () => `${siteUrl.value}/pricing`,
  twitterTitle: () => copy.value.pricing.seoTitle,
  twitterDescription: () => copy.value.pricing.seoDescription,
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">{{ copy.pricing.eyebrow }}</p>
        <h1>{{ copy.pricing.title }}</h1>
        <p>{{ copy.pricing.body }}</p>
      </div>

      <PricingCards />
    </div>
  </section>
</template>
