import { describe, expect, it } from 'vitest'
import {
  mokelayAuthApiEndpoints,
  MokelayApiResponseError,
  unwrapMokelayApiResponse,
} from '../../app/utils/mokelay-auth'

describe('Mokelay auth API helpers', () => {
  it('uses the current Mokelay orchestration auth endpoints', () => {
    expect(mokelayAuthApiEndpoints).toEqual({
      me: '/api/mokelay/me',
      register: '/api/mokelay/register',
      login: '/api/mokelay/login',
      logout: '/api/mokelay/logout',
    })
  })

  it('unwraps successful Mokelay API responses', () => {
    expect(unwrapMokelayApiResponse({ ok: true, data: { loggedIn: false, user: null } })).toEqual({
      loggedIn: false,
      user: null,
    })
  })

  it('throws a readable error for failed Mokelay API responses', () => {
    expect(() =>
      unwrapMokelayApiResponse({
        ok: false,
        error: {
          code: 'PROCESSOR_VALIDATION_FAILED',
          message: 'email 格式非法',
        },
      }),
    ).toThrow(MokelayApiResponseError)
  })
})
