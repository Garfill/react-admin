import { lazy } from 'react'
import { HomeOutlined, DisconnectOutlined } from '@ant-design/icons'
// import Home from 'pages/Home'
// import NotFound from 'pages/404'
// import Test from 'pages/Test'

// Fix me: 懒加载组件首次渲染没有动画效果
const Home = lazy(() => import('pages/Home'))
const NotFound = lazy(() => import('pages/404'))
const Test = lazy(() => import('pages/Test'))
const Test2 = lazy(() => import('pages/Test2'))

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
    path: '/test1',
    component: Test,
    meta: {
      title: 'Test',
    },
  },
  {
    path: '/test2',
    component: Test2,
    meta: {
      title: 'Test2',
    },
  },
]