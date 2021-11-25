import React from "react";
import "./Cart.css";

export class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <div className="Cart-container">
          <button className="Cart-close-button">Fermer</button>
          <div className="Cart-content">Votre panier est vide</div>
        </div>
      </div>
    );
  }
}
