import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueGun from 'vue-gun';
// import SEA from 'gun/sea'; // Required for SEA functions and user authentication
// Vue.use(SEA)
Vue.use(VueGun, {
  //  gun: gun // must be passed in at `gun` key
   peers: [/*'http://localhost:9090/gun',*/ 'https://gun-manhattan.herokuapp.com/gun'/*, 'http://gunjs.herokuapp.com/gun/'*/] // run gun-starter-app on port 9090
});

import OsCorePlugin from './plugins/os-core-plugin';
Vue.use(OsCorePlugin, {store: store});
import GunPlugin from './plugins/gun-plugin';
Vue.use(GunPlugin, {store: store});

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueI18n from 'vue-i18n'
import translation from './translation/all.js'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueI18n)

const messages = translation

const i18n = new VueI18n({
  locale: navigator.language.split("-")[0] || 'en',
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
