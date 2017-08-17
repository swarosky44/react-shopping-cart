import React from 'react';
import PropTypes from 'prop-types';
import style from './product.css';

const Product = ({ children }) => (
  <ul className={style.list_wrapper}>
    { children }
  </ul>
);

Product.defaultProps = {
  children: null,
};
Product.propTypes = {
  children: PropTypes.node,
};

export default Product;
