import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import "./scss/styles.scss"

Vue.use(Chakra)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount()
