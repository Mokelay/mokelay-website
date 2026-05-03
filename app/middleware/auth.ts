export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) {
    return
  }

  const { loggedIn, fetch } = useAuthSession()

  await fetch()

  if (!loggedIn.value) {
    return navigateTo('/login?redirect=/dashboard')
  }
})
