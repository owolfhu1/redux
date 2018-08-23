import  CounterConstants from '../constants/CounterConstants.jsx';

export function incCounter() {
    return {
        type : CounterConstants.INC_COUNTER
    }
}