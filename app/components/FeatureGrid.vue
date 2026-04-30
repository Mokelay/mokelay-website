<script setup lang="ts">
const features = [
  {
    title: '项目上下文常驻',
    body: '把需求、代码结构、历史决策和测试信号放在同一个工作区，减少每次重新解释项目的摩擦。',
  },
  {
    title: '从计划到验证',
    body: '把 AI 任务拆成可执行边界，自动串起实现、预览、测试和回归检查。',
  },
  {
    title: 'OPC 友好',
    body: '为个人公司和小团队减少运维负担：一个人也能维护清晰流程、账号和发布节奏。',
  },
  {
    title: '全栈入口',
    body: '官网、账号、价格方案和未来产品控制台共享一套 Nuxt/Vue 工程语言。',
  },
  {
    title: '协作不失控',
    body: '用明确的任务状态、文件边界和测试反馈，让 AI 改动可追踪、可复核。',
  },
  {
    title: '可逐步私有化',
    body: 'PostgreSQL、Drizzle 和 Nitro 的组合保留未来拆服务或私有部署的空间。',
  },
]
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Product</p>
        <h2>不是聊天机器人，是开发交付系统。</h2>
        <p>Mokelay IDE 把 AI 协作变成工程流程的一部分：有上下文、有边界、有验证，也有产品发布路径。</p>
      </div>

      <div class="features">
        <article v-for="(feature, index) in features" :key="feature.title" class="feature card">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.body }}</p>
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
