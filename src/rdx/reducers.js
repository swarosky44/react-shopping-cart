import { combineReducers } from 'redux';
import cart from '../views/cart/reducer';
import products from '../views/products/reducer';

export default combineReducers({
  cart,
  products,
});
