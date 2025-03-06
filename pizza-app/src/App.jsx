import { StrictMode, useState } from "react";
import AppBar from "./components/appbar";
import Order from "./components/order";
import PizzaOfTheDay from "./components/pizza-of-the-day";
import { CartContext } from "./components/contexts";

function App() {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <AppBar />
        <Order />
        <PizzaOfTheDay />
      </CartContext.Provider>
    </StrictMode>
  );
}

export default App;
