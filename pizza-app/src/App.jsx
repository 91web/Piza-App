import { StrictMode } from "react";
import AppBar from "./components/appbar";
import Order from "./components/order";

function App() {
  return (
      <StrictMode>
        <AppBar />
        <Order />
      </StrictMode>
  );
}

export default App;