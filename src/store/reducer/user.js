import { defaultUserState } from './state'

import { asyncRoutes } from 'route/asyncRoute'
import { flattenRoutes } from 'route'

export default function userReducer(state = defaultUserState, action) {
  switch (action.type) {
    case 'setUserData':
      return buildUserData(state, action.value)
    case 'setOpenMenu':
      return Object.assign({}, state, {
        openMenu: action.value
      })  
    default:
      break;
  }
  return state
}

function buildUserData(state, userData) {
  const userMenu = buildUserMenu(asyncRoutes)
  const userRoutes = flattenRoutes(userMenu)
  return Object.assign({}, state, {
    userMenu,
    userData: userData,
    userRoutes,
  })
}


/**
 * 根据用户路由信息筛选出可以显示的 树形结构用户菜单
 * @param {Array} routes 
 * @param {Object} parent 
 * @returns Array
 */
 export function buildUserMenu(routes, parent) {
  let menus = []
  for (let i = 0; i < routes.length; i++) {
    let route = routes[i];
    const realRoute = {
      ...route,
      path: parent ? parent.path + route.path : route.path
    }
    if (route.children && route.children.length > 0) {
      realRoute.children = buildUserMenu(route.children, realRoute);
    }
    menus.push(realRoute);
  }
  return menus
}