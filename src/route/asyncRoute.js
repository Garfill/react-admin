import { lazy } from 'react'
import { HomeOutlined, DisconnectOutlined } from '@ant-design/icons'

const Home = lazy(() => import('pages/Home'))
const NotFound = lazy(() => import('pages/404'))

export const asyncRoutes = [
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    },
    icon: HomeOutlined
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