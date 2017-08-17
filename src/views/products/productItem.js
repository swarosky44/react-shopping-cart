import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './productItem.css';

class ProductItem extends Component {
  static defaultProps = {
    product: {},
  }

  static propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }),
    onAddToCartClicked: PropTypes.func.isRequired,
  }

  render() {
    const { product, onAddToCartClicked } = this.props;
    return (
      <li className={style.item}>
        <p>{ product.title }</p>
        <p>${ product.price }</p>
        <p>{ product.quantity }</p>
        {
          product.quantity > 0
            ? (<button onClick={onAddToCartClicked}> add to cart </button>)
            : (<button disabled> sold out </button>)
        }
      </li>
    );
  }
}

export default ProductItem;
