/* 路由守卫组件 */
import React, { Component, Fragment } from 'react'
import { Switch, withRouter, Redirect, Route } from 'react-router-dom'
import constantRoutes from 'route/constantRoute'
import { connect } from 'react-redux'
import { getToken } from 'utils/token'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import ScrollToTop from 'components/ScrollToTop'

import { getUserInfoAsync } from 'store/action/user'

NProgress.configure({ showSpinner: false });
export class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constantRoutes
    }
  }
  render() {
    let props = this.props;
    NProgress.start();
    const token = getToken();
    if (token) {
      if (props.location.pathname === '/login') {
        // 已有token，去登陆页，重定向至首页
        console.log('no need login >>>>>>>>');
        return <Redirect to="/home"></Redirect>
      } else {
        if (!props.userData || props.userData.id === undefined) {
          // 获取用户信息
          console.log('need user info >>>>>>>>');
          props.getUserInfo();
        }
      }
    } else {
      console.log('need token >>>>>>>>')
      if (props.location.pathname !== '/login') {
        return <Redirect to="/login"></Redirect>
      }
    }
    NProgress.done();
    // 正常路由返回
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
}

const mapStateToProps = state => {
  return {
    userRoutes: state.user.userRoutes,
    userData: state.user.userData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    async getUserInfo(){
      dispatch(getUserInfoAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppRouter))
