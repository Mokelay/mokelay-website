<script setup lang="ts">
const { copy } = useAppSettings()
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">{{ copy.home.features.eyebrow }}</p>
        <h2>{{ copy.home.features.title }}</h2>
        <p>{{ copy.home.features.body }}</p>
      </div>

      <div class="features">
        <article v-for="([title, body], index) in copy.home.features.items" :key="title" class="feature card">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ title }}</h3>
          <p>{{ body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.feature {
  min-height: 244px;
  padding: 24px;
}

.feature span {
  color: var(--cedar);
  font-weight: 900;
}

.feature h3 {
  margin: 44px 0 12px;
  font-size: 1.3rem;
  letter-spacing: -0.04em;
}

.feature p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.68;
}

@media (max-width: 900px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
