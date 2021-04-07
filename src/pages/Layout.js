import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


import { Layout } from 'antd'
import Sidebar from 'components/Sidebar'
import HeaderMenu from 'components/Header'
import AppMain from 'components/AppMain'

import { getToken } from 'utils/token'

class AppLayout extends PureComponent {
  render() {
    console.log('layout render')
    return getToken()
    ? (
      <Layout className={'layout-wrapper' + (this.props.collapsed ? ' app-close-sider' : ' app-open-sider')}>
        <Sidebar onCollapse={ this.onCollapse }></Sidebar>
        <Layout className="header-container">
          <HeaderMenu></HeaderMenu>
          <AppMain></AppMain>
        </Layout>
      </Layout>
    )
    : <Redirect to="/login"></Redirect>
  }
}

const mapStateToProps = state => {
  return {
    collapsed: state.setting.siderCollapsed
  }
}

export default connect(mapStateToProps)(AppLayout)
