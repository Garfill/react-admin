import React, { Component, Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition, SwitchTransition } from 'react-transition-group'


const { Content } = Layout

const wrapComponent = WrapComponent => {
  // 用于懒加载路由首次动画
  return (
    <Suspense fallback={null}>
      <WrapComponent></WrapComponent>
    </Suspense>
  )
}
export class AppMain extends Component {
  // 组件懒加载，首次渲染没有动画效果
  render() {
    const location = this.props.location
    return (
      <Content className="app-content-container">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
              <Switch location={location}>
                {
                  this.props.userRoutes.map(route => {
                    return (
                      route.redirect
                        ? <Redirect key={route.path} from={route.path} to={route.redirect} exact={route.exact} />
                        : <Route key={route.path} path={route.path} exact={route.exact}>
                          <div className='page-container'>
                            {
                              wrapComponent(route.component)
                            }
                          </div>
                        </Route>
                    )
                  })
                }
              </Switch>
            </CSSTransition>
          </SwitchTransition>
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
