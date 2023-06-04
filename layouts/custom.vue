<script setup>
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `Nuxt Gmail - ${route.meta.title}` }],
  title: `Nuxt Gmail - ${route.meta.title}`
})
</script>

<template>
    <slot />
</template>
