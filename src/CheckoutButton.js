import React, { Component } from "react";

export default class CheckoutButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.getTotal}>Checkout</button>
        <p>Total value: {this.props.total}</p>
      </div>
    );
  }
}
