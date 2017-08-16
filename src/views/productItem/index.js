import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import productAction from '../products/action';
// import cartAction from '../cart/action';
import style from './item.css';

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
    addToCart: PropTypes.func.isRequired,
  }

  render() {
    const { product, addToCart } = this.props;
    return (
      <li className={style.item}>
        <p>{ product.title }</p>
        <p>${ product.price }</p>
        <p>{ product.quantity }</p>
        {
          product.quantity > 0
            ? (<button onClick={() => (addToCart(product))}> add to cart </button>)
            : (<button disabled> sold out </button>)
        }
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addToCart: (product) => {
    dispatch(productAction.reduceProduct(product));
    // dispatch(cartAction.addCart(product));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ProductItem);
