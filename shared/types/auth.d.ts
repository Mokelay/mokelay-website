import type { PublicUser } from '../../server/utils/user-store'

declare module '#auth-utils' {
  interface User extends PublicUser {}

  interface UserSession {
    loggedInAt?: string
  }
}

export {}
