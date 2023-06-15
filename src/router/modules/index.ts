// @ts-ignore
import Layouts from "@/layouts/index.vue";
// @ts-ignore
export const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    hidden: false,
    meta: {
      title:'工作台',
      icon: 'AccountBookFilled'
    },
    component: Layouts,
    redirect: '/dashboard/analyze',
    children: [
      {
        path: 'analyze',
        name: 'analyze',
        hidden: false,
        meta: {
          title:'图表',
          icon: 'ApiFilled'
        },
        component: () => import("@/views/dashboard/index.vue")
      },
    ]
  },
  {
    path: '/other',
    name: 'other',
    hidden: true,
    meta: {
      title:'其他',
      icon: 'AccountBookFilled'
    },
    component: Layouts,
    redirect: '/other/index',
    children: [
      {
        path: 'index',
        name: 'index',
        hidden: false,
        meta: {
          title:'其他',
          icon: 'ApiFilled'
        },
        component: () => import("@/views/other/index.vue")
      },
    ]

  },
  {
    path: '/feature',
    name: 'feature',
    hidden: false,
    meta: {
      title:'功能',
      icon: 'AliwangwangFilled'
    },
    component: Layouts,
    redirect: '/feature/form',
    children: [
      {
        path: 'form',
        name: 'form',
        hidden: false,
        meta: {
          title:'表单',
          icon: 'ApiFilled'
        },
        component: () => import("@/views/feature/vue.vue")
      },
      {
        path: 'data',
        name: 'data',
        hidden: true,
        meta: {
          title:'数据',
          icon: 'ApiFilled'
        },
        component: () => import("@/views/feature/vue.vue")
      }
    ]
  },
]
