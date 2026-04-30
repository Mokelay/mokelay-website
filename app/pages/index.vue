<script setup lang="ts">
useSeoMeta({
  title: 'AI 协作开发 IDE 官网',
  ogTitle: 'Mokelay IDE - AI 协作开发 IDE',
  description: 'Mokelay IDE 帮个人开发者和小团队把 AI 编程协作变成可验证、可交付的产品工作流。',
  ogDescription: '面向 AI 协作开发的在线 IDE，从计划、实现、测试到发布。',
})
</script>

<template>
  <div>
    <HeroSection />
    <LogoCloud />
    <FeatureGrid />
    <WorkflowPreview />

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Pricing</p>
          <h2>从免费验证，到团队交付。</h2>
          <p>第一版先给清晰套餐和账号入口；付费闭环会在 Stripe Billing 阶段接入。</p>
        </div>
        <PricingCards compact />
      </div>
    </section>

    <FaqSection />

    <section class="section-tight">
      <div class="container final-cta">
        <div>
          <p class="eyebrow">Start</p>
          <h2>今天先创建一个工作区。</h2>
        </div>
        <NuxtLink class="button button-accent" to="/register">免费开始</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.final-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 34px;
  background:
    radial-gradient(circle at 20% 10%, rgba(215, 245, 107, 0.28), transparent 16rem),
    var(--moss);
  color: #fffaf0;
  padding: 34px;
}

.final-cta h2 {
  margin: 16px 0 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

@media (max-width: 720px) {
  .final-cta {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
