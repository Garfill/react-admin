import React, { Component } from 'react'
import './icon.scss'

export default class SvgIcon extends Component {
  render() {
    const { className, iconClass } = this.props;
    const svgClass = className ? `svg-icon svg-icon-${className}` : 'svg-icon';
    const iconName = `#icon-${iconClass}`;

    if (iconClass) {
      return (
        <svg className={svgClass} ariaHidden="true">
          <use xlinkHref={iconName}/>
        </svg>
      )
    } else {
      return (
        <span></span>
      )
    }

  }
}

/**
 * 注意此处 xlink:href 改成 camelCase 写法
 */