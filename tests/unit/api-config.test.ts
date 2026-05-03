import { describe, expect, it } from 'vitest'
import { localApiBaseUrl, normalizeApiBaseUrl } from '../../app/utils/api'

describe('API config', () => {
  it('defaults to the local Mokelay API server', () => {
    expect(normalizeApiBaseUrl()).toBe(localApiBaseUrl)
  })

  it('trims whitespace and trailing slashes from configured base URLs', () => {
    expect(normalizeApiBaseUrl(' https://api.mokelay.com/// ')).toBe('https://api.mokelay.com')
  })
})
