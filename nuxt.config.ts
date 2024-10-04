// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-aos',
    'nuxt-highcharts',
  ],

  ui: {
    icons: ['heroicons', 'simple-icons'],
    safelistColors: ['primary', 'red', 'orange', 'green']
  },
  aos:{
    duration: 600,
  },

  colorMode: {
    preference: 'light'
  },
  components: [{
    path: '~/components'
  }, {
    path: '~/components/common',
    pathPrefix: false
  }],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap'},
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        }
      ],
    }
  }
})
