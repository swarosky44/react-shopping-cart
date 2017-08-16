import types from './reducerTypes';

const initialState = {
  added: {},
};

const addToCart = (state, product) => {
  const added = state.added;
  if (added[product.id]) {
    added[product.id].inventor += 1;
  } else {
    added[product.id] = Object.assign({}, product, { inventor: 1 });
  }
  return { added };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return Object.assign({}, state, addToCart(state, action.product));
    default:
      return state;
  }
};
