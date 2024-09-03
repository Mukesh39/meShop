import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";

import { Provider } from "react-redux";
import store from "./store/store";


import { Footers } from "./components/Footers.tsx";
import Stats from "./components/Stats.js";
//import ProdDetails from "./components/ProdDetails";
//react-redux is actually the store of providers

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
      <Stats />
      <Footers />
    </div>
  );
}

export default App;
