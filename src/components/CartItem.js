import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    var {product, quantity} = this.props.cartItem;
    return (
      <tr>
          <th scope="row">
              <img width="450" alt="" src={product.image} />
          </th>
          <td>
              <h5>
                  <strong>{product.name}</strong>
              </h5>
          </td>
          <td>${product.price}</td>
          <td className="center-on-small-only">
              <span className="qty">{quantity}</span>
              <div className="btn-group radio-group" data-toggle="buttons">
                  <label className="btn btn-sm btn-info btn-rounded waves-effect waves-light">
                      <a href="https://github.com/ndc07">
                        <i className="material-icons">remove</i>
                      </a>
                  </label>
                  <label className="btn btn-sm btn-info btn-rounded waves-effect waves-light">
                      <a href="https://github.com/ndc07">
                        <i className="material-icons">add</i>
                      </a>
                  </label>
              </div>
          </td>
          <td>${product.price * quantity}</td>
          <td>
              <button type="button" className="btn btn-sm btn-danger waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                  title="" data-original-title="Remove item">
                  <i className="material-icons">delete</i>
              </button>
          </td>
      </tr>
    );
  }
}

export default CartItem;
