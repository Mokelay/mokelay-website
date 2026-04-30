<script setup lang="ts">
const { copy } = useAppSettings()
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <NuxtLink class="brand" to="/">
          <span class="brand-mark">M</span>
          <span>Mokelay IDE</span>
        </NuxtLink>
        <p>{{ copy.footer.description }}</p>
      </div>

      <div class="footer-links">
        <NuxtLink to="/#features">{{ copy.footer.product }}</NuxtLink>
        <NuxtLink to="/pricing">{{ copy.footer.pricing }}</NuxtLink>
        <NuxtLink to="/login">{{ copy.footer.login }}</NuxtLink>
        <NuxtLink to="/register">{{ copy.footer.register }}</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 34px 0 42px;
}

.footer-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 12px;
  background: var(--moss);
  color: var(--lime);
  font-family: var(--font-display);
}

p {
  max-width: 520px;
  margin: 14px 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 18px;
  color: var(--ink-soft);
  font-weight: 700;
}

@media (max-width: 760px) {
  .footer-grid {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-links {
    flex-wrap: wrap;
  }
}
</style>
