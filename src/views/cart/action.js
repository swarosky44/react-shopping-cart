import types from './reducerTypes';

export default {
  addCart: product => ({
    type: types.ADD_TO_CART,
    product,
  }),
};
