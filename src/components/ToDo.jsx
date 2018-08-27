import React from 'react';
import {connect} from "react-redux";
import * as ToDoActions from '../actions/ToDoActions.jsx';

const style = {
    border : 'black solid 1px',
    borderRadius : '10px',
    padding : '20px',
    margin : '20px'
};

let ToDo = props =>
    <div style={style}>
        <h1>{props.description}</h1>
        <p>{props.priority}</p>
        <p>status: {props.status}</p>
        <button onClick={() => props.dispatch(ToDoActions.modifyTodoPriority(props.index))} style={{
            background : props.status === 'todo' ? 'green' : 'red'
        }}>{props.status === 'todo' ? 'finish' : 'not finished'}</button>
    </div>;
    
ToDo = connect()(ToDo);

export default ToDo;