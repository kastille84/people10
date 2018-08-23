import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Items from './containers/Items/Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Your Shopping Cart</h1>
        <p>If the cart is empty then we shall again add back the products for you</p>
        <Items></Items>
      </div>
    );
  }
}

export default App;
