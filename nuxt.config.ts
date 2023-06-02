// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "nuxt-icon",
    "nuxt-appwrite",
    "@pinia/nuxt"
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
  appwrite: {
    endpoint: process.env.APPWRITE_ENDPOINT,
    project: process.env.APPWRITE_PROJECT_ID
  },
  pinia: {
    autoImports: [
      'defineStore'
    ]
  }
})
