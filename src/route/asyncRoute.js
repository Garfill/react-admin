import { lazy } from 'react'

import { HomeOutlined, DisconnectOutlined } from '@ant-design/icons'

export const asyncRoutes = [
  {
    path: '/home',
    component: lazy(() => import('pages/Test')),
    meta: {
      title: 'Home'
    },
    icon: <HomeOutlined />
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
          title: 'TestChild'
        }
      }
    ]
  },
  {
    path: '/404',
    component: lazy(() => import('pages/404')),
    meta: {
      title: '404',
    },
    icon: <DisconnectOutlined />
  },
]