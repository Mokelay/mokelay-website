import type { PublicUser } from '~/utils/mokelay-auth'

type AuthState = {
  loggedIn: boolean
  user: PublicUser | null
  pending: boolean
  initialized: boolean
}

export function useAuthSession() {
  const state = useState<AuthState>('mokelay-auth-session', () => ({
    loggedIn: false,
    user: null,
    pending: false,
    initialized: false,
  }))
  const authApi = useMokelayAuthApi()

  async function fetch() {
    state.value.pending = true

    try {
      const session = await authApi.me()

      state.value.loggedIn = session.loggedIn
      state.value.user = session.user
    } catch {
      state.value.loggedIn = false
      state.value.user = null
    } finally {
      state.value.pending = false
      state.value.initialized = true
    }
  }

  function clear() {
    state.value.loggedIn = false
    state.value.user = null
    state.value.initialized = true
  }

  return {
    user: computed(() => state.value.user),
    loggedIn: computed(() => state.value.loggedIn),
    pending: computed(() => state.value.pending),
    initialized: computed(() => state.value.initialized),
    fetch,
    clear,
  }
}
