<script setup lang="ts">
useSeoMeta({
  title: '登录',
  description: '登录 Mokelay IDE 控制台。',
})
</script>

<template>
  <section class="form-page">
    <div class="container form-wrap">
      <div class="form-copy">
        <p class="eyebrow">Welcome back</p>
        <h1>回到你的 AI 开发工作台。</h1>
        <p>登录后可以查看工作区、订阅状态，以及后续接入 Mokelay IDE 主应用的入口。</p>
      </div>
      <AuthForm mode="login" />
    </div>
  </section>
</template>
