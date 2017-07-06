import { createStore, compose } from 'redux';
// import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
    reducers,
    compose
);

export default store;
