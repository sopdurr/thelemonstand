import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Lemon from "./components/Lemon";
import TheMenu from "./components/TheMenu";
import Cart from "./components/Cart";
import OrderOverview from "./components/OrderOverview";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Lemon />} />

            <Route path="/themenu" element={<TheMenu />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/overview" element={<OrderOverview />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
