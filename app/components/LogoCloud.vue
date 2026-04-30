<script setup lang="ts">
const { copy } = useAppSettings()
</script>

<template>
  <section class="section-tight">
    <div class="container logo-card">
      <p>{{ copy.home.logosLabel }}</p>
      <div class="logos">
        <span>Solo SaaS</span>
        <span>AI Studio</span>
        <span>Indie Hacker</span>
        <span>Product Lab</span>
        <span>Dev Agency</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  align-items: center;
  border-block: 1px solid var(--line);
  padding: 26px 0;
}

p {
  margin: 0;
  color: var(--muted);
  font-weight: 800;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  color: color-mix(in srgb, var(--ink) 52%, transparent);
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.3vw, 1.75rem);
  font-weight: 700;
}

@media (max-width: 760px) {
  .logo-card {
    grid-template-columns: 1fr;
  }
}
</style>
