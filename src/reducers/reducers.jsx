import CounterReducer from './CounterReducer.jsx';
import { combineReducers } from 'redux';

const defaultReducers = combineReducers({
    counter : CounterReducer
});

export default defaultReducers;