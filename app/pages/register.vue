<script setup lang="ts">
useSeoMeta({
  title: '注册',
  description: '创建 Mokelay IDE 账号并进入控制台。',
})
</script>

<template>
  <section class="form-page">
    <div class="container form-wrap">
      <div class="form-copy">
        <p class="eyebrow">Create workspace</p>
        <h1>先创建账号，再把想法交给工作流。</h1>
        <p>第一版账号体系直接由 Nuxt Server 承载，默认支持本地开发 fallback，生产环境连接 PostgreSQL。</p>
      </div>
      <AuthForm mode="register" />
    </div>
  </section>
</template>
