import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './store/store'
import Counter from "./Counter";


class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <Counter/>
        </Provider>
    );
  }
}

export default App;
