import React, { Component } from 'react'

import { Layout } from 'antd'

import SidebarMenu from './menu'
import logo from 'assets/logo.svg'

const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    return (
    <Sider collapsible className="fixed-sider" onCollapse={this.props.onCollapse}>
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <SidebarMenu></SidebarMenu>
    </Sider>
    )
  } 
}


export default Sidebar
