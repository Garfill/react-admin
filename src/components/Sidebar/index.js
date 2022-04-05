import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Layout } from 'antd'

import SidebarMenu from './menu'
import logo from 'assets/logo.svg'

const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    return (
    <Sider
      collapsible
      collapsed={this.props.collapsed}
      trigger={null}
      className="fixed-sider"
      onCollapse={this.props.onCollapse}
    >
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <SidebarMenu></SidebarMenu>
    </Sider>
    )
  } 
}


const mapStateToProps = state => {
  return {
    collapsed: !state.setting.sidebarOpen
  }
}

export default connect(mapStateToProps)(Sidebar)
