/* 路由守卫组件 */
import React, { Component, Fragment } from 'react'
import { Switch, withRouter, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { constantRoutes } from 'route'

import ScrollToTop from 'components/ScrollToTop'

import { getToken } from 'utils/token'

NProgress.configure({ showSpinner: false });
export class AppRouter extends Component {
  state = {
    constantRoutes,
  }
  render() {
    return (
      <Fragment>
        <ScrollToTop></ScrollToTop>
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
      </Fragment>
    )
  }
  static getDerivedStateFromProps(props, state) {
    NProgress.start();
    const token = getToken();
    if (token) {
      if (props.location.pathname === '/login') {
        // 已有token，去登陆页，重定向至首页
        console.log('no need login >>>>>>>>');
        props.history.push({
          pathname: '/home'
        })
      } else {
        if (props.userData.id === undefined) {
          // 获取用户信息
          props.getUserInfo();
        }  
      }
    } else {
      if (props.location.pathname !== '/login') {        
        props.history.push({
          pathname: '/login'
        })
      }
    }
    NProgress.done();
    return null;
  } 
}

const mapStateToProps = state => {
  return {
    userRoutes: state.user.userRoutes,
    userData: state.user.userData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: async () => {
      await dispatch({
        type: 'getUserData_saga'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppRouter))
