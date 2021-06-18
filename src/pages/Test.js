import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
class Test extends Component {
  render() {
    const Wrapper = styled.div`
      margin-top: 8px;
      border-radius: 5px;
      background: #fff;
    `
    return (
      <Fragment>
        {
          [1,2,3].map((i,key) => <Wrapper key={key}>{i}</Wrapper>)
        }
      </Fragment>
    )
  }
}

export default Test