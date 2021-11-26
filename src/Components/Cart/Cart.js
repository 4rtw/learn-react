import React from "react";
import "./Cart.css";
import { useState, useContext } from "react";
import PanierContext from "./../../Context/PanierContext";

const Cart = () => {
  const [closed, setClosed] = useState(false);
  const { panierList, setPanierList, price } = useContext(PanierContext);
  

  const setCartState = () => {
    setClosed(!closed);
  };

  const viderPanier = () => {
    setPanierList([]);
  };

  const renderPanier = () => {
    let key = 0;
    let affichage = <div></div>;
    if (panierList.length < 1) {
      affichage = (
        <div>
          <div className="Cart-content">Votre panier est vide</div>
        </div>
      );
    } else {
      affichage = (
        <div>
          <h2>Votre panier</h2>
          <div>
            {[...panierList].map(item => {
              key = key + 1;
              return (
                <div key={key}>
                  {item.nom}, price: {item.prix}
                </div>
              );
            })}
          </div>
          <div>Prix total: {price}</div>
          <button onClick={viderPanier}>Vider le panier</button>
        </div>
      );
    }

    return affichage;
  };

  const renderCart = () => {
    const closedClassName = closed
      ? "Cart-container Cart-white"
      : "Cart-container Cart-green";

    return closed ? (
      <div className={closedClassName}>
        <button className="Cart-open-button" onClick={setCartState}>
          Ouvrir le panier
        </button>
      </div>
    ) : (
      <div className={closedClassName}>
        <button className="Cart-close-button" onClick={setCartState}>
          Fermer
        </button>
        {renderPanier()}
      </div>
    );
  };

  return <div className="Cart">{renderCart()}</div>;
};

export default Cart;
