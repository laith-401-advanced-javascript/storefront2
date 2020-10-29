
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import activator from './categories.js';
import list from './products.js';
import cart from './cart.js';
import thunk from './middleware/thunk.js';
import productDetails from './productDetails';



let reducers = combineReducers({
  categorieData: activator,
  productData: list,
  cartData: cart,
  productDateDetails: productDetails
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

};

export default store();
