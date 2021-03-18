import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

class RouteGuard extends Component {
  render() {
    const { route } = this.props
    console.log('route :>> ', route);
    return (
      route.redirect ? 
        <Redirect from={route.path} to={route.redirect} exact={route.exact} /> :
        <Route path={route.path} component={route.component} exact={route.exact} />
    )
  }
  componentDidMount() {
    // 路由首次挂载执行一次
  }
}


export default RouteGuard
