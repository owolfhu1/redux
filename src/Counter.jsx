import React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './actions/CounterActions.jsx';



class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    render() {
        return (
            <button onClick={() => this.setState({count:this.state.count+1})} >
                count ({this.state.count})
            </button>
        )
    }

}

Counter = connect(state => {
    return {
        counter:state.counter
    }
})(Counter);

export default Counter;