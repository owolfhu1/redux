import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './store/store'
import Poster from "./components/Poster";
import ToDos from "./components/ToDos";


class App extends Component {
  render() {
    return (
        <div>
            <Provider store={Store}>
                <Poster/>
            </Provider>
            <Provider store={Store}>
                <ToDos todos={[]}/>
            </Provider>
        </div>
    );
  }
}

export default App;
