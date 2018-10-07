import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';

class Products extends Component {
  render() {
    var {products} = this.props;
    return (
      <div className="row">
        {this.showProducts(products)}
      </div>
    );
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index} product={product}/>
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
