export const useSidebarStore = defineStore('sidebar', () => {
    const isSidebarOpen = useState('isSidebarOpen', () => false)

    const openSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value
    }

    return {
        isSidebarOpen,
        openSidebar
    }
})