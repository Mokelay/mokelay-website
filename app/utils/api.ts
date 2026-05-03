export const localApiBaseUrl = 'http://localhost:8787'

export function normalizeApiBaseUrl(value?: string) {
  const baseUrl = value?.trim() || localApiBaseUrl
  return baseUrl.replace(/\/+$/, '')
}
