<script setup lang="ts">
useSeoMeta({
  title: '价格方案',
  description: '查看 Mokelay IDE 的 Free、Pro、Team 和 Enterprise 价格方案。',
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Pricing</p>
        <h1>价格清楚，工作流更清楚。</h1>
        <p>
          先用 Free 方案验证产品想法；当 AI 协作开始成为日常交付节奏，再升级到 Pro 或 Team。
        </p>
      </div>

      <PricingCards />
    </div>
  </section>
</template>
