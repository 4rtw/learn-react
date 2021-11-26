import { useState } from "react";
import "./App.css";
import Banner from "./../Banner/Banner";
import Cart from "./../Cart/Cart";
import Footer from "./../Footer/Footer";
import ShoppingList from "./../ShoppingList/ShoppingList";
import PanierContext from "./../../Context/PanierContext";

const App = () => {
  const [panierList, setPanierList] = useState([]);
  const [price, setPrice] = useState(0);
  const contextValue = { panierList, setPanierList, price, setPrice };

  return (
    <PanierContext.Provider value={contextValue}>
      <div>
        <Banner />
        <div className="App-body">
          <div className="App-cart">
            <Cart />
          </div>
          <div className="App-right-content">
            <ShoppingList />
          </div>
        </div>
        <Footer />
      </div>
    </PanierContext.Provider>
  );
};

export default App;
