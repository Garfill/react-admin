import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

import { Layout } from 'antd'
import Sidebar from 'components/Sidebar'
import HeaderMenu from 'components/Header'
import AppMain from 'components/AppMain'

import { getToken } from 'utils/token'

class AppLayout extends PureComponent {
  state = {
    collapsed: false,
  }
  render() {
    console.log('layout render')
    return getToken() ? 
    (
      <Layout className={'layout-wrapper' + (this.state.collapsed ? ' app-close-sider' : ' app-open-sider')}>
        <Sidebar onCollapse={ this.onCollapse }></Sidebar>
        <Layout className="header-container">
          <HeaderMenu></HeaderMenu>
          <AppMain></AppMain>
        </Layout>
      </Layout>
    ) :  <Redirect to="/login"></Redirect>
  }
  
  onCollapse = (collapsed) => {
    this.setState({
      collapsed
    })
  }
}

export default AppLayout
