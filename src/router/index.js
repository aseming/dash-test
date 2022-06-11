import Vue from 'vue'
import VueRouter from 'vue-router'
import LibraryView from '../views/LibraryView.vue'
import DesignView from '../views/DesignView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LibraryView,
    children: [
      {
        path: '/',
        name: 'Start',
        component: () => import('../views/library/GetStarted.vue')
      },
      {
        path: '/lib/button',
        name: 'Button',
        component: () => import('../views/library/ButtonLib.vue')
      },
      {
        path: '/lib/checkbox',
        name: 'Checkbox',
        component: () => import('../views/library/CheckboxLib.vue')
      },
      {
        path: '/lib/radio',
        name: 'Radio',
        component: () => import('../views/library/RadioLib.vue')
      },
      {
        path: '/lib/switch',
        name: 'Switch',
        component: () => import('../views/library/SwitchLib.vue')
      },
      {
        path: '/lib/slider',
        name: 'Slider',
        component: () => import('../views/library/SliderLib.vue')
      },
      {
        path: '/lib/tabs',
        name: 'Tabs',
        component: () => import('../views/library/TabsLib.vue')
      },
      {
        path: '/lib/progress',
        name: 'Progress',
        component: () => import('../views/library/ProgressLib.vue')
      },
      {
        path: '/lib/avatar',
        name: 'Avatar',
        component: () => import('../views/library/AvatarLib.vue')
      },
      {
        path: '/lib/input',
        name: 'Input',
        component: () => import('../views/library/InputLib.vue')
      },
      {
        path: '/lib/selector',
        name: 'Selector',
        component: () => import('../views/library/SelectorLib.vue')
      },
      {
        path: '/lib/dropmenu',
        name: 'Dropmenu',
        component: () => import('../views/library/DropmenuLib.vue')
      },
      {
        path: '/lib/badge',
        name: 'Badge',
        component: () => import('../views/library/BadgeLib.vue')
      },
      {
        path: '/lib/modal',
        name: 'Modal',
        component: () => import('../views/library/ModalLib.vue')
      },
      {
        path: '/lib/popover',
        name: 'Popover',
        component: () => import('../views/library/PopoverLib.vue')
      },
      {
        path: '/lib/notice',
        name: 'Notice',
        component: () => import('../views/library/NoticeLib.vue')
      },
      {
        path: '/lib/spinner',
        name: 'Spinner',
        component: () => import('../views/library/SpinnerLib.vue')
      },
      {
        path: '/lib/tags',
        name: 'Tags',
        component: () => import('../views/library/TagsLib.vue')
      },
      {
        path: '/lib/collapse',
        name: 'Collapse',
        component: () => import('../views/library/CollapseLib.vue')
      },
      {
        path: '/lib/pagination',
        name: 'Pagination',
        component: () => import('../views/library/PaginationLib.vue')
      },
      {
        path: '/lib/table',
        name: 'Table',
        component: () => import('../views/library/TableLib.vue')
      },
      {
        path: '/lib/tableb',
        name: 'Table B',
        component: () => import('../views/library/TableBLib.vue')
      },
      {
        path: '/lib/sidemenu',
        name: 'Sidemenu',
        component: () => import('../views/library/SidemenuLib.vue')
      }
    ],
  },
  {
    path: '/des',
    name: 'design',
    component: DesignView,
    children: [
      {
        path: '/des',
        name: 'Start',
        component: () => import('../views/design/GetDesign.vue')
      },
      {
        path: '/des/typo',
        name: 'Typography',
        component: () => import('../views/design/TypoDes.vue')
      },
      {
        path: '/des/color',
        name: 'Color',
        component: () => import('../views/design/ColorDes.vue')
      },
      {
        path: '/des/icons',
        name: 'Icons',
        component: () => import('../views/design/IconsDes.vue')
      },
      {
        path: '/des/grid',
        name: 'Grid',
        component: () => import('../views/design/GridDes.vue')
      },
      {
        path: '/des/button',
        name: 'Button',
        component: () => import('../views/design/ButtonDes.vue')
      },
      {
        path: '/des/dashboard',
        name: 'Dashboard',
        component: () => import('../views/design/DashboardDes.vue')
      },
      {
        path: '/des/form',
        name: 'Form',
        component: () => import('../views/design/FormDes.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
