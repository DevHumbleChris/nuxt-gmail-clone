export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();

  // redirect the user to the login page
  if (!user) {
    return navigateTo({
      path: "/auth/signin",
      query: {
        redirect: to.fullPath,
      },
    });
  }
});
