<script setup lang="ts">
const props = defineProps<{
  mode: 'login' | 'register'
}>()

const route = useRoute()
const router = useRouter()
const authApi = useMokelayAuthApi()
const { fetch: refreshSession } = useAuthSession()
const { copy } = useAppSettings()

const form = reactive({
  enterpriseName: '',
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
    error?: {
      message?: string
    }
  }
}

const title = computed(() => (props.mode === 'login' ? copy.value.auth.form.loginTitle : copy.value.auth.form.registerTitle))
const subtitle = computed(() =>
  props.mode === 'login'
    ? copy.value.auth.form.loginSubtitle
    : copy.value.auth.form.registerSubtitle,
)
const submitLabel = computed(() => (props.mode === 'login' ? copy.value.auth.form.loginSubmit : copy.value.auth.form.registerSubmit))
const alternate = computed(() =>
  props.mode === 'login'
    ? { text: copy.value.auth.form.noAccount, label: copy.value.auth.form.goRegister, to: '/register' }
    : { text: copy.value.auth.form.hasAccount, label: copy.value.auth.form.goLogin, to: '/login' },
)
const formRedirect = computed(() => (typeof route.query.redirect === 'string' ? route.query.redirect : '/dashboard'))
const oauthErrorMessage = computed(() => {
  const code = typeof route.query.oauth_error === 'string' ? route.query.oauth_error : ''
  const errors = copy.value.auth.form.oauthErrors as Record<string, string>

  return code ? errors[code] || copy.value.auth.form.fallbackError : ''
})

onMounted(() => {
  ready.value = true
  errorMessage.value = oauthErrorMessage.value
})

async function submit() {
  errorMessage.value = ''
  loading.value = true

  try {
    if (props.mode === 'login') {
      await authApi.login({ email: form.email, password: form.password })
    } else {
      await authApi.register({
        enterprise_name: form.enterpriseName,
        name: form.name,
        email: form.email,
        password: form.password,
      })
    }

    await refreshSession()

    await router.push(formRedirect.value)
  } catch (error) {
    const requestError = error as RequestError
    errorMessage.value =
      requestError.data?.error?.message
      || requestError.data?.statusMessage
      || requestError.data?.message
      || requestError.statusMessage
      || requestError.message
      || copy.value.auth.form.fallbackError
  } finally {
    loading.value = false
  }
}

function startOAuth(provider: 'google' | 'github') {
  window.location.href = authApi.oauthStartUrl(provider, formRedirect.value)
}
</script>

<template>
  <form class="auth-card card" method="post" @submit.prevent="submit">
    <div>
      <p class="eyebrow">{{ mode === 'login' ? 'Login' : 'Register' }}</p>
      <h2>{{ title }}</h2>
      <p class="subtitle">{{ subtitle }}</p>
    </div>

    <div class="oauth-actions">
      <button
        class="oauth-button"
        type="button"
        :disabled="loading || !ready"
        @click="startOAuth('google')"
      >
        <span class="oauth-mark google-mark">G</span>
        {{ copy.auth.form.googleSubmit }}
      </button>
      <button
        class="oauth-button"
        type="button"
        :disabled="loading || !ready"
        @click="startOAuth('github')"
      >
        <span class="oauth-mark github-mark">GH</span>
        {{ copy.auth.form.githubSubmit }}
      </button>
    </div>

    <div class="auth-divider">
      <span>{{ copy.auth.form.oauthDivider }}</span>
    </div>

    <label v-if="mode === 'register'">
      <span>{{ copy.auth.form.enterpriseName }}</span>
      <input
        v-model="form.enterpriseName"
        name="enterprise_name"
        autocomplete="organization"
        placeholder="Mokelay"
        :disabled="loading || !ready"
        required
      >
    </label>

    <label v-if="mode === 'register'">
      <span>{{ copy.auth.form.name }}</span>
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
      <span>{{ copy.auth.form.email }}</span>
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
      <span>{{ copy.auth.form.password }}</span>
      <input
        v-model="form.password"
        name="password"
        type="password"
        :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
        :placeholder="copy.auth.form.passwordPlaceholder"
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
      {{ !ready ? copy.common.loading : loading ? copy.common.processing : submitLabel }}
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

.oauth-actions {
  display: grid;
  gap: 10px;
}

.oauth-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border: 1px solid rgba(16, 35, 31, 0.16);
  border-radius: 16px;
  background: var(--surface-strong);
  color: var(--ink);
  cursor: pointer;
  font-weight: 900;
  gap: 10px;
  padding: 0 14px;
}

.oauth-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 0.78rem;
  font-weight: 900;
}

.google-mark {
  background: #ffffff;
  color: #1a73e8;
}

.github-mark {
  background: #10231f;
  color: #fffaf0;
  font-size: 0.68rem;
}

.auth-divider {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 800;
}

.auth-divider::before,
.auth-divider::after {
  height: 1px;
  background: var(--line);
  content: '';
}

input {
  width: 100%;
  border: 1px solid rgba(16, 35, 31, 0.18);
  border-radius: 16px;
  background: var(--surface-strong);
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

input:disabled,
.oauth-button:disabled {
  cursor: wait;
  opacity: 0.68;
}
</style>
