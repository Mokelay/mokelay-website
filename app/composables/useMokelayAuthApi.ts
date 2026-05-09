import {
  mokelayAuthApiEndpoints,
  unwrapMokelayApiResponse,
  type AuthSessionData,
  type AuthUserData,
  type LogoutData,
  type MokelayApiResponse,
} from '~/utils/mokelay-auth'

type LoginPayload = {
  email: string
  password: string
}

type RegisterPayload = LoginPayload & {
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
  }
}
