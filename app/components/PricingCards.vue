<script setup lang="ts">
type Plan = {
  name: string
  price: string
  description: string
  cta: string
  to: string
  featured?: boolean
  features: string[]
}

defineProps<{
  compact?: boolean
}>()

const plans: Plan[] = [
  {
    name: 'Free',
    price: '¥0',
    description: '适合先验证一个产品想法。',
    cta: '免费开始',
    to: '/register',
    features: ['1 个个人工作区', '基础 AI 任务流', '官网账号与控制台', '社区支持'],
  },
  {
    name: 'Pro',
    price: '¥99/月',
    description: '适合持续交付的个人开发者。',
    cta: '选择 Pro',
    to: '/register?plan=pro',
    featured: true,
    features: ['无限项目草稿', '高级上下文索引', 'Playwright 验证流', '优先功能预览'],
  },
  {
    name: 'Team',
    price: '¥299/月',
    description: '适合小团队共享 AI 开发流程。',
    cta: '选择 Team',
    to: '/register?plan=team',
    features: ['多人工作区', '角色与权限', '共享任务历史', '团队级审计记录'],
  },
  {
    name: 'Enterprise',
    price: '联系我们',
    description: '适合私有化、合规和深度集成。',
    cta: '预约沟通',
    to: 'mailto:hello@mokelay.com',
    features: ['私有部署评估', 'SSO/OIDC', '数据保留策略', '专属支持'],
  },
]
</script>

<template>
  <div class="pricing-grid" :class="{ compact }">
    <article
      v-for="plan in plans"
      :key="plan.name"
      class="price-card card"
      :class="{ featured: plan.featured }"
    >
      <div>
        <p v-if="plan.featured" class="badge">推荐</p>
        <h3>{{ plan.name }}</h3>
        <p class="price">{{ plan.price }}</p>
        <p class="description">{{ plan.description }}</p>
      </div>

      <ul>
        <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
      </ul>

      <NuxtLink
        class="button button-full"
        :class="plan.featured ? 'button-accent' : 'button-secondary'"
        :to="plan.to"
      >
        {{ plan.cta }}
      </NuxtLink>
    </article>
  </div>
</template>

<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.compact {
  grid-template-columns: repeat(3, 1fr);
}

.compact .price-card:nth-child(4) {
  display: none;
}

.price-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 470px;
  padding: 24px;
}

.featured {
  background:
    radial-gradient(circle at top right, rgba(215, 245, 107, 0.42), transparent 15rem),
    var(--moss);
  color: #fffaf0;
}

.badge {
  display: inline-flex;
  margin: 0 0 18px;
  border-radius: 999px;
  background: var(--lime);
  color: var(--moss);
  font-size: 0.82rem;
  font-weight: 900;
  padding: 7px 10px;
}

h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.price {
  margin: 18px 0 8px;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.05em;
}

.description {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.55;
}

.featured .description {
  color: rgba(255, 250, 240, 0.72);
}

ul {
  display: grid;
  gap: 12px;
  margin: 28px 0;
  padding: 0;
  list-style: none;
}

li {
  color: var(--ink-soft);
  line-height: 1.45;
}

li::before {
  margin-right: 8px;
  color: var(--cedar);
  content: '•';
}

.featured li {
  color: rgba(255, 250, 240, 0.82);
}

.featured li::before {
  color: var(--lime);
}

@media (max-width: 1080px) {
  .pricing-grid,
  .compact {
    grid-template-columns: repeat(2, 1fr);
  }

  .compact .price-card:nth-child(4) {
    display: flex;
  }
}

@media (max-width: 640px) {
  .pricing-grid,
  .compact {
    grid-template-columns: 1fr;
  }
}
</style>
