<script setup>
const route = useRoute();

useHead({
  meta: [
    { property: "og:title", content: `Nuxt Gmail - ${route.meta.title}` },
    {
      name: "description",
      content:
        "Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.",
    },
    {
      property: "og:description",
      content:
        "Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.",
    },
    { property: "og:url", content: "https://nuxt-gmail-clone.vercel.app" },
    { name: "twitter:title", content: "Nuxt Gmail Clone" },
    {
      name: "twitter:description",
      content:
        "Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.",
    },
    { name: "twitter:site", content: "https://nuxt-gmail-clone.vercel.app" },
  ],
  title: `Nuxt Gmail Clone - ${route.meta.title}`,
});
</script>

<template>
  <slot />
</template>
