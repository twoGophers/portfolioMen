
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/swiper.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    
    [
      '@nuxtjs/firebase',
      {
        config: {
            apiKey: "AIzaSyCh9-4iPohRwsr5tlc588PNIZX8z9_80hY",
            authDomain: "portfolio-5b78c.firebaseapp.com",
            projectId: "portfolio-5b78c",
            storageBucket: "portfolio-5b78c.appspot.com",
            messagingSenderId: "21665699245",
            appId: "1:21665699245:web:27e69c542c97491fdc3d24",
            measurementId: "G-280E1Y60V8"

        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ],
    //Стили keyframes
    //'@nuxtjs/style-resources',
  ],

  // styleResources: {
  //   scss: [
  //    '~/assets/kyeframes/kyeframes.scss', // путь к вашему файлу
  //   ],
  //  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: 'static',
  router: {
    base: '/portfolioMen/'
  }
}
