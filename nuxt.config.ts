// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
      Poppins: [400, 500, 600, 700]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      title: 'Deep-eyes | Professional Development Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Deep-eyes provides cutting-edge development services for modern businesses. Web development, mobile apps, and digital solutions.' }
      ]
    }
  }
})