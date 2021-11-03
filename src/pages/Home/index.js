import React, { Component, createRef, Fragment } from 'react'
import CountTo from 'components/CountTo'
import styled from 'styled-components'
import { Button, Input } from 'antd';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.countToRef = createRef();

    this.state = {
      startVal: 0,
      endVal: 100,
    }
  }
  render() {
    const CountToContainer = styled.div`
      margin-bottom: 16px;
      font-size: 24px;
      color: #444;
    `
    const ButtonContainer = styled.div`
      margin-top: 16px;
    `

    return (
      <Fragment>
        <div className="box-container">
          <h2>计数器（Counter）</h2>
          <CountToContainer>
            <CountTo start={this.state.startVal} end={this.state.endVal} ref={this.countToRef} duration={1500}></CountTo>
          </CountToContainer>
          <div>
            <span>开始值</span>
            <Input value={this.state.startVal} onChange={this.handleStartChange}></Input>
          </div>
          <div>
            <span>结束值</span>
            <Input value={this.state.endVal} onChange={this.handleEndChange}></Input>
          </div>
          <ButtonContainer>
            <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('start')} type="primary">start</Button>
            <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('pause')}>pause</Button>
            <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('resume')} type="primary">resume</Button>
            <Button style={{marginRight: '8px'}} onClick={() => this.clickBtn('reset')}>reset</Button>
          </ButtonContainer>
        </div>
      </Fragment>
    )
  }

  clickBtn = (func) => {
    this.countToRef.current[func]();
  }
  
  handleStartChange = (e) => {
    this.countToRef.current.pause()
    this.setState({
      startVal: Number(e.target.value)
    }, () => {
      window.requestAnimationFrame(() => {
        this.countToRef.current.start()
      })
    })
  }

  handleEndChange = (e) => {
    this.countToRef.current.pause()
    this.setState({
      endVal: Number(e.target.value)
    }, () => {
      window.requestAnimationFrame(() => {
        this.countToRef.current.start()
      })
    })
  }
}

export default Home
