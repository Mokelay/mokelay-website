import {
  mokelayAuthApiEndpoints,
  oauthStartPath,
  unwrapMokelayApiResponse,
  type AuthSessionData,
  type AuthUserData,
  type LogoutData,
  type MokelayApiResponse,
} from '~/utils/mokelay-auth'
import { normalizeApiBaseUrl } from '~/utils/api'

type LoginPayload = {
  email: string
  password: string
}

type RegisterPayload = LoginPayload & {
  enterprise_name: string
  name: string
}

export function useMokelayAuthApi() {
  const api = useApiClient()

  async function request<T>(endpoint: string, options?: Parameters<typeof api>[1]) {
    const response = await api<MokelayApiResponse<T>>(endpoint, options)

    return unwrapMokelayApiResponse(response)
  }

  return {
    me: () => request<AuthSessionData>(mokelayAuthApiEndpoints.me),
    register: (body: RegisterPayload) =>
      request<AuthUserData>(mokelayAuthApiEndpoints.register, { method: 'POST', body }),
    login: (body: LoginPayload) =>
      request<AuthUserData>(mokelayAuthApiEndpoints.login, { method: 'POST', body }),
    logout: () => request<LogoutData>(mokelayAuthApiEndpoints.logout, { method: 'POST' }),
    oauthStartUrl: (provider: 'google' | 'github', redirect = '/dashboard', redirectOrigin?: string) =>
      `${normalizeApiBaseUrl(useRuntimeConfig().public.apiBaseUrl)}${oauthStartPath(provider, redirect, redirectOrigin)}`,
  }
}
