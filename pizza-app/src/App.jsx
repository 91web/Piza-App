import { StrictMode } from "react";
import AppBar from "./components/appbar";
import Order from "./components/order";
import PizzaOfTheDay from "./components/pizza-of-the-day";

function App() {
  return (
      <StrictMode>
        <AppBar />
      <Order />
     <PizzaOfTheDay/>
      </StrictMode>
  );
}

export default App;