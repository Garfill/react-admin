import { lazy } from 'react'

import { HomeOutlined, DisconnectOutlined, QuestionCircleOutlined } from '@ant-design/icons'

const Admin = lazy(() => import('pages/Admin'))
const Test = lazy(() => import('pages/Test'))
const NotFound = lazy(() => import('pages/404'))

export const asyncRoutes = [
  {
    path: '/home',
    component: Admin,
    meta: {
      title: 'Home'
    },
    icon: HomeOutlined
  }, 
  {
    path: '/test',
    component: Test,
    meta: {
      title: 'Test'
    },
    icon: QuestionCircleOutlined,
  },
  {
    path: '/404',
    component: NotFound,
    meta: {
      title: '404',
    },
    icon: DisconnectOutlined
  },
]