import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {store} from './redux/store'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
           WElcome
        </Provider>
    );
  }
}

export default App;
