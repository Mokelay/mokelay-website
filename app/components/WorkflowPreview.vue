<script setup lang="ts">
const { copy } = useAppSettings()
</script>

<template>
  <section id="workflow" class="section workflow-section">
    <div class="container workflow card">
      <div class="workflow-copy">
        <p class="eyebrow">{{ copy.home.workflow.eyebrow }}</p>
        <h2>{{ copy.home.workflow.title }}</h2>
        <p>{{ copy.home.workflow.body }}</p>
      </div>

      <div class="steps">
        <article v-for="([title, body], index) in copy.home.workflow.steps" :key="title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ title }}</h3>
          <p>{{ body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workflow-section {
  padding-top: 42px;
}

.workflow {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 34px;
  overflow: hidden;
  padding: 34px;
}

.workflow-copy {
  border-radius: 24px;
  background:
    radial-gradient(circle at 10% 20%, rgba(215, 245, 107, 0.28), transparent 18rem),
    var(--moss);
  color: var(--dark-panel-text);
  padding: 34px;
}

.workflow-copy h2 {
  margin: 18px 0;
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 5vw, 4.3rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.workflow-copy p:last-child {
  color: color-mix(in srgb, var(--dark-panel-text) 76%, transparent);
  line-height: 1.75;
}

.steps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.steps article {
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--surface-soft);
  padding: 24px;
}

.steps span {
  color: var(--cedar);
  font-weight: 900;
}

.steps h3 {
  margin: 36px 0 8px;
  font-size: 1.32rem;
}

.steps p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.62;
}

@media (max-width: 900px) {
  .workflow {
    grid-template-columns: 1fr;
    padding: 18px;
  }
}

@media (max-width: 580px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
