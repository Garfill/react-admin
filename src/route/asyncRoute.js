import { lazy } from 'react'
import { HomeOutlined, DisconnectOutlined } from '@ant-design/icons'

const Home = lazy(() => import('pages/Home'))
const NotFound = lazy(() => import('pages/404'))
const Test = lazy(() => import('pages/Test'))

export const asyncRoutes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    },
    icon: HomeOutlined,
    exact: true,
  },
  {
    path: '/404',
    component: NotFound,
    meta: {
      title: '404',
    },
    icon: DisconnectOutlined
  },
  {
    path: '/test',
    component: Test,
    meta: {
      title: 'Test',
    },
  }
]