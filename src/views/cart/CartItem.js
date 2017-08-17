import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  static defaultProps = {
    product: {},
  }

  static propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      inventor: PropTypes.number,
    }),
  }

  render() {
    const { product } = this.props;
    return (
      <li>
        <p>{ product.title }</p>
        <p>{ product.price }</p>
        <p> X { product.inventor }</p>
      </li>
    );
  }
}

export default CartItem;
