export const useSidebarStore = defineStore("sidebar", () => {
  const isSidebarOpen = useState("isSidebarOpen", () => false);
  const isLeftSidebarMenuOpen = useState("isLeftSidebarMenuOpen", () => false);

  const openSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const openLeftSidebarMenu = () => {
    isLeftSidebarMenuOpen.value = !isLeftSidebarMenuOpen.value;
  };

  return {
    isSidebarOpen,
    openSidebar,
    isLeftSidebarMenuOpen,
    openLeftSidebarMenu,
  };
});
