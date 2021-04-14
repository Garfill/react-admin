import React, { Component, Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const { Content } = Layout

export class AppMain extends Component {
  // 后面 Redirect 是为了自动定位到第一个
  // 开发中，修改路由文件(asyncRoute、route/index)的热更新 会导致 userMenu 变为空
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
                <Redirect from='/' to="/home" exact></Redirect>
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
