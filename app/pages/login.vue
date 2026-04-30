<script setup lang="ts">
const { copy } = useAppSettings()

useSeoMeta({
  title: () => copy.value.auth.loginSeoTitle,
  description: () => copy.value.auth.loginSeoDescription,
})
</script>

<template>
  <section class="form-page">
    <div class="container form-wrap">
      <div class="form-copy">
        <p class="eyebrow">{{ copy.auth.loginPage.eyebrow }}</p>
        <h1>{{ copy.auth.loginPage.title }}</h1>
        <p>{{ copy.auth.loginPage.body }}</p>
      </div>
      <AuthForm mode="login" />
    </div>
  </section>
</template>
