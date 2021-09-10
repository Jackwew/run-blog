const TerserPlugin = require("terser-webpack-plugin");
const apiConfig = require("./apiConf.env");
console.log("apiConfig:", apiConfig);
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '流年素写一世繁华',
    title: "流年素写一世繁华",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    script: [
      {
        src: "/utils/bideo.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: "#f00"},
  /*
   ** Global CSS
   */
  css: [
    // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
    // 'bulma',
    // // 项目里要用的 CSS 文件
    // '@/assets/css/main.css',
    // // 项目里要使用的 SCSS 文件
    // '@/assets/css/main.scss'
    // 'swiper/swiper-bundle.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/iview',
      ssr: true
    },
    {
      src: '@/plugins/swiper',
      ssr: false
    },
    {
      src: '@/plugins/vue-pdf',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxt/typescript-build",
      {
        typeCheck: false,
        ignoreNotFoundWarnings: true
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  // 配置本地服务
  server: {
    port: apiConfig.port,
    // 同一局域网内通过访问你本机的ip访问项目
    host: apiConfig.host || "127.0.0.1"
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.output.globalObject = 'this'
      config.module.rules.push({
        test: /\.pdf$/,
        loader: 'url-loader'
      })
    },
    transpile: ['gsap'],
  },
  buildDir: 'dist'
};
