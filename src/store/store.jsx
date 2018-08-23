import { createStore } from 'redux';
import reducers from '../reducers/reducers.jsx';

const Store = createStore(reducers);

export default Store;