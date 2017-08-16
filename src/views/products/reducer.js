import types from './reducerTypes';

const initialState = {
  all: [],
};

const addToCart = (state, product) => state.all.map((item) => {
  const pro = item;
  if (item.id === product.id && item.quantity > 0) {
    pro.quantity -= 1;
  }
  return pro;
});

export default (state = initialState.all, action) => {
  switch (action.type) {
    case types.INIT_PRODUCTS:
      return Object.assign({}, state, {
        all: action.products,
      });
    case types.REDUCE_PRODUCT:
      return Object.assign({}, state, { all: addToCart(state, action.product) });
    default:
      return state;
  }
};
