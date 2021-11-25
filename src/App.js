import "./App.css";
import Banner from "./Banner";
import { Cart } from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";

function App() {
  return (
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
  );
}

export default App;
