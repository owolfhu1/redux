import React from 'react';

const style = {
    border : 'black solid 1px',
    borderRadius : '10px',
    padding : '20px',
    margin : '20px'
};

class ToDo extends React.Component {
    
    render(){
        return (
            <div style={style}>
                <h1>{/*description*/}</h1>
                <p>{/*priority*/}</p>
                <p>status: {props.status}</p>
                <button style={{
                    background : props.status === 'todo' ? 'green' : 'red'
                }}>{props.status === 'todo' ? 'finish' : 'not finished'}</button>
            </div>
        )
    }
    
}


export default ToDo;