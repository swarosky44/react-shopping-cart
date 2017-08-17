import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ children }) => (
  <ul>
    { children }
  </ul>
);

Cart.defaultProps = {
  children: null,
};

Cart.propTypes = {
  children: PropTypes.node,
};

export default Cart;
