<script setup lang="ts">
const props = defineProps<{
  mode: 'login' | 'register'
}>()

const route = useRoute()
const router = useRouter()
const { fetch: refreshSession } = useUserSession()

const form = reactive({
  name: '',
  email: '',
  password: '',
})

const loading = ref(false)
const errorMessage = ref('')
const ready = ref(false)

type RequestError = Error & {
  statusMessage?: string
  data?: {
    message?: string
    statusMessage?: string
  }
}

const title = computed(() => (props.mode === 'login' ? '欢迎回来' : '创建你的 Mokelay 工作区'))
const subtitle = computed(() =>
  props.mode === 'login'
    ? '继续进入控制台，管理你的 IDE 工作区和订阅状态。'
    : '注册后会自动进入控制台。第一版使用内置账号体系，后续可接 OAuth 和 Stripe。',
)
const submitLabel = computed(() => (props.mode === 'login' ? '登录' : '注册并进入控制台'))
const alternate = computed(() =>
  props.mode === 'login'
    ? { text: '还没有账号？', label: '立即注册', to: '/register' }
    : { text: '已有账号？', label: '去登录', to: '/login' },
)

onMounted(() => {
  ready.value = true
})

async function submit() {
  errorMessage.value = ''
  loading.value = true

  try {
    const endpoint = props.mode === 'login' ? '/api/auth/login' : '/api/auth/register'
    await $fetch(endpoint, {
      method: 'POST',
      body: props.mode === 'login'
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password },
    })
    await refreshSession()

    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/dashboard'
    await router.push(redirect)
  } catch (error) {
    const requestError = error as RequestError
    errorMessage.value =
      requestError.data?.statusMessage
      || requestError.data?.message
      || requestError.statusMessage
      || requestError.message
      || '请求失败，请稍后重试。'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="auth-card card" method="post" @submit.prevent="submit">
    <div>
      <p class="eyebrow">{{ mode === 'login' ? 'Login' : 'Register' }}</p>
      <h2>{{ title }}</h2>
      <p class="subtitle">{{ subtitle }}</p>
    </div>

    <label v-if="mode === 'register'">
      <span>姓名</span>
      <input
        v-model="form.name"
        name="name"
        autocomplete="name"
        placeholder="Mokelay"
        :disabled="loading || !ready"
        required
      >
    </label>

    <label>
      <span>邮箱</span>
      <input
        v-model="form.email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="you@example.com"
        :disabled="loading || !ready"
        required
      >
    </label>

    <label>
      <span>密码</span>
      <input
        v-model="form.password"
        name="password"
        type="password"
        :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
        placeholder="至少 8 位"
        :disabled="loading || !ready"
        required
      >
    </label>

    <p v-if="errorMessage" class="error" role="alert">{{ errorMessage }}</p>

    <button
      class="button button-primary button-full"
      type="button"
      :disabled="loading || !ready"
      @click="submit"
    >
      {{ !ready ? '准备中...' : loading ? '处理中...' : submitLabel }}
    </button>

    <p class="alternate">
      {{ alternate.text }}
      <NuxtLink :to="alternate.to">{{ alternate.label }}</NuxtLink>
    </p>
  </form>
</template>

<style scoped>
.auth-card {
  display: grid;
  gap: 18px;
  padding: 28px;
}

h2 {
  margin: 14px 0 8px;
  font-family: var(--font-display);
  font-size: 2.2rem;
  line-height: 1;
  letter-spacing: -0.05em;
}

.subtitle {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.6;
}

label {
  display: grid;
  gap: 8px;
  color: var(--ink-soft);
  font-weight: 800;
}

input {
  width: 100%;
  border: 1px solid rgba(16, 35, 31, 0.18);
  border-radius: 16px;
  background: rgba(255, 252, 244, 0.78);
  color: var(--ink);
  outline: none;
  padding: 15px 16px;
  transition:
    border-color 140ms ease,
    box-shadow 140ms ease;
}

input:focus {
  border-color: var(--cedar);
  box-shadow: 0 0 0 4px rgba(207, 93, 54, 0.12);
}

.error {
  margin: 0;
  border-radius: 16px;
  background: rgba(207, 93, 54, 0.12);
  color: var(--cedar-dark);
  font-weight: 800;
  line-height: 1.5;
  padding: 12px 14px;
}

.alternate {
  margin: 0;
  color: var(--muted);
  text-align: center;
}

.alternate a {
  color: var(--cedar-dark);
  font-weight: 900;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.72;
  transform: none;
}

input:disabled {
  cursor: wait;
  opacity: 0.68;
}
</style>
