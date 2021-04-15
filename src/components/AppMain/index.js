import React, { Component, Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const { Content } = Layout

export class AppMain extends Component {
  // 过场动画只有进入的动画，由于Switch只会渲染匹配的路由，不使用Switch每次刷新会重定向到home（userRoute初始为空）
  render() {
    return (
      <Content className="app-content-container">
        <Suspense fallback={null}>
          <TransitionGroup>
            <Switch location={this.props.location}>
              {
                this.props.userRoutes.map(route => {
                  return (
                    <Route key={route.path} path={route.path} exact={route.exact}>
                      {({match}) => {
                        return (
                          <CSSTransition
                            unmountOnExit
                            classNames="page"
                            timeout={300}
                            in={match !== null}
                          >
                            <div className="page">
                              <route.component></route.component>
                            </div>
                          </CSSTransition>
                        )}
                      }
                    </Route>
                  )
                })
              }
              {/* 从根路径自动定位到home */}
              <Redirect from='/' to="/home" exact></Redirect>
              {/* 避免后台获取用户信息过程中(userRoute = [])跳转到404无法跳回来 */}
              {this.props.userData.id ? <Redirect to="/404"></Redirect> : null}
            </Switch>
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
