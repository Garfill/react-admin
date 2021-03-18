import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from 'store'

import AppRouter from 'components/AppRouter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter></AppRouter>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
