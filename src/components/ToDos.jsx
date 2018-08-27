import React from 'react';
import ToDo from "./ToDo";
import connect from "react-redux/es/connect/connect";

const style = {
    border : 'black solid 1px',
    borderRadius : '10px',
    padding : '20px',
    margin : '20px'
};

const printTodos = todos => {
  let list = [];
  for (let i in todos)
      list.push(
          <ToDo description={todos[i].description}
                status={todos[i].status}
                priority={todos[i].priority}
                index={i*1}/>
      );
  return list;
};

class ToDos extends React.Component {
    render() {
        return (
            <div style={style}>
                {printTodos(this.props.state.todo.list)}
            </div>
        );
    }
}

ToDos = connect(state => {
    return {
        state
    }
})(ToDos);

export default ToDos;