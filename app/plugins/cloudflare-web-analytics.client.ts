const CLOUDFLARE_BEACON_ID = 'cloudflare-web-analytics'
const CLOUDFLARE_BEACON_SRC = 'https://static.cloudflareinsights.com/beacon.min.js'

export default defineNuxtPlugin(() => {
  if (import.meta.dev) return

  const token = useRuntimeConfig().public.cloudflareWebAnalyticsToken.trim()
  if (!token || document.getElementById(CLOUDFLARE_BEACON_ID)) return

  const script = document.createElement('script')
  script.id = CLOUDFLARE_BEACON_ID
  script.type = 'module'
  script.src = CLOUDFLARE_BEACON_SRC
  script.dataset.cfBeacon = JSON.stringify({ token })
  document.head.appendChild(script)
})
