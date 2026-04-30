<template>
  <div class="ide card" aria-label="Mokelay IDE 产品界面示意">
    <div class="ide-top">
      <div class="traffic">
        <span />
        <span />
        <span />
      </div>
      <div class="branch">codex/landing-page</div>
      <div class="status">Ready</div>
    </div>

    <div class="ide-body">
      <aside class="files">
        <strong>workspace</strong>
        <span class="active">pages/index.vue</span>
        <span>server/api/auth</span>
        <span>tests/e2e/site.spec.ts</span>
        <span>README.md</span>
      </aside>

      <section class="editor">
        <div class="code-line"><span>01</span><code>&lt;Hero goal="launch" /&gt;</code></div>
        <div class="code-line"><span>02</span><code>const task = await codex.plan()</code></div>
        <div class="code-line highlight"><span>03</span><code>ship({ tests: true, scope: 'clear' })</code></div>
        <div class="code-line"><span>04</span><code>// preview, verify, publish</code></div>

        <div class="agent-panel">
          <p class="agent-title">Mokelay Agent</p>
          <p>已读取页面、接口和测试上下文。下一步：补齐注册校验并运行 E2E。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.ide {
  position: relative;
  overflow: hidden;
  background: #10231f;
  color: #f9f2dd;
  transform: rotate(1.2deg);
}

.ide::after {
  position: absolute;
  right: -90px;
  bottom: -110px;
  width: 240px;
  height: 240px;
  border-radius: 999px;
  background: rgba(215, 245, 107, 0.26);
  content: '';
  filter: blur(2px);
}

.ide-top {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 250, 240, 0.14);
  padding: 16px 18px;
}

.traffic {
  display: flex;
  gap: 7px;
}

.traffic span {
  width: 11px;
  height: 11px;
  border-radius: 99px;
  background: var(--cedar);
}

.traffic span:nth-child(2) {
  background: #e4c45b;
}

.traffic span:nth-child(3) {
  background: var(--sea);
}

.branch,
.status {
  color: rgba(255, 250, 240, 0.68);
  font-size: 0.78rem;
  font-weight: 700;
}

.status {
  justify-self: end;
}

.ide-body {
  display: grid;
  grid-template-columns: 160px 1fr;
  min-height: 370px;
}

.files {
  display: flex;
  flex-direction: column;
  gap: 13px;
  border-right: 1px solid rgba(255, 250, 240, 0.12);
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 250, 240, 0.54);
  font-size: 0.82rem;
  padding: 20px 16px;
}

.files strong {
  color: var(--lime);
}

.files span {
  border-radius: 10px;
  padding: 8px 9px;
}

.files .active {
  background: rgba(215, 245, 107, 0.12);
  color: #fffaf0;
}

.editor {
  position: relative;
  padding: 28px 24px;
}

.code-line {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 14px;
  align-items: center;
  margin-bottom: 12px;
  color: rgba(255, 250, 240, 0.78);
}

.code-line span {
  color: rgba(255, 250, 240, 0.34);
}

.code-line code {
  font-family: 'SFMono-Regular', 'Cascadia Code', Consolas, monospace;
}

.highlight {
  border: 1px solid rgba(215, 245, 107, 0.24);
  border-radius: 14px;
  background: rgba(215, 245, 107, 0.1);
  color: var(--lime);
  padding: 10px;
}

.agent-panel {
  position: absolute;
  right: 24px;
  bottom: 24px;
  max-width: 300px;
  border: 1px solid rgba(255, 250, 240, 0.16);
  border-radius: 22px;
  background: rgba(255, 250, 240, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  padding: 16px;
  backdrop-filter: blur(20px);
}

.agent-title {
  margin: 0 0 8px;
  color: var(--lime);
  font-weight: 800;
}

.agent-panel p:last-child {
  margin: 0;
  color: rgba(255, 250, 240, 0.78);
  font-size: 0.9rem;
  line-height: 1.55;
}

@media (max-width: 560px) {
  .ide {
    transform: none;
  }

  .ide-body {
    grid-template-columns: 1fr;
  }

  .files {
    display: none;
  }

  .agent-panel {
    position: static;
    margin-top: 34px;
  }
}
</style>
