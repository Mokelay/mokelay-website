<script setup lang="ts">
const { copy } = useAppSettings()

useSeoMeta({
  title: () => copy.value.pricing.seoTitle,
  description: () => copy.value.pricing.seoDescription,
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
