import React, { Component, createRef } from 'react'
import CountTo from 'components/CountTo'
import styled from 'styled-components'
import { Button } from 'antd';
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
    const CountToContainer = styled.div`
      font-size: 24px;
      color: #444;
    `

    return (
      <Container>
        <CountToContainer>
          <CountTo start={0} end={100} loop={true} ref={this.countToRef}></CountTo>
        </CountToContainer>
        <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('start')} type="primary">start</Button>
        <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('pause')}>pause</Button>
        <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('resume')} type="primary">resume</Button>
        <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('reset')}>reset</Button>
      </Container>
    )
  }
  clickBtn = (func) => {
    this.countToRef.current[func]();
  }
}

export default Home
