import { createStore, compose } from 'redux';
import reducers from '../reducers/reducers.jsx';

const Store = createStore(
    reducers,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

export default Store;