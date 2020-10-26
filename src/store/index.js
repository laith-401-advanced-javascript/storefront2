import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import activator from './categories.js';
import list from './products.js';
import cart from './cart.js';


let reducers = combineReducers({activator , list, cart});

const store = () => {
    return createStore(reducers, composeWithDevTools());

};

export default store() ;
