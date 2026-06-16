<script setup lang="ts">
const { copy } = useAppSettings()
const config = useRuntimeConfig()

const siteUrl = computed(() => config.public.siteUrl.replace(/\/$/, ''))

useSeoMeta({
  title: () => copy.value.home.seoTitle,
  ogTitle: () => `Mokelay - ${copy.value.home.seoTitle}`,
  description: () => copy.value.home.seoDescription,
  ogDescription: () => copy.value.home.seoDescription,
  keywords: () => copy.value.home.seoKeywords,
  ogUrl: () => `${siteUrl.value}/`,
  twitterTitle: () => copy.value.home.seoTitle,
  twitterDescription: () => copy.value.home.seoDescription,
})

useHead(() => ({
  script: [
    {
      key: 'software-application-json-ld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Mokelay',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web, iOS, Android, WeChat Mini Program',
        url: siteUrl.value,
        description: copy.value.home.seoDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CNY',
          availability: 'https://schema.org/InStock',
        },
        featureList: [
          '相比源码降低 66% 输出 token',
          '降低模型要求',
          '非研发友好',
          '不依赖 IDE',
          'Web、App、小程序三端同时生成',
          '多语言友好',
          '高度定制化和企业系统集成',
        ],
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <HeroSection />
    <LogoCloud />
    <FeatureGrid />
    <WorkflowPreview />

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">{{ copy.home.pricingPreview.eyebrow }}</p>
          <h2>{{ copy.home.pricingPreview.title }}</h2>
          <p>{{ copy.home.pricingPreview.body }}</p>
        </div>
        <PricingCards compact />
      </div>
    </section>

    <section class="section-tight">
      <div class="container final-cta">
        <div>
          <p class="eyebrow">{{ copy.home.finalCta.eyebrow }}</p>
          <h2>{{ copy.home.finalCta.title }}</h2>
        </div>
        <div class="final-actions">
          <NuxtLink class="button button-accent" to="/register">{{ copy.home.finalCta.cta }}</NuxtLink>
          <a class="button button-secondary" href="https://editor.mokelay.com/" rel="noopener noreferrer">
            {{ copy.home.finalCta.tryEditor }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.final-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 34px;
  background:
    radial-gradient(circle at 20% 10%, rgba(215, 245, 107, 0.28), transparent 16rem),
    var(--moss);
  color: var(--dark-panel-text);
  padding: 34px;
}

.final-cta h2 {
  margin: 16px 0 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.final-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 720px) {
  .final-cta {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
