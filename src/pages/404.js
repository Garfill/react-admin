import React, { Component } from 'react'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '200px'}}>
        <h1>
          404 NOT FOUND 
        </h1>
        <Button onClick={this.backToIndex}>Home</Button>
      </div>
    )
  }

  backToIndex = () => {
    this.props.history.replace('/')
  }
}

export default withRouter(NotFound)
