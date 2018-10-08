import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from './../actions/index';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {
  render() {
    var {products} = this.props;
    return (
      <Products>{this.showProducts(products)}</Products>
    );
  }

  showProducts(products) {
    var result = null;
    var {onAddToCart} = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index} product={product} onAddToCart={onAddToCart}/>
      });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(addToCart(product, 1));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
