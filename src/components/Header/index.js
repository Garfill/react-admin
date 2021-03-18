import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header } = Layout

export class HeaderMenu extends Component {
  render() {
    return (
      <Header className="header-background">
      </Header>
    )
  }
}

export default HeaderMenu

/* Header 组件需要外层再加一层Layout ， antd/layout主要采用 flex 进行布局 */