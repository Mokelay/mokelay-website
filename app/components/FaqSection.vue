<script setup lang="ts">
const { copy } = useAppSettings()
</script>

<template>
  <section id="faq" class="section">
    <div class="container faq-wrap">
      <div class="faq-copy">
        <p class="eyebrow">{{ copy.home.faq.eyebrow }}</p>
        <h2>{{ copy.home.faq.title }}</h2>
      </div>

      <div class="faq-list">
        <details v-for="[question, answer] in copy.home.faq.items" :key="question" open>
          <summary>{{ question }}</summary>
          <p>{{ answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-wrap {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 42px;
}

.faq-copy h2 {
  margin: 18px 0 0;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 6vw, 4.6rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.faq-list {
  display: grid;
  gap: 14px;
}

details {
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--surface);
  padding: 20px 22px;
}

summary {
  cursor: pointer;
  font-size: 1.08rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

details p {
  margin: 14px 0 0;
  color: var(--ink-soft);
  line-height: 1.7;
}

@media (max-width: 820px) {
  .faq-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
