<script setup lang="ts">
const { copy } = useAppSettings()

useSeoMeta({
  title: () => copy.value.auth.registerSeoTitle,
  description: () => copy.value.auth.registerSeoDescription,
})
</script>

<template>
  <section class="form-page">
    <div class="container form-wrap">
      <div class="form-copy">
        <p class="eyebrow">{{ copy.auth.registerPage.eyebrow }}</p>
        <h1>{{ copy.auth.registerPage.title }}</h1>
        <p>{{ copy.auth.registerPage.body }}</p>
      </div>
      <AuthForm mode="register" />
    </div>
  </section>
</template>
