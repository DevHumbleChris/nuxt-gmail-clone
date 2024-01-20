export const useActiveStore = defineStore("active", () => {
  const activeRoute = useState("activeRoute", () => "inbox");

  const setActiveRoute = (payload) => {
    activeRoute.value = payload;
  };

  return {
    activeRoute,
    setActiveRoute,
  };
});
