import { Transition } from 'react-transition-group'

import React, { Component } from 'react'

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
}

class Fade extends Component {
  constructor(props) {
    super(props)
    const duration = props.duration || 500
    this.state = {
      duration,
      defaultStyle :{
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
      }
    }
  }
  render() {
    return (
      <Transition in={this.props.inProp} timeout={this.state.duration}>
        {(state) => {
          console.log(state)
          return (
            <div style={{
              ...this.state.defaultStyle,
              ...transitionStyles[state]
            }}>
              {this.props.children}
            </div>
          )}
        }
      </Transition>
      )
  }
}

export default Fade