// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/supabase"
  ],
  devtools: true,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: {
      plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography')
      ]
    }
  },
  pinia: {
    autoImports: [
      'defineStore'
    ]
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY,
  }
})
