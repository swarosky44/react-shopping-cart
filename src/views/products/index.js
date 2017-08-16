import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import actions from './action';
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
  }

  componentWillMount() {
    this.loadProduct();
  }

  loadProduct() {
    this.props.initProducts(dataSource);
  }

  render() {
    const { products } = this.props;
    return (
      <Product
        products={products}
      />
    );
  }
}

const mapStateToProps = state => ({ products: state.products.all });
const mapDispatchToProps = dispatch => ({
  initProducts: products => dispatch(actions.initProducts(products)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
