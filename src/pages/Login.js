import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button } from 'antd'

import { setToken } from 'utils/token'

import 'style/login.scss'

import { login } from 'api/user';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: '',
      }
    };
    this.formRef = createRef();
  }
  render() {
    return (
      <div className="login-container">
        <Form
          className="login-box"
          ref={this.formRef}
          initialValues={this.state.form}
          onFinish={ this.handleSubmit }
        >
          <p className="login-form-title">Login</p>
          <Form.Item name="username">
            <Input
              placeholder="Enter your username"
              autoComplete="off"></Input>
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              placeholder="Enter your password"
              autoComplete="off"></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">Login</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { form: { username, password }} = nextState;
    const { username: oldname, password: oldpass } = this.state.form;
    return (username !== oldname || password !== oldpass);
  }
  handleSubmit = async (values) => {
    this.setState({
      form: values
    })
    
    // User login
    const { data } = await login();
    setToken(data.token);
    this.props.history.push({
      pathname: '/',
    })
  }
}


const mapDispatchToProps = dispatch => {
  return {
    updateMenu() {
      dispatch({
        type: 'updateMenu',
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
