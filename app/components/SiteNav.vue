<script setup lang="ts">
const { loggedIn } = useUserSession()

const links = [
  { label: '产品', to: '/#features' },
  { label: '工作流', to: '/#workflow' },
  { label: '价格', to: '/pricing' },
  { label: 'FAQ', to: '/#faq' },
]
</script>

<template>
  <header class="nav-wrap">
    <nav class="container nav">
      <NuxtLink class="brand" to="/" aria-label="Mokelay IDE 首页">
        <span class="brand-mark">M</span>
        <span>Mokelay IDE</span>
      </NuxtLink>

      <div class="nav-links" aria-label="主导航">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="nav-actions">
        <NuxtLink v-if="loggedIn" class="button button-secondary" to="/dashboard">控制台</NuxtLink>
        <template v-else>
          <NuxtLink class="login-link" to="/login">登录</NuxtLink>
          <NuxtLink class="button button-primary" to="/register">免费开始</NuxtLink>
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
  background: rgba(255, 252, 244, 0.78);
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
}
</style>
