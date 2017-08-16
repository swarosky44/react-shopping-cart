import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
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
      <div>
        <ul>
          {keys.map(key => (
            <li key={products[key].id}>
              { products[key].title }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;
