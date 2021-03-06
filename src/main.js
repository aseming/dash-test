import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import Chakra, { CThemeProvider, CColorModeProvider, CReset } from '@chakra-ui/vue'
import "./scss/styles.scss"

Vue.use(Chakra)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(CThemeProvider, [h(CReset), h(CColorModeProvider), h(App)])
}).$mount()
 



Vue.component('font-awesome-icon', FontAwesomeIcon)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
faPlus, faBars, faXmark, faEnvelope, faCheck, faSearch, faTrash, faBell,
faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faArrowDown, faArrowUp, faEllipsis, faEllipsisVertical,
faClock, faUser, faPaperclip, faCircleInfo, faCalendarDays, faChartSimple, faHeart, faWrench,
faPieChart, faTableList, faSquareCheck,
} from '@fortawesome/free-solid-svg-icons'

library.add(
faPlus, faBars, faXmark, faEnvelope, faCheck, faSearch, faTrash, faBell,
faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faArrowDown, faArrowUp, faEllipsis, faEllipsisVertical,
faClock, faUser, faPaperclip, faCircleInfo, faCalendarDays, faChartSimple, faHeart, faWrench,
faPieChart, faTableList, faSquareCheck, 

)

import VueGoodTablePlugin from 'vue-good-table';
Vue.use(VueGoodTablePlugin);
