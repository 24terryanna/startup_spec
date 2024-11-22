import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home.jsx";
import About from "./about/about.jsx";
import Pedia from "./pedia/pedia.jsx";
import Saved from "./saved/saved.jsx";
import "./App.css";

function App() {
  return (
    <Router>
       <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pedia">Pedia</Link></li>
            <li><Link to="/saved">Saved</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pedia" element={<Pedia />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
