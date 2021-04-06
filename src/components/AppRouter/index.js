/* 路由组件 */
import React, { Component, Suspense, Fragment } from 'react'
import { Switch, withRouter, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { constantRoutes } from 'route'

import ScrolTolTop from 'components/ScrolTolTop'

import { getUserData } from 'store/action/user'
import { getToken } from 'utils/token'

NProgress.configure({ showSpinner: false });
export class AppRouter extends Component {
  state = {
    constantRoutes,
  }
  render() {
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
        if (!props.userData.id) {
          // 获取用户信息
          // simulate ajax
          props.setUserData()
        }  
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
    async setUserData() {
      await dispatch(getUserData(1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppRouter))
