// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
  ],
  devtools: true,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
    }
  }
})
