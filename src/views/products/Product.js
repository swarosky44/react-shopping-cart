import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../productItem';
import style from './product.css';

class Product extends Component {
  static defaultProps = {
    products: [],
  }

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })),
  }

  render() {
    const { products } = this.props;
    return (
      <ul className={style.list_wrapper}>
        {
          products.map(product => (
            <ProductItem
              product={product}
              key={product.quantity}
            />
          ))
        }
      </ul>
    );
  }
}

export default Product;
