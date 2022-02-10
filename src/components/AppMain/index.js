import React, { Component, Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const { Content } = Layout

export class AppMain extends Component {
  // 过场动画只有进入的动画，由于Switch只会渲染匹配的路由，不使用Switch每次刷新会重定向到home（userRoute初始为空）
  render() {
    const location = this.props.location
    return (
      <Content className="app-content-container">
        <Suspense fallback={
          null
        }>
          {/* <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
            </CSSTransition>
          </TransitionGroup> */}
          <Switch location={location}>
            {
              this.props.userRoutes.map(route => {
                return (
                  <Route key={route.path} path={route.path} exact={route.exact}>
                    <div className="page">
                      <route.component></route.component>
                    </div>
                  </Route>
                )
              })
            }
            {/* 避免获取用户信息过程中(userRoute = [])跳转到404无法跳回来 */}
            {this.props.userData.id ? <Redirect to="/404"></Redirect> : null}
          </Switch>
        </Suspense>
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    userRoutes: state.user.userRoutes,
    userData: state.user.userData,
  }
}

export default connect(mapStateToProps)(withRouter(AppMain))
