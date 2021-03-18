import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Test extends Component {
  render() {
    return (
      <Fragment>
        <div>test</div>
      </Fragment>
    )
  }
}

export default withRouter(Test)