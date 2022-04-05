import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from 'store'

import AppRouter from 'layout/AppRouter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    )
  }
}

export default App
