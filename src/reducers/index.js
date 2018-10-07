import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';

var rootReducer = combineReducers({
  products,
  cart
});

export default rootReducer;
