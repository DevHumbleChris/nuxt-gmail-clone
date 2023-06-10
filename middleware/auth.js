export default defineNuxtRouteMiddleware((to, _from) => {
  const client = useSupabaseAuthClient()
  client.auth.onAuthStateChange((_, session) => {
    if (session && session.user) {
      return navigateTo('/login')
    }
  })
})
