// nuxt.config.js
export default defineNuxtConfig({
 compatibilityDate: '2024-04-03',

 devtools: { enabled: false },

 modules: [
   '@nuxtjs/tailwindcss',
   '@nuxtjs/google-fonts',
   '@vueuse/nuxt',
   '@nuxtjs/color-mode',
   '@nuxtjs/robots',
   '@nuxtjs/sitemap',
 ],

 site: {
    url: 'https://deep-eyes.online', // ✅ Required!
    name: 'Deep‑eyes',
    description:
      'Deep‑eyes provides cutting‑edge development services for modern businesses: web development, mobile apps, and digital solutions.',
    image: '/og-image.png',
    language: 'en' // optional, defaults to 'en'
  },

 googleFonts: {
   families: {
     Inter: [300, 400, 500, 600, 700, 800],
     Poppins: [400, 500, 600, 700],
   }
 },

 colorMode: {
   classSuffix: ''
 },

 nitro: {
   prerender: {
     routes: ['/', '/privacy', '/terms']
   }
 },

 robots: {
   rules: {
     UserAgent: '*',
     Disallow: ['/admin'],
     Allow: '/',
   },
   sitemap: '/sitemap.xml'
 },

 sitemap: {
     gzip: true,
    routes: [
       '/',
       '/privacy',
       '/terms'
     // you can also dynamically generate routes here if you have a CMS
   ],
   hostname: 'https://deep-eyes.online'
 },

app: {
 head: {
   titleTemplate: '%s | Deep‑eyes',
   title: 'Professional Development Services',
   meta: [

          { name: 'facebook-domain-verification', content: 'fcznsoffwl1dbawl9n9f13ks8prpsp' },
     { charset: 'utf-8' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     {
       key: 'description',
       name: 'description',
       content: 'Deep‑eyes provides cutting‑edge development services for modern businesses: web development, mobile apps, and digital solutions.'
     },
     // Open Graph
     {
       key: 'og:site_name',
       property: 'og:site_name',
       content: 'Deep‑eyes'
     },
     {
       key: 'og:title',
       property: 'og:title',
       content: 'Professional Development Services'
     },
     {
       key: 'og:description',
       property: 'og:description',
       content: 'Deep‑eyes provides cutting‑edge development services for modern businesses: web development, mobile apps, and digital solutions.'
     },
     {
       key: 'og:url',
       property: 'og:url',
       content: 'https://deep-eyes.online'
     },
     {
       key: 'og:type',
       property: 'og:type',
       content: 'website'
     },
     {
       key: 'og:image',
       property: 'og:image',
       content: '/og-image.png'
     },
     // Twitter Card
     {
       key: 'twitter:card',
       name: 'twitter:card',
       content: 'summary_large_image'
     },
     {
       key: 'twitter:site',
       name: 'twitter:site',
       content: '@yourTwitter'
     },
     {
       key: 'twitter:title',
       name: 'twitter:title',
       content: 'Professional Development Services'
     },
     {
       key: 'twitter:description',
       name: 'twitter:description',
       content: 'Deep‑eyes provides cutting‑edge development services for modern businesses: web development, mobile apps, and digital solutions.'
     },
     {
       key: 'twitter:image',
       name: 'twitter:image',
       content: '/og-image.png'
     }
   ],
   link: [
     { rel: 'icon', type: 'image/png', href: '/favicon.png' },
     { rel: 'canonical', href: 'https://deep-eyes.online' }
   ]
 }
}

})