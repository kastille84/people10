import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from './logo.svg';
import './App.css';
import Items from './containers/Items/Items';
import ItemEditModal from './components/ItemEditModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Your Shopping Cart</h1>
        <p>If the cart is empty then we shall again add back the products for you</p>
        <Items></Items>
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
