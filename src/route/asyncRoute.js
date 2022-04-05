import { lazy } from 'react'
import { HomeOutlined, DisconnectOutlined } from '@ant-design/icons'

// Fix me: 懒加载组件首次渲染没有动画效果
const Home = lazy(() => import('pages/Home'))
const Test = lazy(() => import('pages/Test'))
const NotFound = lazy(() => import('pages/404'))

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
    path: '/test',
    component: Test,
    meta: {
      title: 'Test'
    },
    icon: HomeOutlined,
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