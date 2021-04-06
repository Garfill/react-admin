import React, { Component } from 'react'
import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

const { Content } = Layout

export class AppMain extends Component {
  // 后面 Redirect 是为了自动定位到第一个
  // 开发中，修改路由文件(asyncRoute、route/index)的热更新 会导致 userMenu 变为空
  render() {
    return (
      <Content className="app-content-container">
        <Switch>
            {
              this.props.userRoutes.map(route => {
                return  <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
              })
            }
            <Redirect from='/' to="/home" exact></Redirect>
            {
              /* 避免后台获取用户信息（包含路由）过程中跳转到404无法跳回来 */
              this.props.userData.id ? <Redirect to="/404"></Redirect> : null
            }
        </Switch>
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

export default connect(mapStateToProps)(AppMain)
