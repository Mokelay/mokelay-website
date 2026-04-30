<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

const { user, clear } = useUserSession()
const router = useRouter()
const { copy } = useAppSettings()

useSeoMeta({
  title: () => copy.value.dashboard.seoTitle,
  description: () => copy.value.dashboard.seoDescription,
})

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  await clear()
  await router.push('/login')
}
</script>

<template>
  <section class="section">
    <div class="container dashboard">
      <div class="dashboard-hero card">
        <div>
          <p class="eyebrow">{{ copy.dashboard.eyebrow }}</p>
          <h1>{{ copy.dashboard.welcome }}，{{ user?.name || 'Builder' }}</h1>
          <p>{{ copy.dashboard.body }}</p>
        </div>
        <button class="button button-secondary" type="button" @click="logout">{{ copy.dashboard.logout }}</button>
      </div>

      <div class="dashboard-grid">
        <article class="card">
          <span>{{ copy.dashboard.cards[0][0] }}</span>
          <h2>{{ user?.plan || 'free' }}</h2>
          <p>{{ copy.dashboard.cards[0][1] }}</p>
        </article>
        <article class="card">
          <span>{{ copy.dashboard.cards[1][0] }}</span>
          <h2>{{ copy.dashboard.workspaceTitle }}</h2>
          <p>{{ copy.dashboard.cards[1][1] }}</p>
        </article>
        <article class="card">
          <span>{{ copy.dashboard.cards[2][0] }}</span>
          <h2>{{ copy.dashboard.nextTitle }}</h2>
          <p>{{ copy.dashboard.cards[2][1] }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dashboard {
  display: grid;
  gap: 22px;
}

.dashboard-hero {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 34px;
}

h1 {
  margin: 16px 0 12px;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 5.2rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.dashboard-hero p {
  max-width: 700px;
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.7;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.dashboard-grid article {
  padding: 24px;
}

.dashboard-grid span {
  color: var(--cedar-dark);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.dashboard-grid h2 {
  margin: 28px 0 10px;
  font-family: var(--font-display);
  font-size: 2rem;
}

.dashboard-grid p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.65;
}

@media (max-width: 860px) {
  .dashboard-hero {
    flex-direction: column;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
