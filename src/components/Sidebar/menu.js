import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Menu } from 'antd'

const { SubMenu } = Menu

class SidebarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: props.openMenu
    }
  }
  render() {
    const { userMenu, location } = this.props;

    const selectedKeys = location.pathname

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={this.state.openKeys}
        onSelect={this.handleSelect}
        onOpenChange={this.onOpenChange}
      >
        {
          userMenu.map(route => {
            return route.hidden ? null : this.renderRoute(route)
          })
        }
      </Menu>
    )
  }
  renderRoute(route) {
    if (!route.children || route.children.length === 0) {
      return (
        <Menu.Item key={route.path} icon={ route.icon ? <route.icon /> : null}>
          {route.meta ? route.meta.title : ''}
        </Menu.Item>
      )
    } else {
      return (
        <SubMenu title={route.meta.title} key={route.path} icon={route.icon ? <route.icon/> : null}>
          {
            route.children.map(item => this.renderRoute(item))
          }
        </SubMenu>
      )
    }
  }
  handleSelect = ({ key }) => {
    this.props.history.push({
      pathname: key
    })
  }
  backToIndex = () => {
    this.props.history.replace('/')
  }
  onOpenChange = openKeys => {
    let newOpenKeys = openKeys;
    this.props.setOpenMenu(newOpenKeys)
    
    this.setState({
      openKeys: newOpenKeys
    })

  }
}

const mapStateToProps = (state) => {
  return {
    userMenu: state.user.userMenu,
    openMenu: state.user.openMenu,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setOpenMenu(keys) {
      dispatch({
        type: 'setOpenMenu',
        value: keys
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SidebarMenu))
