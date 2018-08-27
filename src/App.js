import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './store/store'
import Poster from "./components/Poster";
import ToDos from "./components/ToDos";

const App = () =>
    <div>
        <Provider store={Store}>
            <Poster/>
        </Provider>
        <Provider store={Store}>
            <ToDos/>
        </Provider>
    </div>;

export default App;


// todo: GET from http://demo7465829.mockable.io/