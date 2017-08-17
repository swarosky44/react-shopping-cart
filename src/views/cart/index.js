import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './Cart';
import CartItem from './CartItem';

const countTotalPrice = (products, keys) => {
  let total = 0;
  keys.forEach((key) => {
    total += products[key].inventor * products[key].price;
  });
  return total;
};

class CartContainer extends Component {
  static defaultProps = {
    products: {},
  }

  static propTypes = {
    products: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      inventor: PropTypes.number,
    }),
  }

  render() {
    const { products } = this.props;
    const keys = Object.keys(products);
    return (
      <Cart>
        {keys.map(key => (
          <CartItem
            product={products[key]}
            key={products[key].id}
          />
        ))}
        <p>Total: { countTotalPrice(products, keys).toFixed(2) }</p>
      </Cart>
    );
  }
}

const mapStateToProps = state => ({ products: state.cart.added });

export default connect(
  mapStateToProps,
)(CartContainer);
