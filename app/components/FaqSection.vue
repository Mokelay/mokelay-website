<script setup lang="ts">
const questions = [
  {
    question: 'Mokelay IDE 和普通 AI Chat 有什么区别？',
    answer:
      'Mokelay IDE 的目标不是只回答问题，而是围绕项目上下文执行开发任务：读代码、改文件、跑测试、解释交付结果。',
  },
  {
    question: '第一版价格会直接收费吗？',
    answer:
      '当前实现先做静态价格方案和账号入口。Stripe Billing 会作为第二阶段接入，避免过早把支付复杂度压到发布前。',
  },
  {
    question: '为什么官网也要完整登录/注册？',
    answer:
      '这样官网、价格页和产品控制台能形成闭环，用户注册后可以直接进入 dashboard，后续再接 IDE 主应用。',
  },
  {
    question: '能否私有化部署？',
    answer:
      '当前技术栈保留私有化路径：Nuxt/Nitro、PostgreSQL、Drizzle 都可以迁移到自托管或私有云环境。',
  },
]
</script>

<template>
  <section id="faq" class="section">
    <div class="container faq-wrap">
      <div class="faq-copy">
        <p class="eyebrow">FAQ</p>
        <h2>上线前，先把关键问题讲清楚。</h2>
      </div>

      <div class="faq-list">
        <details v-for="item in questions" :key="item.question" open>
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
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
  background: rgba(255, 252, 244, 0.68);
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
