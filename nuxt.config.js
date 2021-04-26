import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "xx小学xx",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "renderer", content: "webkit" }
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      {
        rel: "stylesheet",
        href:
          "https://cdn.bootcss.com/MaterialDesign-Webfont/5.0.45/css/materialdesignicons.min.css",
        media: "print",
        onload: "if(this.media!='all')this.media='all'"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "~/plugins/enforce",
      mode: "client"
    },
    {
      src: "~/plugins/notify",
      mode: "client"
    },
    {
      src: "~/plugins/directive",
      mode: "client"
    },
    {
      src: "~/plugins/overlays",
      mode: "client"
    },
    {
      src: "~/plugins/table",
      mode: "client"
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "nuxt-vuex-localstorage",
      {
        localStorage: ["localStorage"], //  If not entered, “localStorage” is the default value
        sessionStorage: ["sessionStorage"] //  If not entered, “localStorage” is the default value
      }
    ]
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      defaultAssets: {
        font: false,
        icons: false
      },
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vuetify", "nuxt-vuex-localstorage"]
  }
};
