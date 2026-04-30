<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

const { user, clear } = useUserSession()
const router = useRouter()

useSeoMeta({
  title: '控制台',
  description: 'Mokelay IDE 用户控制台。',
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
          <p class="eyebrow">Dashboard</p>
          <h1>欢迎，{{ user?.name || 'Builder' }}</h1>
          <p>
            这里会成为 Mokelay IDE 的工作区入口。当前版本已经打通官网账号、会话和受保护页面。
          </p>
        </div>
        <button class="button button-secondary" type="button" @click="logout">退出登录</button>
      </div>

      <div class="dashboard-grid">
        <article class="card">
          <span>Plan</span>
          <h2>{{ user?.plan || 'free' }}</h2>
          <p>订阅状态将在 Stripe Billing 第二阶段接入后自动同步。</p>
        </article>
        <article class="card">
          <span>Workspace</span>
          <h2>Personal</h2>
          <p>个人工作区已就绪，后续可接入 IDE 项目列表。</p>
        </article>
        <article class="card">
          <span>Next</span>
          <h2>Connect IDE</h2>
          <p>复杂 IDE 产品 API 可以继续留在 Nuxt，也可以拆成 Hono 或 NestJS 服务。</p>
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
