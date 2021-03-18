import { lazy } from 'react'

export const asyncRoutes = [
  {
    path: '/home',
    component: lazy(() => import('pages/Test')),
    meta: {
      title: 'Home'
    },
  }, 
  {
    path: '/test',
    component: lazy(() => import('pages/Test')),
    meta: {
      title: 'Test'
    },
    children: [
      {
        path: '/sub',
        component: lazy(() => import('pages/Test')),
        meta: {
          title: 'TestSub'
        }
      }
    ]
  },
  {
    path: '/Hide',
    component: lazy(() => import('pages/Test')),
    meta: {
      title: 'TestHide'
    },
    hidden: true,
  },
  {
    path: '/404',
    component: lazy(() => import('pages/404')),
    meta: {
      title: '404',
    }
  }
]