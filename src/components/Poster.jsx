import React from 'react';
import * as ToDoActions from '../actions/ToDoActions.jsx';
import {connect} from "react-redux";

const style = {
    border : 'black solid 1px',
    borderRadius : '10px',
    padding : '20px',
    margin : '20px'
};

class Poster extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            priority : 'MEDIUM',
            description : '',
        }
    }

    componentDidMount() {
       this.props.dispatch(ToDoActions.fetchData());
    }
    
    changePriority(e){
        this.setState({priority:e.target.value})
    }
    
    changeDescription(e){
        this.setState({description:e.target.value})
    }

    keyUp(e) {
        if (e.key === 'Enter')
            this.postTodo();
    }

    postTodo(){
        this.props.dispatch(ToDoActions.postTodo(this.state.priority,this.state.description));
        this.setState({
            priority : 'MEDIUM',
            description : '',
        });
    }
    
    render() {
        return (
            <div style={style}>
                <select value={this.state.priority}
                        onChange={this.changePriority.bind(this)}>
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                </select>
                <input onKeyUp={this.keyUp.bind(this)}
                       value={this.state.description}
                       placeholder="description"
                       onChange={this.changeDescription.bind(this)}/>
                <button onClick={this.postTodo.bind(this)}>
                    submit todo
                </button>
            </div>
        )
    }
}

Poster = connect()(Poster);

export default Poster;