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

