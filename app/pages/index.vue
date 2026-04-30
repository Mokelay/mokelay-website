<script setup lang="ts">
const { copy } = useAppSettings()

useSeoMeta({
  title: () => copy.value.home.seoTitle,
  ogTitle: () => `Mokelay IDE - ${copy.value.home.seoTitle}`,
  description: () => copy.value.home.seoDescription,
  ogDescription: () => copy.value.home.seoDescription,
})
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

    <FaqSection />

    <section class="section-tight">
      <div class="container final-cta">
        <div>
          <p class="eyebrow">{{ copy.home.finalCta.eyebrow }}</p>
          <h2>{{ copy.home.finalCta.title }}</h2>
        </div>
        <NuxtLink class="button button-accent" to="/register">{{ copy.home.finalCta.cta }}</NuxtLink>
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

@media (max-width: 720px) {
  .final-cta {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
