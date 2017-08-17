import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import ProductItem from './productItem';
import actions from './action';
import cartAction from '../cart/action';
import dataSource from '../../data.json';

class ProductContainer extends Component {
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
    initProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.loadProduct();
  }

  loadProduct() {
    this.props.initProducts(dataSource);
  }

  render() {
    const { products, addToCart } = this.props;
    return (
      <Product>
        {products.map(product => (
          <ProductItem
            product={product}
            key={product.id}
            onAddToCartClicked={() => addToCart(product)}
          />
        ))}
      </Product>
    );
  }
}

const mapStateToProps = state => ({ products: state.products.all });
const mapDispatchToProps = dispatch => ({
  initProducts: products => dispatch(actions.initProducts(products)),
  addToCart: (product) => {
    dispatch(actions.reduceProduct(product));
    dispatch(cartAction.addCart(product));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
