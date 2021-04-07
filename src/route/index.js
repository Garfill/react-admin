// 一级路由
// 根路由 '/' 不使用exact，否则在appMain中的内容路由无法明确匹配layout
// 添加新的路由需要在根路由 !!前面!! 添加

import Login from 'pages/Login';
import NotMatch from 'pages/404';
import Layout from 'pages/Layout';


export const constantRoutes = [
  {
    path: '/login',
    component: Login,
    hidden: true,
  }, {
    path: '/404',
    component: NotMatch,
    hidden: true,
    exact: true,
  }, {
    path: '/',
    component: Layout,
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

