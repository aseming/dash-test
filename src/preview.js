import Vue from 'vue';

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

Vue.component('font-awesome-icon', FontAwesomeIcon);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered'
}
