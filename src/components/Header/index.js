import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';

import { setToken } from 'utils/token';

const { Header } = Layout;

export class HeaderMenu extends Component {
  render() {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="1">Log Out</Menu.Item>
      </Menu>
    );
    return (
      <Header className="header-background">
        <Dropdown overlay={menu}>
          <p className="header-dropdown">admin <DownOutlined /></p>
        </Dropdown>
      </Header>
    )
  }
  onClick = ({ key }) => {
    if (key == 1) {
      this.logOut();
    }
  }
  logOut = () => {
    setToken();
    this.props.history.push({
      pathname: '/login'
    })
  }
}

export default withRouter(HeaderMenu)

/* Header 组件需要外层再加一层Layout ， antd/layout主要采用 flex 进行布局 */