import React, { Component } from 'react'

export class CountTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localStart: props.start || 0,
      localEnd: props.end || 0,
      duration: props.duration || 3000,
      progress: 0,
      nowValue: 0,
      decimals: 0, // 小数点保留位数
    }
    this.startTimestamp = null; // 开始计数的时间戳
    this.timestamp = null;
    this.autoplay = props.autoplay || false;
    this.isPlay = false;
    this.requestTimer = null;

    this.state.countDown = this.state.localStart > this.state.localEnd;
    this.state.displayValue = String(this.state.localStart);
  }
  render() {
    return (
      <div>
        {
          this.state.displayValue
        }
      </div>
    )
  }
  componentDidMount() {
    if (this.autoplay) {
      this.start()
    }
  }

  start = () => {
    if (this.isPlay) {
      return;
    }
    this.setState({
      localStart: this.props.start || 0,
      duration: this.props.duration || 3000,
    })
    this.startTimestamp = null;
    this.requestTimer = window.requestAnimationFrame(this.play)
  }
  
  play = (timestamp) => {
    if (!this.startTimestamp) {
      this.startTimestamp = timestamp
    }
    this.timestamp = timestamp;
    let progress = timestamp - this.startTimestamp;
    this.isPlay = true;
    let nowValue = 0;
    if (!this.countDown) {
      // 加法
      nowValue = this.state.localStart + (this.state.localEnd - this.state.localStart) * (progress / this.state.duration);
    } else {
      // 减法
      nowValue = this.state.localStart - (this.state.localStart - this.state.localEnd) * (progress / this.state.duration);
    }
    if (this.state.countDown) {
      nowValue = nowValue < this.state.localEnd ? this.state.localEnd : nowValue;
    } else {
      nowValue = nowValue > this.state.localEnd ? this.state.localEnd : nowValue;
    }
    nowValue = Number(nowValue.toFixed(this.state.decimals));
    this.setState({
      process,
      nowValue,
      displayValue: String(nowValue)
    })
    if (progress < this.state.duration) {
      this.requestTimer = window.requestAnimationFrame(this.play)
    } else {
      this.isPlay = false;
      this.callback();
    }
  }

  pause = () => {
    // 暂停 = 以当前值作为下一次开始的值，并且使用剩下的duration
    window.cancelAnimationFrame(this.requestTimer);
    this.setState({
      localStart: this.state.nowValue, // 下一次开始的值
      displayValue: String(this.state.nowValue),
      duration: this.state.duration - (this.timestamp - this.startTimestamp),
    })
    this.isPlay = false;
  }

  resume = () => {
    if (this.isPlay) return;
    this.startTimestamp = null;
    this.requestTimer = window.requestAnimationFrame(this.play)
  }

  callback = () => {
    this.requestTimer = null;
    if (this.props.callback && this.props.callback instanceof Function) {
      this.props.callback();
    }
  }
  
}

export default CountTo
