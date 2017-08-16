import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './Cart';

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
    return (
      <Cart products={products} />
    );
  }
}

const mapStateToProps = state => ({ products: state.cart.added });

export default connect(
  mapStateToProps,
)(CartContainer);
