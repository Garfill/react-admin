import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Layout } from 'antd'
import Sidebar from 'components/Sidebar'
import HeaderMenu from 'components/Header'
import AppMain from 'layout/AppMain'

class AppLayout extends PureComponent {
  render() {
    return (
      <Layout className={'layout-wrapper' + (this.props.collapsed ? ' app-close-sider' : ' app-open-sider')}>
        <Sidebar onCollapse={ this.onCollapse }></Sidebar>
        <Layout className="main-container">
          <HeaderMenu></HeaderMenu>
          <AppMain></AppMain>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    collapsed: !state.setting.sidebarOpen
  }
}

export default connect(mapStateToProps)(AppLayout)
