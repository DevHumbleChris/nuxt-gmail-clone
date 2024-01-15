export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();

  // redirect the user to the logged in page
  if (user) {
    return navigateTo({
      path: "/",
    });
  }
});
