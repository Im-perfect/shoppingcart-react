import React, { Component } from "react";
import "./App.css";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import Clock from "./Clock"

const products = [
  {
    id: 1,
    name: "Prada Shoes",
    price: 570
  },
  {
    id: 2,
    name: "Rolex Watch",
    price: 649
  },
  {
    id: 3,
    name: "Paper clips",
    price: 0.1
  }
];

class App extends Component {
  state = {
    shoppingCart: products.map(product => {
      return { ...product, quantity: 0 };
    }),
    total: 0
  };

  incrementQuantity = productId => {
    this.setState({
      shoppingCart: this.state.shoppingCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    });
  };
  getTotal = () => {
    this.setState({
      total: this.state.shoppingCart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      )
    });
  };
  render() {
    return (
      <div className="App">
        <Clock />
        <ul>
          {this.state.shoppingCart.map(item => {
            return (
              <CartItem
                {...item}
                key={item.id}
                plus={() => this.incrementQuantity(item.id)}
              />
            );
          })}
        </ul>
        <CheckoutButton getTotal={this.getTotal} total={this.state.total}/>
      </div>
    );
  }
}

export default App;
