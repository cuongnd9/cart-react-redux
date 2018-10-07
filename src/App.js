import React, { Component } from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/*Showcase & Products*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Showcase/>
              <Products/>
            </div>
          </div>
        </div>

        {/*Message & Cart*/}
        <div className="container">
          <Message/>
          <Cart/>
        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
