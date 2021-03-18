/* 路由组件 */

import React, { Component, Suspense, Fragment } from 'react'
import { Switch, withRouter, Redirect, Route } from 'react-router-dom'

import { getToken } from 'utils/token'
import ScrolTolTop from 'components/ScrolTolTop'

import { constantRoutes } from 'route'

export class AppRouter extends Component {
  state = {
    constantRoutes,
  }
  render() {
    const token = getToken();
    if (token) {
      if (this.props.location.pathname === '/login') {
        // 已有token，去登陆页，重定向至首页
        console.log('no need login >>>>>>>>');
        this.props.history.push({
          pathname: '/home'
        })
      }
    }
    return (
      <Fragment>
        <ScrolTolTop></ScrolTolTop>
        <Suspense fallback={<div>Loading~~~</div>}>
          <Switch>
            {
              this.state.constantRoutes.map(route => {
                return (route.redirect ? 
                    <Redirect key={route.path} from={route.path} to={route.redirect} exact={route.exact} /> :
                    <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                  )
                }
              )
            }
          </Switch>
        </Suspense>
      </Fragment>
    )
  }
}

export default withRouter(AppRouter)
