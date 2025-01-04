export default {
  target: 'static',

  head: {
    title: 'Higuma’s portfolio',
    htmlAttrs: {
      lang: 'ja',
    },
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
    bodyAttrs: {
      class: 'bg-background',
    },
  },

  plugins: ['~plugins/vue-scrollto'],

  components: true,

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/date-fns',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'system', // デフォルトのカラーモード
    fallback: 'light', // システム設定がない場合のフォールバック
    hid: 'nuxt-color-mode-script',
    globalName: '$colorMode',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
  },

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
