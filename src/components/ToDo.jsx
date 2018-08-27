import React from 'react';

const style = {
    border : 'black solid 1px',
    borderRadius : '10px',
    padding : '20px',
    margin : '20px'
};

const ToDo = props =>
    <div style={style}>
        <h1>{props.description}</h1>
        <p>{props.priority}</p>
        <p>status: {props.status}</p>
        <button style={{
            background : props.status === 'todo' ? 'green' : 'red'
        }}>{props.status === 'todo' ? 'finish' : 'not finished'}</button>
    </div>;
    
export default ToDo;