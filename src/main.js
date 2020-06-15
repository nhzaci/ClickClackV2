import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

//Plugins
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.$cookies.config('7d', '', '', '', 'Strict')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
