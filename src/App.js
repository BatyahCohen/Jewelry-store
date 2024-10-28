import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Electronic/Electronic";
import Jewelry from "./Components/Jewelry/Jewelry";
import Electronic from "./Components/Electronic/Electronic";

function App() {
  return (
    <div className="main-container">
      <Router>
        <div className="App">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Jewelry</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Electronic</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Jewelry />} />
            <Route path="/contact" element={<Electronic />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
