import { debounce } from 'utils'
import React, { Component } from 'react'
const noop = () => { }
export default class Resize extends Component {
  render() {
    return <></>
  }
  componentDidMount() {
    this.initResizeHandler()
  }
  initResizeHandler = () => {
    window.addEventListener('resize', debounce(this.resizeHandler, 200))
    setTimeout(() => {
      this.resizeHandler()
    }, 0);
  }
  resizeHandler = (e) => {
    let handler = this.props.onResize || noop
    handler.call(null, e)
  }

}
