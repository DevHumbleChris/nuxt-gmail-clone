<script setup>
const route = useRoute()

useHead({
  meta: [
    { property: 'og:title', content: `Nuxt Gmail - ${route.meta.title}` },
    { name: 'description', content: 'Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.' },
    { property: 'og:description', content: 'Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.' },
    { property: 'og:url', content: 'https://nuxt-gmail-clone.vercel.app' },
    { name: 'twitter:title', content: 'Nuxt Gmail Clone' },
    { name: 'twitter:description', content: 'Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.' },
    { name: 'twitter:site', content: 'https://nuxt-gmail-clone.vercel.app' }
  ],
  title: `Nuxt Gmail Clone - ${route.meta.title}`,
})
</script>
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://metatags.io/">
<meta property="twitter:title" content="Nuxt Gmail Clone">
<meta property="twitter:description" content="Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.">
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

<template>
  <slot />
</template>
