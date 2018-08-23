import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from './logo.svg';
import './App.css';
import Items from './containers/Items/Items';
import CheckoutArea from './containers/checkout/CheckoutArea';
import ItemEditModal from './components/ItemEditModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Your Shopping Cart</h1>
        <p>If the cart is empty then we shall again add back the products for you</p>
        <Items></Items>
        <section className="section-checkout">
          <div className="questions">
            <p>Need help or have questions?</p>
            <p>Call Customer Service at <br/> 1-800-555-555</p>
            <p><a>Chat with one of our stylists</a></p>
            <p><a>See return or exchange policy</a></p>
          </div>
          <CheckoutArea></CheckoutArea>
        </section>
        {this.props.itemRedux.selectedItem? <ItemEditModal />: ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemRedux: state.itemRedux
  }
}

export default connect(mapStateToProps)(App);
