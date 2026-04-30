<script setup lang="ts">
type Plan = {
  name: string
  price: string
  description: string
  cta: string
  to: string
  featured?: boolean
  features: string[]
}

defineProps<{
  compact?: boolean
}>()

const { copy } = useAppSettings()

const planTargets = ['/register', '/register?plan=pro', '/register?plan=team', 'mailto:hello@mokelay.com']

const plans = computed<Plan[]>(() =>
  copy.value.pricing.plans.map(([name, price, description, cta, features], index) => ({
    name,
    price,
    description,
    cta,
    to: planTargets[index] || '/register',
    featured: index === 1,
    features: [...features],
  })),
)
</script>

<template>
  <div class="pricing-grid" :class="{ compact }">
    <article
      v-for="plan in plans"
      :key="plan.name"
      class="price-card card"
      :class="{ featured: plan.featured }"
    >
      <div>
        <p v-if="plan.featured" class="badge">{{ copy.pricing.recommended }}</p>
        <h3>{{ plan.name }}</h3>
        <p class="price">{{ plan.price }}</p>
        <p class="description">{{ plan.description }}</p>
      </div>

      <ul>
        <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
      </ul>

      <NuxtLink
        class="button button-full"
        :class="plan.featured ? 'button-accent' : 'button-secondary'"
        :to="plan.to"
      >
        {{ plan.cta }}
      </NuxtLink>
    </article>
  </div>
</template>

<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.compact {
  grid-template-columns: repeat(3, 1fr);
}

.compact .price-card:nth-child(4) {
  display: none;
}

.price-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 470px;
  padding: 24px;
}

.featured {
  background:
    radial-gradient(circle at top right, rgba(215, 245, 107, 0.42), transparent 15rem),
    var(--moss);
  color: var(--dark-panel-text);
}

.badge {
  display: inline-flex;
  margin: 0 0 18px;
  border-radius: 999px;
  background: var(--lime);
  color: var(--moss);
  font-size: 0.82rem;
  font-weight: 900;
  padding: 7px 10px;
}

h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.price {
  margin: 18px 0 8px;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.05em;
}

.description {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.55;
}

.featured .description {
  color: color-mix(in srgb, var(--dark-panel-text) 72%, transparent);
}

ul {
  display: grid;
  gap: 12px;
  margin: 28px 0;
  padding: 0;
  list-style: none;
}

li {
  color: var(--ink-soft);
  line-height: 1.45;
}

li::before {
  margin-right: 8px;
  color: var(--cedar);
  content: '•';
}

.featured li {
  color: color-mix(in srgb, var(--dark-panel-text) 82%, transparent);
}

.featured li::before {
  color: var(--lime);
}

@media (max-width: 1080px) {
  .pricing-grid,
  .compact {
    grid-template-columns: repeat(2, 1fr);
  }

  .compact .price-card:nth-child(4) {
    display: flex;
  }
}

@media (max-width: 640px) {
  .pricing-grid,
  .compact {
    grid-template-columns: 1fr;
  }
}
</style>
