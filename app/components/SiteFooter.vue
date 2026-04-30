<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <NuxtLink class="brand" to="/">
          <span class="brand-mark">M</span>
          <span>Mokelay IDE</span>
        </NuxtLink>
        <p>面向 AI 协作开发的在线 IDE，把想法、代码、测试和发布放到一条清晰的工作流里。</p>
      </div>

      <div class="footer-links">
        <NuxtLink to="/#features">产品</NuxtLink>
        <NuxtLink to="/pricing">价格</NuxtLink>
        <NuxtLink to="/login">登录</NuxtLink>
        <NuxtLink to="/register">注册</NuxtLink>
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
