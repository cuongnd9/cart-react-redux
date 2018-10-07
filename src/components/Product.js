import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="https://github.com/ndc07"><img className="card-img-top" src="http://images.ctfassets.net/o6sr41tx16eu/3LYwlGMCkwwIyQeOmaUg04/62d85640daa995211d666728fcffb793/Monster-797_MY18-White-01-Book-testride_630x390.jpg" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://github.com/ndc07">Monster 797</a>
            </h4>
            <h5>$9,295</h5>
            <p className="card-text">The Monster 797 is the entrance to the Ducati world with its values, style, sophistication, and performance. It sporty, essential, easy to ride, but never intimidating — all you need to have undemanding fun.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
