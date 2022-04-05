import { lazy } from 'react'
import { HomeOutlined, DisconnectOutlined } from '@ant-design/icons'

// Fix me: 懒加载组件首次渲染没有动画效果
const Home = lazy(() => import('pages/Home'))
const NotFound = lazy(() => import('pages/404'))

export const asyncRoutes = [
  {
    path: '/home',
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
]