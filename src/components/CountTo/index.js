import React, { Component } from 'react'

export class CountTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localStart: props.start || 0,
      localEnd: props.end || 0,
      duration: props.duration || 3000,
      nowValue: props.start || 0,
      decimals: 0, // 小数点保留位数
    }
    this.startTimestamp = null; // 开始计数的时间戳
    this.timestamp = null;
    this.autoplay = props.autoplay || false;
    this.loop = props.loop || false;
    this.requestTimer = null;
    this.isPause = !this.autoplay; // 是否处于暂停

    this.state.displayValue = String(this.state.localStart);

    this.isMount = false;
  }
  render() {
    return (
      <>
        {
          this.state.displayValue
        }
      </>
    )
  }

  componentDidMount() {
    if (this.autoplay) {
      this.start()
    }
    this.isMount = true;
  } 

  componentWillUnmount() {
    // 外部改变 props 导致新的值挂载到已销毁组件
    this.isMount = false;
  }

  start = () => {
    if (!this.isPause) return
    this.setState({
      localStart: this.props.start || 0,
      duration: this.props.duration || 3000,
    }, () => {
      this.startTimestamp = null;
      this.isPause = false;
      this.countDown = this.state.localStart > this.state.localEnd;
      this.requestTimer = window.requestAnimationFrame(this.count)
    })
  }
  
  count = (timestamp) => {
    if (!this.isMount) {
      window.cancelAnimationFrame(this.requestTimer);
      return;
    }
    if (!this.startTimestamp) {
      this.startTimestamp = timestamp
    }
    this.timestamp = timestamp;
    let progress = timestamp - this.startTimestamp;
    let nowValue = 0;
    if (!this.countDown) {
      // 加法
      nowValue = this.state.localStart + (this.state.localEnd - this.state.localStart) * (progress / this.state.duration);
    } else {
      // 减法
      nowValue = this.state.localStart - (this.state.localStart - this.state.localEnd) * (progress / this.state.duration);
    }
    if (this.countDown) {
      nowValue = nowValue < this.state.localEnd ? this.state.localEnd : nowValue;
    } else {
      nowValue = nowValue > this.state.localEnd ? this.state.localEnd : nowValue;
    }
    nowValue = Number(nowValue.toFixed(this.state.decimals));
    this.setState({
      nowValue,
      displayValue: String(nowValue)
    })
    if (progress < this.state.duration) {
      this.requestTimer = window.requestAnimationFrame(this.count)
    } else {
      if (this.loop) {
        this.loopCount();
      }
      this.callback();
    }
  }

  pause = () => {
    if (this.isPause) return;
    // 暂停 = 以当前值作为下一次开始的值，并且使用剩下的duration
    window.cancelAnimationFrame(this.requestTimer);
    // 下一次开始的状态
    this.setState({
      localStart: this.state.nowValue,
      displayValue: String(this.state.nowValue),
      duration: this.state.duration - (this.timestamp - this.startTimestamp),
    });
    this.isPause = true;
  }

  resume = () => {
    this.startTimestamp = null;
    this.isPause = false;
    this.requestTimer = window.requestAnimationFrame(this.count)
  }

  callback = () => {
    this.requestTimer = null;
    if (this.props.callback && this.props.callback instanceof Function) {
      this.props.callback();
    }
  }

  loopCount = () => {
    window.requestAnimationFrame(this.start)
  }

  reset = () => {
    this.startTimestamp = null;
    this.isPause = true;
    window.cancelAnimationFrame(this.requestTimer);
    this.setState({
      localStart: this.props.start || 0,
      displayValue: String(this.props.start || 0),
    })
  }
  
}

export default CountTo
