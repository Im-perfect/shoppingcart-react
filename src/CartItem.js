import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <p>{this.props.quantity}</p>
        <button onClick={this.props.plus}>+</button>
      </li>
    );
  }
}
