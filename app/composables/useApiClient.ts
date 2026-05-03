import { normalizeApiBaseUrl } from '~/utils/api'

export function useApiClient() {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: normalizeApiBaseUrl(config.public.apiBaseUrl),
    credentials: 'include',
  })
}
