import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
      <tr>
          <th scope="row">
              <img width="450" alt="" src="http://images.ctfassets.net/o6sr41tx16eu/2ay7fiSZU0Am0yGkuC4cGU/9f3ab7d933bbad14bcd1c4a3868adaa0/Panigale-959-MY18-USA-Red-01-Model-Preview-1050x650.png" />
          </th>
          <td>
              <h5>
                  <strong>959 Panigale</strong>
              </h5>
          </td>
          <td>$15,395</td>
          <td className="center-on-small-only">
              <span className="qty">1 </span>
              <div className="btn-group radio-group" data-toggle="buttons">
                  <label className="btn btn-sm btn-info btn-rounded waves-effect waves-light">
                      <a href="https://github.com/ndc07">—</a>
                  </label>
                  <label className="btn btn-sm btn-info btn-rounded waves-effect waves-light">
                      <a href="https://github.com/ndc07">+</a>
                  </label>
              </div>
          </td>
          <td>$15,395</td>
          <td>
              <button type="button" className="btn btn-sm btn-info waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                  title="" data-original-title="Remove item">
                  X
              </button>
          </td>
      </tr>
    );
  }
}

export default CartItem;
