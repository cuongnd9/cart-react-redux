import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as messages from './../constants/Messages';

class CartContainer extends Component {
  render() {
    var {cart} = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showCartResult(cart)}
      </Cart>
    );
  }

  showCartItem(cart) {
    var result = <tr>
                   <td><p>{messages.MSG_CART_EMPTY}</p></td>
                 </tr>;
    if (cart.length > 0) {
      result = cart.map((cartItem, index) => {
        return <CartItem key={index} cartItem={cartItem}/>
      });
    }
    return result;
  }

  showCartResult(cart) {
    var result = 0;
    if (cart.length > 0) {
      result = cart.reduce((totalPrice, cartItem) => {
        return totalPrice += cartItem.product.price * cartItem.quantity;
      },0);
    }
    return <CartResult totalPrice={result}/>;
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
      }),
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CartContainer);
