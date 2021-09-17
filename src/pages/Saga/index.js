import React, { Component } from 'react'
import { getList } from 'api/list'

export class Saga extends Component {
  state = {
    list: [],
  }
  render() {
    return (
      <div className="box-container">
        sage
      </div>
    )
  }
  getList = async () =>  {
    const { data } = await getList();
    this.setState({
      list: data,
    })
  }
  componentDidMount() {
    this.getList();
  }
  
}

export default Saga
