import { lazy } from 'react'

import { HomeOutlined, DisconnectOutlined, QuestionCircleOutlined } from '@ant-design/icons'

const Home = lazy(() => import('pages/Home'))
const HookPage = lazy(() => import('pages/HookPage'))
const Test = lazy(() => import('pages/Test'))
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
    path: '/hook',
    component: HookPage,
    meta: {
      title: 'HookPractice'
    }
  },
  {
    path: '/test',
    component: Test,
    meta: {
      title: 'Test'
    },
    icon: QuestionCircleOutlined,

    children: [
      {
        path: '/sub',
        component: Test,
        meta: {
          title: 'TestSub'
        }
      }
    ]
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