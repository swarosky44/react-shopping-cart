import types from './reducerTypes';

export default {
  initProducts: products => ({
    type: types.INIT_PRODUCTS,
    products,
  }),
  reduceProduct: product => ({
    type: types.REDUCE_PRODUCT,
    product,
  }),
};
