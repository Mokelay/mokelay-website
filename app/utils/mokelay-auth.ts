export const mokelayAuthApiEndpoints = {
  me: '/api/mokelay/me',
  register: '/api/mokelay/register',
  login: '/api/mokelay/login',
  logout: '/api/mokelay/logout',
} as const

export type PublicUser = {
  id: string
  enterprise_uuid: string
  enterprise_name: string
  name: string
  email: string
  plan: string
}

export type AuthSessionData = {
  loggedIn: boolean
  user: PublicUser | null
}

export type AuthUserData = {
  user: PublicUser
}

export type LogoutData = {
  ok: true
}

type MokelayApiSuccess<T> = {
  ok: true
  data: T
}

type MokelayApiError = {
  ok: false
  error: {
    code: string
    message: string
  }
}

export type MokelayApiResponse<T> = MokelayApiSuccess<T> | MokelayApiError

export class MokelayApiResponseError extends Error {
  code: string

  constructor(code: string, message: string) {
    super(message)
    this.name = 'MokelayApiResponseError'
    this.code = code
  }
}

export function unwrapMokelayApiResponse<T>(response: MokelayApiResponse<T>) {
  if (!response.ok) {
    throw new MokelayApiResponseError(response.error.code, response.error.message)
  }

  return response.data
}
