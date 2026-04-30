<script setup lang="ts">
const { loggedIn } = useUserSession()
const { copy, locale, localeLabel, theme, themeLabel, toggleLocale, toggleTheme } = useAppSettings()
const ready = ref(false)

const links = computed(() => [
  { label: copy.value.nav.product, to: '/#features' },
  { label: copy.value.nav.workflow, to: '/#workflow' },
  { label: copy.value.nav.pricing, to: '/pricing' },
  { label: copy.value.nav.faq, to: '/#faq' },
])

onMounted(() => {
  ready.value = true
})
</script>

<template>
  <header class="nav-wrap">
    <nav class="container nav">
      <NuxtLink class="brand" to="/" :aria-label="copy.common.brandHome">
        <span class="brand-mark">M</span>
        <span>Mokelay IDE</span>
      </NuxtLink>

      <div class="nav-links" :aria-label="copy.nav.main">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="nav-actions">
        <div class="switchers">
          <button
            class="switch-button"
            :class="{ active: locale === 'zh' }"
            type="button"
            :disabled="!ready"
            :aria-label="copy.nav.language"
            @click="toggleLocale"
          >
            {{ localeLabel }}
          </button>
          <button
            class="switch-button"
            :class="{ active: theme === 'light' }"
            type="button"
            :disabled="!ready"
            :aria-label="copy.nav.theme"
            @click="toggleTheme"
          >
            {{ themeLabel }}
          </button>
        </div>

        <a class="button button-secondary" href="https://editor.mokelay.com/" rel="noopener noreferrer">
          {{ copy.nav.tryEditor }}
        </a>
        <NuxtLink v-if="loggedIn" class="button button-secondary" to="/dashboard">{{ copy.nav.dashboard }}</NuxtLink>
        <template v-else>
          <NuxtLink class="login-link" to="/login">{{ copy.nav.login }}</NuxtLink>
          <NuxtLink class="button button-primary" to="/register">{{ copy.nav.register }}</NuxtLink>
        </template>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 16px 0;
  backdrop-filter: blur(18px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 62px;
  border: 1px solid rgba(16, 35, 31, 0.12);
  border-radius: 999px;
  background: var(--surface-strong);
  box-shadow: 0 14px 50px rgba(15, 48, 40, 0.08);
  padding: 8px 10px 8px 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.brand-mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 12px;
  background: var(--moss);
  color: var(--lime);
  font-family: var(--font-display);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--ink-soft);
  font-size: 0.95rem;
  font-weight: 700;
}

.nav-links a:hover,
.login-link:hover {
  color: var(--cedar-dark);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.switchers {
  display: flex;
  gap: 6px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--control-bg);
  padding: 4px;
}

.switch-button {
  min-width: 54px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--ink-soft);
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 900;
  padding: 8px 10px;
}

.switch-button:hover {
  background: var(--surface-strong);
  color: var(--cedar-dark);
}

.switch-button:disabled {
  cursor: wait;
  opacity: 0.62;
}

.switch-button.active {
  background: var(--moss-soft);
}

.login-link {
  color: var(--ink-soft);
  font-weight: 700;
}

@media (max-width: 820px) {
  .nav {
    border-radius: 26px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: 14px;
    overflow-x: auto;
    padding: 4px 0;
  }

  .nav-actions {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}
</style>
