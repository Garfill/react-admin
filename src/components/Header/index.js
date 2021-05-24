import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Layout, Menu, Dropdown, Image } from 'antd'
import { DownOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { setToken } from 'utils/token';

const { Header } = Layout;

/* Header 组件需要外层再加一层Layout ， antd/layout主要采用 flex 进行布局 */
export class HeaderMenu extends Component {
  render() {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="logOut">Log Out</Menu.Item>
      </Menu>
    );
    return (
      <Header className="header-background">
        <div className="header-inner">
          <div className={"header-collapse-icon" + (this.props.siderCollapsed ? ' collapsed' : '')} onClick={this.toggleSider}>
            <MenuFoldOutlined />
          </div>
          <div className="header-user-block">
            <Dropdown overlay={menu} trigger={['click']}>
              <div className="header-dropdown">
                {this.props.userData.name} <DownOutlined />
              </div>
            </Dropdown>
            <Image className="header-avatar" src={this.props.userData.avatar} preview={false} width={50}></Image>
          </div>
        </div>
      </Header>
    )
  }
  onClick = ({ key }) => {
    this[key]();
  }
  logOut = () => {
    setToken();
    this.props.history.push({
      pathname: '/login'
    })
  }
  toggleSider = () => {
    this.props.toggleSiderCollapse(!this.props.siderCollapsed)
  }
}

const mapStateToProps = state => {
  return {
    siderCollapsed: state.setting.siderCollapsed,
    userData: state.user.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSiderCollapse(status) {
      dispatch({
        type: 'toggleSider',
        value: status,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderMenu))
