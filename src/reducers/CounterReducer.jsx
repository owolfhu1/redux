import CounterConstants from '../constants/CounterConstants.jsx';

const initState = {
    value : 0
};

export default function CounterReducer(state=initState,action) {
    switch (action.type) {
        case CounterConstants.INC_COUNTER : {
            return {...state, value : state.value + 1};
        }
    }
    return state;
}
