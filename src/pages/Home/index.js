import React, { Component, createRef } from 'react'
import CountTo from 'components/CountTo'
import styled from 'styled-components'
export class Home extends Component {
  constructor(props) {
    super(props);
    this.countToRef = createRef();
  }
  render() {

    const Container = styled.div`
      padding: 16px;
      border-radius: 5px;
      background: #fff;
    `
    return (
      <Container>
        <CountTo start={0} end={100} ref={this.countToRef}></CountTo>
        <button onClick={() => this.clickBtn('start')}>start</button>
        <button onClick={() => this.clickBtn('pause')}>pause</button>
        <button onClick={() => this.clickBtn('resume')}>resume</button>
      </Container>
    )
  }
  clickBtn = (func) => {
    this.countToRef.current[func]();
  }
}

export default Home
