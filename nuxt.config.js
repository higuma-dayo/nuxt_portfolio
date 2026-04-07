export default {
  target: 'static',

  head: {
    title: 'Higuma’s portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'higumaのポートフォリオサイトです。最新のスキルとプロジェクト実績を紹介します。',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicons/icon-192x192.png' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/favicons/apple-touch-icon-180x180.png',
      },
    ],
    htmlAttrs: {
      lang: 'ja',
      style: 'background-color: black;',
    },
    script: [
      {
        src: 'https://cdn.iframe.ly/embed.js',
        async: true,
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-YL9LGK7C29',
        async: true,
      },
      {
        hid: 'gtag',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YL9LGK7C29');
        `,
        type: 'text/javascript',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      gtag: ['innerHTML'],
    },
  },

  plugins: ['~plugins/vue-scrollto'],

  components: true,

  buildModules: ['@nuxtjs/dotenv', '@nuxtjs/date-fns', '@nuxtjs/tailwindcss'],

  modules: ['nuxt-microcms-module', 'nuxt-webfontloader'],

  webfontloader: {
    google: {
      families: ['Rajdhani:wght@300;400;500;600;700&display=swap'],
    },
  },

  microcms: {
    options: {
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: process.env.MICROCMS_API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  build: {
    transpile: ['three'],
  },

  generate: {
    dir: 'public',
  },

  loading: './components/Loading.vue',
}
