<script setup lang="ts">
const steps = [
  ['01', 'Describe', '把产品目标和限制写成任务 brief。'],
  ['02', 'Plan', 'AI 先读代码、再形成可执行计划。'],
  ['03', 'Build', '按文件边界实现，保留清晰 diff。'],
  ['04', 'Verify', '运行测试、预览和回归检查后再交付。'],
]
</script>

<template>
  <section id="workflow" class="section workflow-section">
    <div class="container workflow card">
      <div class="workflow-copy">
        <p class="eyebrow">Workflow</p>
        <h2>让每一次 AI 改动都能落地。</h2>
        <p>
          从“帮我做个页面”到“这里是已验证的改动”，Mokelay IDE 会鼓励清晰输入、可靠执行和可复核输出。
        </p>
      </div>

      <div class="steps">
        <article v-for="[number, title, body] in steps" :key="title">
          <span>{{ number }}</span>
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
  color: #fffaf0;
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
  color: rgba(255, 250, 240, 0.76);
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
  background: rgba(255, 252, 244, 0.62);
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
