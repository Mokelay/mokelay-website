<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">AI-native IDE for builders</p>
        <h1>把 Codex 式协作装进你的 IDE 工作台。</h1>
        <p class="lead">
          Mokelay IDE 帮个人开发者和小团队从产品想法一路走到代码、测试和上线。不是再开一个聊天窗口，
          而是让 AI 直接理解项目、任务和交付边界。
        </p>
        <div class="hero-actions">
          <NuxtLink class="button button-primary" to="/register">免费创建工作区</NuxtLink>
          <NuxtLink class="button button-secondary" to="/pricing">查看价格方案</NuxtLink>
        </div>
        <div class="hero-proof" aria-label="产品亮点">
          <span>单人公司友好</span>
          <span>Nuxt 全栈账号</span>
          <span>面向交付的 AI 工作流</span>
        </div>
      </div>

      <MockIde />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 78px 0 86px;
}

.hero::before {
  position: absolute;
  inset: 5% auto auto 50%;
  width: 42vw;
  height: 42vw;
  border: 1px solid rgba(15, 48, 40, 0.12);
  border-radius: 38% 62% 52% 48%;
  background: linear-gradient(135deg, rgba(215, 245, 107, 0.36), rgba(110, 198, 182, 0.18));
  content: '';
  filter: blur(2px);
  opacity: 0.72;
  transform: translateX(-4%) rotate(-8deg);
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
  gap: 42px;
  align-items: center;
}

.hero-copy h1 {
  max-width: 760px;
  margin: 18px 0 22px;
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 8vw, 7.2rem);
  line-height: 0.88;
  letter-spacing: -0.07em;
}

.lead {
  max-width: 630px;
  margin: 0;
  color: var(--ink-soft);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.hero-proof {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.hero-proof span {
  border: 1px solid rgba(16, 35, 31, 0.12);
  border-radius: 999px;
  background: rgba(255, 252, 244, 0.66);
  color: var(--ink-soft);
  font-size: 0.92rem;
  font-weight: 700;
  padding: 9px 12px;
}

@media (max-width: 980px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero::before {
    width: 72vw;
    height: 72vw;
  }
}
</style>
