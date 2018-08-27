import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/reducers.jsx';
import { _fetch } from "../sagas/sagas";

const sagaMiddleware =  createSagaMiddleware();

const Store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(_fetch);

export default Store;