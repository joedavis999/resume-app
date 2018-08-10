import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Route from './route';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
