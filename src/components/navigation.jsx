import './navigation.css';


import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="header">
      <img className="logo" src="\src\assets\images\logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/random">Random</Link></li>
          <li><Link to="/back">Back</Link></li>
          <li><Link to="/transition">Tranisition</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
