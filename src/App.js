import "./App.css";
import { useState } from "react";
import {BrowserRouter as Router, Link, Route,  Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Electronic/Electronic";
import Jewelry from "./Components/Jewelry/Jewelry";
import Electronic from "./Components/Electronic/Electronic";

function App() {
  return (
    <div className="main-container">
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Jewerly</Link>
              </li>
              <li>
                <Link to="/contact">Electronic</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Jewelry/>} />
            <Route path="/contact" element={<Electronic />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
