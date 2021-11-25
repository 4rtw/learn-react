import React from "react";
import "./Cart.css";

export class Cart extends React.Component {
  state = { closed: false };

  setCartState = () => {
    const closed = this.state.closed;
    this.setState({ closed: !closed });
  };

  renderCart() {
    const closedClassName = this.state.closed
      ? "Cart-container Cart-white"
      : "Cart-container Cart-green";

    return this.state.closed ? (
      <div className={closedClassName}>
        <button className="Cart-open-button" onClick={this.setCartState}>
          Ouvrir le panier
        </button>
      </div>
    ) : (
      <div className={closedClassName}>
        <button className="Cart-close-button" onClick={this.setCartState}>
          Fermer
        </button>
        <div className="Cart-content">Votre panier est vide</div>
      </div>
    );
  }

  render() {
    return <div className="Cart">{this.renderCart()}</div>;
  }
}
