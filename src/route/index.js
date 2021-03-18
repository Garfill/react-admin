import { lazy } from 'react'

// 一级路由
// 根路由 '/' 不使用exact，否则在appMain中的内容路由无法明确匹配layout
// 添加新的路由需要在 跟路由 !!前面!! 添加
export const constantRoutes = [
  {
    path: '/login',
    component: lazy(() => import('pages/Login')),
    hidden: true,
  }, {
    path: '/404',
    component: lazy(() => import('pages/404')),
    hidden: true,
    exact: true,
  }, {
    path: '/',
    component: lazy(() => import('pages/Layout')),
    meta: {
      title: 'Dashboard'
    },
  }, 
]

export function flattenRoutes(routes) {
  let menus = []
  routes.forEach(route => {
    menus.push(route)
    if (route.children) {
      menus.push(...flattenRoutes(route.children))
    }
  })
  return menus
}

