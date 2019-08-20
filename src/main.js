// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import nav
import DefaultLayout from '~/layouts/Nav.vue'
// Import footer
import Footer from '~/layouts/Footer.vue'
// Import Bootstrap
import BootstrapVue from 'bootstrap-vue'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
// Import Bootstrap JS
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'

// require('typeface-source-sans-pro')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  // Footer
  Vue.component('Footer', Footer),
  // Google Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans|Poppins'
  }),
  // AOS
  Vue.use(AOS.init());
  // Import bootstrap
  Vue.use(BootstrapVue)
}