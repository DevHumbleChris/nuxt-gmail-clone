// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
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
  }
})
