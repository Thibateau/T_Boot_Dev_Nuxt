import { defineNuxtConfig, NuxtConfig } from 'nuxt'

const config: NuxtConfig = {
  head: {
    title: 'Tboot',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site TBOOT' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/logo.ico' }],
  },

  plugins: [],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['vue'],
    },
  ],

  buildModules: [],

  modules: [],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}
export default defineNuxtConfig(config)
