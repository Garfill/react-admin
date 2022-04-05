import React, { Component, Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const { Content } = Layout

export class AppMain extends Component {
  // 组件懒加载，首次渲染没有动画效果
  render() {
    const location = this.props.location
    return (
      <Content className="app-content-container">
        <Suspense fallback={null}>
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
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
            </CSSTransition>
          </TransitionGroup>
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
