import { describe, expect, it } from 'vitest'
import {
  mokelayAuthApiEndpoints,
  MokelayApiResponseError,
  normalizeAuthRedirectPath,
  oauthStartPath,
  resolveAuthRedirectTarget,
  unwrapMokelayApiResponse,
} from '../../app/utils/mokelay-auth'

describe('Mokelay auth API helpers', () => {
  it('uses the current Mokelay orchestration auth endpoints', () => {
    expect(mokelayAuthApiEndpoints).toEqual({
      me: '/api/mokelay/me',
      register: '/api/mokelay/register',
      login: '/api/mokelay/login',
      logout: '/api/mokelay/logout',
      oauthGoogleStart: '/api/mokelay/oauth_google_start',
      oauthGithubStart: '/api/mokelay/oauth_github_start',
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

  it('builds OAuth URLs with a separate redirect origin', () => {
    expect(oauthStartPath('google', '/#/pages?id=1', 'https://editor.mokelay.com')).toBe(
      '/api/mokelay/oauth_google_start?redirect=%2F%23%2Fpages%3Fid%3D1&redirect_origin=https%3A%2F%2Feditor.mokelay.com',
    )
  })

  it('allows editor redirects and rejects unsafe paths and origins', () => {
    expect(resolveAuthRedirectTarget('/#/pages', 'https://editor.mokelay.com', 'https://www.mokelay.com')).toBe(
      'https://editor.mokelay.com/#/pages',
    )
    expect(resolveAuthRedirectTarget('/#/pages', 'https://evil.example', 'https://www.mokelay.com')).toBe('/#/pages')
    expect(normalizeAuthRedirectPath('//evil.example/path')).toBe('/dashboard')
    expect(normalizeAuthRedirectPath('/safe\\unsafe')).toBe('/dashboard')
  })
})
