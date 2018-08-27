import CounterReducer from './CounterReducer.jsx';
import { combineReducers } from 'redux';
import ToDoReducer from "./ToDoReducer";

const defaultReducers = combineReducers({
    counter : CounterReducer,
    todo : ToDoReducer
});

export default defaultReducers;