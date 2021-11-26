import React from "react";

export default React.createContext({
  panierList: [],
  setPanierList: list => {},
  price: 0,
  setPrice: price => {},
});
